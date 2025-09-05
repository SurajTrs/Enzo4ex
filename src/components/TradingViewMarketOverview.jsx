import React, { useEffect, useRef } from "react";

// TradingView Market Overview Widget wrapper
// Docs: https://www.tradingview.com/widget/market-overview/
export default function TradingViewMarketOverview() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clean previous script if any
    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.type = "text/javascript";
    script.async = true;

    // Configure widget: tabs for Popular-like mix, Commodities, Crypto, Forex, Stocks, Indices
    script.innerHTML = JSON.stringify({
      colorTheme: "light",
      dateRange: "12M",
      showChart: true,
      locale: "en",
      isTransparent: false,
      width: "100%",
      height: 520,
      largeChartUrl: "",
      showSymbolLogo: true,
      tabs: [
        {
          title: "Popular",
          symbols: [
            { s: "NASDAQ:NVDA" },
            { s: "FOREXCOM:SPX500" },
            { s: "FX:EURUSD" },
            { s: "OANDA:XAUUSD" },
            { s: "CRYPTO:BTCUSD" },
          ],
          originalTitle: "Popular",
        },
        {
          title: "Commodities",
          symbols: [
            { s: "OANDA:XAUUSD" },
            { s: "OANDA:XAGUSD" },
            { s: "TVC:USOIL" },
            { s: "TVC:UKOIL" },
            { s: "TVC:COPPER" },
          ],
          originalTitle: "Commodities",
        },
        {
          title: "Crypto",
          symbols: [
            { s: "CRYPTO:BTCUSD" },
            { s: "CRYPTO:ETHUSD" },
            { s: "CRYPTO:SOLUSD" },
            { s: "CRYPTO:XRPUSD" },
            { s: "CRYPTO:DOGEUSD" },
          ],
          originalTitle: "Crypto",
        },
        {
          title: "Forex",
          symbols: [
            { s: "FX:EURUSD" },
            { s: "FX:GBPUSD" },
            { s: "FX:USDJPY" },
            { s: "FX:AUDUSD" },
            { s: "FX:USDCAD" },
          ],
          originalTitle: "Forex",
        },
        {
          title: "Stocks",
          symbols: [
            { s: "NASDAQ:NVDA" },
            { s: "NASDAQ:AAPL" },
            { s: "NASDAQ:MSFT" },
            { s: "NASDAQ:AMZN" },
            { s: "NASDAQ:TSLA" },
          ],
          originalTitle: "Stocks",
        },
        {
          title: "Indices",
          symbols: [
            { s: "FOREXCOM:SPX500" },
            { s: "FOREXCOM:NAS100" },
            { s: "FOREXCOM:DJI" },
            { s: "FOREXCOM:DE30" },
            { s: "FOREXCOM:JPXNK225" },
          ],
          originalTitle: "Indices",
        },
      ],
    });

    containerRef.current.appendChild(script);

    return () => {
      // Cleanup widget content on unmount
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="p-3">
        <div className="tradingview-widget-container" ref={containerRef}>
          <div className="tradingview-widget-container__widget" />
        </div>
      </div>
      <p className="text-[11px] text-gray-500 px-4 pb-4">
        Data is provided by TradingView. Prices are indicative and for information purposes only.
      </p>
    </div>
  );
}
