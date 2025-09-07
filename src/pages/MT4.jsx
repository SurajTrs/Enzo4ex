import React from "react";
import MT4Hero from "../components/MT4/MT4Hero";
import MT4Benefits from "../components/MT4/MT4Benefits";
import MT4About from "../components/MT4/MT4About";
import MT4Zigzag from "../components/MT4/MT4Zigzag";
import MT4PlatformFeatures from "../components/MT4/MT4PlatformFeatures";
import MT4Downloads from "../components/MT4/MT4Downloads";
import MT4AccountsCTA from "../components/MT4/MT4AccountsCTA";
import MT4FAQ from "../components/MT4/MT4FAQ";

export default function MT4Page() {
  return (
    <>
      <MT4Hero />
      <MT4Benefits />
      <MT4About />
      <MT4Zigzag />
      <MT4PlatformFeatures />
      <MT4Downloads />
      <MT4AccountsCTA />
      <MT4FAQ />
    </>
  );
}
