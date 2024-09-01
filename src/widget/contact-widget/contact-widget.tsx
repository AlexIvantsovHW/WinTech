import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { style, textAreaStyle } from "./ui/style";
import { Alert, Button, CircularProgress } from "@mui/material";
import { contactFormType, scheme } from "./model/index";
import { zodResolver } from "@hookform/resolvers/zod";

export const ContactWidget = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<contactFormType>({
    resolver: zodResolver(scheme),
  });
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const onSubmit = (data: contactFormType) => {
    setLoading(true);
    setTimeout(() => {
      setSuccess(true);
      setSuccessMessage("Message delivered successfully!");
      setLoading(false);
      reset();
    }, 2000);
    setTimeout(() => {
      setSuccess(false);
      setSuccessMessage("");
    }, 6000);

    console.log(data);
  };
  return (
    <div className="w-full h-fit bg-white py-[40px]">
      {loading ? (
        <div className="w-full h-fit flex items-center justify-center py-[30px]">
          <CircularProgress color="secondary" />
        </div>
      ) : success ? (
        <div className="w-full h-fit flex items-center justify-center py-[30px]">
          <Alert
            variant="filled"
            severity="success"
            style={{ marginTop: "20px" }}
          >
            <p className="text-[24px]">{successMessage}</p>
          </Alert>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[20px] w-full h-fit items-center justify-center"
        >
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
          <div className="w-full h-fit flex items-center justify-center  flex-col gap-2">
            {" "}
            <input
              type="email"
              placeholder="Email"
              style={style}
              {...register("email")}
            />{" "}
          </div>
          <div className="w-full h-fit flex items-center justify-center  flex-col gap-2">
            {" "}
            <input
              type="text"
              placeholder="Message"
              style={textAreaStyle}
              {...register("message")}
            />
            {errors.message && (
              <span className="text-red-500">{errors.message.message}</span>
            )}
          </div>

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className="w-full max-w-[500px] bold font-[25px]"
            style={{
              borderRadius: "25px",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Submit
          </Button>
        </form>
      )}
    </div>
  );
};
