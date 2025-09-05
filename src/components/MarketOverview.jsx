import React, { useEffect, useMemo, useState } from "react";
import { assets } from "../assets/assets";
import { ChevronUp, ChevronDown } from "lucide-react";
import TradingViewMarketOverview from "./TradingViewMarketOverview";

const TABS = [
  { key: "popular", label: "Popular" },
  { key: "commodities", label: "Commodities" },
  { key: "crypto", label: "Crypto" },
  { key: "forex", label: "Forex" },
  { key: "stocks", label: "Stocks" },
  { key: "indices", label: "Indices" },
];

function classNames(...args) {
  return args.filter(Boolean).join(" ");
}

function numberFmt(val, opts = {}) {
  if (val === null || val === undefined || Number.isNaN(val)) return "-";
  const f = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2, ...opts });
  return f.format(val);
}

function ChangeCell({ value }) {
  const positive = value >= 0;
  const color = positive ? "text-emerald-600" : "text-rose-600";
  const Icon = positive ? ChevronUp : ChevronDown;
  return (
    <span className={classNames("inline-flex items-center gap-1 font-medium", color)}>
      <Icon className="h-4 w-4" />
      {numberFmt(Math.abs(value), { maximumFractionDigits: 2 })}%
    </span>
  );
}

const PLACEHOLDER_ROWS = {
  commodities: [
    { symbol: "XAUUSD", name: "Gold", buy: 2355.37, spread: 20.0, change24h: -0.12 },
    { symbol: "XAGUSD", name: "Silver", buy: 28.12, spread: 4.0, change24h: 0.34 },
  ],
  forex: [
    { symbol: "EURUSD", name: "EURUSD", buy: 1.1653, spread: 0.8, change24h: -0.07 },
    { symbol: "GBPUSD", name: "GBPUSD", buy: 1.284, spread: 1.1, change24h: 0.11 },
  ],
  stocks: [
    { symbol: "NVDA", name: "NVIDIA", buy: 171.4, spread: 8.0, change24h: 0.52 },
    { symbol: "AAPL", name: "Apple", buy: 232.2, spread: 3.0, change24h: -0.18 },
  ],
  indices: [
    { symbol: "SPX500", name: "SPX500", buy: 6467.9, spread: 0.3, change24h: 0.19 },
    { symbol: "US30", name: "US30", buy: 39880, spread: 1.3, change24h: -0.05 },
  ],
};

export default function MarketOverview() {
  const [activeTab, setActiveTab] = useState("popular");
  const [cryptoRows, setCryptoRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch live crypto via CoinGecko (no key needed)
  useEffect(() => {
    let timer;
    const load = async () => {
      try {
        setLoading(true);
        setError("");
        const ids = [
          "bitcoin",
          "ethereum",
          "solana",
          "ripple",
          "dogecoin",
        ].join(",");
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}&price_change_percentage=24h`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        const rows = data.map((c) => ({
          symbol: (c.symbol || "").toUpperCase() + "USD",
          name: c.name,
          buy: c.current_price,
          // Fake a tiny spread (bps) since API doesn't provide bid/ask
          spread: Math.max(0.02, Math.round((c.current_price * 0.0008) * 10) / 10),
          change24h: c.price_change_percentage_24h,
          image: c.image,
        }));
        setCryptoRows(rows);
      } catch (e) {
        console.error(e);
        setError("Failed to fetch live crypto prices. Showing placeholders.");
      } finally {
        setLoading(false);
      }
    };
    load();
    timer = setInterval(load, 60_000);
    return () => clearInterval(timer);
  }, []);

  const popularRows = useMemo(() => {
    // Blend some from each to mimic the screenshot
    return [
      { symbol: "NVDA", name: "NVIDIA", buy: 171.4, spread: 8.0, change24h: 0.52 },
      { symbol: "SPX500", name: "SPX500", buy: 6467.9, spread: 0.3, change24h: 0.19 },
      ...(cryptoRows[0] ? [cryptoRows[0]] : []),
      { symbol: "XAUUSD", name: "Gold", buy: 2355.37, spread: 20.0, change24h: -0.12 },
      ...(cryptoRows[1] ? [cryptoRows[1]] : []),
    ];
  }, [cryptoRows]);

  const rows = useMemo(() => {
    switch (activeTab) {
      case "crypto":
        return cryptoRows;
      case "commodities":
      case "forex":
      case "stocks":
      case "indices":
        return PLACEHOLDER_ROWS[activeTab] || [];
      case "popular":
      default:
        return popularRows;
    }
  }, [activeTab, cryptoRows, popularRows]);

  return (
    <section className="px-6 lg:px-20 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6">
        {/* Left: TradingView market overview */}
        <TradingViewMarketOverview />

        {/* Right: Single promo card with heading */}
        <div className="relative h-[28rem] lg:h-full min-h-[22rem] rounded-2xl overflow-hidden shadow-sm">
          <div className="absolute inset-0 bg-white" />
          {/* Subtle border ring */}
          <div className="absolute inset-0 ring-1 ring-gray-200 rounded-2xl" />
          {/* Decorative gradient blob */}
          <div className="absolute -top-16 -right-24 h-72 w-72 rounded-full bg-gradient-to-b from-purple-400 to-purple-600 blur-2xl opacity-30" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-b from-fuchsia-400 to-fuchsia-700 blur-2xl opacity-20" />

          <div className="relative h-full flex items-center justify-center p-8 text-center">
            <div className="max-w-sm">
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
                Trade with a trusted global leader
              </h3>
              <p className="mt-3 text-gray-500">
                Discover thousands of markets with competitive pricing and lightning-fast execution.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <button className="rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm font-semibold hover:bg-gray-800 transition-colors">
                  Start Trading
                </button>
                <button className="rounded-full border border-gray-300 text-gray-800 px-5 py-2.5 text-sm font-semibold hover:bg-gray-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
