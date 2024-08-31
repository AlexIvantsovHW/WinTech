import React from "react";

import { AllGamesSkeleton } from "../../entities/all-games-skeleton";
export const AllGamesWidget = () => {
  return (
    <div className="bg-white text-black w-full h-fit py-[40px]">
      <AllGamesSkeleton />
    </div>
  );
};
