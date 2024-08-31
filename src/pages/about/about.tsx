import React from "react";
import { imgs } from "../../shared/images";
import { RocketLayout } from "../../widget/layouts/rocket-layout";
import { AboutWidget } from "../../widget/about-widget/about-widget";

const About = () => {
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
          ABOUT US
        </h1>
        <p className="text-[16px] text-center font-bold">
          Welcome to Rocket Jackpots, your ultimate destination for social
          casino excitement. Explore a galaxy of thrilling games, exclusive
          promotions, and a vibrant community.
        </p>
      </div>
      <RocketLayout />
      <AboutWidget />
    </div>
  );
};
export default About;
