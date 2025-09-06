import React from "react";

export default function TVSteps() {
  const steps = [
    { title: "Create a ThinkTrader account", desc: "Sign up on ThinkPortal or ThinkTrader." },
    { title: "Register on TradingView", desc: "Visit TradingView.com and create an account." },
    { title: "Visit ThinkMarkets’ profile", desc: "Head to our broker profile on TradingView and click ‘Trade’." },
    { title: "Connect your account", desc: "Link your ThinkTrader account to TradingView and start trading." },
  ];

  return (
    <section id="start" className="relative py-14 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_10%_-10%,rgba(168,85,247,0.12),transparent_60%),radial-gradient(45%_40%_at_100%_110%,rgba(236,72,153,0.10),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Connect your account in 4 simple steps</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i)=> (
            <div key={s.title} className="p-6 rounded-3xl bg-white border border-purple-100 shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold">{i+1}</div>
              <div className="mt-3 font-semibold text-gray-900">{s.title}</div>
              <div className="text-sm text-gray-600">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
