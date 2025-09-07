import React from "react";

export default function DemoCompare() {
  const rows = [
    { feature: "Key tools", enzo4extrader: "Advanced charting, multi‑timeframe, drawing suite", mt4: "Charting, drawing tools", mt5: "Advanced charting, Depth of Market" },
    { feature: "Indicators", enzo4extrader: "100+", mt4: "30", mt5: "38" },
    { feature: "EAs / Scripts", enzo4extrader: "Strategy tester (coming soon)", mt4: "Expert Advisors (MQL4)", mt5: "Expert Advisors (MQL5), multi‑thread tester" },
    { feature: "Timeframes", enzo4extrader: "From seconds to monthly", mt4: "9", mt5: "21" },
  ];

  return (
    <section className="relative bg-white" id="compare">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Compare platforms</h2>
          <p className="text-gray-600">Key differences across Enzo4exTrader, MetaTrader 4 and MetaTrader 5.</p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-purple-100 bg-white shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
          <div className="grid grid-cols-4 text-sm font-semibold bg-purple-50/50 border-b border-purple-100">
            <div className="p-4 text-gray-700">Feature</div>
            <div className="p-4 text-gray-900">Enzo4exTrader</div>
            <div className="p-4 text-gray-900">MetaTrader 4</div>
            <div className="p-4 text-gray-900">MetaTrader 5</div>
          </div>
          <div>
            {rows.map((r) => (
              <div key={r.feature} className="grid grid-cols-4 text-sm border-b last:border-b-0 border-purple-100">
                <div className="p-4 text-gray-700 bg-purple-50/30">{r.feature}</div>
                <div className="p-4 text-gray-900">{r.enzo4extrader}</div>
                <div className="p-4 text-gray-900">{r.mt4}</div>
                <div className="p-4 text-gray-900">{r.mt5}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
