import React from "react";
import NewsHero from "../components/News/NewsHero";
import EconomicCalendar from "../components/News/EconomicCalendar";
import MarketsTicker from "../components/News/MarketsTicker";

export default function MarketNewsPage() {
  return (
    <>
      <NewsHero />
      <EconomicCalendar />
      <MarketsTicker />
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-purple-100 p-5 bg-white shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
              <h3 className="text-lg font-extrabold text-gray-900">Notes</h3>
              <p className="mt-1 text-sm text-gray-700">The economic calendar is provided for informational purposes only and does not constitute investment advice. Data is sourced from third-party providers and may be delayed or inaccurate. Always verify critical information with primary sources before placing trades.</p>
            </div>
            <div className="rounded-3xl border border-purple-100 p-5 bg-white shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
              <h3 className="text-lg font-extrabold text-gray-900">Risk Warning</h3>
              <p className="mt-1 text-sm text-gray-700">Trading leveraged products involves a high level of risk and may not be suitable for all investors. You could lose more than your initial investment. Ensure you fully understand the risks involved and seek independent advice if necessary.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
