import React from "react";
import { FiZap, FiShield, FiClock, FiTrendingUp } from "react-icons/fi";
import whyright from "../../assets/whyright.png";

export default function SyntheticWhyChoose() {
  const items = [
    { icon: <FiTrendingUp className="w-5 h-5" />, title: "Leverage up to 1:2500", desc: "One of the highest in the industry on select synthetic indices." },
    { icon: <FiClock className="w-5 h-5" />, title: "24/7 availability", desc: "Trade anytime — nights, weekends and holidays." },
    { icon: <FiZap className="w-5 h-5" />, title: "Ultra‑fast execution", desc: "Low‑latency order routing built for speed." },
    { icon: <FiShield className="w-5 h-5" />, title: "Built‑in risk tools", desc: "Smart risk management and clear margin visibility." },
  ];
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_10%_-10%,rgba(168,85,247,0.12),transparent_60%),radial-gradient(45%_40%_at_100%_110%,rgba(236,72,153,0.10),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: image */}
          <div className="flex justify-center order-first">
            <div className="relative group" style={{ perspective: 1200 }}>
              <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-[radial-gradient(120px_120px_at_70%_80%,rgba(168,85,247,0.25),transparent_60%)] blur-2xl opacity-70" />
              <img src={whyright} alt="platform preview" className="relative w-[520px] max-w-full rounded-3xl border border-purple-100 shadow-[0_16px_50px_rgba(16,24,40,0.12)]" />
            </div>
          </div>
          {/* Right: text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 mb-3">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />
              <span className="text-sm font-medium">Why trade synthetic indices with ThinkMarkets?</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900">Right tools, real speed, constant access</h3>
            <div className="mt-6 space-y-4">
              {items.map((i) => (
                <div key={i.title} className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-fuchsia-500/20 ring-1 ring-purple-200/30">{i.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-900">{i.title}</div>
                    <div className="text-sm text-gray-600">{i.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
