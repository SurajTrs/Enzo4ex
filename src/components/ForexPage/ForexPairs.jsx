import React from "react";
import whyright from "../../assets/whyright.png";

const pairs = [
  {
    title: "Major pairs",
    desc: "The world's most traded currencies – EURUSD, GBPUSD, USDJPY, and more. High liquidity. Low spreads.",
    bg: "from-[#0b1b34] to-[#102044]",
  },
  {
    title: "Minor pairs",
    desc: "Pairs without USD, like EURGBP or AUDJPY. Great for capturing regional trends.",
    bg: "from-[#102044] to-[#152a55]",
  },
  {
    title: "Exotic pairs",
    desc: "Emerging market currencies paired with majors, like USDMXN or EURZAR. Higher risk, higher reward potential.",
    bg: "from-[#152a55] to-[#0b1b34]",
  },
];

export default function ForexPairs() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-12 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Choose from a wide range of forex pairs</h3>
          <p className="mt-2 text-gray-600">Build a diversified portfolio. Trade trends across regions. Tap into global momentum.</p>
        </div>

        {/* Grid: first row 2 cards, second row 1 full-width */}
        <div className="grid grid-cols-12 gap-6">
          {pairs.map((card, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-b ${card.bg} text-white p-8 shadow-[0_16px_60px_rgba(16,24,40,0.25)] ${idx === 2 ? 'col-span-12' : 'col-span-12 md:col-span-6'} min-h-[260px]`}
            >
              {/* Content layout: left text, right image */}
              <div className="grid grid-cols-12 gap-6 items-center">
                <div className="col-span-12 md:col-span-7">
                  <h4 className="text-white text-2xl font-semibold mb-2">{card.title}</h4>
                  <p className="text-white/80 max-w-xl text-sm md:text-base">{card.desc}</p>
                </div>
                <div className="col-span-12 md:col-span-5 relative">
                  {/* subtle green glow behind image */}
                  <div className="pointer-events-none absolute -inset-3 rounded-[28px] bg-[radial-gradient(120px_120px_at_70%_80%,rgba(16,185,129,0.35),transparent_60%)] blur-2xl opacity-60" />
                  <img src={whyright} alt="decorative coin" className="relative w-full max-w-[220px] md:max-w-[260px] ml-auto object-contain" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
