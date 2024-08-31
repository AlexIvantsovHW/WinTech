import React from "react";

import { WhyChooseUs } from "../../features/why-choose-us";
import { AllGamesBlock } from "../../features/all-games-block";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTER } from "../../routers";

export const NewestGamesSkeleton = () => {
  return (
    <>
      <AllGamesBlock />
      <div className="w-full flex h-fit px-[10%] py-[20px] justify-center items-center">
        {" "}
        <Link to={ROUTER.ALL_GAMES}>
          {" "}
          <Button
            variant="contained"
            color="secondary"
            style={{
              height: "50px",
              fontSize: "18px",
              paddingLeft: "15px",
              paddingRight: "15px",
              paddingTop: "10px",
              paddingBottom: "10px",
              borderRadius: "25px",
            }}
          >
            See More Games
          </Button>
        </Link>
      </div>
      <WhyChooseUs />
    </>
  );
};
