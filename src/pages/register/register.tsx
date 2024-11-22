import React from "react";

import { RocketLayout } from "../../widget/layouts/rocket-layout";

import { ContactWidget } from "../../widget/contact-widget";
import { RegisterWidget } from "../../widget/register-widget";

const Register = () => {
  return (
    <div className="text-white font-[25px] min-h-fit flex flex-col justify-center items-center mt-[40px]">
      <div className="max-w-[592px] flex flex-col justify-around items-center gap-[20px] mb-[40px]">
        <h1
          style={{
            fontSize: "3rem",
            lineHeight: "1.2",
            textTransform: "capitalize",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Register
        </h1>
        <p className="text-[16px] text-center font-bold">
          Play most popular games for FREE at Space Jackpots! <br /> Register
          today and play for free!
        </p>
      </div>
      <RocketLayout />

      <RegisterWidget />
    </div>
  );
};
export default Register;
