import React from "react";
import { imgs } from "../../shared/images";
import { RocketLayout } from "../../widget/layouts/rocket-layout";
import { HomeWidget } from "../../widget/home-widget";
import { AllGamesSkeleton } from "../../entities/all-games-skeleton";

const Home = () => {
  return (
    <div className="text-white font-[25px] flex flex-col justify-center items-center">
      <div className="pt-[50px]">
        <img
          src={imgs.headerLogo}
          style={{ maxWidth: "441px", maxHeight: "140px" }}
        />
      </div>
      <HomeWidget />
      <RocketLayout />
      <div className="bg-white w-full h-fit ">
        <AllGamesSkeleton />
      </div>
    </div>
  );
};

export default Home;
