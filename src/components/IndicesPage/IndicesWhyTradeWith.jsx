import React from "react";
import { FiGlobe, FiSliders, FiShield, FiTrendingUp } from "react-icons/fi";
import whyright from "../../assets/whyright.png";

const items = [
  {
    icon: <FiGlobe className="w-5 h-5" />,
    title: "Global market access",
    desc: "Choose from 18 global indices. Diversify without buying individual shares.",
  },
  {
    icon: <FiSliders className="w-5 h-5" />,
    title: "Flexible contract sizes",
    desc: "Start small with minimum trade sizes from just 0.01 lots.",
  },
  {
    icon: <FiShield className="w-5 h-5" />,
    title: "Negative balance protection",
    desc: "Your risk stays limited. Never lose more than you deposit.",
  },
  {
    icon: <FiTrendingUp className="w-5 h-5" />,
    title: "Tight, competitive spreads",
    desc: "Trade SPX500 from 0.4 points, GER40 from 0.6, and AUS200 from 1.2.",
  },
];

export default function IndicesWhyTradeWith() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0b1024] via-[#0b1024] to-[#121736] text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_10%_10%,rgba(139,92,246,0.18),transparent_60%),radial-gradient(50%_40%_at_100%_90%,rgba(236,72,153,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-3">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-400" />
              <span className="text-sm">Why trade indices with ThinkMarkets?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
              Built for serious index traders
            </h2>
            <p className="mt-3 text-purple-100/95 max-w-xl">
              Access the world’s biggest indices with pricing, tools and protection designed for modern trading.
            </p>

            <ul className="mt-6 space-y-4">
              {items.map((card, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white flex-shrink-0 shadow-lg shadow-fuchsia-500/20 ring-1 ring-white/20">
                    {card.icon}
                  </span>
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
              <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-[radial-gradient(120px_120px_at_70%_80%,rgba(16,185,129,0.35),transparent_60%)] blur-2xl opacity-80" />
              <img
                src={whyright}
                alt="indices visual"
                className="relative w-[460px] md:w-[520px] max-w-full will-change-transform transition-transform duration-500 ease-out transform-gpu group-hover:scale-[1.04] group-hover:-translate-y-1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
