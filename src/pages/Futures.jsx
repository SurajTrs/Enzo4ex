import React from "react";
import FuturesHero from "../components/FuturesPage/FuturesHero";
import FuturesLiveInline from "../components/FuturesPage/FuturesLiveInline";
import FuturesWhyTrade from "../components/FuturesPage/FuturesWhyTrade";
import FuturesWhyChoose from "../components/FuturesPage/FuturesWhyChoose";
import FuturesPlatform from "../components/FuturesPage/FuturesPlatform";
import FuturesEducation from "../components/FuturesPage/FuturesEducation";

export default function Futures() {
  return (
    <>
      <FuturesHero />
      <FuturesLiveInline />
      <FuturesWhyTrade />
      <FuturesWhyChoose />
      <FuturesPlatform />
      <FuturesEducation />
    </>
  );
}
