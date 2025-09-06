import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import TradingViewChart from "./TradingViewChart";

const symbols = [
  { label: "EUR/USD", value: "FX:EURUSD" },
  { label: "GBP/USD", value: "FX:GBPUSD" },
  { label: "USD/JPY", value: "FX:USDJPY" },
  { label: "AUD/USD", value: "FX:AUDUSD" },
  { label: "USD/CAD", value: "FX:USDCAD" },
  { label: "USD/CHF", value: "FX:USDCHF" },
  { label: "NZD/USD", value: "FX:NZDUSD" },
  { label: "EUR/GBP", value: "FX:EURGBP" },
  { label: "EUR/JPY", value: "FX:EURJPY" },
  { label: "GBP/JPY", value: "FX:GBPJPY" },
  { label: "AUD/JPY", value: "FX:AUDJPY" },
  { label: "CHF/JPY", value: "FX:CHFJPY" },
  { label: "EUR/AUD", value: "FX:EURAUD" },
  { label: "EUR/CAD", value: "FX:EURCAD" },
  { label: "GBP/CAD", value: "FX:GBPCAD" },
  { label: "GBP/CHF", value: "FX:GBPCHF" },
  { label: "EUR/CHF", value: "FX:EURCHF" },
];

export default function ForexLiveInline() {
  const [symbol, setSymbol] = useState(symbols[0].value);
  const [theme, setTheme] = useState("dark");
  const [interval, setInterval] = useState("60");

  // Lightweight simulated price for the inline panel
  const [price, setPrice] = useState(1.1);
  useEffect(() => {
    // Simple heuristic base price by JPY vs non-JPY
    const base = symbol.includes("JPY") ? 145.0 : 1.1;
    setPrice(base);
  }, [symbol]);
  useEffect(() => {
    const id = setInterval(() => {
      setPrice((p) => {
        const step = (Math.random() - 0.5) * (symbol === "FX:USDJPY" ? 0.05 : 0.0005);
        const next = Math.max(0.0001, p + step);
        return parseFloat(next.toFixed(symbol === "FX:USDJPY" ? 3 : 5));
      });
    }, 1000);
    return () => clearInterval(id);
  }, [symbol]);
  const bid = useMemo(() => parseFloat((price - (symbol === "FX:USDJPY" ? 0.01 : 0.0001)).toFixed(symbol === "FX:USDJPY" ? 3 : 5)), [price, symbol]);
  const ask = useMemo(() => parseFloat((price + (symbol === "FX:USDJPY" ? 0.01 : 0.0001)).toFixed(symbol === "FX:USDJPY" ? 3 : 5)), [price, symbol]);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 mb-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />
              <span className="text-sm font-medium">Live prices</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Live chart & price</h2>
            <p className="text-gray-600">Tap the dropdown to change symbols.</p>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <select className="px-3 py-2 rounded-xl border border-purple-200 bg-white text-gray-800" value={symbol} onChange={(e) => setSymbol(e.target.value)}>
              {symbols.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
            <select className="px-3 py-2 rounded-xl border border-purple-200 bg-white text-gray-800" value={interval} onChange={(e) => setInterval(e.target.value)}>
              <option value="15">15m</option>
              <option value="60">1h</option>
              <option value="240">4h</option>
              <option value="D">1D</option>
            </select>
            <button className="px-4 py-2 rounded-xl border border-purple-200 text-purple-700 hover:bg-purple-50" onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}>
              Toggle {theme === "dark" ? "Light" : "Dark"}
            </button>
            <Link to="/forex/live" className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:opacity-95">
              Start trading
            </Link>
            {/* Custom symbol entry */}
            <input
              type="text"
              placeholder="Type TradingView symbol e.g. FX:EURUSD"
              className="px-3 py-2 rounded-xl border border-purple-200 bg-white text-gray-800 w-full md:w-64"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.currentTarget.value) {
                  setSymbol(e.currentTarget.value.toUpperCase());
                  e.currentTarget.blur();
                }
              }}
            />
          </div>
        </div>

        {/* Quick forex options */}
        <div className="mb-4 flex flex-wrap gap-2">
          {symbols.slice(0, 8).map((s) => (
            <button key={s.value} onClick={() => setSymbol(s.value)} className={`px-3 py-1.5 rounded-lg text-sm border ${symbol === s.value ? 'bg-purple-600 text-white border-purple-600' : 'border-purple-200 text-purple-700 hover:bg-purple-50'}`}>
              {s.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 rounded-3xl border border-purple-100 bg-white shadow-[0_16px_50px_rgba(16,24,40,0.08)] p-2">
            <div className="rounded-2xl overflow-hidden">
              <TradingViewChart symbol={symbol} theme={theme} interval={interval} height={420} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
