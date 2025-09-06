import React from "react";

export default function TVFAQ() {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex items-end justify-between gap-3 mb-4">
          <h2 className="text-[28px] md:text-[32px] leading-tight font-extrabold text-gray-900 tracking-tight">Frequently asked questions</h2>
          <a href="#" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 text-purple-700 hover:bg-purple-50 text-sm">View all FAQs</a>
        </div>
        <div className="rounded-3xl border border-purple-100 bg-white p-4 md:p-6 shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
          <div className="divide-y divide-purple-100">
            <details className="group py-3" open>
              <summary className="list-none cursor-pointer flex items-center justify-between gap-2">
                <span className="font-semibold text-gray-900">How can I connect my ThinkMarkets account to TradingView?</span>
                <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-50 text-purple-700 group-open:rotate-45 transition">+</span>
              </summary>
              <div className="mt-2 text-sm text-gray-600">Open TradingView, visit our broker profile and click “Trade”. Log in with your ThinkTrader credentials to connect.</div>
            </details>
            <details className="group py-3">
              <summary className="list-none cursor-pointer flex items-center justify-between gap-2">
                <span className="font-semibold text-gray-900">What markets can I trade on TradingView?</span>
                <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-50 text-purple-700 group-open:rotate-45 transition">+</span>
              </summary>
              <div className="mt-2 text-sm text-gray-600">CFDs across forex, indices, commodities, stocks, ETFs, futures and crypto (availability varies by region).</div>
            </details>
            <details className="group py-3">
              <summary className="list-none cursor-pointer flex items-center justify-between gap-2">
                <span className="font-semibold text-gray-900">Is there a fee for connecting my account with TradingView?</span>
                <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-50 text-purple-700 group-open:rotate-45 transition">+</span>
              </summary>
              <div className="mt-2 text-sm text-gray-600">Connecting is free. Trading costs (spreads/commissions) apply per instrument as usual.</div>
            </details>
            <details className="group py-3">
              <summary className="list-none cursor-pointer flex items-center justify-between gap-2">
                <span className="font-semibold text-gray-900">Is there a minimum deposit?</span>
                <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-50 text-purple-700 group-open:rotate-45 transition">+</span>
              </summary>
              <div className="mt-2 text-sm text-gray-600">Minimum deposit follows your chosen account type. Check our account types page for details.</div>
            </details>
            <details className="group py-3">
              <summary className="list-none cursor-pointer flex items-center justify-between gap-2">
                <span className="font-semibold text-gray-900">How can I add funds to my TradingView account?</span>
                <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-50 text-purple-700 group-open:rotate-45 transition">+</span>
              </summary>
              <div className="mt-2 text-sm text-gray-600">Funding is handled via ThinkPortal/ThinkTrader as usual; your TradingView session stays linked to your trading account.</div>
            </details>
          </div>
          <div className="mt-3 text-xs text-gray-500">* Trading on TradingView is provided via your broker connection; platform features and availability may vary by region.</div>
          <div className="mt-4 md:hidden">
            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 text-purple-700 hover:bg-purple-50 text-sm">View all FAQs</a>
          </div>
        </div>
      </div>
    </section>
  );
}
