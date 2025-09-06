import React from "react";
import CryptoHero from "../components/CryptoPage/CryptoHero";
import CryptoLiveInline from "../components/CryptoPage/CryptoLiveInline";
import CryptoWhyTrade from "../components/CryptoPage/CryptoWhyTrade";
import CryptoWhyChoose from "../components/CryptoPage/CryptoWhyChoose";
import CryptoEducation from "../components/CryptoPage/CryptoEducation";

export default function Crypto() {
  return (
    <>
      <CryptoHero />
      <CryptoLiveInline />
      <CryptoWhyTrade />
      <CryptoWhyChoose />
      <CryptoEducation />
    </>
  );
}
