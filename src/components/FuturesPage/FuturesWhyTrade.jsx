import React from "react";
import { FiTrendingUp, FiClock, FiShield } from "react-icons/fi";
import whyright from "../../assets/whyright.png";

export default function FuturesWhyTrade() {
  const items = [
    { icon: <FiTrendingUp className="w-5 h-5" />, title: "Go long or short", desc: "Speculate on the upward and downward price movements of instruments." },
    { icon: <FiClock className="w-5 h-5" />, title: "Lock in prices ahead of time", desc: "Hedge future price moves by locking in the future price of an instrument." },
    { icon: <FiShield className="w-5 h-5" />, title: "No swap fees", desc: "Hold positions for longer without incurring overnight funding charges." },
  ];
  return (
    <section id="futures-why" className="relative py-20 bg-gradient-to-br from-[#0b1024] via-[#0b1024] to-[#121736] text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_10%_10%,rgba(139,92,246,0.18),transparent_60%),radial-gradient(50%_40%_at_100%_90%,rgba(236,72,153,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-3">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-400" />
              <span className="text-sm">Why trade futures?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">Take directional views and hedge with confidence</h2>
            <p className="mt-3 text-purple-100/95 max-w-xl">Buy or sell futures on major indices and commodities without owning the underlying.</p>
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
