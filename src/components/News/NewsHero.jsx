import React from "react";
import bg from "../../assets/forexbg.png";

export default function NewsHero() {
  return (
    <header className="relative overflow-hidden">
      <img src={bg} alt="bg" className="absolute inset-0 w-full h-full object-cover" />
      {/* Dark overlay and subtle vignette for readability */}
      <div className="absolute inset-0 bg-[#0b1024]/85" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_60%_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-3">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-400" />
            <span className="text-sm">Latest Market News</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Latest Market News</h1>
          <p className="mt-2 text-slate-200">Stay up to date with real‑time market headlines, briefings and deep‑dive insights.</p>

          {/* Feature strip */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-3 text-slate-100">
              <div className="text-sm font-semibold">Real‑time</div>
              <div className="text-xs text-slate-200/90">Streaming headlines</div>
            </div>
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-3 text-slate-100">
              <div className="text-sm font-semibold">Multi‑asset</div>
              <div className="text-xs text-slate-200/90">FX • Indices • Commodities</div>
            </div>
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-3 text-slate-100">
              <div className="text-sm font-semibold">Curated</div>
              <div className="text-xs text-slate-200/90">Top stories and analysis</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
