import React from "react";

import { RocketLayout } from "../../widget/layouts/rocket-layout";
import { NewestGamesWidget } from "../../widget/all-games-widget/newest-games-widget";

const NewestGames = () => {
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
          Discover and play the newest social casino games here!
        </h1>
        <p className="text-[16px] text-center font-bold">
          Experience the latest and most thrilling games at Rocket Jackpots.
          Dive into a universe of new adventures and excitement!
        </p>
      </div>
      <RocketLayout />
      <NewestGamesWidget />
    </div>
  );
};
export default NewestGames;
