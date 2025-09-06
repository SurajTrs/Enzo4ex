import React from "react";
import forexbg from "../../assets/forexbg.png";

export default function SyntheticHero() {
  return (
    <section className="relative overflow-hidden">
      <img src={forexbg} alt="Synthetic indices background" className="absolute inset-0 w-full h-full object-cover" fetchpriority="high" />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
        <div className="pointer-events-none absolute -top-16 right-0 w-72 h-72 bg-fuchsia-500/30 blur-3xl rounded-full" />
        <div className="pointer-events-none absolute bottom-0 -left-16 w-72 h-72 bg-purple-500/25 blur-3xl rounded-full" />

        <div className="flex flex-col gap-8 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white">
            <span className="text-xs font-semibold bg-gradient-to-r from-purple-600 to-fuchsia-600 px-2 py-0.5 rounded-full">Synthetic indices</span>
            <span className="text-sm">24/7 trading · Consistent volatility · Purely technical</span>
          </div>

          <h1 className="text-white font-extrabold leading-tight text-4xl md:text-5xl lg:text-6xl">Synthetic indices trading</h1>
          <p className="text-purple-100/95 text-lg md:text-xl leading-relaxed max-w-2xl">
            Synthetic indices are algorithm-generated markets that simulate real-world price movements without being tied to external factors. Pure technical setups, constant volatility, and 24/7 trading opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#synth-live" className="px-7 py-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition">Start trading</a>
            <a href="#synth-why" className="px-7 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition">Why trade synthetic indices?</a>
          </div>
        </div>
      </div>
    </section>
  );
}
