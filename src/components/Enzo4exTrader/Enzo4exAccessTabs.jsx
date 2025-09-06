import React, { useState } from "react";

const tabs = [
  { key: "multi", label: "Multi‑asset" },
  { key: "fast", label: "Fast execution" },
  { key: "secure", label: "Secure" },
  { key: "portable", label: "Portable" },
];

const content = {
  multi: [
    { title: "Experience seamless trading", desc: "Log in on any device and pick up right where you left off.", icon: "📈" },
    { title: "Powerful order ticket", desc: "Place market, limit and stop orders with clear cost visibility.", icon: "🎯" },
    { title: "Portfolio at a glance", desc: "Watchlists, positions and P/L synced across web, desktop and mobile.", icon: "📊" },
  ],
  fast: [
    { title: "Low‑latency execution", desc: "Engineered for speed with reliable order routing.", icon: "⚡" },
    { title: "One‑click trading", desc: "Enter and manage trades directly from the chart.", icon: "🖱️" },
    { title: "Lightweight UI", desc: "Optimized layouts keep the platform fast and responsive.", icon: "🧭" },
  ],
  secure: [
    { title: "Two‑factor security", desc: "Protect access with OTP and secure sessions.", icon: "🔐" },
    { title: "Encrypted data", desc: "Transport‑layer encryption for your data and orders.", icon: "🛡️" },
    { title: "Session controls", desc: "Manage devices and sign‑ins from your profile.", icon: "🔎" },
  ],
  portable: [
    { title: "Cloud sync", desc: "Layouts, alerts and lists synced across devices.", icon: "☁️" },
    { title: "Native apps", desc: "iOS, Android and Desktop support out of the box.", icon: "📱" },
    { title: "Offline ready", desc: "Key views cached for quick access on the go.", icon: "📶" },
  ],
};

export default function Enzo4exAccessTabs() {
  const [active, setActive] = useState("multi");
  const cards = content[active];
  return (
    <section className="relative py-14 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_10%_-10%,rgba(168,85,247,0.10),transparent_60%),radial-gradient(45%_40%_at_100%_110%,rgba(236,72,153,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />
            <span className="text-sm font-medium">Access to match your markets</span>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {tabs.map(t => (
              <button key={t.key} onClick={()=>setActive(t.key)} className={`px-4 py-2 rounded-full border text-sm transition ${active===t.key?'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white border-transparent shadow-md shadow-fuchsia-500/20':'border-purple-200 text-purple-700 hover:bg-purple-50'}`}>{t.label}</button>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-purple-100 bg-white p-6 shadow-[0_12px_40px_rgba(16,24,40,0.08)]">
          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((c)=> (
              <div key={c.title} className="p-5 rounded-2xl bg-purple-50/40 border border-purple-100 hover:bg-purple-50/60 transition">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white ring-1 ring-purple-200/30 shadow-lg shadow-fuchsia-500/20">{c.icon}</div>
                <div className="mt-3 font-semibold text-gray-900">{c.title}</div>
                <div className="text-sm text-gray-600">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
