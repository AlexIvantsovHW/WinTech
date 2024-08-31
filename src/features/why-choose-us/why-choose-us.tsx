import React from "react";
import { imgs } from "../../shared/images";
import { WcuUpperBlocks } from "../wcu-upper-blocks";
import { WcuLowerBlock } from "../wcu-lower-block";

export const WhyChooseUs = () => {
  return (
    <div
      className="w-full h-fit flex flex-col gap-[10px] min-h-[600px]"
      style={{
        backgroundImage: `url("${imgs.whyChooseUsImg}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        className="w-full flex items-end justify-center h-screen "
        style={{
          backgroundImage: `url("${imgs.bodySteam}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          transform: "rotate(180deg)",
          position: "absolute",
          top: "0px",
        }}
      />
      <div className="h-fit w-full flex flex-col gap-[40px] mt-[120px] justify-between">
        {" "}
        <h1
          style={{
            fontSize: "3rem",
            lineHeight: "1.2",
            textTransform: "capitalize",
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Why Choose Us?
        </h1>
        <WcuUpperBlocks />
        <WcuLowerBlock />
        <div className="w-full flex items-center justify-center pb-[150px]">
          {" "}
          <img
            src={imgs.noPurchase}
            style={{ maxHeight: "299px", zIndex: "999" }}
            alt="no-purchase"
          />
        </div>
      </div>
      <div
        className="w-full flex items-end justify-center h-screen"
        style={{
          backgroundImage: `url("${imgs.bodySteam}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "absolute",
          bottom: "0px",
        }}
      />
    </div>
  );
};
