import React from "react";

export default function AccountsSteps() {
  const steps = [
    { n: 1, title: "Sign up", desc: "Register on ThinkPortal and choose Enzo4exTrader or MetaTrader as your platform." },
    { n: 2, title: "Deposit", desc: "Fund your account with at least $50 or the equivalent in your base currency." },
    { n: 3, title: "Start trading", desc: "Begin trading a wide range of instruments across several global markets." },
  ];
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">How to open an account</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s)=> (
            <div key={s.n} className="p-6 rounded-3xl bg-white border border-purple-100 shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold">{s.n}</div>
              <div className="mt-3 font-semibold text-gray-900">{s.title}</div>
              <div className="text-sm text-gray-600">{s.desc}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center text-xs text-gray-500">* Applies to FX pairs, gold and silver.</div>
      </div>
    </section>
  );
}
