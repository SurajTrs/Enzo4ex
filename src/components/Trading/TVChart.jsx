import React, { useEffect, useRef } from "react";

export default function TVChart({ symbol = "FOREXCOM:EURUSD", interval = "60", theme = "light", autosize = true, style = "1" }) {
  const container = useRef(null);

  useEffect(() => {
    const scriptId = "tv-widget-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://s3.tradingview.com/tv.js";
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => createWidget();
    } else {
      createWidget();
    }

    function createWidget() {
      if (!window.TradingView || !container.current) return;
      // eslint-disable-next-line no-new
      new window.TradingView.widget({
        autosize,
        symbol,
        interval,
        timezone: "Etc/UTC",
        theme,
        style,
        locale: "en",
        enable_publishing: false,
        hide_top_toolbar: false,
        save_image: false,
        container_id: container.current.id,
        studies: ["Volume@tv-basicstudies"],
        withdateranges: true,
      });
    }
  }, [symbol, interval, theme, autosize, style]);

  return (
    <div className="h-full w-full">
      <div id="tvchart_container" ref={container} className="h-[420px] sm:h-[480px] lg:h-[640px] w-full rounded-xl overflow-hidden ring-1 ring-slate-200" />
    </div>
  );
}
