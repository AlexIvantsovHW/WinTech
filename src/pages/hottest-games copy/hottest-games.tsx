import React from "react";

import { RocketLayout } from "../../widget/layouts/rocket-layout";
import { NewestGamesWidget } from "../../widget/all-games-widget/newest-games-widget";

const HottestGames = () => {
  return (
    <div className="text-white font-[25px] min-h-fit flex flex-col justify-center items-center mt-[40px]">
      <div className="max-w-[592px] flex flex-col justify-around items-center gap-[20px] mb-[40px]">
        <h1
          style={{
            fontSize: "3rem",
            lineHeight: "1.2",
            textTransform: "capitalize",
            textAlign: "center",
          }}
        >
          HottestGames
        </h1>
        <p className="text-[16px] text-center font-bold">
          Unveil Gaming Excellence Right Here. Immerse Yourself in a Premier
          Selection of Games for Endless Entertainment!
        </p>
      </div>
      <RocketLayout />
      <NewestGamesWidget />
    </div>
  );
};
export default HottestGames;
