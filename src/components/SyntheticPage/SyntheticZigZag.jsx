import React from "react";
import whyright from "../../assets/whyright.png";

const blocks = [
  {
    k: "volatility",
    title: "Volatility indices",
    intro: "Simulate steady markets with different intensity levels.",
    bullets: [
      "Volatility 50: Slower pace, ideal for new traders",
      "Volatility 75: Balanced speed and swings",
      "Volatility 100: Fast, reactive, and high momentum",
    ],
  },
  {
    k: "boom",
    title: "Boom indices",
    intro: "Markets with sudden upward spikes.",
    bullets: [
      "Lower numbers (300, 600, 1000) = more frequent booms",
      "Great for momentum and breakout trades",
    ],
  },
  {
    k: "crash",
    title: "Crash indices",
    intro: "Sharp, regular downward moves.",
    bullets: [
      "Ideal for reversal strategies and short setups",
      "Lower numbers mean more frequent drops",
    ],
  },
  {
    k: "jump",
    title: "Jump indices",
    intro: "Quick, unexpected moves up or down every ~20 minutes.",
    bullets: [
      "Great for traders chasing high‑impact volatility in both directions",
    ],
  },
];

export default function SyntheticZigZag() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_10%_-10%,rgba(168,85,247,0.10),transparent_60%),radial-gradient(45%_40%_at_100%_110%,rgba(236,72,153,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 space-y-16">
        {blocks.map((b, idx) => {
          const leftImage = idx % 2 === 0 ? false : true; // zigzag: text/image alternating starting with text left
          return (
            <div key={b.k} className="grid lg:grid-cols-2 gap-10 items-center">
              {leftImage && (
                <div className="order-first flex justify-center">
                  <div className="relative group" style={{ perspective: 1200 }}>
                    <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-[radial-gradient(120px_120px_at_70%_80%,rgba(168,85,247,0.25),transparent_60%)] blur-2xl opacity-70" />
                    <img src={whyright} alt="illustration" className="relative w-[520px] max-w-full rounded-3xl border border-purple-100 shadow-[0_16px_50px_rgba(16,24,40,0.12)]" />
                  </div>
                </div>
              )}

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 mb-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />
                  <span className="text-sm font-medium">{b.title}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">{b.title}</h3>
                <p className="mt-2 text-gray-700">{b.intro}</p>
                <ul className="mt-4 space-y-1.5 text-gray-700">
                  {b.bullets.map((li) => (
                    <li key={li} className="flex items-start gap-2">
                      <span className="mt-1 inline-block w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />
                      <span className="text-sm">{li}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {!leftImage && (
                <div className="order-last flex justify-center">
                  <div className="relative group" style={{ perspective: 1200 }}>
                    <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-[radial-gradient(120px_120px_at_70%_80%,rgba(168,85,247,0.25),transparent_60%)] blur-2xl opacity-70" />
                    <img src={whyright} alt="illustration" className="relative w-[520px] max-w-full rounded-3xl border border-purple-100 shadow-[0_16px_50px_rgba(16,24,40,0.12)]" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
