import React from "react";

export default function DepositsFAQ() {
  const faqs = [
    {
      q: "Are there any fees on deposits or withdrawals?",
      a: "Enzo4ex does not charge fees on deposits or withdrawals. Your bank or payment provider may apply their own charges.",
    },
    {
      q: "How long do withdrawals take?",
      a: "We aim to process withdrawals within 24 hours during business days. Final timings depend on your payment provider.",
    },
    {
      q: "Can I withdraw to a different payment method?",
      a: "In most cases, funds are returned to the original payment source for security. Contact support for exceptions.",
    },
    {
      q: "What documents do I need?",
      a: "We may request identity and residency verification before processing certain funding or withdrawal requests.",
    },
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
