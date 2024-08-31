import React from "react";
import { LeaderBoardDataType } from "./model";
import { data } from "./data";

type BoxProps = {
  data: LeaderBoardDataType[];
};

const Box = ({ data }: BoxProps) => {
  return (
    <div
      className="min-w-[288px] w-full w-max-w-[840px] min-h-[350px]  h-fit p-[2rem] flex flex-col gap-[10px] items-center justify-center"
      style={{
        backgroundColor: "#000027",
        border: "solid 0.5px #3C4FFF",
        borderRadius: "50px",
        zIndex: "999",
      }}
    >
      <h1 className="text-white font-bold text-center text-[40px]">
        Leaderboard
      </h1>
      <div className="w-full h-fit flex flex-col gap-[15px]">
        {data?.map((e, i) => {
          return (
            <div
              className="w-full px-[5%] py-[15px] flex  justify-between"
              style={{ border: "solid 0.5px #3C4FFF", borderRadius: "20px" }}
            >
              <div className="text-white "> {e.id}.</div>
              <div className="text-white "> {e.name}</div>
              <div className="text-slate-500  hidden md:block"> {e.add}</div>
              <div className="text-white  font-bold"> {e.points} points</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export const WcuLowerBlock = () => {
  return (
    <div className="w-full h-fit flex items-center justify-center px-[5%] sm:px-[15%]">
      <Box data={data} />
    </div>
  );
};
