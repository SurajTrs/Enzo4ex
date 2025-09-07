import React from "react";

export default function MT4AccountsCTA() {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl border border-purple-100 bg-white shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
            <h3 className="text-xl font-extrabold text-gray-900">Select an account</h3>
            <p className="text-gray-600">Choose the account that fits your strategy.</p>
          </div>
          <div className="p-6 rounded-3xl border border-purple-100 bg-white shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
            <div className="font-semibold text-gray-900">Standard</div>
            <p className="text-sm text-gray-600">Perfect for traders at any level. Tight spreads, custom lot sizes, and powerful platforms.</p>
            <a href="/register" className="mt-3 inline-flex px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-sm">Trade now</a>
          </div>
          <div className="p-6 rounded-3xl border border-purple-100 bg-white shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
            <div className="font-semibold text-gray-900">ThinkZero</div>
            <p className="text-sm text-gray-600">Raw spreads and low commissions with reliable execution.</p>
            <a href="/register" className="mt-3 inline-flex px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-sm">Trade now</a>
          </div>
        </div>
        <div className="mt-6 text-center">
          <a href="/classic-leverage" className="px-5 py-2.5 rounded-full border border-purple-200 text-purple-700 hover:bg-purple-50 text-sm">View specifications</a>
        </div>
      </div>
    </section>
  );
}
