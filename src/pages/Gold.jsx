import React from "react";
import GoldHero from "../components/GoldPage/GoldHero";
import GoldLiveInline from "../components/GoldPage/GoldLiveInline";
import GoldWhyTrade from "../components/GoldPage/GoldWhyTrade";
import GoldHowTo from "../components/GoldPage/GoldHowTo";
import GoldWhyChoose from "../components/GoldPage/GoldWhyChoose";

export default function Gold() {
  return (
    <>
      <GoldHero />
      <GoldLiveInline />
      <GoldWhyTrade />
      <GoldHowTo />
      <GoldWhyChoose />
    </>
  );
}
