import React from "react";
import forexbg from "../../assets/forexbg.png";

export default function App() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image from src/assets */}
      <img
        src={forexbg}
        alt="Forex background"
        className="absolute inset-0 w-full h-full object-cover"
        fetchpriority="high"
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
        {/* Accent glows */}
        <div className="pointer-events-none absolute -top-16 right-0 w-72 h-72 bg-fuchsia-500/30 blur-3xl rounded-full" />
        <div className="pointer-events-none absolute bottom-0 -left-16 w-72 h-72 bg-purple-500/25 blur-3xl rounded-full" />

        <div className="flex flex-col items-start md:items-start gap-8 max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white">
            <span className="text-xs font-semibold bg-gradient-to-r from-purple-600 to-fuchsia-600 px-2 py-0.5 rounded-full">FX</span>
            <span className="text-sm">Institutional pricing · Execution you can trust</span>
          </div>

          {/* Heading */}
          <h1 className="text-white font-extrabold leading-tight text-4xl md:text-5xl lg:text-6xl">
            Trade global currencies with confidence
          </h1>

          {/* Subtext */}
          <p className="text-purple-100/95 text-lg md:text-xl leading-relaxed max-w-2xl">
            Access major, minor and exotic FX pairs with ultra‑tight spreads from 0.6 pips, fast execution and professional‑grade tools.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-7 py-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition">
              Start trading
            </button>
            <button className="px-7 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition">
              Try a demo
            </button>
          </div>

          {/* Metrics Bar */}
          <div className="mt-4 grid grid-cols-3 gap-3 w-full max-w-xl">
            {[{
              label: 'Spreads from', value: '0.6 pips'
            }, {
              label: 'Currency pairs', value: '45+'
            }, {
              label: 'Market access', value: '24/5'
            }].map((m) => (
              <div key={m.label} className="rounded-2xl bg-white/10 border border-white/15 text-white px-4 py-3 text-center">
                <div className="text-xs text-purple-100/90">{m.label}</div>
                <div className="text-lg font-bold">{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
