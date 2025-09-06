import React, { useEffect, useMemo, useState } from "react";
import TradingViewChart from "../components/ForexPage/TradingViewChart";

// We use TradingView symbols as visual proxies to render charts while showcasing synthetic index labels
const symbols = [
  { label: "Volatility 50", value: "OANDA:SPX500USD" },
  { label: "Volatility 75", value: "OANDA:NAS100USD" },
  { label: "Volatility 100", value: "OANDA:US30USD" },
  { label: "Boom 300", value: "OANDA:XAUUSD" },
  { label: "Crash 300", value: "OANDA:XAGUSD" },
  { label: "Jump 25", value: "OANDA:WTICOUSD" },
];

export default function SyntheticLive() {
  const [symbol, setSymbol] = useState(() => {
    const urlSym = new URLSearchParams(window.location.search).get('symbol');
    return urlSym || localStorage.getItem("synthSelectedSymbol") || symbols[0].value;
  });
  const [theme, setTheme] = useState(() => localStorage.getItem("synthTheme") || "dark");
  const [interval, setInterval] = useState(() => localStorage.getItem("synthInterval") || "60");

  // Simulated price stream (tuned a bit higher variance)
  const [price, setPrice] = useState(500);
  const [dayOpen, setDayOpen] = useState(500);
  useEffect(() => {
    const base = 100 + Math.random() * 900;
    const b = parseFloat(base.toFixed(2));
    setPrice(b);
    setDayOpen(parseFloat((b * (1 + (Math.random() - 0.5) * 0.03)).toFixed(2)));
    localStorage.setItem("synthSelectedSymbol", symbol);
  }, [symbol]);
  useEffect(() => { localStorage.setItem("synthTheme", theme); }, [theme]);
  useEffect(() => { localStorage.setItem("synthInterval", interval); }, [interval]);
  useEffect(() => {
    const id = setInterval(() => {
      setPrice((p) => parseFloat(Math.max(0.01, p + (Math.random() - 0.5) * 6).toFixed(2)));
    }, 900);
    return () => clearInterval(id);
  }, []);
  const bid = useMemo(() => parseFloat((price - 0.5).toFixed(2)), [price]);
  const ask = useMemo(() => parseFloat((price + 0.5).toFixed(2)), [price]);
  const spread = useMemo(() => (ask - bid).toFixed(2), [ask, bid]);
  const change = useMemo(() => price - dayOpen, [price, dayOpen]);
  const changePct = useMemo(() => ((change / dayOpen) * 100).toFixed(2), [change, dayOpen]);

  // Search/typeahead + watchlist
  const [query, setQuery] = useState("");
  const suggestions = useMemo(() => {
    if (!query) return [];
    const q = query.toLowerCase();
    return symbols.filter((s) => s.label.toLowerCase().includes(q)).slice(0, 8);
  }, [query]);
  const [watchlist, setWatchlist] = useState(() => {
    try {
      const s = localStorage.getItem("synthWatchlist");
      return s ? JSON.parse(s) : symbols.slice(0, 5).map((s) => s.value);
    } catch {
      return symbols.slice(0, 5).map((s) => s.value);
    }
  });
  function toggleWatchlist(sym) {
    setWatchlist((prev) => {
      const exists = prev.includes(sym);
      const next = exists ? prev.filter((x) => x !== sym) : [sym, ...prev].slice(0, 20);
      localStorage.setItem("synthWatchlist", JSON.stringify(next));
      return next;
    });
  }

  // Orders & positions (paper)
  const [orders, setOrders] = useState([]);
  const [positions, setPositions] = useState([]);
  function placeOrder({ side, type, qty, limitPrice }) {
    const id = Date.now();
    const nowPx = side === "buy" ? ask : bid;
    if (type === "market") {
      fillOrder({ id, side, qty, price: nowPx });
      setOrders((prev) => [...prev, { id, side, type, qty, price: nowPx, status: "filled" }]);
    } else {
      setOrders((prev) => [...prev, { id, side, type, qty, price: limitPrice, status: "working" }]);
    }
  }
  useEffect(() => {
    if (!orders.length) return;
    setOrders((prev) => prev.map((o) => {
      if (o.status !== "working") return o;
      const cross = o.side === "buy" ? ask <= o.price : bid >= o.price;
      if (cross) { fillOrder({ id: o.id, side: o.side, qty: o.qty, price: o.price }); return { ...o, status: "filled" }; }
      return o;
    }));
  }, [bid, ask]);
  function fillOrder({ id, side, qty, price }) {
    setPositions((prev) => {
      const existing = prev.find((p) => p.symbol === symbol);
      const signedQty = side === "buy" ? qty : -qty;
      if (!existing) return [{ symbol, qty: signedQty, avg: price }];
      const newQty = existing.qty + signedQty;
      if (newQty === 0) return prev.filter((p) => p.symbol !== symbol);
      const newAvg = (existing.qty * existing.avg + (signedQty > 0 ? qty * price : 0)) / Math.max(existing.qty + Math.max(signedQty, 0), 1);
      return prev.map((p) => (p.symbol === symbol ? { ...p, qty: newQty, avg: parseFloat(newAvg.toFixed(2)) } : p));
    });
  }

  const [side, setSide] = useState("buy");
  const [type, setType] = useState("market");
  const [qty, setQty] = useState(1);
  const [limitPrice, setLimitPrice] = useState(0);
  useEffect(() => setLimitPrice(side === "buy" ? bid : ask), [side, bid, ask]);

  return (
    <section className="relative py-12 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_10%_-10%,rgba(168,85,247,0.12),transparent_60%),radial-gradient(45%_40%_at_100%_110%,rgba(236,72,153,0.10),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 mb-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />
              <span className="text-sm font-medium">Live · Paper trading</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Live Synthetic Indices & Chart</h1>
            <p className="text-gray-600">Algorithmically powered price series
              <a href="/dynamic-leverage" className="ml-3 inline-block text-sm text-purple-700 underline underline-offset-2 decoration-purple-300 hover:text-purple-800">View contract specs</a>
            </p>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <select className="px-3 py-2 rounded-xl border border-purple-200 bg-white text-gray-800" value={symbol} onChange={(e) => setSymbol(e.target.value)}>
              {symbols.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Type label e.g. Volatility 75"
              className="px-3 py-2 rounded-xl border border-purple-200 bg-white text-gray-800 w-64"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.currentTarget.value) {
                  const found = symbols.find(s => s.label.toLowerCase() === e.currentTarget.value.toLowerCase());
                  if (found) setSymbol(found.value);
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
            <div className="hidden md:flex items-center gap-1 rounded-xl border border-purple-200 bg-white p-1">
              {[{v:"15",l:"15m"},{v:"60",l:"1h"},{v:"240",l:"4h"},{v:"D",l:"1D"}].map(it => (
                <button key={it.v} onClick={() => setInterval(it.v)} className={`px-3 py-1.5 rounded-lg text-sm font-medium ${interval===it.v?'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white':'text-gray-700 hover:bg-purple-50'}`}>{it.l}</button>
              ))}
            </div>
            <select className="md:hidden px-3 py-2 rounded-xl border border-purple-200 bg-white text-gray-800" value={interval} onChange={(e) => setInterval(e.target.value)}>
              <option value="15">15m</option>
              <option value="60">1h</option>
              <option value="240">4h</option>
              <option value="D">1D</option>
            </select>
            <button className="px-4 py-2 rounded-xl border border-purple-200 text-purple-700 hover:bg-purple-50" onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}>
              Toggle {theme === "dark" ? "Light" : "Dark"}
            </button>
          </div>
        </div>

        {/* Popular chip strip */}
        <div className="mb-4 flex flex-wrap gap-2">
          {symbols.map((s) => (
            <button
              key={s.value}
              onClick={() => setSymbol(s.value)}
              className={`px-3 py-1.5 rounded-lg text-sm border ${symbol === s.value ? 'bg-purple-600 text-white border-purple-600' : 'border-purple-200 text-purple-700 hover:bg-purple-50'}`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-3xl border border-purple-100 bg-white shadow-[0_16px_50px_rgba(16,24,40,0.08)] p-2">
            <div className="px-3 pt-3 pb-2 flex flex-wrap items-center gap-3">
              <div className="px-3 py-1 rounded-full border border-purple-200 text-purple-700 text-sm">{(symbols.find(s=>s.value===symbol)?.label)||symbol}</div>
              <div className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-sm">Bid {bid}</div>
              <div className="px-3 py-1 rounded-full bg-fuchsia-50 text-fuchsia-700 text-sm">Ask {ask}</div>
              <div className="px-3 py-1 rounded-full border border-purple-200 text-gray-800 text-sm">Spread {spread}</div>
              <div className={`px-3 py-1 rounded-full text-sm ${change >= 0 ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>{change >= 0 ? '+' : ''}{change.toFixed(2)} ({changePct}%)</div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <TradingViewChart symbol={symbol} theme={theme} interval={interval} height={640} />
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            {/* Watchlist */}
            <div className="rounded-3xl border border-purple-100 bg-white shadow-sm p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="font-semibold">Watchlist</div>
                <button onClick={() => toggleWatchlist(symbol)} className="px-3 py-1.5 rounded-lg border border-purple-200 text-purple-700 hover:bg-purple-50 text-sm">
                  {watchlist.includes(symbol) ? 'Unstar current' : 'Star current'}
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {watchlist.map((w) => (
                  <button key={w} onClick={() => setSymbol(w)} className={`px-3 py-1.5 rounded-lg text-sm border ${symbol === w ? 'bg-purple-600 text-white border-purple-600' : 'border-purple-200 text-purple-700 hover:bg-purple-50'}`}>{(symbols.find(s=>s.value===w)?.label)||w}</button>
                ))}
              </div>
            </div>

            {/* Order Ticket */}
            <div className="rounded-3xl border border-purple-100 bg-white shadow-sm p-5">
              <div className="flex gap-2 mb-4">
                <button onClick={() => setSide('buy')} className={`flex-1 px-3 py-2 rounded-xl font-semibold ${side==='buy' ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white' : 'border border-gray-200'}`}>Buy</button>
                <button onClick={() => setSide('sell')} className={`flex-1 px-3 py-2 rounded-xl font-semibold ${side==='sell' ? 'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white' : 'border border-gray-200'}`}>Sell</button>
              </div>
              <div className="mb-3">
                <label className="text-sm text-gray-600">Order type</label>
                <select className="w-full mt-1 px-3 py-2 rounded-xl border border-gray-200" value={type} onChange={(e)=>setType(e.target.value)}>
                  <option value="market">Market</option>
                  <option value="limit">Limit</option>
                </select>
              </div>
              {type==='limit' && (
                <div className="mb-3">
                  <label className="text-sm text-gray-600">Limit price</label>
                  <input type="number" step="0.01" className="w-full mt-1 px-3 py-2 rounded-xl border border-gray-200" value={limitPrice} onChange={(e)=>setLimitPrice(parseFloat(e.target.value))} />
                </div>
              )}
              <div className="mb-3">
                <label className="text-sm text-gray-600">Quantity</label>
                <input type="number" min="1" step="1" className="w-full mt-1 px-3 py-2 rounded-xl border border-gray-200" value={qty} onChange={(e)=>setQty(parseInt(e.target.value||0))} />
                <div className="mt-2 flex gap-2">
                  {[1,2,5].map(q => (
                    <button key={q} onClick={()=>setQty(q)} className={`px-3 py-1.5 rounded-lg text-sm border ${qty===q ? 'bg-purple-600 text-white border-purple-600':'border-purple-200 text-purple-700 hover:bg-purple-50'}`}>{q}</button>
                  ))}
                </div>
              </div>
              <button onClick={()=>placeOrder({ side, type, qty: Math.max(1, qty), limitPrice })} className="w-full px-4 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600">
                {side==='buy' ? `Buy @ ${ask}` : `Sell @ ${bid}`}
              </button>
              <div className="mt-3 text-xs text-gray-500">Paper trading only. For live trading, connect a broker API.</div>
            </div>

            {/* Orders */}
            <div className="rounded-3xl border border-purple-100 bg-white shadow-sm p-5">
              <div className="font-semibold mb-3">Orders</div>
              <div className="space-y-2">
                {orders.length===0 && <div className="text-sm text-gray-500">No orders</div>}
                {orders.map(o=> (
                  <div key={o.id} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className={`px-2 py-0.5 rounded-md text-white text-xs ${o.side==='buy'?'bg-purple-600':'bg-fuchsia-600'}`}>{o.side}</div>
                      <div className="font-medium">{o.type}</div>
                    </div>
                    <div className="flex items-center gap-5">
                      <div>Qty: <span className="font-medium">{o.qty}</span></div>
                      <div>Px: <span className="font-medium">{o.price}</span></div>
                      <div className="text-gray-600">{o.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
