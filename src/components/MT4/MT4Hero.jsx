import React from "react";
import heroBg from "../../assets/mt4bg.png";
import preview from "../../assets/mt4bg.png";

export default function MT4Hero() {
  return (
    <section className="relative overflow-hidden">
      <img src={heroBg} alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1024] via-[#0b1024] to-[#121736]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 text-white">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-3">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-400" />
            <span className="text-sm">MetaTrader 4</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">MetaTrader 4</h1>
          <p className="mt-2 text-slate-200">Trade on one of the leading platforms and access advanced charting tools and automated trading capabilities.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/register" className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-fuchsia-500/30 hover:opacity-95">Open MT4 account</a>
            <a href="#download" className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10">Download MT4</a>
          </div>
        </div>

        <div className="mt-10 rounded-3xl overflow-hidden border border-white/10 bg-white/5 p-2 shadow-[0_16px_60px_rgba(0,0,0,0.45)]">
          <img src={preview} alt="MT4 preview" className="rounded-2xl border border-white/10" />
        </div>
      </div>
    </section>
  );
}
