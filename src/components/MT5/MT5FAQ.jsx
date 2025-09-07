import React from "react";

export default function MT5FAQ() {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex items-end justify-between gap-3 mb-4">
          <h2 className="text-[28px] md:text-[32px] leading-tight font-extrabold text-gray-900 tracking-tight">Frequently asked questions</h2>
          <a href="/help" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 text-purple-700 hover:bg-purple-50 text-sm">View all FAQs</a>
        </div>
        <div className="rounded-3xl border border-purple-100 bg-white p-4 md:p-6 shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
          <div className="divide-y divide-purple-100">
            <details className="group py-3" open>
              <summary className="list-none cursor-pointer flex items-center justify-between gap-2">
                <span className="font-semibold text-gray-900">How do I open an MT5 account with Enzo4ex?</span>
                <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-50 text-purple-700 group-open:rotate-45 transition">+</span>
              </summary>
              <div className="mt-2 text-sm text-gray-600">Create a trading account via ThinkPortal/ThinkTrader and choose MT5 as your platform. You can start with a demo and upgrade to live anytime.</div>
            </details>
            <details className="group py-3">
              <summary className="list-none cursor-pointer flex items-center justify-between gap-2">
                <span className="font-semibold text-gray-900">Where can I download MT5 for my device?</span>
                <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-50 text-purple-700 group-open:rotate-45 transition">+</span>
              </summary>
              <div className="mt-2 text-sm text-gray-600">Use the Download MT5 section above to get Windows, macOS (guide), Android or iOS versions, or launch the WebTerminal.</div>
            </details>
            <details className="group py-3">
              <summary className="list-none cursor-pointer flex items-center justify-between gap-2">
                <span className="font-semibold text-gray-900">Does MT5 support Expert Advisors (EAs)?</span>
                <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-50 text-purple-700 group-open:rotate-45 transition">+</span>
              </summary>
              <div className="mt-2 text-sm text-gray-600">Yes, MT5 supports EAs and algorithmic trading using the MQL5 language.</div>
            </details>
            <details className="group py-3">
              <summary className="list-none cursor-pointer flex items-center justify-between gap-2">
                <span className="font-semibold text-gray-900">Is there a minimum deposit to start on MT5?</span>
                <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-50 text-purple-700 group-open:rotate-45 transition">+</span>
              </summary>
              <div className="mt-2 text-sm text-gray-600">Minimum deposit depends on your account type. Check Account Types and funding for details.</div>
            </details>
            <details className="group py-3">
              <summary className="list-none cursor-pointer flex items-center justify-between gap-2">
                <span className="font-semibold text-gray-900">How do I fund and withdraw from my MT5 account?</span>
                <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-50 text-purple-700 group-open:rotate-45 transition">+</span>
              </summary>
              <div className="mt-2 text-sm text-gray-600">Log in to ThinkPortal to fund or withdraw; your MT5 terminal remains linked to your trading account.</div>
            </details>
          </div>
          <div className="mt-3 text-xs text-gray-500">* Product availability and features can vary by region and account type.</div>
          <div className="mt-4 md:hidden">
            <a href="/help" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 text-purple-700 hover:bg-purple-50 text-sm">View all FAQs</a>
          </div>
        </div>
      </div>
    </section>
  );
}
