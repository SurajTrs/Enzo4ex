import React, { useEffect, useMemo, useState } from "react";
import TradingViewChart from "../components/ForexPage/TradingViewChart";

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

export default function ForexLive() {
  const [symbol, setSymbol] = useState(() => localStorage.getItem("selectedSymbol") || symbols[0].value);
  const [theme, setTheme] = useState("dark");
  const [interval, setInterval] = useState("60");

  // Simulated price stream per symbol (demo paper-trading)
  const [price, setPrice] = useState(1.1000);
  const [dayOpen, setDayOpen] = useState(1.1000);
  // Watchlist (localStorage)
  const [watchlist, setWatchlist] = useState(() => {
    try {
      const s = localStorage.getItem("watchlistSymbols");
      return s ? JSON.parse(s) : ["FX:EURUSD", "FX:GBPUSD", "FX:USDJPY"];
    } catch {
      return ["FX:EURUSD", "FX:GBPUSD", "FX:USDJPY"];
    }
  });
  useEffect(() => {
    localStorage.setItem("selectedSymbol", symbol);
  }, [symbol]);
  useEffect(() => {
    // reset price by a simple heuristic (JPY vs non-JPY)
    const base = symbol.includes("JPY") ? 145.0 : 1.10;
    setPrice(base);
    setDayOpen(base * (1 + (Math.random() - 0.5) * 0.002)); // small random open
  }, [symbol]);
  useEffect(() => {
    const id = setInterval(() => {
      // random walk
      setPrice((p) => {
        const step = (Math.random() - 0.5) * (symbol === "FX:USDJPY" ? 0.06 : 0.0006);
        const next = Math.max(0.0001, p + step);
        return parseFloat(next.toFixed(symbol === "FX:USDJPY" ? 3 : 5));
      });
    }, 1000);
    return () => clearInterval(id);
  }, [symbol]);
  const bid = useMemo(() => parseFloat((price - (symbol === "FX:USDJPY" ? 0.01 : 0.0001)).toFixed(symbol === "FX:USDJPY" ? 3 : 5)), [price, symbol]);
  const ask = useMemo(() => parseFloat((price + (symbol === "FX:USDJPY" ? 0.01 : 0.0001)).toFixed(symbol === "FX:USDJPY" ? 3 : 5)), [price, symbol]);
  const spread = useMemo(() => (ask - bid).toFixed(symbol === "FX:USDJPY" ? 3 : 5), [ask, bid, symbol]);
  const change = useMemo(() => price - dayOpen, [price, dayOpen]);
  const changePct = useMemo(() => ((change / dayOpen) * 100).toFixed(2), [change, dayOpen]);

  // Search/typeahead
  const [query, setQuery] = useState("");
  const suggestions = useMemo(() => {
    if (!query) return [];
    const q = query.toLowerCase();
    return symbols.filter((s) => s.label.toLowerCase().includes(q) || s.value.toLowerCase().includes(q)).slice(0, 8);
  }, [query]);

  function toggleWatchlist(sym) {
    setWatchlist((prev) => {
      const exists = prev.includes(sym);
      const next = exists ? prev.filter((x) => x !== sym) : [sym, ...prev].slice(0, 20);
      localStorage.setItem("watchlistSymbols", JSON.stringify(next));
      return next;
    });
  }

  // Orders & positions (very simple local engine)
  const [orders, setOrders] = useState([]); // {id, side, type, qty, price, status}
  const [positions, setPositions] = useState([]); // {symbol, qty, avg}

  function placeOrder({ side, type, qty, limitPrice }) {
    const id = Date.now();
    const nowPx = side === "buy" ? ask : bid;
    if (type === "market") {
      // fill immediately
      fillOrder({ id, side, qty, price: nowPx });
      setOrders((prev) => [...prev, { id, side, type, qty, price: nowPx, status: "filled" }]);
    } else {
      // limit: add working order
      setOrders((prev) => [...prev, { id, side, type, qty, price: limitPrice, status: "working" }]);
    }
  }

  // simulate limit fills when price crosses
  useEffect(() => {
    if (!orders.length) return;
    setOrders((prev) =>
      prev.map((o) => {
        if (o.status !== "working") return o;
        const cross = o.side === "buy" ? ask <= o.price : bid >= o.price;
        if (cross) {
          fillOrder({ id: o.id, side: o.side, qty: o.qty, price: o.price });
          return { ...o, status: "filled" };
        }
        return o;
      })
    );
  }, [bid, ask]);

  function fillOrder({ id, side, qty, price }) {
    setPositions((prev) => {
      const existing = prev.find((p) => p.symbol === symbol);
      const signedQty = side === "buy" ? qty : -qty;
      if (!existing) {
        return [{ symbol, qty: signedQty, avg: price }];
      }
      const newQty = existing.qty + signedQty;
      if (newQty === 0) {
        // position closed
        return prev.filter((p) => p.symbol !== symbol);
      }
      const newAvg = newQty > 0
        ? (existing.qty * existing.avg + (signedQty > 0 ? qty * price : 0)) / Math.max(existing.qty + Math.max(signedQty, 0), 1)
        : (existing.qty * existing.avg + (signedQty < 0 ? qty * price : 0)) / Math.min(existing.qty + Math.min(signedQty, 0), -1);
      return prev.map((p) => (p.symbol === symbol ? { ...p, qty: newQty, avg: parseFloat(newAvg.toFixed(5)) } : p));
    });
  }

  function cancelOrder(id) {
    setOrders((prev) => prev.filter((o) => o.id !== id || o.status !== "working"));
  }

  function closePosition(sym) {
    setPositions((prev) => prev.filter((p) => p.symbol !== sym));
  }

  // Ticket state
  const [side, setSide] = useState("buy");
  const [type, setType] = useState("market");
  const [qty, setQty] = useState(10000); // units
  const [limitPrice, setLimitPrice] = useState(0);

  useEffect(() => setLimitPrice(side === "buy" ? bid : ask), [side, bid, ask]);

  return (
    <section className="relative py-12 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_10%_-10%,rgba(168,85,247,0.12),transparent_60%),radial-gradient(45%_40%_at_100%_110%,rgba(236,72,153,0.10),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header + controls */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 mb-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />
              <span className="text-sm font-medium">Live · Paper trading</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Live Forex Prices & Chart</h1>
            <p className="text-gray-600">Powered by TradingView</p>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <select className="px-3 py-2 rounded-xl border border-purple-200 bg-white text-gray-800" value={symbol} onChange={(e) => setSymbol(e.target.value)}>
              {symbols.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
            {/* Custom symbol entry */}
            <input
              type="text"
              placeholder="Type TradingView symbol e.g. FX:EURUSD"
              className="px-3 py-2 rounded-xl border border-purple-200 bg-white text-gray-800 w-56"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.currentTarget.value) {
                  const v = e.currentTarget.value.toUpperCase();
                  setSymbol(v);
                  e.currentTarget.blur();
                }
              }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {suggestions.length > 0 && (
              <div className="absolute mt-20 z-10 w-56 rounded-xl border border-purple-200 bg-white shadow-lg">
                {suggestions.map((s) => (
                  <button key={s.value} className="w-full text-left px-3 py-2 hover:bg-purple-50" onClick={() => { setSymbol(s.value); setQuery(""); }}>
                    {s.label} <span className="text-xs text-gray-500">{s.value}</span>
                  </button>
                ))}
              </div>
            )}
            <div className="hidden md:flex items-center gap-1 rounded-xl border border-purple-200 bg-white p-1">
              {[
                { v: "1", l: "1m" },
                { v: "5", l: "5m" },
                { v: "15", l: "15m" },
                { v: "60", l: "1h" },
                { v: "240", l: "4h" },
                { v: "D", l: "1D" },
              ].map((it) => (
                <button key={it.v} onClick={() => setInterval(it.v)} className={`px-3 py-1.5 rounded-lg text-sm font-medium ${interval === it.v ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white' : 'text-gray-700 hover:bg-purple-50'}`}>{it.l}</button>
              ))}
            </div>
            <select className="md:hidden px-3 py-2 rounded-xl border border-purple-200 bg-white text-gray-800" value={interval} onChange={(e) => setInterval(e.target.value)}>
              <option value="1">1m</option>
              <option value="5">5m</option>
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

        {/* Chart + Ticket */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-3xl border border-purple-100 bg-white shadow-[0_16px_50px_rgba(16,24,40,0.08)] p-2">
            {/* Mini metrics bar */}
            <div className="px-3 pt-3 pb-2 flex flex-wrap items-center gap-3">
              <div className="px-3 py-1 rounded-full border border-purple-200 text-purple-700 text-sm">{symbol}</div>
              <div className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-sm">Bid {bid}</div>
              <div className="px-3 py-1 rounded-full bg-fuchsia-50 text-fuchsia-700 text-sm">Ask {ask}</div>
              <div className="px-3 py-1 rounded-full border border-purple-200 text-gray-800 text-sm">Spread {spread}</div>
              <div className={`px-3 py-1 rounded-full text-sm ${change >= 0 ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>{change >= 0 ? '+' : ''}{change.toFixed(symbol.includes('JPY') ? 3 : 5)} ({changePct}%)</div>
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
                  <button key={w} onClick={() => setSymbol(w)} className={`px-3 py-1.5 rounded-lg text-sm border ${symbol === w ? 'bg-purple-600 text-white border-purple-600' : 'border-purple-200 text-purple-700 hover:bg-purple-50'}`}>{w.replace('FX:', '')}</button>
                ))}
              </div>
            </div>
            {/* Price Panel */}
            <div className="rounded-3xl border border-purple-100 bg-white shadow-sm p-5">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-gray-500">Bid</div>
                <div className="text-lg font-semibold text-purple-600">{bid}</div>
              </div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-gray-500">Ask</div>
                <div className="text-lg font-semibold text-fuchsia-600">{ask}</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">Spread</div>
                <div className="text-sm font-medium text-gray-800">{spread}</div>
              </div>
            </div>

            {/* Order Ticket */}
            <div className="rounded-3xl border border-purple-100 bg-white shadow-sm p-5">
              <div className="flex gap-2 mb-4">
                <button onClick={() => setSide("buy")} className={`flex-1 px-3 py-2 rounded-xl font-semibold ${side === "buy" ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white" : "border border-gray-200"}`}>Buy</button>
                <button onClick={() => setSide("sell")} className={`flex-1 px-3 py-2 rounded-xl font-semibold ${side === "sell" ? "bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white" : "border border-gray-200"}`}>Sell</button>
              </div>
              <div className="mb-3">
                <label className="text-sm text-gray-600">Order type</label>
                <select className="w-full mt-1 px-3 py-2 rounded-xl border border-gray-200" value={type} onChange={(e) => setType(e.target.value)}>
                  <option value="market">Market</option>
                  <option value="limit">Limit</option>
                </select>
              </div>
              {type === "limit" && (
                <div className="mb-3">
                  <label className="text-sm text-gray-600">Limit price</label>
                  <input type="number" step="0.00001" className="w-full mt-1 px-3 py-2 rounded-xl border border-gray-200" value={limitPrice} onChange={(e) => setLimitPrice(parseFloat(e.target.value))} />
                </div>
              )}
              <div className="mb-3">
                <label className="text-sm text-gray-600">Quantity (units)</label>
                <input type="number" min="1" step="1" className="w-full mt-1 px-3 py-2 rounded-xl border border-gray-200" value={qty} onChange={(e) => setQty(parseInt(e.target.value || 0))} />
                <div className="mt-2 flex flex-wrap gap-2">
                  {[1000, 10000, 100000].map((q) => (
                    <button key={q} onClick={() => setQty(q)} className={`px-3 py-1.5 rounded-lg text-sm border ${qty === q ? 'bg-purple-600 text-white border-purple-600' : 'border-purple-200 text-purple-700 hover:bg-purple-50'}`}>{q.toLocaleString()}</button>
                  ))}
                </div>
              </div>
              <button
                onClick={() => placeOrder({ side, type, qty: Math.max(1, qty), limitPrice })}
                className="w-full px-4 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600"
              >
                {side === "buy" ? `Buy @ ${ask}` : `Sell @ ${bid}`}
              </button>
              <div className="mt-3 text-xs text-gray-500">Paper trading only. For live trading, connect a broker API.</div>
            </div>

            {/* Positions */}
            <div className="rounded-3xl border border-purple-100 bg-white shadow-sm p-5">
              <div className="font-semibold mb-3">Positions</div>
              <div className="space-y-2">
                {positions.length === 0 && <div className="text-sm text-gray-500">No positions</div>}
                {positions.map((p) => {
                  const isLong = p.qty > 0;
                  const pnl = (price - p.avg) * p.qty; // simplified PnL in quote currency
                  return (
                    <div key={p.symbol} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className={`px-2 py-0.5 rounded-md text-white text-xs ${isLong ? "bg-emerald-600" : "bg-rose-600"}`}>{isLong ? "Long" : "Short"}</div>
                        <div className="font-medium">{p.symbol}</div>
                      </div>
                      <div className="flex items-center gap-5">
                        <div>Qty: <span className="font-medium">{p.qty}</span></div>
                        <div>Avg: <span className="font-medium">{p.avg}</span></div>
                        <div className={pnl >= 0 ? "text-emerald-600" : "text-rose-600"}>PnL: {pnl.toFixed(2)}</div>
                        <button onClick={() => closePosition(p.symbol)} className="px-2 py-1 rounded-lg border border-purple-200 text-purple-700 hover:bg-purple-50">Close</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Orders */}
            <div className="rounded-3xl border border-purple-100 bg-white shadow-sm p-5">
              <div className="font-semibold mb-3">Orders</div>
              <div className="space-y-2">
                {orders.length === 0 && <div className="text-sm text-gray-500">No orders</div>}
                {orders.map((o) => (
                  <div key={o.id} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className={`px-2 py-0.5 rounded-md text-white text-xs ${o.side === "buy" ? "bg-purple-600" : "bg-fuchsia-600"}`}>{o.side}</div>
                      <div className="font-medium">{o.type}</div>
                    </div>
                    <div className="flex items-center gap-5">
                      <div>Qty: <span className="font-medium">{o.qty}</span></div>
                      <div>Px: <span className="font-medium">{o.price}</span></div>
                      <div className="text-gray-600">{o.status}</div>
                      {o.status === "working" && (
                        <button onClick={() => cancelOrder(o.id)} className="px-2 py-1 rounded-lg border border-purple-200 text-purple-700 hover:bg-purple-50">Cancel</button>
                      )}
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
