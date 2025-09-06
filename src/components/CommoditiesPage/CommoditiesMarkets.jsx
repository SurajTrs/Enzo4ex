import React from "react";
import { useNavigate } from "react-router-dom";

export default function CommoditiesMarkets() {
  const navigate = useNavigate();
  const markets = [
    { tag: "Metals", title: "Gold (XAUUSD)", symbol: "OANDA:XAUUSD", desc: "Tight spreads and deep liquidity on spot gold." },
    { tag: "Metals", title: "Silver (XAGUSD)", symbol: "OANDA:XAGUSD", desc: "Speculate on silver with low costs and instant execution." },
    { tag: "Energy", title: "WTI (WTICOUSD)", symbol: "OANDA:WTICOUSD", desc: "US crude oil CFD with spreads from $0.02." },
    { tag: "Energy", title: "Brent (BCOUSD)", symbol: "OANDA:BCOUSD", desc: "Global oil benchmark with competitive pricing." },
    { tag: "Energy", title: "Natural Gas (NATGASUSD)", symbol: "OANDA:NATGASUSD", desc: "Access natural gas CFD nearly 23 hours a day." },
    { tag: "Metals", title: "Platinum (XPTUSD)", symbol: "OANDA:XPTUSD", desc: "Diversify into platinum with flexible sizes." },
  ];

  function openLive(symbol) {
    localStorage.setItem("commoditiesSelectedSymbol", symbol);
    navigate("/commodities/live");
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 mb-3">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />
            <span className="text-sm font-medium">Explore commodity markets</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Metals and energies with institutional-grade execution</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((m) => (
            <div
              key={m.title}
              className="group relative overflow-hidden rounded-3xl border border-purple-100 bg-white shadow-[0_12px_40px_rgba(16,24,40,0.06)] hover:shadow-[0_18px_55px_rgba(16,24,40,0.10)] transition-shadow"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 rounded-full blur-2xl" />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs">
                    {m.tag}
                  </div>
                  <div className="text-xs text-gray-400">CFD</div>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-950">{m.title}</h3>
                <p className="mt-1.5 text-sm text-gray-600">{m.desc}</p>
                <div className="mt-5 flex items-center gap-2">
                  <button
                    onClick={() => openLive(m.symbol)}
                    className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-sm font-medium shadow-lg shadow-fuchsia-500/20 hover:opacity-95"
                  >
                    View live chart
                  </button>
                  <button
                    onClick={() => {
                      const wl = JSON.parse(localStorage.getItem("commoditiesWatchlist") || "[]");
                      if (!wl.includes(m.symbol)) {
                        const next = [m.symbol, ...wl].slice(0, 20);
                        localStorage.setItem("commoditiesWatchlist", JSON.stringify(next));
                      }
                    }}
                    className="px-3 py-1.5 rounded-lg border border-purple-200 text-purple-700 hover:bg-purple-50 text-sm"
                  >
                    Add to watchlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
