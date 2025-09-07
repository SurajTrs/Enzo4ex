import React, { useEffect, useRef } from "react";

// TradingView Timeline widget (no API key required)
// Docs: https://www.tradingview.com/widget/timeline/
export default function TradingViewNews({ theme = "dark", height = 600 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      feedMode: "all_symbols",
      isTransparent: false,
      displayMode: "adaptive",
      width: "100%",
      height,
      colorTheme: theme,
      locale: "en",
    });

    const current = containerRef.current;
    if (current) {
      // Clean previous embeds if any
      current.innerHTML = "";
      current.appendChild(script);
    }

    return () => {
      if (current) current.innerHTML = "";
    };
  }, [theme, height]);

  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="rounded-3xl overflow-hidden border border-purple-100 shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
          <div className="tradingview-widget-container" ref={containerRef} />
        </div>
      </div>
    </section>
  );
}
