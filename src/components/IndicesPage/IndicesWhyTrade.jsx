import React from "react";
import { FiLayers, FiClock, FiTrendingUp, FiTrendingDown } from "react-icons/fi";

const points = [
  {
    icon: <FiLayers className="w-5 h-5" />,
    title: "Diversify with one position",
    desc: "Gain exposure to dozens or hundreds of companies in a single trade. No need to pick individual stocks.",
  },
  {
    icon: <FiClock className="w-5 h-5" />,
    title: "Trade around the clock",
    desc: "Take advantage of 24/5 access to global index markets. Morning, night, and everything in between.",
  },
  {
    icon: (
      <div className="flex items-center gap-2">
        <FiTrendingUp className="w-5 h-5" />
        <FiTrendingDown className="w-5 h-5" />
      </div>
    ),
    title: "Go long or short",
    desc: "Think prices will rise? Buy. Expect a fall? Sell. Profit potential in both directions.",
  },
];

export default function IndicesWhyTrade() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Why trade indices?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <div
              key={i}
              className="group p-6 rounded-3xl bg-white border border-purple-100 shadow-[0_10px_35px_rgba(16,24,40,0.06)] hover:shadow-[0_16px_50px_rgba(16,24,40,0.12)] transition"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white mb-4 shadow-lg shadow-fuchsia-500/20">
                {p.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{p.title}</h3>
              <p className="text-sm text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
