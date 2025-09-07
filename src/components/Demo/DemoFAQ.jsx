import React from "react";

export default function DemoFAQ() {
  const faqs = [
    { q: "Will my demo account on Enzo4ex ever expire?", a: "Demo accounts remain active while they are used periodically. Inactive demo accounts may be archived." },
    { q: "Are there any fees for trading in the demo account?", a: "No. Demo accounts are free and use virtual funds only." },
    { q: "Can I have multiple demo accounts?", a: "Yes. You can create separate demo accounts to test different platforms or strategies." },
    { q: "Can I copy my demo account or adjust my demo account settings?", a: "You can create new demo accounts with different settings (balance, leverage) to simulate scenarios." },
    { q: "What are the differences between a demo and live account?", a: "Demo uses virtual funds and may not reflect slippage and liquidity conditions of live markets." },
    { q: "How long does it take to set up a demo account?", a: "It takes just a few minutes—sign up and launch a platform with virtual funds." },
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
