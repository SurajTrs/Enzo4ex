import React from "react";

export default function MT4FAQ() {
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
                <span className="font-semibold text-gray-900">How do I open an MT4 account with Enzo4ex?</span>
                <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-50 text-purple-700 group-open:rotate-45 transition">+</span>
              </summary>
              <div className="mt-2 text-sm text-gray-600">Create a trading account via ThinkPortal/ThinkTrader and choose MT4 as your platform. You can start with a demo and upgrade to live anytime.</div>
            </details>
            <details className="group py-3">
              <summary className="list-none cursor-pointer flex items-center justify-between gap-2">
                <span className="font-semibold text-gray-900">Where can I download MT4 for my device?</span>
                <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-50 text-purple-700 group-open:rotate-45 transition">+</span>
              </summary>
              <div className="mt-2 text-sm text-gray-600">Use the Download MT4 section above to get Windows, macOS (guide), Android or iOS versions, or launch WebTrader in your browser.</div>
            </details>
            <details className="group py-3">
              <summary className="list-none cursor-pointer flex items-center justify-between gap-2">
                <span className="font-semibold text-gray-900">Can I use Expert Advisors (EAs) on MT4?</span>
                <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-50 text-purple-700 group-open:rotate-45 transition">+</span>
              </summary>
              <div className="mt-2 text-sm text-gray-600">Yes. MT4 supports automated trading via Expert Advisors. You can import or build your own EAs using MQL4.</div>
            </details>
            <details className="group py-3">
              <summary className="list-none cursor-pointer flex items-center justify-between gap-2">
                <span className="font-semibold text-gray-900">Is there a minimum deposit to start on MT4?</span>
                <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-50 text-purple-700 group-open:rotate-45 transition">+</span>
              </summary>
              <div className="mt-2 text-sm text-gray-600">Minimum deposit depends on your chosen account type. Check our Account Types and funding page for up‑to‑date requirements.</div>
            </details>
            <details className="group py-3">
              <summary className="list-none cursor-pointer flex items-center justify-between gap-2">
                <span className="font-semibold text-gray-900">How do I fund and withdraw from my MT4 account?</span>
                <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-50 text-purple-700 group-open:rotate-45 transition">+</span>
              </summary>
              <div className="mt-2 text-sm text-gray-600">Log in to ThinkPortal to fund or withdraw. Your MT4 terminal remains linked to your trading account details.</div>
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
