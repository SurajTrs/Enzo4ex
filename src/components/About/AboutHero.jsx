import React from "react";
import bg from "../../assets/forexbg.png";

export default function AboutHero() {
  return (
    <header className="relative overflow-hidden">
      <img src={bg} alt="bg" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-[#0b1024]/85" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-3">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-400" />
            <span className="text-sm">A Global Market Leader</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">A Global Market Leader</h1>
          <p className="mt-2 text-slate-200">Established in 2010, Enzo4ex is an innovative, market‑leading provider of online trading services with clients in more than 165 countries.</p>
        </div>
      </div>
    </header>
  );
}
