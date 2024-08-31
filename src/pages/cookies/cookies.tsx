import React from "react";

import { RocketLayout } from "../../widget/layouts/rocket-layout";

import { TermsWidget } from "../../widget/terms-widget";

const Cookies = () => {
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
          Safeguarding Your Privacy and Data
        </h1>
        <p className="text-[16px] text-center font-bold">
          Explore how we protect your personal information and responsibly use
          cookies at Rocket Jackpots.
        </p>
      </div>
      <RocketLayout />
      <TermsWidget />
    </div>
  );
};
export default Cookies;
