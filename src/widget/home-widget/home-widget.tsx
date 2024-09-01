import React from "react";
import { useForm } from "react-hook-form";
import { style } from "../contact-widget/ui/style";
import { Button } from "@mui/material";
import { imgs } from "../../shared/images";
import { scheme, signInType } from "./model";
import { zodResolver } from "@hookform/resolvers/zod";
import { AllGamesSkeleton } from "../../entities/all-games-skeleton";

export const HomeWidget = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<signInType>({
    resolver: zodResolver(scheme),
  });

  const onSubmit = (data: signInType) => console.log(data);
  return (
    <div className="w-full h-fit">
      {" "}
      <div className="w-full h-fit px-[30%] ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[15px] bg-white  w-full h-fit items-center justify-center rounded-[25px] my-[40px]"
        >
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
          </div>
          <div className="w-full h-fit flex gap-[10px] px-[5%]">
            <div className="w-[20px] h-full">
              <input type="checkbox" {...register("terms")} />{" "}
            </div>
            <div className="flex flex-col gap-[5px] w-full h-fit">
              {" "}
              <label className="text-slate-500 text-[12px]">
                By creating an account, you certify that you are over the age of
                18+ or the legal age for gambling in your country of residence
              </label>
              {errors.terms && (
                <span className="text-red-500">{errors.terms.message}</span>
              )}
            </div>
          </div>
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
