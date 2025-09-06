import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import TradingViewChart from "../ForexPage/TradingViewChart";

// Popular continuous futures (TradingView)
const symbols = [
  { label: "S&P 500 (ES1!)", value: "CME_MINI:ES1!" },
  { label: "Dow (YM1!)", value: "CBOT_MINI:YM1!" },
  { label: "Nasdaq (NQ1!)", value: "CME_MINI:NQ1!" },
  { label: "Brent (BRN1!)", value: "ICEEUR:BRN1!" },
  { label: "WTI (CL1!)", value: "NYMEX:CL1!" },
  { label: "NatGas (NG1!)", value: "NYMEX:NG1!" },
  { label: "Wheat (ZW1!)", value: "CBOT:ZW1!" },
  { label: "Gold (GC1!)", value: "COMEX:GC1!" },
];

export default function FuturesLiveInline() {
  const [symbol, setSymbol] = useState(() => localStorage.getItem("futuresSelectedSymbol") || symbols[0].value);
  const [theme, setTheme] = useState(() => localStorage.getItem("futuresTheme") || "dark");
  const [interval, setInterval] = useState(() => localStorage.getItem("futuresInterval") || "60");

  // Sim price
  const [price, setPrice] = useState(4500);
  const [dayOpen, setDayOpen] = useState(4500);
  useEffect(() => {
    const base = 100 + Math.random() * 6000;
    const b = parseFloat(base.toFixed(2));
    setPrice(b);
    setDayOpen(parseFloat((b * (1 + (Math.random() - 0.5) * 0.01)).toFixed(2)));
    localStorage.setItem("futuresSelectedSymbol", symbol);
  }, [symbol]);
  useEffect(() => { localStorage.setItem("futuresTheme", theme); }, [theme]);
  useEffect(() => { localStorage.setItem("futuresInterval", interval); }, [interval]);
  useEffect(() => {
    const id = setInterval(() => {
      setPrice((p) => parseFloat(Math.max(0.01, p + (Math.random() - 0.5) * 3).toFixed(2)));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const bid = useMemo(() => parseFloat((price - 0.5).toFixed(2)), [price]);
  const ask = useMemo(() => parseFloat((price + 0.5).toFixed(2)), [price]);
  const spread = useMemo(() => (ask - bid).toFixed(2), [ask, bid]);
  const change = useMemo(() => price - dayOpen, [price, dayOpen]);
  const changePct = useMemo(() => ((change / dayOpen) * 100).toFixed(2), [change, dayOpen]);

  // Typeahead + watchlist
  const [query, setQuery] = useState("");
  const suggestions = useMemo(() => {
    if (!query) return [];
    const q = query.toLowerCase();
    return symbols.filter((s) => s.label.toLowerCase().includes(q) || s.value.toLowerCase().includes(q)).slice(0, 8);
  }, [query]);
  const [watchlist, setWatchlist] = useState(() => {
    try {
      const s = localStorage.getItem("futuresWatchlist");
      return s ? JSON.parse(s) : symbols.slice(0, 5).map((s) => s.value);
    } catch {
      return symbols.slice(0, 5).map((s) => s.value);
    }
  });
  function toggleWatchlist(sym) {
    setWatchlist((prev) => {
      const exists = prev.includes(sym);
      const next = exists ? prev.filter((x) => x !== sym) : [sym, ...prev].slice(0, 20);
      localStorage.setItem("futuresWatchlist", JSON.stringify(next));
      return next;
    });
  }

  return (
    <section id="futures-live" className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 mb-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />
              <span className="text-sm font-medium">Live futures</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Live chart & price</h2>
            <p className="text-gray-600">Select a contract or enter a TradingView symbol.</p>
          </div>
          <div className="flex flex-wrap gap-3 items-center relative">
            <select className="px-3 py-2 rounded-xl border border-purple-200 bg-white text-gray-800" value={symbol} onChange={(e) => setSymbol(e.target.value)}>
              {symbols.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Type symbol e.g. CME_MINI:ES1!"
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
            <Link to="/futures/live" className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:opacity-95">
              Trade futures
            </Link>
          </div>
        </div>

        {/* Watchlist */}
        <div className="mb-4 flex flex-wrap gap-2 items-center">
          {watchlist.map((w) => (
            <button key={w} onClick={() => setSymbol(w)} className={`px-3 py-1.5 rounded-lg text-sm border ${symbol === w ? 'bg-purple-600 text-white border-purple-600' : 'border-purple-200 text-purple-700 hover:bg-purple-50'}`}>{(symbols.find(s=>s.value===w)?.label)||w}</button>
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
