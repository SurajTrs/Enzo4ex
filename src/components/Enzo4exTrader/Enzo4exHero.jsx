import React from "react";
import heroBg from "../../assets/forexbg.png";

export default function Enzo4exHero({ previewSrc }) {
  return (
    <section className="relative overflow-hidden">
      <img src={heroBg} alt="ThinkTrader" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1024]/90 via-[#0b1024]/85 to-[#121736]/92" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28 text-white">
        <div className="pointer-events-none absolute -top-16 right-0 w-72 h-72 bg-fuchsia-500/25 blur-3xl rounded-full" />
        <div className="pointer-events-none absolute bottom-0 -left-16 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white mb-3">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-400" />
            <span className="text-sm">Multi‑asset trading platform</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">Enzo4exTrader</h1>
          <p className="mt-3 text-slate-200 text-lg md:text-xl max-w-2xl">Fast, intuitive and built for modern traders. Execute with confidence across markets with pro‑grade tools and charts.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#download" className="px-7 py-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-fuchsia-500/30 hover:opacity-95">Download</a>
            <a href="#features" className="px-7 py-3 rounded-full border border-white/30 text-white hover:bg-white/10">Explore features</a>
          </div>
        </div>

        {/* Device preview image */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-3 shadow-[0_16px_60px_rgba(2,6,23,0.5)]">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#0f172a]">
            {previewSrc ? (
              <img src={previewSrc} alt="Enzo4exTrader Preview" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-300">Platform preview</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
