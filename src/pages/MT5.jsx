import React from "react";
import MT5Hero from "../components/MT5/MT5Hero";
import MT5Benefits from "../components/MT5/MT5Benefits";
import MT5About from "../components/MT5/MT5About";
import MT5Zigzag from "../components/MT5/MT5Zigzag";
import MT5PlatformFeatures from "../components/MT5/MT5PlatformFeatures";
import MT5Downloads from "../components/MT5/MT5Downloads";
import MT5AccountsCTA from "../components/MT5/MT5AccountsCTA";
import MT5FAQ from "../components/MT5/MT5FAQ";

export default function MT5Page() {
  return (
    <>
      <MT5Hero />
      <MT5Benefits />
      <MT5About />
      <MT5Zigzag />
      <MT5PlatformFeatures />
      <MT5Downloads />
      <MT5AccountsCTA />
      <MT5FAQ />
    </>
  );
}
