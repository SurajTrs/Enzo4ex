import React from "react";
import SupportHero from "../components/Support/SupportHero";
import SupportQuickStart from "../components/Support/SupportQuickStart";
import SupportCategories from "../components/Support/SupportCategories";
import SupportCTA from "../components/Support/SupportCTA";

export default function SupportPage() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <SupportHero />
        <SupportQuickStart />
        <SupportCategories />
        <SupportCTA />
      </div>
    </section>
  );
}
