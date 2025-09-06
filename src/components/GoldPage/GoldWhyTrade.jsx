import React from "react";
import { FiShield, FiTrendingUp, FiLayers } from "react-icons/fi";
import whyright from "../../assets/whyright.png";

export default function GoldWhyTrade() {
  const items = [
    { icon: <FiShield className="w-5 h-5" />, title: "Safe‑haven appeal", desc: "Gold stands strong when markets don't. It's a go‑to during inflation, volatility, or economic shocks." },
    { icon: <FiTrendingUp className="w-5 h-5" />, title: "Go both ways", desc: "Expecting a rally? Buy. Forecasting a dip? Sell. Trade rising or falling prices." },
    { icon: <FiLayers className="w-5 h-5" />, title: "Diversification made easy", desc: "Add shine to your portfolio without the baggage of physical ownership." },
  ];
  return (
    <section id="gold-why" className="relative py-20 bg-gradient-to-br from-[#0b1024] via-[#0b1024] to-[#121736] text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_10%_10%,rgba(139,92,246,0.18),transparent_60%),radial-gradient(50%_40%_at_100%_90%,rgba(236,72,153,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-3">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-400" />
              <span className="text-sm">Why trade gold?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">Safe‑haven, two‑way opportunities, easy diversification</h2>
            <ul className="mt-6 space-y-4">
              {items.map((card, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white flex-shrink-0 shadow-lg shadow-fuchsia-500/20 ring-1 ring-white/20">{card.icon}</span>
                  <div>
                    <div className="font-semibold">{card.title}</div>
                    <div className="text-sm text-purple-100/90">{card.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="relative group" style={{ perspective: 1200 }}>
              <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-[radial-gradient(120px_120px_at_70%_80%,rgba(16,185,129,0.35),transparent_60%)] blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-90" />
              <img src={whyright} alt="platform preview" className="relative w-[460px] md:w-[520px] max-w-full will-change-transform transition-transform duration-500 ease-out transform-gpu group-hover:scale-[1.06] group-hover:-translate-y-2 group-hover:[transform:rotateX(2deg)_rotateY(-2deg)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
