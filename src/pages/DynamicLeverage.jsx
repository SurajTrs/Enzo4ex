import React, { useMemo, useState } from "react";
import data from "../data/dynamicLeverage.json";
import forexbg from "../assets/forexbg.png";

export default function DynamicLeverage() {
  const groups = data.groups;
  const [activeKey, setActiveKey] = useState(groups[0]?.key || "");
  const group = useMemo(() => groups.find(g => g.key === activeKey) || groups[0], [groups, activeKey]);

  return (
    <section className="relative py-14 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_10%_-10%,rgba(168,85,247,0.12),transparent_60%),radial-gradient(45%_40%_at_100%_110%,rgba(236,72,153,0.10),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Hero (dark) */}
        <div className="mb-8">
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-[#0b1024] via-[#0b1024] to-[#121736] shadow-[0_16px_60px_rgba(2,6,23,0.6)]">
            <img src={forexbg} alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_10%_10%,rgba(139,92,246,0.18),transparent_60%),radial-gradient(50%_40%_at_100%_90%,rgba(236,72,153,0.12),transparent_60%)]" />
            <div className="absolute inset-0 bg-black/35" />
            <div className="relative p-6 md:p-10 text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-3">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-400" />
                <span className="text-sm font-medium">Dynamic leverage tiers</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Dynamic leverage tiers</h1>
              <p className="text-slate-200 max-w-2xl">Discover how leverage adjusts based on asset class and trade size.</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-4 flex flex-wrap gap-2">
          {groups.map((g) => (
            <button key={g.key} onClick={() => setActiveKey(g.key)} className={`px-4 py-2 rounded-full border text-sm transition ${activeKey===g.key?'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white border-transparent shadow-md shadow-fuchsia-500/20':'border-purple-200 text-purple-700 hover:bg-purple-50'}`}>{g.label}</button>
          ))}
        </div>

        {/* Included instruments */}
        <div className="mb-6 rounded-3xl border border-purple-100 bg-white p-4 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-wide text-gray-600 mb-3">Included instruments</div>
          <div className="flex flex-wrap gap-2">
            {group.instruments.map((sym) => (
              <span key={sym} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 text-xs border border-purple-100">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />
                {sym}
              </span>
            ))}
          </div>
        </div>

        {/* Tiers table */}
        <div className="overflow-hidden rounded-3xl border border-purple-100 bg-white shadow-[0_12px_40px_rgba(16,24,40,0.08)]">
          {/* Desktop header */}
          <div className="hidden md:grid grid-cols-12 text-xs font-semibold uppercase tracking-wide text-gray-600 bg-purple-50/60">
            <div className="col-span-6 p-3">Lot tiers</div>
            <div className="col-span-3 p-3 text-center">Margin requirement</div>
            <div className="col-span-3 p-3 text-center">Leverage*</div>
          </div>
          <div>
            {group.tiers.map((t, idx) => (
              <div key={t.lotRange+idx} className={`hidden md:grid grid-cols-12 items-center ${idx%2===0?'bg-white':'bg-purple-50/30'}`}>
                <div className="col-span-6 p-3 text-gray-900">{t.lotRange}</div>
                <div className="col-span-3 p-3 text-center text-gray-900">{t.margin}</div>
                <div className="col-span-3 p-3 text-center text-gray-900">{t.leverage}</div>
              </div>
            ))}
          </div>

          {/* Mobile cards */}
          <div className="md:hidden divide-y divide-purple-100">
            {group.tiers.map((t, idx) => (
              <div key={t.lotRange+idx+"m"} className="p-4">
                <div className="text-sm font-semibold text-gray-900">{t.lotRange}</div>
                <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                  <div className="rounded-xl bg-purple-50/50 border border-purple-100 p-2"><div className="text-xs text-gray-500">Margin</div><div className="font-medium text-gray-900">{t.margin}</div></div>
                  <div className="rounded-xl bg-purple-50/50 border border-purple-100 p-2"><div className="text-xs text-gray-500">Leverage*</div><div className="font-medium text-gray-900">{t.leverage}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div className="mt-6 grid md:grid-cols-2 gap-4 text-sm text-gray-600">
          {data.notes.map((n, i) => (
            <div key={i} className="p-4 rounded-2xl bg-white border border-purple-100">{n}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
