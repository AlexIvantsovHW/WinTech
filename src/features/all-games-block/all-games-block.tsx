import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
type BoxType = { img: string; title: string; link: string };
const data: BoxType[] = [
  {
    img: "https://rocketjackpots.com/wp-content/themes/rocketjackpots/games-dist/external-games/vs20bnnzdice.png",
    title: "Sweet Bonanza Dice",
    link: "https://rocketjackpots.com/games/?game=vs20bnnzdice#sct-game",
  },
  {
    img: "https://rocketjackpots.com/wp-content/themes/rocketjackpots/games-dist/external-games/vs25wolfgold.png",
    title: "Wolf Gold",
    link: "https://rocketjackpots.com/games/?game=vs25wolfgold#sct-game",
  },
  {
    img: "https://rocketjackpots.com/wp-content/themes/rocketjackpots/games-dist/external-games/vs5ultrab.png",
    title: "Ultra Burn",
    link: "https://rocketjackpots.com/games/?game=vs5ultrab#sct-game",
  },
  {
    img: "https://rocketjackpots.com/wp-content/themes/rocketjackpots/games-dist/external-games/vs20ultim5.png",
    title: "The Ultimate 5",
    link: "https://rocketjackpots.com/games/?game=vs20ultim5#sct-game",
  },
  {
    img: "https://rocketjackpots.com/wp-content/themes/rocketjackpots/games-dist/external-games/vs20emptybank.png",
    title: "Empty the Bank",
    link: "https://rocketjackpots.com/games/?game=vs20emptybank#sct-game",
  },
];
const BoxBlock = (props: BoxType) => {
  const { img, title, link } = props;
  return (
    <div className="flex flex-col gap-[10px] justify-center items-center bg-slate-100 hover:bg-slate-300 pb-[20px] transition-colors duration-300 ease-in-out rounded-[20px]">
      <div>
        <img src={img} width={234} height={170} alt="logo" />
      </div>
      <div style={{ color: "#02006A", fontWeight: "bold" }}>{title}</div>
      <Link to={link}>
        <Button
          color="secondary"
          style={{ borderRadius: "20px" }}
          variant="contained"
        >
          Play for free
        </Button>
      </Link>
    </div>
  );
};
export const AllGamesBlock = () => {
  return (
    <div className="h-fit w-full mt-[6rem] pb-[40px]">
      <h1
        style={{
          color: "#390B43",
          textTransform: "capitalize",
          textAlign: "center",
          marginBottom: "2rem",
          fontSize: "2.5rem",
          fontWeight: "900",
        }}
      >
        Play the best games here
      </h1>
      <div className="flex gap-[10px] flex-wrap w-full items-center justify-center">
        {data?.map((e, i) => {
          return <BoxBlock img={e.img} title={e.title} link={e.link} key={i} />;
        })}
      </div>
    </div>
  );
};
