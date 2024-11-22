import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { style } from "../contact-widget/ui/style";
import { Alert, Button, CircularProgress } from "@mui/material";
import { imgs } from "../../shared/images";
import { scheme, signInType } from "./model";
import { zodResolver } from "@hookform/resolvers/zod";

import axios, { AxiosError } from "axios";
import { baseUrl } from "../../shared/api";
import { ROUTER } from "../../routers";
import { useNavigate } from "react-router-dom";

export const HomeWidget = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<signInType>({
    resolver: zodResolver(scheme),
  });
  const [warning, setWarning] = useState(false);
  const [success, setSuccess] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token") === "" ? false : true;
  const onSubmit = async (data: signInType) => {
    try {
      const response = await axios.post(`${baseUrl}login`, {
        email: data.email,
        password: data.password,
      });
      await setLoading(false);
      console.log(response);
      setLoading(true);
      localStorage.setItem("token", response?.data?.token as string);
      setSuccessMessage(`User is signed in`);
      setSuccess(true);
      setTimeout(() => {
        setSuccessMessage("");
        setSuccess(false);
        navigate(ROUTER.ALL_GAMES);
      }, 3000);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message;
        setWarning(true);
        setLoading(false);
        reset();
        setWarningMessage(errorMessage);
        setTimeout(() => {
          setWarning(false);
          setWarningMessage("");
        }, 3000);
        console.error("Error registering user:", errorMessage);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  return (
    <div className="w-full h-fit">
      {" "}
      <div className="w-full h-fit px-[30%] ">
        {token ? (
          <div className="flex flex-col gap-[10px] items-center justify-center text-[35px]  py-[50px]">
            User is already logged in.
            <Button
              variant="outlined"
              style={{ fontSize: "20px" }}
              onClick={() => navigate(ROUTER.ALL_GAMES)}
            >
              START PLAYING!
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[15px] bg-white  w-full h-fit items-center justify-center rounded-[25px] my-[40px]"
          >
            {" "}
            {warning ? (
              <Alert
                variant="filled"
                severity="error"
                style={{ marginTop: "20px" }}
              >
                <p className="text-[24px]">{warningMessage}</p>
              </Alert>
            ) : success ? (
              <Alert
                variant="filled"
                severity="success"
                style={{ marginTop: "20px" }}
              >
                <p className="text-[24px]">{successMessage}</p>
              </Alert>
            ) : loading ? (
              <div className="pt-[20px]">
                <CircularProgress color="secondary" />
              </div>
            ) : (
              <>
                {" "}
                <div className="w-full h-fit flex justify-center items-center gap-[10px] pt-[5%] px-[5%]">
                  <div className="w-full h-fit flex items-center justify-center  flex-col gap-2">
                    {" "}
                    <input
                      type="email"
                      placeholder="Email"
                      style={style}
                      {...register("email")}
                    />{" "}
                    {errors.email && (
                      <span className="text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="w-full h-fit flex items-center justify-center flex-col gap-2">
                    <input
                      type="password"
                      placeholder="Password"
                      style={style}
                      {...register("password")}
                    />
                    {errors.password && (
                      <span className="text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="w-full h-fit flex gap-[10px] px-[5%]">
                  <div className="w-[20px] h-full">
                    <input type="checkbox" {...register("terms")} />{" "}
                  </div>
                  <div className="flex flex-col gap-[5px] w-full h-fit">
                    {" "}
                    <label className="text-slate-500 text-[12px]">
                      By creating an account, you certify that you are over the
                      age of 18+ or the legal age for gambling in your country
                      of residence
                    </label>
                    {errors.terms && (
                      <span className="text-red-500">
                        {errors.terms.message}
                      </span>
                    )}
                  </div>
                </div>
              </>
            )}
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className="w-full max-w-[500px] bold font-[25px] "
              style={{
                borderRadius: "25px",
                fontWeight: "bold",
                fontSize: "20px",
                marginBottom: "20px",
              }}
            >
              Register
            </Button>
          </form>
        )}
      </div>
      <div className="w-full h-fit flex items-center justify-center gap-[15px] ">
        <img
          src={imgs.plus18}
          width={25}
          height={25}
          style={{ backgroundColor: "white", borderRadius: "25px" }}
          alt="18plus"
        />
        <span className="text-[16px]"> Must be 18+ and over to play</span>
      </div>
    </div>
  );
};
