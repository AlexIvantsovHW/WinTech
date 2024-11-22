import React from "react";

import { NewestGamesSkeleton } from "../../entities/newest-games-skeleton";
export const NewestGamesWidget = () => {
  return (
    <div className="bg-white text-black w-full h-fit py-[40px]">
      <NewestGamesSkeleton />
    </div>
  );
};
