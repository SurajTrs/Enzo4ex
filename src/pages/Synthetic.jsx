import React from "react";
import SyntheticHero from "../components/SyntheticPage/SyntheticHero";
import SyntheticLiveInline from "../components/SyntheticPage/SyntheticLiveInline";
import SyntheticWhyTrade from "../components/SyntheticPage/SyntheticWhyTrade";
import SyntheticHowItWorks from "../components/SyntheticPage/SyntheticHowItWorks";
import SyntheticWhyChoose from "../components/SyntheticPage/SyntheticWhyChoose";
import SyntheticZigZag from "../components/SyntheticPage/SyntheticZigZag";
import SyntheticVsIndices from "../components/SyntheticPage/SyntheticVsIndices";

export default function Synthetic() {
  return (
    <>
      <SyntheticHero />
      <SyntheticLiveInline />
      <SyntheticWhyTrade />
      <SyntheticZigZag />
      <SyntheticHowItWorks />
      <SyntheticVsIndices />
      <SyntheticWhyChoose />
    </>
  );
}
