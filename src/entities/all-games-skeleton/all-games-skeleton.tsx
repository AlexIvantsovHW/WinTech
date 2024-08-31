import React from "react";

import { WhyChooseUs } from "../../features/why-choose-us";
import { AllGamesBlock } from "../../features/all-games-block";

export const AllGamesSkeleton = () => {
  return (
    <>
      <AllGamesBlock />
      <WhyChooseUs />
    </>
  );
};
