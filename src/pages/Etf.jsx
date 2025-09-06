import React from "react";
import EtfHero from "../components/EtfPage/EtfHero";
import EtfLiveInline from "../components/EtfPage/EtfLiveInline";
import EtfWhyTrade from "../components/EtfPage/EtfWhyTrade";
import EtfWhyChoose from "../components/EtfPage/EtfWhyChoose";
import EtfEducation from "../components/EtfPage/EtfEducation";
import EtfPlatform from "../components/EtfPage/EtfPlatform";

export default function Etf() {
  return (
    <>
      <EtfHero />
      <EtfLiveInline />
      <EtfWhyTrade />
      <EtfWhyChoose />
      <EtfPlatform />
      <EtfEducation />
    </>
  );
}
