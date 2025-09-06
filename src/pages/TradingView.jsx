import React from "react";
import TradingViewHero from "../components/TradingView/TradingViewHero";
import TradingViewBenefits from "../components/TradingView/TradingViewBenefits";
import TradingViewDesktopApp from "../components/TradingView/TradingViewDesktopApp";
import TradingViewTools from "../components/TradingView/TradingViewTools";
import TradingViewSteps from "../components/TradingView/TradingViewSteps";
import TradingViewFAQ from "../components/TradingView/TradingViewFAQ";

export default function TradingViewPage() {
  return (
    <>
      <TradingViewHero />
      <TradingViewBenefits />
      <TradingViewDesktopApp />
      <TradingViewTools />
      <TradingViewSteps />
      <TradingViewFAQ />
    </>
  );
}
