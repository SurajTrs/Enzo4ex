import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import TradingViewChart from "../ForexPage/TradingViewChart";

const symbols = [
  { label: "XAUUSD", value: "OANDA:XAUUSD" },
  { label: "XAUEUR", value: "OANDA:XAUEUR" },
  { label: "XAUJPY", value: "OANDA:XAUJPY" },
  { label: "XAUAUD", value: "OANDA:XAUAUD" },
  { label: "XAUCHF", value: "OANDA:XAUCHF" },
  { label: "XAUGBP", value: "OANDA:XAUGBP" },
  { label: "XAUCAD", value: "OANDA:XAUCAD" },
];

export default function GoldLiveInline() {
  const [symbol, setSymbol] = useState(() => localStorage.getItem("goldSelectedSymbol") || symbols[0].value);
  const [theme, setTheme] = useState(() => localStorage.getItem("goldTheme") || "dark");
  const [interval, setInterval] = useState(() => localStorage.getItem("goldInterval") || "60");

  // Sim price
  const [price, setPrice] = useState(2000);
  const [dayOpen, setDayOpen] = useState(2000);
  useEffect(() => {
    const base = 1800 + Math.random() * 400;
    const b = parseFloat(base.toFixed(2));
    setPrice(b);
    setDayOpen(parseFloat((b * (1 + (Math.random() - 0.5) * 0.01)).toFixed(2)));
    localStorage.setItem("goldSelectedSymbol", symbol);
  }, [symbol]);
  useEffect(() => { localStorage.setItem("goldTheme", theme); }, [theme]);
  useEffect(() => { localStorage.setItem("goldInterval", interval); }, [interval]);
  useEffect(() => {
    const id = setInterval(() => {
      setPrice((p) => parseFloat(Math.max(0.01, p + (Math.random() - 0.5) * 1.5).toFixed(2)));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const bid = useMemo(() => parseFloat((price - 0.1).toFixed(2)), [price]);
  const ask = useMemo(() => parseFloat((price + 0.1).toFixed(2)), [price]);
  const spread = useMemo(() => (ask - bid).toFixed(2), [ask, bid]);
  const change = useMemo(() => price - dayOpen, [price, dayOpen]);
  const changePct = useMemo(() => ((change / dayOpen) * 100).toFixed(2), [change, dayOpen]);

  const [query, setQuery] = useState("");
  const suggestions = useMemo(() => {
    if (!query) return [];
    const q = query.toLowerCase();
    return symbols.filter((s) => s.label.toLowerCase().includes(q) || s.value.toLowerCase().includes(q)).slice(0, 6);
  }, [query]);

  const [watchlist, setWatchlist] = useState(() => {
    try {
      const s = localStorage.getItem("goldWatchlist");
      return s ? JSON.parse(s) : symbols.map((s) => s.value);
    } catch {
      return symbols.map((s) => s.value);
    }
  });
  function toggleWatchlist(sym) {
    setWatchlist((prev) => {
      const exists = prev.includes(sym);
      const next = exists ? prev.filter((x) => x !== sym) : [sym, ...prev].slice(0, 10);
      localStorage.setItem("goldWatchlist", JSON.stringify(next));
      return next;
    });
  }

  return (
    <section id="gold-live" className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 mb-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />
              <span className="text-sm font-medium">Live gold</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Live chart & price</h2>
            <p className="text-gray-600">Select a pair or enter a TradingView symbol.</p>
          </div>
          <div className="flex flex-wrap gap-3 items-center relative">
            <select className="px-3 py-2 rounded-xl border border-purple-200 bg-white text-gray-800" value={symbol} onChange={(e) => setSymbol(e.target.value)}>
              {symbols.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Type symbol e.g. OANDA:XAUUSD"
              className="px-3 py-2 rounded-xl border border-purple-200 bg-white text-gray-800 w-64"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.currentTarget.value) {
                  setSymbol(e.currentTarget.value.toUpperCase());
                  setQuery("");
                  e.currentTarget.blur();
                }
              }}
            />
            {suggestions.length > 0 && (
              <div className="absolute mt-20 z-10 w-64 rounded-xl border border-purple-200 bg-white shadow-lg">
                {suggestions.map((s) => (
                  <button key={s.value} className="w-full text-left px-3 py-2 hover:bg-purple-50" onClick={() => { setSymbol(s.value); setQuery(""); }}>
                    {s.label} <span className="text-xs text-gray-500">{s.value}</span>
                  </button>
                ))}
              </div>
            )}
            <select className="px-3 py-2 rounded-xl border border-purple-200 bg-white text-gray-800" value={interval} onChange={(e) => setInterval(e.target.value)}>
              <option value="15">15m</option>
              <option value="60">1h</option>
              <option value="240">4h</option>
              <option value="D">1D</option>
            </select>
            <button className="px-4 py-2 rounded-xl border border-purple-200 text-purple-700 hover:bg-purple-50" onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}>
              Toggle {theme === "dark" ? "Light" : "Dark"}
            </button>
            <Link to="/gold/live" className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:opacity-95">
              Start trading
            </Link>
          </div>
        </div>

        {/* Watchlist */}
        <div className="mb-4 flex flex-wrap gap-2 items-center">
          {watchlist.map((w) => (
            <button key={w} onClick={() => setSymbol(w)} className={`px-3 py-1.5 rounded-lg text-sm border ${symbol === w ? 'bg-purple-600 text-white border-purple-600' : 'border-purple-200 text-purple-700 hover:bg-purple-50'}`}>{(symbols.find(s=>s.value===w)?.label)||w.replace('OANDA:','')}</button>
          ))}
          <button onClick={() => toggleWatchlist(symbol)} className="px-3 py-1.5 rounded-lg text-sm border border-purple-200 text-purple-700 hover:bg-purple-50">
            {watchlist.includes(symbol) ? 'Unstar current' : 'Star current'}
          </button>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 rounded-3xl border border-purple-100 bg-white shadow-[0_16px_50px_rgba(16,24,40,0.08)] p-2">
            <div className="px-3 pt-3 pb-2 flex flex-wrap items-center gap-3">
              <div className="px-3 py-1 rounded-full border border-purple-200 text-purple-700 text-sm">{symbol}</div>
              <div className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-sm">Bid {bid}</div>
              <div className="px-3 py-1 rounded-full bg-fuchsia-50 text-fuchsia-700 text-sm">Ask {ask}</div>
              <div className="px-3 py-1 rounded-full border border-purple-200 text-gray-800 text-sm">Spread {spread}</div>
              <div className={`px-3 py-1 rounded-full text-sm ${change >= 0 ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>{change >= 0 ? '+' : ''}{change.toFixed(2)} ({changePct}%)</div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <TradingViewChart symbol={symbol} theme={theme} interval={interval} height={420} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
