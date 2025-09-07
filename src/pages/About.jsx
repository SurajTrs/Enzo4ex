import React from "react";
import AboutHero from "../components/About/AboutHero";
import WhyChooseUs from "../components/About/WhyChooseUs";
import GlobalBrand from "../components/About/GlobalBrand";
import Regulators from "../components/About/Regulators";
import Values from "../components/About/Values";
import AboutCTA from "../components/About/CTA";
import AboutSubnav from "../components/About/AboutSubnav";
import TechShowcase from "../components/About/TechShowcase";

export default function AboutPage() {
  return (
    <>
      <div id="overview" className="scroll-mt-20">
        <AboutHero />
      </div>
      <AboutSubnav />
      <div id="why-us" className="scroll-mt-24">
        <WhyChooseUs />
      </div>
      <div id="brand" className="scroll-mt-24">
        <GlobalBrand />
      </div>
      <div id="technology" className="scroll-mt-24">
        <TechShowcase />
      </div>
    
      <div id="values" className="scroll-mt-24">
        <Values />
      </div>
      <div id="regulators" className="scroll-mt-24">
        <Regulators />
      </div>
      <AboutCTA />
    </>
  );
}
