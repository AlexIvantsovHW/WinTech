import React from "react";
import { imgs } from "../../../shared/images";
import { routerLinkXl } from "../../../shared/components/link-header";
import { ROUTER } from "../../../routers";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="w-full h-fit min-h-[343px] bg-white  mt-auto flex flex-col justify-start items-center">
      <div className="p-[16px]  flex flex-col justify-start items-center gap-[15px]">
        <img src={imgs.headerLogo} height={63} width={200} alt="logo" />
        <div className="w-full h-fit flex mx-[32px] justify-center gap-[16px] m-[2rem] flex-wrap">
          {" "}
          {routerLinkXl(ROUTER.HOME, "Home", false)}
          {routerLinkXl(ROUTER.ALL_GAMES, "Games", false)}
          {routerLinkXl(ROUTER.CONTACT, "Contact Us", false)}
          {routerLinkXl(ROUTER.ABOUT_US, "About us", false)}
          {routerLinkXl(ROUTER.COOKIES, "Cookies & Privacy", false)}
          {routerLinkXl(ROUTER.TERMS, "Terms & Conditions", false)}
        </div>
        <p className="text-center md:mx-[80px] font-[16px] text-slate-400">
          <a
            href="https://www.pragmaticplay.com/en/"
            className="text-purple-600 underline"
          >
            Pragmatic play
          </a>
          {} is the creator of the unique collection of free casino games
          offered on our site. We want to make it clear that real-money wagering
          or transactions are not permitted in our social casino. The sole
          objective of these virtual, non-monetary games is to entertain
          oneself. All of our games are designed for people above the age of
          eighteen. We kindly ask that you take a moment to review our{" "}
          <Link to={ROUTER.TERMS} className="text-purple-600 underline">
            terms & conditions as well.
          </Link>
        </p>
        <div className="flex justify-center items-center mx-[80px] ">
          <img src={imgs.footerImg} alt="footer img" />
        </div>
        <div className="flex justify-center items-center md:mx-[80px]">
          Rocekt Jackpots © 2023 All Rights Reserved
        </div>
      </div>
    </div>
  );
};
