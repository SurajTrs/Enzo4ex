import React from "react";
import { FiTrendingUp, FiClock, FiShield, FiTarget, FiBell, FiSliders } from "react-icons/fi";

export default function GoldWhyChoose() {
  const items = [
    { icon: <FiTrendingUp className="w-5 h-5" />, title: "Leverage up to 500:1", desc: "Capital‑efficient exposure." },
    { icon: <FiClock className="w-5 h-5" />, title: "24/5 access", desc: "Trade around global news and events." },
    { icon: <FiSliders className="w-5 h-5" />, title: "Micro lots available", desc: "Precision sizing to suit your risk appetite." },
    { icon: <FiShield className="w-5 h-5" />, title: "Safety net", desc: "Negative balance protection – you’ll never lose more than you deposit." },
    { icon: <FiTarget className="w-5 h-5" />, title: "Instant execution", desc: "99.9% fill rate, no manual re‑quotes." },
    { icon: <FiBell className="w-5 h-5" />, title: "Your tools of the trade", desc: "Real‑time charts, smart risk controls and platforms built for speed and control." },
  ];
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-8 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">Why choose ThinkMarkets?</h3>
          <p className="text-gray-600">We’re not just giving you access to the gold market — we’re giving you an edge.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.title} className="p-6 rounded-3xl bg-white border border-purple-100 shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-fuchsia-500/20 ring-1 ring-purple-200/30">{i.icon}</div>
              <div className="mt-3 font-semibold text-gray-900">{i.title}</div>
              <div className="text-sm text-gray-600">{i.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
