import React from "react";

export default function AccountsPlans() {
  const plans = [
    {
      name: "Standard",
      blurb: "Access our most popular trading account with zero commission and tight spreads across seven markets.",
      deposit: "$250",
      leverage: "500:1",
      instruments: "350 (MT4) / 1,800 (MT5)",
      features: [
        "Markets - Forex, commodities, indices, crypto, stocks, ETFs and futures",
        "Spreads starting from 0.4 pips",
        "Base currencies include USD, AUD, GBP, EUR, SGD, CHF",
      ],
      cta: { label: "See all features", href: "/account-types#standard" },
      tag: null,
    },
    {
      name: "Enzo4exTrader",
      tag: "Most Popular",
      blurb: "Trade up to 4,000 instruments across seven global markets on Enzo4exTrader.",
      deposit: "$50",
      leverage: "500:1",
      instruments: "4,000",
      features: [
        "Markets - Forex, stocks, indices, commodities, crypto and ETFs",
        "Spreads starting from 0.4 pips",
        "Base currencies include USD, AUD, GBP, EUR, NZD, SGD, CHF",
      ],
      cta: { label: "See all features", href: "/account-types#enzo4extrader" },
    },
    {
      name: "EnzoZero",
      blurb: "Trade with raw spreads from as low as 0.0 on forex and access ultra-tight spreads on all other products.",
      deposit: "$500",
      leverage: "500:1",
      instruments: "350 (MT4) / 1,800 (MT5)",
      features: [
        "Markets - Forex, commodities, indices, crypto, futures and stocks",
        "Spreads starting from 0.0 pips",
        "Base currencies include USD, AUD, GBP, EUR, SGD, CHF",
      ],
      cta: { label: "See all features", href: "/account-types#enzozero" },
      tag: null,
    },
  ];

  return (
    <section id="select" className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((p)=> (
            <article key={p.name} className="group relative rounded-3xl border border-purple-100 bg-white p-6 shadow-[0_10px_35px_rgba(16,24,40,0.06)] hover:shadow-[0_18px_55px_rgba(16,24,40,0.10)] transition-shadow">
              {p.tag && (
                <div className="absolute -top-3 left-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-xs shadow-lg">
                  {p.tag}
                </div>
              )}
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-extrabold text-gray-900">{p.name}</h3>
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white text-sm ring-1 ring-purple-200/30 shadow-lg shadow-fuchsia-500/20">★</span>
              </div>
              <p className="mt-1 text-gray-600">{p.blurb}</p>
              <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                <div className="rounded-2xl border border-purple-100 p-3 bg-purple-50/50">
                  <div className="text-gray-600 flex items-center gap-1"><span>💳</span> Minimum deposit</div>
                  <div className="font-semibold text-gray-900">{p.deposit}</div>
                </div>
                <div className="rounded-2xl border border-purple-100 p-3 bg-purple-50/50">
                  <div className="text-gray-600 flex items-center gap-1"><span>📈</span> Max leverage</div>
                  <div className="font-semibold text-gray-900">{p.leverage}</div>
                </div>
                <div className="rounded-2xl border border-purple-100 p-3 bg-purple-50/50">
                  <div className="text-gray-600 flex items-center gap-1"><span>🧭</span> Instruments</div>
                  <div className="font-semibold text-gray-900">{p.instruments}</div>
                </div>
              </div>
              <ul className="mt-4 text-sm text-gray-700 space-y-1 list-disc pl-5">
                {p.features.map((f)=> (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-purple-100 flex items-center gap-3">
                <a href="/register" className="px-4 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-sm shadow-lg shadow-fuchsia-500/20 hover:opacity-95">Open account</a>
                <a href={p.cta.href} className="text-sm font-medium text-purple-700 hover:text-purple-800">{p.cta.label} →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
