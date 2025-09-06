import React from "react";
import forexbg from "../../assets/forexbg.png";

export default function CommoditiesHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background placeholder; replace with a commodities image if available */}
      <img src={forexbg} alt="Commodities background" className="absolute inset-0 w-full h-full object-cover" fetchpriority="high" />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
        <div className="pointer-events-none absolute -top-16 right-0 w-72 h-72 bg-fuchsia-500/30 blur-3xl rounded-full" />
        <div className="pointer-events-none absolute bottom-0 -left-16 w-72 h-72 bg-purple-500/25 blur-3xl rounded-full" />

        <div className="flex flex-col gap-8 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white">
            <span className="text-xs font-semibold bg-gradient-to-r from-purple-600 to-fuchsia-600 px-2 py-0.5 rounded-full">Commodities</span>
            <span className="text-sm">Tight spreads · Instant execution · Leverage up to 400:1</span>
          </div>

          <h1 className="text-white font-extrabold leading-tight text-4xl md:text-5xl lg:text-6xl">Trade commodities</h1>
          <p className="text-purple-100/95 text-lg md:text-xl leading-relaxed max-w-2xl">
            Trade CFDs on a wide range of commodities, including Gold, Silver, WTI, BRENT, NGAS, and more, with tight spreads, no commission, instant execution and access to leverage of up to 400:1.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-7 py-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition">Trade commodities</button>
            <a href="#commodities-live" className="px-7 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition">View live prices</a>
          </div>
        </div>
      </div>
    </section>
  );
}
