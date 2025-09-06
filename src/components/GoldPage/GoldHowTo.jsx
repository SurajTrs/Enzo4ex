import React from "react";
import { FiTarget, FiSliders, FiPercent } from "react-icons/fi";

export default function GoldHowTo() {
  const steps = [
    { n: 1, title: "Select your market", desc: "Trade gold against USD (XAUUSD) or EUR (XAUEUR).", icon: <FiTarget /> },
    { n: 2, title: "Select your trade size", desc: "Start small with micro-lots (0.01) or scale up as your confidence grows.", icon: <FiSliders /> },
    { n: 3, title: "Select your leverage", desc: "Trade larger positions with up to 500:1 leverage.", icon: <FiPercent /> },
  ];
  return (
    <section className="relative py-16 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_10%_-10%,rgba(168,85,247,0.12),transparent_60%),radial-gradient(45%_40%_at_100%_110%,rgba(236,72,153,0.10),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-8 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">How to start trading gold</h3>
          <p className="text-gray-600">With gold CFDs, you’re speculating on price. No pickaxe required.</p>
        </div>
        <ol className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <li key={s.n} className="p-6 rounded-3xl bg-white border border-purple-100 shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-fuchsia-500/20 ring-1 ring-purple-200/30">{s.n}</span>
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-purple-50 text-purple-700 ring-1 ring-purple-100">{s.icon}</div>
              </div>
              <div className="mt-3 font-semibold text-gray-900">{s.title}</div>
              <div className="text-sm text-gray-600">{s.desc}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
