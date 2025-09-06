import React from "react";

export default function CommoditiesPlatform() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="p-8 rounded-3xl bg-white border border-purple-100 shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 mb-3">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />
              <span className="text-sm font-medium">ThinkTrader</span>
            </div>
            <h4 className="text-2xl font-extrabold text-gray-900">Trade on an award-winning platform</h4>
            <p className="mt-2 text-gray-600">Trade on an award-winning platform via web or app, featuring advanced charting and innovative trading tools.</p>
            <div className="mt-4"><a className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold" href="/commodities/live">Get started</a></div>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-purple-100 shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 mb-3">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />
              <span className="text-sm font-medium">TradingView</span>
            </div>
            <h4 className="text-2xl font-extrabold text-gray-900">Trade on TradingView</h4>
            <p className="mt-2 text-gray-600">Trade directly on one of the world’s leading charting platforms while enjoying ThinkMarkets’ superior trading conditions.</p>
            <div className="mt-4"><a className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold" href="/commodities/live">Get started</a></div>
          </div>
        </div>
      </div>
    </section>
  );
}
