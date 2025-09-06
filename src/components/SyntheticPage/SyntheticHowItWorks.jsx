import React from "react";
import { FiCpu, FiBarChart2, FiSlash } from "react-icons/fi";

export default function SyntheticHowItWorks() {
  const points = [
    {
      icon: <FiCpu className="w-5 h-5" />,
      title: "Algorithm‑generated pricing",
      desc: "Synthetic indices use algorithms to generate price behaviour with no correlation to real‑world assets.",
    },
    {
      icon: <FiSlash className="w-5 h-5" />,
      title: "No fundamentals",
      desc: "There’s no link to earnings, macro data or central banks. It’s purely technical price action.",
    },
    {
      icon: <FiBarChart2 className="w-5 h-5" />,
      title: "Consistent volatility patterns",
      desc: "The pricing engine replicates real market volatility with built‑in consistency and no weekend gaps.",
    },
  ];
  return (
    <section className="relative py-16 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_10%_-10%,rgba(168,85,247,0.12),transparent_60%),radial-gradient(45%_40%_at_100%_110%,rgba(236,72,153,0.10),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 mb-3">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />
            <span className="text-sm font-medium">How it works</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Algo‑driven markets, engineered for consistency</h3>
          <p className="text-gray-600">Synthetic indices use algorithms to generate price behaviour.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {points.map((p) => (
            <div
              key={p.title}
              className="p-6 rounded-3xl bg-white border border-purple-100 shadow-[0_10px_35px_rgba(16,24,40,0.06)] hover:shadow-[0_18px_55px_rgba(16,24,40,0.10)] transition-shadow relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 rounded-full blur-2xl" />
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-fuchsia-500/20 ring-1 ring-purple-200/30">{p.icon}</div>
              <div className="mt-3 font-semibold text-gray-900">{p.title}</div>
              <div className="text-sm text-gray-600">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
