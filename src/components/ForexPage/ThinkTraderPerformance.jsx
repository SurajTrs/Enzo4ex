import React from "react";
import { assets } from "../../assets/assets";
import { FiExternalLink, FiDownload, FiCpu, FiBarChart2, FiSmartphone } from "react-icons/fi";

export default function ThinkTraderPerformance() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: media */}
          <div className="flex justify-center">
            <div className="relative">
              <video
                src={assets.traderGym}
                autoPlay
                muted
                loop
                playsInline
                className="relative w-[520px] max-w-full rounded-3xl border border-purple-100 shadow-[0_16px_50px_rgba(16,24,40,0.12)]"
              />
              {/* Floating stat card */}
              <div className="hidden sm:flex items-center gap-3 absolute -bottom-5 -right-5 bg-white text-gray-900 px-4 py-3 rounded-xl shadow-xl ring-1 ring-black/5">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />
                <div className="text-sm font-semibold">99.9% uptime</div>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 mb-3">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />
              <span className="text-sm font-medium">Platform</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900">
              Enzo4exTrader: Precision‑engineered for performance
            </h3>
            <p className="mt-4 text-gray-600 max-w-xl">
              Experience a platform designed for speed, resilience and clarity. Advanced charting, multi‑device sync and intuitive order management give you an edge in fast markets.
            </p>

            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
              <li className="flex items-center gap-2"><FiCpu className="text-purple-600" /> Low‑latency execution engine</li>
              <li className="flex items-center gap-2"><FiBarChart2 className="text-purple-600" /> Advanced charting toolkit</li>
              <li className="flex items-center gap-2"><FiSmartphone className="text-purple-600" /> Multi‑device sync</li>
              <li className="flex items-center gap-2"><FiExternalLink className="text-purple-600" /> Intelligent order management</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition inline-flex items-center gap-2">
                <FiExternalLink /> Launch Web
              </button>
              <button className="px-6 py-3 rounded-full border border-purple-200 text-purple-700 hover:bg-purple-50 transition inline-flex items-center gap-2">
                <FiDownload /> Download App
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
