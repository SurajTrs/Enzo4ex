import React from "react";

import CommoditiesHero from "../components/CommoditiesPage/CommoditiesHero";
import CommoditiesLiveInline from "../components/CommoditiesPage/CommoditiesLiveInline";
import CommoditiesMarkets from "../components/CommoditiesPage/CommoditiesMarkets";
import CommoditiesWhyTrade from "../components/CommoditiesPage/CommoditiesWhyTrade";
import CommoditiesPlatform from "../components/CommoditiesPage/CommoditiesPlatform";
import CommoditiesEducation from "../components/CommoditiesPage/CommoditiesEducation";
import CommoditiesThinkTraderPerformance from "../components/CommoditiesPage/CommoditiesPerformance";

export default function Commodities() {
  return (
    <>
    <CommoditiesHero />
    <CommoditiesLiveInline />
    <CommoditiesMarkets />
    <CommoditiesWhyTrade />
    <CommoditiesThinkTraderPerformance />
    <CommoditiesPlatform />
    <CommoditiesEducation />
    </>
  );
}
