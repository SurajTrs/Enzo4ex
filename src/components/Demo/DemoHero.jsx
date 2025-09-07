import React from "react";
import bg from "../../assets/forexbg.png";

export default function DemoHero() {
  const highlights = [
    { title: "Practice trading", desc: "Explore the markets in a risk‑free environment." , icon: "🎯"},
    { title: "Try the right platform", desc: "Test ThinkTrader, MT4 or MT5 with virtual funds.", icon: "🧪"},
    { title: "Refine your strategy", desc: "Experiment with indicators, EAs and risk controls.", icon: "🧠"},
  ];
  return (
    <header className="relative overflow-hidden">
      <img src={bg} alt="bg" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-[#0b1024]/85" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_0%_0%,rgba(139,92,246,0.20),transparent_60%),radial-gradient(70%_60%_at_100%_0%,rgba(236,72,153,0.18),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 text-white">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-3">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-400" />
            <span className="text-sm">Demo account</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Demo account</h1>
          <p className="mt-2 text-slate-200">Grow your skills by learning to trade the markets on an Enzo4ex demo trading account.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/register" className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-fuchsia-500/30 hover:opacity-95">Create a Demo account</a>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {highlights.map((h)=> (
            <div key={h.title} className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <div className="inline-flex items-center gap-2 text-purple-200">
                <span>{h.icon}</span>
                <span className="font-semibold">{h.title}</span>
              </div>
              <p className="mt-2 text-sm text-slate-200/90">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
