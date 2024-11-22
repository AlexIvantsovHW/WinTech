import React from "react";

import { imgs } from "../../../shared/images";

export const RocketLayout = () => {
  return (
    <div
      className="w-full flex items-end justify-center items-end h-fit"
      style={{
        backgroundImage: `url("${imgs.bodySteam})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      <img src={imgs.bodyRocket} />
    </div>
  );
};
