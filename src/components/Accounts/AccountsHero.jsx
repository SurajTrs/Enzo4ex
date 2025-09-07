import React from "react";
import bg from "../../assets/forexbg.png";

export default function AccountsHero() {
  return (
    <section className="relative overflow-hidden">
      <img src={bg} alt="bg" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-[#0b1024]/85" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 text-white">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-3">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-400" />
            <span className="text-sm">Account types</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Account types</h1>
          <p className="mt-2 text-slate-200">Pick one or more account types that suit your trading needs at Enzo4ex.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#select" className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-fuchsia-500/30 hover:opacity-95">Select an account</a>
            <a href="/register" className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10">Open account</a>
          </div>
        </div>
      </div>
    </section>
  );
}
