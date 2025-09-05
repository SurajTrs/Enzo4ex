import React from "react";
import HeroSection from "../components/HeroSection";
import TradeSlider from "../components/TradeSlider";
import FeaturesSection from "../components/FeaturesSection";
import ExclusiveFeatures from "../components/ExclusiveFeatures";
import WhyChooseUs from "../components/WhyChooseUs";
import MarketOverview from "../components/MarketOverview";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <MarketOverview />

      <TradeSlider />
      <FeaturesSection />
      <ExclusiveFeatures />
    </div>
  );
};

export default Homepage;
