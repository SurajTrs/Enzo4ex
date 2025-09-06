import React from "react";
import IndicesHero from "../components/IndicesPage/IndicesHero";
import IndicesWhyTradeWith from "../components/IndicesPage/IndicesWhyTradeWith";
import IndicesPlatform from "../components/IndicesPage/IndicesPlatform";
import IndicesWhyTrade from "../components/IndicesPage/IndicesWhyTrade";
import IndicesEducation from "../components/IndicesPage/IndicesEducation";
import IndicesLiveInline from "../components/IndicesPage/IndicesLiveInline";

export default function Indices() {
  return (
    <>
      <IndicesHero />
      <IndicesLiveInline />
      <IndicesWhyTrade />
      <IndicesWhyTradeWith />
      <IndicesPlatform />
     
      <IndicesEducation />
    </>
  );
}
