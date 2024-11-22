import React from "react";

import { CookiesSkelet } from "../../entities/cookies-skelet";
export const CookiesWidget = () => {
  return (
    <div className="bg-white text-black w-full h-fit py-[40px]">
      <CookiesSkelet />
    </div>
  );
};
