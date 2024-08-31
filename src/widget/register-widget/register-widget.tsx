import React from "react";
import { useForm } from "react-hook-form";
import { style, textAreaStyle } from "./ui/style";
import { Button } from "@mui/material";
import { registerFormType, scheme } from "./model/index";
import { zodResolver } from "@hookform/resolvers/zod";

export const RegisterWidget = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<registerFormType>({
    resolver: zodResolver(scheme),
  });

  const onSubmit = (data: registerFormType) => console.log(data);
  return (
    <div className="w-full h-fit bg-white py-[40px]">
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
            type="password"
            placeholder="password"
            style={style}
            {...register("password")}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>

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
