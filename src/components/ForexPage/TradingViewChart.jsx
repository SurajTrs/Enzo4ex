import React, { useEffect, useRef } from "react";

// Reusable TradingView Advanced Chart wrapper
// Props: symbol (e.g., "FX:EURUSD"), theme ("light" | "dark"), interval ("1", "60", "240", "D"), height
export default function TradingViewChart({ symbol = "FX:EURUSD", theme = "dark", interval = "60", height = 600 }) {
  const containerRef = useRef(null);
  const scriptRef = useRef(null);
  const widgetRef = useRef(null);

  useEffect(() => {
    // Ensure tv.js is loaded once
    function loadScript() {
      return new Promise((resolve) => {
        if (window.TradingView) return resolve();
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/tv.js";
        script.async = true;
        script.onload = () => resolve();
        document.body.appendChild(script);
        scriptRef.current = script;
      });
    }

    let cancelled = false;
    loadScript().then(() => {
      if (cancelled || !containerRef.current || !window.TradingView) return;
      // Clear previous widget content if any
      containerRef.current.innerHTML = "";
      // eslint-disable-next-line no-new
      widgetRef.current = new window.TradingView.widget({
        container_id: containerRef.current.id,
        symbol,
        interval,
        theme,
        style: "1",
        locale: "en",
        toolbar_bg: "rgba(0, 0, 0, 0)",
        enable_publishing: false,
        hide_legend: false,
        save_image: false,
        studies: [
          // Some default studies; adjust as needed
          "MACD@tv-basicstudies",
          "RSI@tv-basicstudies",
        ],
        withdateranges: true,
        hide_side_toolbar: false,
        allow_symbol_change: false,
        autosize: true,
        details: true,
        calendar: true,
      });
    });

    return () => {
      cancelled = true;
    };
  }, [symbol, theme, interval]);

  return (
    <div className="w-full" style={{ height }}>
      <div id="tv-advanced-chart" ref={containerRef} className="w-full h-full" />
    </div>
  );
}
