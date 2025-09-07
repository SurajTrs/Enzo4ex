import React from "react";
import preview from "../../assets/enzo4ex-hero.png";

export default function MT5About() {
  return (
    <section className="relative py-14" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[28px] border border-slate-800 text-white shadow-[0_16px_60px_rgba(2,6,23,0.6)]">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b1024] via-[#0b1024] to-[#121736]" />
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_10%_-10%,rgba(139,92,246,0.18),transparent_60%),radial-gradient(50%_40%_at_100%_90%,rgba(236,72,153,0.12),transparent_60%)]" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="relative p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold">Trade on MetaTrader 5 with ThinkMarkets</h2>
                <p className="mt-2 text-slate-200">Trade on the latest MetaTrader platform and access a seamless trading experience. With MT5, you can use Expert Advisors, customisable charts, dozens of indicators, a multi‑thread Strategy Tester and more.</p>
                <div className="mt-4">
                  <a href="#download" className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-fuchsia-500/30 hover:opacity-95">Start trading</a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-28 h-28 bg-purple-400/30 rounded-full blur-2xl" />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-fuchsia-400/30 rounded-full blur-2xl" />
                <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur shadow-[0_16px_60px_rgba(0,0,0,0.45)]">
                  <img src={preview} alt="MT5 preview" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
