import React from "react";
import StocksHero from "../components/StocksPage/StocksHero";
import StocksLiveInline from "../components/StocksPage/StocksLiveInline";
import StocksMarkets from "../components/StocksPage/StocksMarkets";
import StocksWhyTrade from "../components/StocksPage/StocksWhyTrade";
import StocksBenefits from "../components/StocksPage/StocksBenefits";
import StocksPlatform from "../components/StocksPage/StocksPlatform";
import StocksEducation from "../components/StocksPage/StocksEducation";
import StocksThinkTraderPerformance from "../components/StocksPage/StocksThinkTraderPerformance";

export default function Stocks() {
  return (
    <>
      <StocksHero />
      <StocksLiveInline />
      <StocksMarkets />
      <StocksWhyTrade />
      <StocksBenefits />

      <StocksThinkTraderPerformance />
      <StocksPlatform />

      <StocksEducation />
    </>
  );
}
