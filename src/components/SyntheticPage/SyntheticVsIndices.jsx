import React from "react";
import { FiLayers, FiActivity, FiClock, FiScissors, FiBookOpen } from "react-icons/fi";

const rows = [
  {
    feature: "Market structure",
    icon: <FiLayers className="w-4 h-4" />,
    synth: "Simulated via algorithm",
    cfds: "Composed of real, publicly traded companies",
  },
  {
    feature: "Volatility",
    icon: <FiActivity className="w-4 h-4" />,
    synth: "Programmed and constant",
    cfds: "Influenced by earnings, news, or Fed policy",
  },
  {
    feature: "Trading hours",
    icon: <FiClock className="w-4 h-4" />,
    synth: "24/7 – nonstop trading",
    cfds: "24/5 – closed on weekends",
  },
  {
    feature: "Gaps",
    icon: <FiScissors className="w-4 h-4" />,
    synth: "None – continuous pricing",
    cfds: "Common after weekends/news events",
  },
  {
    feature: "Fundamentals required",
    icon: <FiBookOpen className="w-4 h-4" />,
    synth: "None – fully technical",
    cfds: "High – fundamentals drive long‑term trends",
  },
];

export default function SyntheticVsIndices() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_10%_-10%,rgba(168,85,247,0.10),transparent_60%),radial-gradient(45%_40%_at_100%_110%,rgba(236,72,153,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 mb-3">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />
            <span className="text-sm font-medium">Comparison</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">Synthetic indices vs CFDs on indices</h3>
        </div>

        {/* Table wrapper */}
        <div className="overflow-hidden rounded-3xl border border-purple-100 shadow-[0_12px_40px_rgba(16,24,40,0.08)] bg-white">
          {/* Header */}
          <div className="hidden md:grid grid-cols-12 bg-gradient-to-r from-[rgba(15,23,42,0.9)] to-[rgba(30,41,59,0.9)] text-white">
            <div className="col-span-4 p-4 font-semibold">Feature</div>
            <div className="col-span-4 p-4 font-semibold">Synthetic indices</div>
            <div className="col-span-4 p-4 font-semibold">CFDs on indices</div>
          </div>

          {/* Rows */}
          <div>
            {rows.map((r, idx) => (
              <div key={r.feature} className={`grid grid-cols-12 items-stretch ${idx % 2 === 0 ? 'bg-white' : 'bg-purple-50/30'}`}>
                {/* Feature */}
                <div className="col-span-12 md:col-span-4 p-4 border-t border-purple-100">
                  <div className="flex items-center gap-2 text-gray-900 font-semibold">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white shadow-sm shadow-fuchsia-500/20">{r.icon}</span>
                    <span>{r.feature}</span>
                  </div>
                </div>
                {/* Synthetic */}
                <div className="col-span-12 md:col-span-4 p-4 border-t border-purple-100">
                  <div className="md:hidden text-xs text-gray-500 mb-1">Synthetic indices</div>
                  <div className="text-gray-700">{r.synth}</div>
                </div>
                {/* CFDs */}
                <div className="col-span-12 md:col-span-4 p-4 border-t border-purple-100">
                  <div className="md:hidden text-xs text-gray-500 mb-1">CFDs on indices</div>
                  <div className="text-gray-700">{r.cfds}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 flex justify-center">
          <a href="/synthetic-indices/live" className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition">
            Start trading synthetic indices
          </a>
        </div>
      </div>
    </section>
  );
}
