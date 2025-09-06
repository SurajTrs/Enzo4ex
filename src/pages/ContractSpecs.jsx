import React, { useEffect, useMemo, useState } from "react";
import TradingViewChart from "../components/ForexPage/TradingViewChart";
import fxData from "../data/specs/forex.json";
import indicesData from "../data/specs/indices.json";
import commoditiesData from "../data/specs/commodities.json";
import etfsData from "../data/specs/etfs.json";
import stocksData from "../data/specs/stocks.json";
import futuresData from "../data/specs/futures.json";
import cryptoData from "../data/specs/crypto.json";
import specsBg from "../assets/forexbg.png";

const TABS = ["FOREX", "INDICES", "COMMODITIES", "ETFS", "STOCKS", "FUTURES", "CRYPTO"];
const ACCOUNT_TYPES = ["Standard", "ThinkZero", "ThinkTrader"];
const TYPES = ["All", "Major", "Minor", "Exotic"];

export default function ContractSpecs() {
  const [tab, setTab] = useState("FOREX");
  const [accountType, setAccountType] = useState("Standard");
  const [pairType, setPairType] = useState("All");
  const [query, setQuery] = useState("");

  // Data source per tab (only FOREX seeded for now)
  const rows = useMemo(() => {
    switch (tab) {
      case "FOREX": return fxData;
      case "INDICES": return indicesData;
      case "COMMODITIES": return commoditiesData;
      case "ETFS": return etfsData;
      case "STOCKS": return stocksData;
      case "FUTURES": return futuresData;
      case "CRYPTO": return cryptoData;
      default: return [];
    }
  }, [tab, pairType]);

  // Simulated live quotes per symbol for the table Bid/Ask/Spread badges
  const [prices, setPrices] = useState({});
  useEffect(() => {
    // seed from instruments
    const init = {};
    rows.forEach((r) => {
      init[r.symbol] = { p: 1.0 + Math.random() * 1, o: 1.0 + Math.random() * 1 };
    });
    setPrices((prev) => ({ ...init, ...prev }));
  }, [rows]);
  useEffect(() => {
    const id = setInterval(() => {
      setPrices((prev) => {
        const next = { ...prev };
        Object.keys(next).forEach((k) => {
          const n = Math.max(0.0001, (next[k].p + (Math.random() - 0.5) * 0.002));
          next[k] = { ...next[k], p: parseFloat(n.toFixed(5)) };
        });
        return next;
      });
    }, 1100);
    return () => clearInterval(id);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rows.filter((r) => {
      const matchQuery = !q || r.instrument.toLowerCase().includes(q) || r.symbol.toLowerCase().includes(q);
      if (!matchQuery) return false;
      if (tab !== "FOREX" || pairType === "All") return true;
      // r.type is Major/Minor/Exotic if present
      return (r.type || "All").toLowerCase() === pairType.toLowerCase();
    });
  }, [rows, query, tab, pairType]);

  // Modal state for TradingView chart
  const [modalSymbol, setModalSymbol] = useState("");
  const [theme, setTheme] = useState("light");
  const [interval, setIntervalStr] = useState("60");

  // CSV export of currently filtered rows
  function handleExport() {
    const header = [
      "Instrument","Symbol","Contract Size","Min Trade Size","Max Trade Size","Min Spread","Max Leverage"
    ];
    const body = filtered.map(r => [
      r.instrument, r.symbol, r.contractSize, r.minTradeSize, r.maxTradeSize, r.minSpread, r.maxLeverage
    ]);
    const csv = [header, ...body].map(row => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${tab.toLowerCase()}_contract_specs.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const liveRouteForTab = useMemo(() => ({
    "FOREX": "/forex/live",
    "INDICES": "/indices/live",
    "COMMODITIES": "/commodities/live",
    "ETFS": "/etf/live",
    "STOCKS": "/stocks/live",
    "FUTURES": "/futures/live",
    "CRYPTO": "/crypto/live",
  }), []);

  return (
    <section className="relative py-14 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_10%_-10%,rgba(168,85,247,0.12),transparent_60%),radial-gradient(45%_40%_at_100%_110%,rgba(236,72,153,0.10),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-3" aria-label="Breadcrumb">
            <ol className="inline-flex items-center gap-1">
              <li><a href="/" className="hover:text-gray-700">Home</a></li>
              <li className="mx-1">/</li>
              <li className="text-gray-700 font-medium">Contract specifications</li>
            </ol>
          </nav>

          {/* Hero card (dark) */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-[#0b1024] via-[#0b1024] to-[#121736] shadow-[0_16px_60px_rgba(2,6,23,0.6)]">
            <img src={specsBg} alt="Contract specs background" className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_10%_10%,rgba(139,92,246,0.18),transparent_60%),radial-gradient(50%_40%_at_100%_90%,rgba(236,72,153,0.12),transparent_60%)]" />
            <div className="absolute inset-0 bg-black/35" />
            <div className="relative p-6 md:p-10 text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white mb-3">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-400" />
                    <span className="text-sm font-medium">Contract Specifications</span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Contract specifications</h1>
                  <p className="mt-1 text-slate-200 max-w-2xl">Excellent trading conditions across instruments. View key contract metrics, open a live TradingView chart, and export specs with one click.</p>
                  <div className="mt-4 inline-flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-slate-100 text-xs">All markets</span>
                    <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-slate-100 text-xs">Live chart ready</span>
                    <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-slate-100 text-xs">CSV export</span>
                  </div>
                </div>
                <div className="shrink-0">
                  <a href="#specs-table" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-fuchsia-500/30 hover:opacity-95">
                    Explore specs
                    <span className="inline-block w-2.5 h-2.5 bg-white/90 rounded-full" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-4 flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-full border text-sm transition ${tab===t? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white border-transparent shadow-md shadow-fuchsia-500/20':'border-purple-200 text-purple-700 hover:bg-purple-50'}`}
              aria-pressed={tab===t}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Filters + Toolbar */}
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Account Type</label>
            <select value={accountType} onChange={(e)=>setAccountType(e.target.value)} className="px-3 py-2 rounded-xl border border-purple-200 bg-white text-gray-800">
              {ACCOUNT_TYPES.map(a=> <option key={a} value={a}>{a}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Type</label>
            <div className="flex items-center gap-1 rounded-xl border border-purple-200 bg-white p-1">
              {TYPES.map(tp => (
                <button key={tp} onClick={()=>setPairType(tp)} className={`px-3 py-1.5 rounded-lg text-sm ${pairType===tp?'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white':'text-gray-700 hover:bg-purple-50'}`}>{tp}</button>
              ))}
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search instrument" className="px-3 py-2 rounded-xl border border-purple-200 bg-white text-gray-800 w-60" />
            <div className="text-sm text-gray-600 hidden md:block">{filtered.length} result{filtered.length!==1?'s':''}</div>
            <button onClick={handleExport} className="px-3 py-2 rounded-xl border border-purple-200 text-purple-700 hover:bg-purple-50 text-sm">Export CSV</button>
          </div>
        </div>

        {/* Table */}
        <div id="specs-table" className="overflow-x-auto overflow-y-hidden rounded-3xl border border-purple-100 shadow-[0_12px_40px_rgba(16,24,40,0.08)] bg-white">
          <div className="min-w-[1100px]">
          {/* Desktop header */}
          <div className="hidden md:grid grid-cols-12 text-xs font-semibold uppercase tracking-wide text-gray-600 bg-purple-50/60 sticky top-0 z-10">
            <div className="col-span-3 p-3">Instrument</div>
            <div className="col-span-2 p-3 text-center">Contract size</div>
            <div className="col-span-2 p-3 text-center">Min trade size</div>
            <div className="col-span-1 p-3 text-center">Max trade</div>
            <div className="col-span-1 p-3 text-center">Min spread</div>
            <div className="col-span-1 p-3 text-center">Max leverage</div>
            <div className="col-span-2 p-3 text-center">Live</div>
          </div>
          <div>
            {filtered.map((r, idx) => {
              const p = prices[r.symbol]?.p || 1.2345;
              const bid = parseFloat((p - 0.0001).toFixed(5));
              const ask = parseFloat((p + 0.0001).toFixed(5));
              const spread = (ask - bid).toFixed(5);
              return (
                <>
                  {/* Desktop row */}
                  <div key={r.instrument+idx+"-d"} className={`hidden md:grid grid-cols-12 items-center ${idx%2===0? 'bg-white':'bg-purple-50/30'} hover:bg-purple-50/60 transition`}>
                    <div className="col-span-3 p-3 flex items-center gap-2">
                      <button onClick={()=>setModalSymbol(r.symbol)} className="px-2 py-1 rounded-md border border-purple-200 text-purple-700 hover:bg-purple-50 text-xs">Chart</button>
                      <div className="font-medium text-gray-900">{r.instrument}</div>
                      <div className="text-xs text-gray-500">{r.symbol}</div>
                    </div>
                    <div className="col-span-2 p-3 text-center">{r.contractSize.toLocaleString()}</div>
                    <div className="col-span-2 p-3 text-center">{r.minTradeSize}</div>
                    <div className="col-span-1 p-3 text-center">{r.maxTradeSize}</div>
                    <div className="col-span-1 p-3 text-center">{r.minSpread}</div>
                    <div className="col-span-1 p-3 text-center">{r.maxLeverage}</div>
                    <div className="col-span-2 p-3 text-center">
                      <div className="inline-flex items-center gap-2 whitespace-nowrap">
                        <span className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 text-xs">Bid {bid}</span>
                        <span className="px-2 py-0.5 rounded-md bg-fuchsia-50 text-fuchsia-700 text-xs">Ask {ask}</span>
                        <span className="px-2 py-0.5 rounded-md border border-purple-200 text-gray-700 text-xs">{spread}</span>
                        <a href={`${liveRouteForTab[tab]}?symbol=${encodeURIComponent(r.symbol)}`} className="px-2 py-0.5 rounded-md bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-xs hover:opacity-95">Trade</a>
                      </div>
                    </div>
                  </div>

                  {/* Mobile card */}
                  <div key={r.instrument+idx+"-m"} className="md:hidden p-4 border-t border-purple-100">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{r.instrument}</div>
                        <div className="text-xs text-gray-500">{r.symbol}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={()=>setModalSymbol(r.symbol)} className="px-2 py-1 rounded-md border border-purple-200 text-purple-700 hover:bg-purple-50 text-xs">Chart</button>
                        <a href={`${liveRouteForTab[tab]}?symbol=${encodeURIComponent(r.symbol)}`} className="px-2 py-1 rounded-md bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-xs">Trade</a>
                      </div>
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                      <div className="rounded-xl bg-purple-50/50 border border-purple-100 p-2"><div className="text-xs text-gray-500">Contract size</div><div className="font-medium text-gray-900">{r.contractSize.toLocaleString()}</div></div>
                      <div className="rounded-xl bg-purple-50/50 border border-purple-100 p-2"><div className="text-xs text-gray-500">Min trade</div><div className="font-medium text-gray-900">{r.minTradeSize}</div></div>
                      <div className="rounded-xl bg-purple-50/50 border border-purple-100 p-2"><div className="text-xs text-gray-500">Max trade</div><div className="font-medium text-gray-900">{r.maxTradeSize}</div></div>
                      <div className="rounded-xl bg-purple-50/50 border border-purple-100 p-2"><div className="text-xs text-gray-500">Min spread</div><div className="font-medium text-gray-900">{r.minSpread}</div></div>
                      <div className="rounded-xl bg-purple-50/50 border border-purple-100 p-2"><div className="text-xs text-gray-500">Max leverage</div><div className="font-medium text-gray-900">{r.maxLeverage}</div></div>
                      <div className="rounded-xl bg-white border border-purple-100 p-2"><div className="text-xs text-gray-500">Live</div>
                        <div className="mt-1 flex flex-wrap items-center gap-1 whitespace-nowrap">
                          <span className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 text-xs">Bid {bid}</span>
                          <span className="px-2 py-0.5 rounded-md bg-fuchsia-50 text-fuchsia-700 text-xs">Ask {ask}</span>
                          <span className="px-2 py-0.5 rounded-md border border-purple-200 text-gray-700 text-xs">{spread}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          </div>
        </div>

        {/* Notes section */}
        <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm text-gray-600">
          <div className="p-4 rounded-2xl bg-white border border-purple-100">TRADING HOURS: Markets are open Monday 00:03 (GMT+3) to Friday 23:55 (GMT+3). Spot FX instruments have no expiry.</div>
          <div className="p-4 rounded-2xl bg-white border border-purple-100">MARGIN CALL POLICY: Forced liquidation level is 50%.</div>
          <div className="p-4 rounded-2xl bg-white border border-purple-100">OTHER NOTES: Overnight charges (swap rates) may apply; commissions may apply on ThinkZero; max exposure/leverage subject to account equity and market conditions.</div>
        </div>
      </div>

      {/* Chart Modal */}
      {modalSymbol && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={()=>setModalSymbol("")}> 
          <div className="bg-white rounded-3xl max-w-5xl w-full overflow-hidden" onClick={(e)=>e.stopPropagation()}>
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <div className="font-semibold">{modalSymbol} · Live chart</div>
              <div className="flex items-center gap-2">
                <select className="px-2 py-1 rounded-lg border border-purple-200 text-sm" value={interval} onChange={(e)=>setIntervalStr(e.target.value)}>
                  <option value="15">15m</option>
                  <option value="60">1h</option>
                  <option value="240">4h</option>
                  <option value="D">1D</option>
                </select>
                <button className="px-2 py-1 rounded-lg border border-purple-200 text-sm" onClick={()=>setTheme(t=>t==="dark"?"light":"dark")}>Theme: {theme}</button>
                <button className="px-2 py-1 rounded-lg border border-gray-300 text-sm" onClick={()=>setModalSymbol("")}>Close</button>
              </div>
            </div>
            <div className="p-2">
              <TradingViewChart symbol={modalSymbol} theme={theme} interval={interval} height={520} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
