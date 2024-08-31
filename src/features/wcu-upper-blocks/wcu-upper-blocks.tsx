import React from "react";
import { data } from "./data";
type Props = { label: string; text: string; img: string };
const Box = (props: Props) => {
  const { label, text, img } = props;
  return (
    <div
      className="min-w-[288px] w-full md:w-[352px] min-h-[350px]  h-fit p-[2rem] flex flex-col gap-[10px] items-center justify-center"
      style={{
        backgroundColor: "#000027",
        border: "solid 0.5px #3C4FFF",
        borderRadius: "50px",
        zIndex: "999",
      }}
    >
      <img src={img} alt={"logo"} />
      <h1 className="text-white font-bold text-center">{label}</h1>
      <p className="text-white  text-center">{text}</p>
    </div>
  );
};
export const WcuUpperBlocks = () => {
  return (
    <div className="w-full h-fit flex flex justify-center items-center flex-wrap gap-[20px] px-[80px]">
      {data?.map((e, i) => {
        return <Box key={i} label={e.label} img={e.img} text={e.text} />;
      })}
    </div>
  );
};
