import React from "react";
import bg from "../../assets/forexbg.png";

export default function DepositsHero() {
  const features = [
    { title: "Fast funding", desc: "Instant deposit options. Withdrawals are processed 24/5, typically within 4 hours.", icon: "🚀" },
    { title: "No transaction fees", desc: "Deposit and withdraw seamlessly with 0 fees on all funding methods.*", icon: "💲" },
    { title: "Security", desc: "Your funds are safe and secure in segregated customer accounts.", icon: "🛡️" },
  ];

  return (
    <header className="relative overflow-hidden">
      <img src={bg} alt="bg" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-[#0b1024]/85" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_0%_0%,rgba(139,92,246,0.20),transparent_60%),radial-gradient(70%_60%_at_100%_0%,rgba(236,72,153,0.18),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.35)]">
            <span className="text-2xl">👛</span>
          </div>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">Deposits and withdrawals</h1>
          <p className="mt-2 text-slate-200">Enjoy fast, secure, and hassle-free deposits and withdrawals.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {features.map((f)=> (
            <div key={f.title} className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <div className="inline-flex items-center gap-2 text-purple-200">
                <span>{f.icon}</span>
                <span className="font-semibold">{f.title}</span>
              </div>
              <p className="mt-2 text-sm text-slate-200/90">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
