import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { style } from "./ui/style";
import { Alert, Button } from "@mui/material";
import { registerFormType, scheme } from "./model/index";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../routers";
import { baseUrl } from "../../shared/api";

export const RegisterWidget = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<registerFormType>({
    resolver: zodResolver(scheme),
  });
  const [warning, setWarning] = useState(false);
  const [success, setSuccess] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();
  const onSubmit = async (data: registerFormType) => {
    try {
      const response = await axios.post(`${baseUrl}register`, data);
      console.log(`response`, response);
      setSuccessMessage("User created successfully");
      setSuccess(true);
      setTimeout(() => {
        setSuccessMessage("");
        setSuccess(false);
        navigate(ROUTER.HOME);
      }, 3000);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message;
        setWarning(true);
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
    <div className="w-full h-fit bg-white py-[40px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[20px] w-full h-fit items-center justify-center"
      >
        {warning ? (
          <Alert variant="filled" severity="error">
            <p className="text-[24px]">{warningMessage}</p>
          </Alert>
        ) : success ? (
          <Alert variant="filled" severity="success">
            <p className="text-[24px]">{successMessage}</p>
          </Alert>
        ) : (
          <>
            {" "}
            <div className="w-full h-fit flex items-center justify-center flex-col gap-2">
              <input
                type="text"
                placeholder="Name"
                style={style}
                {...register("name")}
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
            <div className="w-full h-fit flex items-center justify-center flex-col gap-2">
              <input
                type="email"
                placeholder="Email"
                style={style}
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
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
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>
          </>
        )}
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          className="w-full max-w-[500px] bold font-[25px]"
          style={{ borderRadius: "25px", fontWeight: "bold", fontSize: "20px" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
