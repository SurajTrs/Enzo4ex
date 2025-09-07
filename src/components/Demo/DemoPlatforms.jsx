import React from "react";

export default function DemoPlatforms() {
  const platforms = [
    { name: "ThinkTrader", desc: "Our proprietary multi-asset platform with advanced charting.", cta: { label: "Try ThinkTrader", href: "/enzo4ex" } },
    { name: "MetaTrader 4", desc: "The industry standard packed with EAs, indicators and tools.", cta: { label: "Explore MT4", href: "/mt4" } },
    { name: "MetaTrader 5", desc: "The latest MetaTrader platform with 1,800+ instruments.", cta: { label: "Explore MT5", href: "/mt5" } },
  ];
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Test your trading strategies on the popular platforms</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {platforms.map((p)=> (
            <article key={p.name} className="rounded-3xl border border-purple-100 bg-white p-6 shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
              <h3 className="font-extrabold text-gray-900">{p.name}</h3>
              <p className="text-sm text-gray-700">{p.desc}</p>
              <div className="mt-4">
                <a href={p.cta.href} className="inline-flex px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-sm">{p.cta.label}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
