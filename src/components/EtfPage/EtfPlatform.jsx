import React from "react";
import { FiExternalLink, FiDownload, FiBarChart2, FiBell, FiSmartphone } from "react-icons/fi";
import whyright from "../../assets/whyright.png";

export default function EtfPlatform() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative group" style={{ perspective: 1200 }}>
              <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-[radial-gradient(120px_120px_at_70%_80%,rgba(168,85,247,0.25),transparent_60%)] blur-2xl opacity-70" />
              <img src={whyright} alt="ThinkTrader platform" className="relative w-[520px] max-w-full rounded-3xl border border-purple-100 shadow-[0_16px_50px_rgba(16,24,40,0.12)]" />
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 mb-3">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />
              <span className="text-sm font-medium">Choose between two powerful platforms</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900">Trade ETFs on ThinkTrader or TradingView</h3>
            <p className="mt-4 text-gray-600 max-w-xl">Trade directly on an award‑winning platform or on TradingView while enjoying superior trading conditions.</p>
            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
              <li className="flex items-center gap-2"><FiBarChart2 className="text-purple-600" /> Advanced charting tools</li>
              <li className="flex items-center gap-2"><FiBell className="text-purple-600" /> Smart alerts and risk controls</li>
              <li className="flex items-center gap-2"><FiBarChart2 className="text-purple-600" /> One login across web & mobile</li>
              <li className="flex items-center gap-2"><FiSmartphone className="text-purple-600" /> Clean, intuitive design</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="/etf/live" className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition inline-flex items-center gap-2"><FiExternalLink /> Get started</a>
              <button className="px-6 py-3 rounded-full border border-purple-200 text-purple-700 hover:bg-purple-50 transition inline-flex items-center gap-2"><FiDownload /> Download App</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
