import React from "react";
import { FiTrendingDown, FiPercent, FiBarChart2, FiGlobe, FiLayers } from "react-icons/fi";

const cards = [
  {
    title: "Short without the extra costs",
    desc: "Trade market drops without incurring borrowing fees.",
    icon: <FiTrendingDown className="w-5 h-5" />,
  },
  {
    title: "Fractional trading",
    desc: "Trade without paying the full share price. Take positions that match your strategy and budget.",
    icon: <FiLayers className="w-5 h-5" />,
  },
  {
    title: "Leverage of up to 10:1",
    desc: "Trade up to ten times your deposit. For example, open a $2,000 position with just $200.",
    icon: <FiPercent className="w-5 h-5" />,
  },
  {
    title: "Commission-free trades",
    desc: "Zero commission on your stock CFD positions. What you see is what you get.",
    icon: <FiBarChart2 className="w-5 h-5" />,
  },
  {
    title: "Real-time data, no hidden fees",
    desc: "Live pricing on all stocks, without the usual platform or market data charges.",
    icon: <FiBarChart2 className="w-5 h-5" />,
  },
  {
    title: "Global stock access",
    desc: "Trade well-known stocks from the US, Australia, South Africa, and Asia - all in one place.",
    icon: <FiGlobe className="w-5 h-5" />,
  },
];

export default function StocksBenefits() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_10%_-10%,rgba(168,85,247,0.12),transparent_60%),radial-gradient(45%_40%_at_100%_110%,rgba(236,72,153,0.10),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Why trade stocks with ThinkMarkets?</h2>
            <p className="text-gray-600">Built for speed, reliability and insight.</p>
          </div>
          <a href="/stocks/live" className="hidden sm:inline-flex px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition">Start trading</a>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((c) => (
            <div key={c.title} className="rounded-2xl bg-white border border-purple-100 text-gray-900 p-5 shadow-[0_10px_30px_rgba(16,24,40,0.06)] hover:shadow-[0_16px_45px_rgba(16,24,40,0.10)] transition-shadow">
              <div className="flex items-center gap-2 text-purple-700">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-purple-50 ring-1 ring-purple-100">{c.icon}</span>
                <div className="text-sm text-gray-500">Benefit</div>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">{c.title}</h3>
              <p className="mt-1.5 text-sm text-gray-600">{c.desc}</p>
              <div className="mt-5 h-0.5 w-full bg-gradient-to-r from-purple-500/30 via-fuchsia-500/30 to-purple-500/30 rounded-full" />
            </div>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <a href="/stocks/live" className="w-full inline-flex justify-center px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition">Start trading</a>
        </div>
      </div>
    </section>
  );
}
