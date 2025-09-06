import React from "react";

export default function ThinkFeatures() {
  const cards = [
    { title: "TradingView Charts", desc: "Advanced charting with multiple timeframes, indicators and drawing tools.", cta: "Learn more" },
    { title: "Trader’s Gym", desc: "Backtest strategies and practice risk‑free with historical data.", cta: "Try it" },
    { title: "Custom watchlists", desc: "Organize instruments and sync them across devices.", cta: "Create" },
    { title: "Spotlight search", desc: "Jump to any instrument in a second with global keyboard search.", cta: "Search" },
    { title: "Order confirmations", desc: "Clear costs and margin impacts before every trade.", cta: "View" },
    { title: "Notifications", desc: "Stay updated with price alerts and order fills.", cta: "Enable" },
  ];
  return (
    <section id="features" className="relative py-16 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_10%_-10%,rgba(168,85,247,0.12),transparent_60%),radial-gradient(45%_40%_at_100%_110%,rgba(236,72,153,0.10),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">A platform that gives you control</h2>
          <p className="text-gray-600">Pro‑grade tools made simple and fast.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="p-6 rounded-3xl bg-white border border-purple-100 shadow-[0_10px_35px_rgba(16,24,40,0.06)] hover:shadow-[0_18px_55px_rgba(16,24,40,0.10)] transition-shadow">
              <div className="font-semibold text-gray-900">{c.title}</div>
              <div className="text-sm text-gray-600">{c.desc}</div>
              <button className="mt-4 px-3 py-1.5 rounded-lg text-sm border border-purple-200 text-purple-700 hover:bg-purple-50">{c.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
