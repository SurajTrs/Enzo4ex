import React from "react";

export default function EcoFAQ() {
  const faqs = [
    { q: "What is an economic calendar?", a: "An economic calendar lists scheduled macroeconomic data releases, central bank decisions and other events that may move financial markets." },
    { q: "Why are economic calendars important?", a: "They help traders anticipate volatility around key events, manage risk, and time entries/exits with better context." },
    { q: "How to use an economic calendar for trading?", a: "Filter by country and impact, note the time of releases, check the forecast vs. previous values, and plan your strategy around potential scenarios." },
    { q: "How to read an economic calendar?", a: "Review the event name, time, country/flag, impact, and the Actual, Forecast and Previous columns to gauge surprises and market reaction." },
  ];

  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex items-end justify-between gap-3 mb-4">
          <h2 className="text-[28px] md:text-[32px] leading-tight font-extrabold text-gray-900 tracking-tight">Frequently asked questions</h2>
          <a href="/help" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 text-purple-700 hover:bg-purple-50 text-sm">View all FAQs</a>
        </div>
        <div className="rounded-3xl border border-purple-100 bg-white p-4 md:p-6 shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
          <div className="divide-y divide-purple-100">
            {faqs.map((f)=> (
              <details key={f.q} className="group py-3">
                <summary className="list-none cursor-pointer flex items-center justify-between gap-2">
                  <span className="font-semibold text-gray-900">{f.q}</span>
                  <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-50 text-purple-700 group-open:rotate-45 transition">+</span>
                </summary>
                <div className="mt-2 text-sm text-gray-600">{f.a}</div>
              </details>
            ))}
          </div>
          <div className="mt-4 md:hidden">
            <a href="/help" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 text-purple-700 hover:bg-purple-50 text-sm">View all FAQs</a>
          </div>
        </div>
      </div>
    </section>
  );
}
