import React from "react";
import { FiShield, FiZap, FiPercent, FiSmartphone } from "react-icons/fi";

export default function CryptoWhyChoose() {
  const items = [
    { icon: <FiShield className="w-5 h-5" />, title: "Trusted and secure", desc: "Trade crypto CFDs with a multi-regulated broker and strict client fund protection." },
    { icon: <FiPercent className="w-5 h-5" />, title: "Dynamic leverage up to 400:1*", desc: "Access larger position sizes for less — leverage adjusts to your trade size." },
    { icon: <FiZap className="w-5 h-5" />, title: "Fast execution and tight spreads", desc: "Institutional-grade performance, even in volatile conditions." },
    { icon: <FiSmartphone className="w-5 h-5" />, title: "Trade on ThinkTrader", desc: "Advanced platform, simple design, one login across mobile and web." },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-8 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">Why choose ThinkMarkets for cryptocurrency trading?</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i) => (
            <div key={i.title} className="p-6 rounded-3xl bg-white border border-purple-100 shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-fuchsia-500/20 ring-1 ring-purple-200/30">{i.icon}</div>
              <div className="mt-3 font-semibold text-gray-900">{i.title}</div>
              <div className="text-sm text-gray-600">{i.desc}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 text-xs text-gray-500 text-center">* Available with dynamic leverage, exclusively on ThinkTrader.</div>
      </div>
    </section>
  );
}
