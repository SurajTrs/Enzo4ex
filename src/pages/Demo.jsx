import React from "react";
import DemoHero from "../components/Demo/DemoHero";
import DemoWhatYouCanDo from "../components/Demo/DemoWhatYouCanDo";
import DemoPlatforms from "../components/Demo/DemoPlatforms";
import DemoCompare from "../components/Demo/DemoCompare";
import DemoCTA from "../components/Demo/DemoCTA";
import DemoFAQ from "../components/Demo/DemoFAQ";

export default function DemoPage() {
  return (
    <>
      <DemoHero />

      <nav className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ul className="flex gap-4 py-3 text-sm text-purple-700">
            <li><a href="#overview" className="hover:text-purple-800">Overview</a></li>
            <li><a href="#platforms" className="hover:text-purple-800">Platforms</a></li>
            <li><a href="#compare" className="hover:text-purple-800">Compare</a></li>
            <li><a href="#faq" className="hover:text-purple-800">FAQ</a></li>
          </ul>
        </div>
      </nav>

      <div id="overview">
        <DemoWhatYouCanDo />
      </div>
      <div id="platforms">
        <DemoPlatforms />
      </div>
      <DemoCompare />
      <DemoCTA />
      <div id="faq">
        <DemoFAQ />
      </div>
    </>
  );
}
