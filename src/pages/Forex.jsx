import React from "react";
import Banner from "../components/Banner";
import { assets } from "../assets/assets";

const Forex = () => {
  return (
    <div>
      <Banner
        title="Forex trading"
        description="Trade the currencies you want, your way. Access major, minor, and exotic forex pairs with ultra-tight spreads from 0.6 pips and immediate order execution."
        buttonText="Start trading"
        buttonLink="/start-trading"
        image={assets.phoneImg}
      />
    </div>
  );
};

export default Forex;
