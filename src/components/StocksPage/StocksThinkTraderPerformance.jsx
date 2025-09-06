import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import whyright from "../../assets/whyright.png";

export default function StocksThinkTraderPerformance() {
  const bullets = [
    { title: "Commission-free trades", desc: "Zero commission on your stock CFD positions." },
    { title: "Fractional trading", desc: "Trade positions that match your strategy and budget." },
    { title: "Real-time data, no hidden fees", desc: "Live pricing without platform or market data charges." },
    { title: "Leverage of up to 10:1", desc: "Open a $2,000 position with just $200." },
  ];
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0b1024] via-[#0b1024] to-[#121736] text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_10%_10%,rgba(139,92,246,0.18),transparent_60%),radial-gradient(50%_40%_at_100%_90%,rgba(236,72,153,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-3">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-400" />
              <span className="text-sm">Why trade stocks with ThinkMarkets?</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">Built for speed, reliability and insight.</h3>
            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-purple-100/90">
              {bullets.map((b) => (
                <li key={b.title} className="flex items-start gap-3">
                  <FiCheckCircle className="mt-0.5 text-purple-300" />
                  <div>
                    <div className="font-semibold text-white">{b.title}</div>
                    <div className="text-sm">{b.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a href="/stocks/live" className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition">Start trading</a>
            </div>
          </div>

          {/* Right: image */}
          <div className="flex justify-center">
            <div className="relative group" style={{ perspective: 1200 }}>
              <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-[radial-gradient(120px_120px_at_70%_80%,rgba(16,185,129,0.35),transparent_60%)] blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-90" />
              <img src={whyright} alt="platform preview" className="relative w-[460px] md:w-[520px] max-w-full will-change-transform transition-transform duration-500 ease-out transform-gpu group-hover:scale-[1.06] group-hover:-translate-y-2 group-hover:[transform:rotateX(2deg)_rotateY(-2deg)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
