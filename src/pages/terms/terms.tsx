import React from "react";
import { imgs } from "../../shared/images";
import { RocketLayout } from "../../widget/layouts/rocket-layout";
import { AboutWidget } from "../../widget/about-widget/about-widget";
import { TermsWidget } from "../../widget/terms-widget";

const Terms = () => {
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
          Understand Our Terms and Conditions
        </h1>
        <p className="text-[16px] text-center font-bold">
          Learn about our terms and conditions to ensure a transparent and
          enjoyable experience at Rocket Jackpots.
        </p>
      </div>
      <RocketLayout />
      <TermsWidget />
    </div>
  );
};
export default Terms;
