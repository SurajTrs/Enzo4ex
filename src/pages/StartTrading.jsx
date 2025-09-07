import React from "react";
import TVChart from "../components/Trading/TVChart";
import { Link, useNavigate } from "react-router-dom";
import { ArrowUpRight, ChevronDown, Plus, Trash2 } from "lucide-react";

const symbols = [
  // Forex (20+)
  { label: "EUR/USD", tv: "FOREXCOM:EURUSD" },
  { label: "GBP/USD", tv: "FOREXCOM:GBPUSD" },
  { label: "USD/JPY", tv: "FOREXCOM:USDJPY" },
  { label: "USD/CHF", tv: "FOREXCOM:USDCHF" },
  { label: "USD/CAD", tv: "FOREXCOM:USDCAD" },
  { label: "AUD/USD", tv: "FOREXCOM:AUDUSD" },
  { label: "NZD/USD", tv: "FOREXCOM:NZDUSD" },
  { label: "EUR/GBP", tv: "FOREXCOM:EURGBP" },
  { label: "EUR/JPY", tv: "FOREXCOM:EURJPY" },
  { label: "GBP/JPY", tv: "FOREXCOM:GBPJPY" },
  { label: "EUR/CHF", tv: "FOREXCOM:EURCHF" },
  { label: "GBP/CHF", tv: "FOREXCOM:GBPCHF" },
  { label: "AUD/JPY", tv: "FOREXCOM:AUDJPY" },
  { label: "CAD/JPY", tv: "FOREXCOM:CADJPY" },
  { label: "CHF/JPY", tv: "FOREXCOM:CHFJPY" },
  { label: "EUR/AUD", tv: "FOREXCOM:EURAUD" },
  { label: "EUR/NZD", tv: "FOREXCOM:EURNZD" },
  { label: "GBP/AUD", tv: "FOREXCOM:GBPAUD" },
  { label: "GBP/CAD", tv: "FOREXCOM:GBPCAD" },
  { label: "AUD/CAD", tv: "FOREXCOM:AUDCAD" },
  // Metals / Energy / Crypto / Indices
  { label: "XAU/USD", tv: "OANDA:XAUUSD" },
  { label: "XAG/USD", tv: "OANDA:XAGUSD" },
  { label: "USOIL", tv: "TVC:USOIL" },
  { label: "UKOIL", tv: "TVC:UKOIL" },
  { label: "BTC/USD", tv: "BITSTAMP:BTCUSD" },
  { label: "ETH/USD", tv: "BITSTAMP:ETHUSD" },
  { label: "US100 (Nasdaq)", tv: "FOREXCOM:NSXUSD" },
  { label: "US500 (S&P 500)", tv: "FOREXCOM:SPXUSD" },
  { label: "DAX", tv: "FOREXCOM:GRXEUR" },
];

const accordionData = [
  {
    title: "Forex",
    items: [
      { label: "EUR/USD", tv: "FOREXCOM:EURUSD" },
      { label: "GBP/USD", tv: "FOREXCOM:GBPUSD" },
      { label: "USD/JPY", tv: "FOREXCOM:USDJPY" },
      { label: "USD/CHF", tv: "FOREXCOM:USDCHF" },
      { label: "USD/CAD", tv: "FOREXCOM:USDCAD" },
      { label: "AUD/USD", tv: "FOREXCOM:AUDUSD" },
      { label: "NZD/USD", tv: "FOREXCOM:NZDUSD" },
      { label: "EUR/GBP", tv: "FOREXCOM:EURGBP" },
      { label: "EUR/JPY", tv: "FOREXCOM:EURJPY" },
      { label: "GBP/JPY", tv: "FOREXCOM:GBPJPY" },
      { label: "EUR/CHF", tv: "FOREXCOM:EURCHF" },
      { label: "GBP/CHF", tv: "FOREXCOM:GBPCHF" },
      { label: "AUD/JPY", tv: "FOREXCOM:AUDJPY" },
      { label: "CAD/JPY", tv: "FOREXCOM:CADJPY" },
      { label: "CHF/JPY", tv: "FOREXCOM:CHFJPY" },
      { label: "EUR/AUD", tv: "FOREXCOM:EURAUD" },
      { label: "EUR/NZD", tv: "FOREXCOM:EURNZD" },
      { label: "GBP/AUD", tv: "FOREXCOM:GBPAUD" },
      { label: "GBP/CAD", tv: "FOREXCOM:GBPCAD" },
      { label: "AUD/CAD", tv: "FOREXCOM:AUDCAD" },
    ],
  },
  {
    title: "Indices",
    items: [
      { label: "S&P 500", tv: "TVC:SPX" },
      { label: "Nasdaq 100", tv: "TVC:NDX" },
      { label: "Dow Jones", tv: "TVC:DJI" },
      { label: "Russell 2000", tv: "TVC:RUT" },
      { label: "Euro Stoxx 50", tv: "TVC:EURO50" },
      { label: "DAX", tv: "TVC:DAX" },
      { label: "FTSE 100", tv: "TVC:FTSE" },
      { label: "CAC 40", tv: "TVC:CAC40" },
      { label: "SMI", tv: "TVC:SMI" },
      { label: "IBEX 35", tv: "TVC:IBEX" },
      { label: "Hang Seng", tv: "TVC:HSI" },
      { label: "Nikkei 225", tv: "TVC:NIKKEI" },
      { label: "KOSPI", tv: "TVC:KOSPI" },
      { label: "ASX 200", tv: "TVC:ASX" },
      { label: "TA-35", tv: "TVC:TA35" },
      { label: "TSX", tv: "TVC:TSX" },
      { label: "Bovespa", tv: "TVC:BVSP" },
      { label: "MOEX", tv: "TVC:MOEX" },
      { label: "OMXS30", tv: "TVC:OMXS30" },
      { label: "PSI 20", tv: "TVC:PSI20" },
    ],
  },
  {
    title: "Commodities",
    items: [
      { label: "Gold (XAU/USD)", tv: "OANDA:XAUUSD" },
      { label: "Silver (XAG/USD)", tv: "OANDA:XAGUSD" },
      { label: "Platinum", tv: "TVC:PLATINUM" },
      { label: "Palladium", tv: "TVC:PALLADIUM" },
      { label: "Crude Oil WTI", tv: "TVC:USOIL" },
      { label: "Crude Oil Brent", tv: "TVC:UKOIL" },
      { label: "Natural Gas", tv: "TVC:NATGAS" },
      { label: "Copper", tv: "TVC:COPPER" },
      { label: "Aluminum", tv: "TVC:ALUMINUM" },
      { label: "Coffee", tv: "ICEUS:KC1!" },
      { label: "Cocoa", tv: "ICEUS:CC1!" },
      { label: "Sugar", tv: "ICEUS:SB1!" },
      { label: "Cotton", tv: "ICEUS:CT1!" },
      { label: "Corn", tv: "CBOT:ZC1!" },
      { label: "Wheat", tv: "CBOT:ZW1!" },
      { label: "Soybean", tv: "CBOT:ZS1!" },
      { label: "Heating Oil", tv: "NYMEX:HO1!" },
      { label: "Gasoline", tv: "NYMEX:RB1!" },
      { label: "Live Cattle", tv: "CME:LE1!" },
      { label: "Lean Hogs", tv: "CME:HE1!" },
    ],
  },
  {
    title: "Cryptocurrencies",
    items: [
      { label: "BTC/USD", tv: "COINBASE:BTCUSD" },
      { label: "ETH/USD", tv: "COINBASE:ETHUSD" },
      { label: "LTC/USD", tv: "COINBASE:LTCUSD" },
      { label: "ADA/USD", tv: "COINBASE:ADAUSD" },
      { label: "SOL/USD", tv: "COINBASE:SOLUSD" },
      { label: "DOGE/USD", tv: "COINBASE:DOGEUSD" },
      { label: "DOT/USD", tv: "COINBASE:DOTUSD" },
      { label: "AVAX/USD", tv: "COINBASE:AVAXUSD" },
      { label: "MATIC/USD", tv: "COINBASE:MATICUSD" },
      { label: "LINK/USD", tv: "COINBASE:LINKUSD" },
      { label: "XRP/USD", tv: "COINBASE:XRPUSD" },
      { label: "BCH/USD", tv: "COINBASE:BCHUSD" },
      { label: "TRX/USD", tv: "COINBASE:TRXUSD" },
      { label: "XLM/USD", tv: "COINBASE:XLMUSD" },
      { label: "ETC/USD", tv: "COINBASE:ETCUSD" },
      { label: "ATOM/USD", tv: "COINBASE:ATOMUSD" },
      { label: "NEAR/USD", tv: "COINBASE:NEARUSD" },
      { label: "AAVE/USD", tv: "COINBASE:AAVEUSD" },
      { label: "UNI/USD", tv: "COINBASE:UNIUSD" },
      { label: "SAND/USD", tv: "COINBASE:SANDUSD" },
    ],
  },
  {
    title: "Stocks",
    items: [
      { label: "Apple", tv: "NASDAQ:AAPL" },
      { label: "Microsoft", tv: "NASDAQ:MSFT" },
      { label: "Alphabet", tv: "NASDAQ:GOOGL" },
      { label: "Amazon", tv: "NASDAQ:AMZN" },
      { label: "Meta", tv: "NASDAQ:META" },
      { label: "Tesla", tv: "NASDAQ:TSLA" },
      { label: "NVIDIA", tv: "NASDAQ:NVDA" },
      { label: "AMD", tv: "NASDAQ:AMD" },
      { label: "Intel", tv: "NASDAQ:INTC" },
      { label: "Netflix", tv: "NASDAQ:NFLX" },
      { label: "JPMorgan", tv: "NYSE:JPM" },
      { label: "Bank of America", tv: "NYSE:BAC" },
      { label: "Visa", tv: "NYSE:V" },
      { label: "Mastercard", tv: "NYSE:MA" },
      { label: "Coca-Cola", tv: "NYSE:KO" },
      { label: "PepsiCo", tv: "NASDAQ:PEP" },
      { label: "Pfizer", tv: "NYSE:PFE" },
      { label: "Merck", tv: "NYSE:MRK" },
      { label: "AT&T", tv: "NYSE:T" },
      { label: "Walmart", tv: "NYSE:WMT" },
    ],
  },
  {
    title: "ETFs",
    items: [
      { label: "SPY", tv: "AMEX:SPY" },
      { label: "QQQ", tv: "NASDAQ:QQQ" },
      { label: "DIA", tv: "AMEX:DIA" },
      { label: "IWM", tv: "AMEX:IWM" },
      { label: "VTI", tv: "AMEX:VTI" },
      { label: "VOO", tv: "AMEX:VOO" },
      { label: "IVV", tv: "AMEX:IVV" },
      { label: "EEM", tv: "AMEX:EEM" },
      { label: "EFA", tv: "AMEX:EFA" },
      { label: "XLF", tv: "AMEX:XLF" },
      { label: "XLK", tv: "AMEX:XLK" },
      { label: "XLE", tv: "AMEX:XLE" },
      { label: "XLI", tv: "AMEX:XLI" },
      { label: "XLV", tv: "AMEX:XLV" },
      { label: "XLY", tv: "AMEX:XLY" },
      { label: "XLP", tv: "AMEX:XLP" },
      { label: "XLRE", tv: "AMEX:XLRE" },
      { label: "XLU", tv: "AMEX:XLU" },
      { label: "HYG", tv: "AMEX:HYG" },
      { label: "LQD", tv: "AMEX:LQD" },
    ],
  },
  {
    title: "Futures",
    items: [
      { label: "S&P 500 (ES)", tv: "CME:ES1!" },
      { label: "Nasdaq 100 (NQ)", tv: "CME:NQ1!" },
      { label: "Dow Jones (YM)", tv: "CBOT:YM1!" },
      { label: "Crude Oil (CL)", tv: "NYMEX:CL1!" },
      { label: "Natural Gas (NG)", tv: "NYMEX:NG1!" },
      { label: "Gold (GC)", tv: "COMEX:GC1!" },
      { label: "Silver (SI)", tv: "COMEX:SI1!" },
      { label: "Copper (HG)", tv: "COMEX:HG1!" },
      { label: "Corn (ZC)", tv: "CBOT:ZC1!" },
      { label: "Wheat (ZW)", tv: "CBOT:ZW1!" },
      { label: "Soybeans (ZS)", tv: "CBOT:ZS1!" },
      { label: "Euro FX (6E)", tv: "CME:6E1!" },
      { label: "British Pound (6B)", tv: "CME:6B1!" },
      { label: "Japanese Yen (6J)", tv: "CME:6J1!" },
      { label: "Australian Dollar (6A)", tv: "CME:6A1!" },
      { label: "Canadian Dollar (6C)", tv: "CME:6C1!" },
      { label: "Coffee (KC)", tv: "ICEUS:KC1!" },
      { label: "Cotton (CT)", tv: "ICEUS:CT1!" },
      { label: "Sugar (SB)", tv: "ICEUS:SB1!" },
      { label: "Heating Oil (HO)", tv: "NYMEX:HO1!" },
    ],
  },
  {
    title: "Gold",
    items: [
      { label: "XAU/USD", tv: "OANDA:XAUUSD" },
      { label: "Go to Gold page", to: "/gold" },
    ],
  },
  {
    title: "Synthetic indices",
    items: [
      { label: "Go to Synthetic Indices", to: "/synthetic-indices" },
    ],
  },
  {
    title: "Classic leverage",
    items: [
      { label: "Contract specs", to: "/classic-leverage" },
    ],
  },
  {
    title: "Dynamic leverage tiers",
    items: [
      { label: "Learn more", to: "/dynamic-leverage" },
    ],
  },
];

function AccordionSection({ title, items, onPickSymbol, onRoute }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-2 text-left"
      >
        <span className="font-medium text-slate-900 text-sm sm:text-base">{title}</span>
        <ChevronDown
          className={`w-4 h-4 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <ul className="pb-2 pl-2 space-y-1 max-h-64 overflow-y-auto">
          {items.map((it) => (
            <li key={it.tv || it.to || it.label}>
              {it.tv ? (
                <button
                  type="button"
                  onClick={() => onPickSymbol(it.tv)}
                  className="text-xs sm:text-sm text-slate-700 hover:text-slate-900"
                >
                  {it.label}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => onRoute(it.to)}
                  className="text-xs sm:text-sm text-slate-700 hover:text-slate-900"
                >
                  {it.label}
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function StartTradingPage() {
  const navigate = useNavigate();
  const [symbol, setSymbol] = React.useState(symbols[0].tv);
  const [orderSide, setOrderSide] = React.useState("Buy");
  const [orderType, setOrderType] = React.useState("Market");
  const [qty, setQty] = React.useState(1);
  const [price, setPrice] = React.useState(0);
  const [priceLive, setPriceLive] = React.useState(null);
  const [priceLoading, setPriceLoading] = React.useState(false);
  const [priceError, setPriceError] = React.useState("");
  const [positions, setPositions] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const placeOrder = (e) => {
    e.preventDefault();
    const now = new Date();
    const pos = {
      id: `${now.getTime()}`,
      time: now.toLocaleString(),
      symbol,
      side: orderSide,
      type: orderType,
      qty: Number(qty),
      price: orderType === "Limit" ? Number(price) : "Market",
      status: "Open",
    };
    setPositions((p) => [pos, ...p]);
    if (orderType === "Limit") setPrice(0);
  };

  const closePosition = (id) => {
    setPositions((p) => p.map((x) => (x.id === id ? { ...x, status: "Closed" } : x)));
  };

  const fetchPrice = React.useCallback(async (tvSymbol) => {
    try {
      setPriceLoading(true);
      setPriceError("");
      if (tvSymbol.includes(":")) {
        const [, code] = tvSymbol.split(":");
        if (code === "BTCUSD") {
          const r = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
          const j = await r.json();
          return j.bitcoin?.usd ?? null;
        }
        if (code === "ETHUSD") {
          const r = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd");
          const j = await r.json();
          return j.ethereum?.usd ?? null;
        }
        if (code.length === 6 || code === "XAUUSD") {
          const base = code.slice(0, 3);
          const quote = code.slice(3, 6);
          const url = `https://api.exchangerate.host/convert?from=${base}&to=${quote}`;
          const r = await fetch(url);
          const j = await r.json();
          return j.result ?? null;
        }
      }
      return null;
    } catch (e) {
      setPriceError("Price fetch failed. Showing chart only.");
      return null;
    } finally {
      setPriceLoading(false);
    }
  }, []);

  React.useEffect(() => {
    let timer;
    const load = async () => {
      const p = await fetchPrice(symbol);
      if (p != null) {
        setPriceLive(p);
        if (orderType === "Limit") setPrice(Number(p));
      }
    };
    load();
    timer = setInterval(load, 10000);
    return () => clearInterval(timer);
  }, [symbol, orderType, fetchPrice]);

  React.useEffect(() => {
    const id = setTimeout(() => {
      if (!search.trim()) {
        setSuggestions([]);
        return;
      }
      const q = search.toLowerCase();
      const local = symbols.filter((s) => s.label.toLowerCase().includes(q) || s.tv.toLowerCase().includes(q));
      setSuggestions(local.slice(0, 8));
    }, 200);
    return () => clearTimeout(id);
  }, [search]);

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white min-h-[100dvh]">
      <div className="max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">Start trading</h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">Professional charting with an integrated order ticket and positions panel.</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <Link to="/deposit-withdraw" className="inline-flex items-center gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 text-xs sm:text-sm">
              Manage funds <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </Link>
            <Link to="/register" className="inline-flex items-center gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 text-xs sm:text-sm">
              Open account
            </Link>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-600">
              <span className="px-1.5 sm:px-2 py-1 rounded-md bg-slate-100 text-slate-700">{symbols.find((s) => s.tv === symbol)?.label}</span>
              {priceLoading ? (
                <span className="text-slate-500">Loading…</span>
              ) : priceLive != null ? (
                <span className="font-semibold text-slate-900">{priceLive.toFixed(4)}</span>
              ) : (
                <span className="text-slate-500">Price unavailable</span>
              )}
            </div>
          </div>
        </div>

        {/* Main layout */}
        <div className="mt-4 sm:mt-6 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          {/* Sidebar */}
          <aside
            className={`fixed inset-y-0 left-0 z-30 w-64 sm:w-72 bg-white border-r border-slate-200 transform ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:relative md:translate-x-0 md:w-auto md:col-span-3 transition-transform duration-300 ease-in-out`}
          >
            <div className="h-full flex flex-col rounded-lg border border-slate-200 bg-white p-3 sm:p-4 shadow-sm overflow-y-auto">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-semibold text-slate-900 text-sm sm:text-base">Markets</h2>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="md:hidden text-xs sm:text-sm text-slate-600 hover:text-slate-900"
                >
                  Close
                </button>
              </div>
              <div className="divide-y divide-slate-200 flex-1">
                {accordionData.map((cat) => (
                  <AccordionSection
                    key={cat.title}
                    title={cat.title}
                    items={cat.items}
                    onPickSymbol={(tv) => {
                      setSymbol(tv);
                      setSidebarOpen(false);
                    }}
                    onRoute={(to) => {
                      navigate(to);
                      setSidebarOpen(false);
                    }}
                  />
                ))}
              </div>
            </div>
          </aside>

          {/* Overlay for mobile sidebar */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
              onClick={() => setSidebarOpen(false)}
            ></div>
          )}

          {/* Chart + positions */}
          <div className="md:col-span-9 lg:col-span-6">
            <div className="rounded-lg border border-slate-200 bg-white p-2 sm:p-3 md:p-4 shadow-sm">
              {/* Instrument selector */}
              <div className="flex flex-col gap-2 sm:gap-3 mb-3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <div className="relative w-full sm:w-40">
                    <select
                      value={symbol}
                      onChange={(e) => setSymbol(e.target.value)}
                      className="appearance-none pr-8 pl-2 sm:pl-3 py-1.5 sm:py-2 rounded-lg border border-slate-300 bg-white text-slate-900 text-xs sm:text-sm w-full"
                    >
                      {symbols.map((s) => (
                        <option key={s.tv} value={s.tv}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-2 top-2 sm:top-2.5 w-3 sm:w-4 h-3 sm:h-4 text-slate-500" />
                  </div>
                  <div className="relative flex-1">
                    <input
                      type="search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search or paste TradingView symbol"
                      className="w-full pl-2 sm:pl-3 pr-2 sm:pr-3 py-1.5 sm:py-2 rounded-lg border border-slate-300 bg-white text-slate-900 text-xs sm:text-sm"
                    />
                    {suggestions.length > 0 && (
                      <ul className="absolute z-20 mt-1 w-full rounded-lg border border-slate-200 bg-white shadow-sm max-h-56 overflow-auto">
                        {suggestions.map((s) => (
                          <li key={s.tv}>
                            <button
                              type="button"
                              onClick={() => {
                                setSymbol(s.tv);
                                setSearch("");
                                setSuggestions([]);
                              }}
                              className="w-full text-left px-2 sm:px-3 py-1.5 sm:py-2 hover:bg-slate-50"
                            >
                              <div className="text-xs sm:text-sm text-slate-900">{s.label}</div>
                              <div className="text-xs text-slate-500">{s.tv}</div>
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        if (search.trim()) {
                          setSymbol(search.trim());
                          setSuggestions([]);
                        }
                      }}
                      className="inline-flex items-center px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm"
                    >
                      Load
                    </button>
                    <button
                      type="button"
                      onClick={() => setSidebarOpen((s) => !s)}
                      className="inline-flex items-center px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 md:hidden text-xs sm:text-sm"
                    >
                      Markets
                    </button>
                  </div>
                </div>
                {priceError && (
                  <p className="text-xs sm:text-sm text-red-600">{priceError}</p>
                )}
              </div>
              <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
                <TVChart symbol={symbol} theme="light" />
              </div>
            </div>

            {/* Positions */}
            <div className="mt-4 sm:mt-6 rounded-lg border border-slate-200 bg-white p-2 sm:p-3 md:p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-slate-900 text-sm sm:text-base">Positions</h2>
                <button
                  onClick={() => setPositions([])}
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-700 hover:text-slate-900"
                >
                  <Trash2 className="w-3 sm:w-4 h-3 sm:h-4" /> Clear
                </button>
              </div>
              <div className="mt-3 overflow-x-auto">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="text-left text-slate-500 border-b">
                      <th className="py-1.5 sm:py-2 pr-2 sm:pr-4">Time</th>
                      <th className="py-1.5 sm:py-2 pr-2 sm:pr-4">Symbol</th>
                      <th className="py-1.5 sm:py-2 pr-2 sm:pr-4">Side</th>
                      <th className="py-1.5 sm:py-2 pr-2 sm:pr-4">Type</th>
                      <th className="py-1.5 sm:py-2 pr-2 sm:pr-4">Qty</th>
                      <th className="py-1.5 sm:py-2 pr-2 sm:pr-4">Price</th>
                      <th className="py-1.5 sm:py-2 pr-2 sm:pr-4">Status</th>
                      <th className="py-1.5 sm:py-2 pr-2 sm:pr-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {positions.length === 0 ? (
                      <tr>
                        <td colSpan="8" className="py-4 sm:py-6 text-center text-slate-500 text-xs sm:text-sm">
                          No positions yet. Place an order to get started.
                        </td>
                      </tr>
                    ) : (
                      positions.map((p) => (
                        <tr key={p.id} className="border-b last:border-b-0">
                          <td className="py-1.5 sm:py-2 pr-2 sm:pr-4 whitespace-nowrap">{p.time}</td>
                          <td className="py-1.5 sm:py-2 pr-2 sm:pr-4">{p.symbol}</td>
                          <td className="py-1.5 sm:py-2 pr-2 sm:pr-4">{p.side}</td>
                          <td className="py-1.5 sm:py-2 pr-2 sm:pr-4">{p.type}</td>
                          <td className="py-1.5 sm:py-2 pr-2 sm:pr-4">{p.qty}</td>
                          <td className="py-1.5 sm:py-2 pr-2 sm:pr-4">{p.price}</td>
                          <td className="py-1.5 sm:py-2 pr-2 sm:pr-4">{p.status}</td>
                          <td className="py-1.5 sm:py-2 pr-2 sm:pr-4">
                            {p.status === "Open" ? (
                              <button
                                onClick={() => closePosition(p.id)}
                                className="text-purple-700 hover:text-purple-800 text-xs sm:text-sm"
                              >
                                Close
                              </button>
                            ) : (
                              <span className="text-slate-400 text-xs sm:text-sm">Closed</span>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Order ticket */}
          <aside className="md:col-span-3">
            <div className="rounded-lg border border-slate-200 bg-white p-2 sm:p-3 md:p-4 shadow-sm md:sticky md:top-4">
              <h2 className="font-semibold text-slate-900 text-sm sm:text-base">Order ticket</h2>
              <form onSubmit={placeOrder} className="mt-3 grid grid-cols-2 gap-2 sm:gap-3">
                <div className="col-span-2 inline-flex rounded-lg overflow-hidden border border-slate-300">
                  <button
                    type="button"
                    onClick={() => setOrderSide("Buy")}
                    className={`w-1/2 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm ${
                      orderSide === "Buy" ? "bg-emerald-100 text-emerald-700" : "bg-white text-slate-700"
                    }`}
                  >
                    Buy
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderSide("Sell")}
                    className={`w-1/2 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm ${
                      orderSide === "Sell" ? "bg-rose-100 text-rose-700" : "bg-white text-slate-700"
                    }`}
                  >
                    Sell
                  </button>
                </div>
                <div className="col-span-2">
                  <label className="block text-xs sm:text-sm font-medium text-slate-700">Order type</label>
                  <select
                    value={orderType}
                    onChange={(e) => setOrderType(e.target.value)}
                    className="mt-1 w-full border border-slate-300 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm"
                  >
                    <option>Market</option>
                    <option>Limit</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-700">Quantity</label>
                  <div className="mt-1 inline-flex w-full border border-slate-300 rounded-lg overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className="px-2 sm:px-3 text-xs sm:text-sm"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={qty}
                      onChange={(e) => setQty(Number(e.target.value))}
                      className="w-full px-2 sm:px-3 py-1.5 sm:py-2 outline-none text-xs sm:text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setQty((q) => q + 1)}
                      className="px-2 sm:px-3"
                    >
                      <Plus className="w-3 sm:w-4 h-3 sm:h-4" />
                    </button>
                  </div>
                </div>
                {orderType === "Limit" && (
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700">Limit price</label>
                    <input
                      type="number"
                      step="0.0001"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="mt-1 w-full border border-slate-300 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm"
                    />
                  </div>
                )}
                <div className="col-span-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg bg-purple-600 hover:bg-purple-700 py-2 sm:py-2.5 font-semibold text-white text-xs sm:text-sm"
                  >
                    Place order
                  </button>
                </div>
              </form>
              <p className="mt-3 text-xs text-slate-500">This is a demo ticket for UI purposes only. No orders are sent to a broker.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}