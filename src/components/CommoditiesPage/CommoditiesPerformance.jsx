import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import whyright from "../../assets/whyright.png";

export default function CommoditiesThinkTraderPerformance() {
  const bullets = [
    { title: "Instant execution", desc: "Low-latency trade routing and reliable fills." },
    { title: "Advanced charting", desc: "Powerful tools to analyze commodity markets." },
    { title: "Risk controls", desc: "Manage exposure with stops and flexible sizing." },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: illustrative image */}
          <div className="flex justify-center">
            <div className="relative group" style={{ perspective: 1200 }}>
              <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-[radial-gradient(120px_120px_at_70%_80%,rgba(168,85,247,0.25),transparent_60%)] blur-2xl opacity-70" />
              <img
                src={whyright}
                alt="ThinkTrader performance"
                className="relative w-[520px] max-w-full rounded-3xl border border-purple-100 shadow-[0_16px_50px_rgba(16,24,40,0.12)]"
              />
            </div>
          </div>

          {/* Right: copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 mb-3">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />
              <span className="text-sm font-medium">ThinkTrader performance</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900">
              Built for speed, reliability and insight.
            </h3>
            <p className="mt-4 text-gray-600 max-w-xl">
              Execute commodity trades with confidence on infrastructure engineered for throughput and stability.
            </p>

            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
              {bullets.map((b) => (
                <li key={b.title} className="flex items-start gap-3">
                  <FiCheckCircle className="mt-0.5 text-purple-600" />
                  <div>
                    <div className="font-semibold text-gray-900">{b.title}</div>
                    <div className="text-sm text-gray-600">{b.desc}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <a href="/commodities/live" className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition">
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
