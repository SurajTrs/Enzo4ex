import React from "react";
import { FiClock, FiBarChart2, FiUnlock, FiLayers, FiTarget, FiZap } from "react-icons/fi";

const features = [
  {
    icon: <FiClock className="w-7 h-7" />,
    title: "24/5 market access",
    description:
      "The forex market operates 24 hours a day, five days a week, allowing traders to participate anytime, anywhere across global sessions.",
  },
  {
    icon: <FiBarChart2 className="w-7 h-7" />,
    title: "High liquidity",
    description:
      "Forex is the most liquid financial market in the world, enabling fast execution and tighter spreads, even with large trading volumes.",
  },
  {
    icon: <FiUnlock className="w-7 h-7" />,
    title: "Low entry barrier",
    description:
      "Traders can start with a relatively small capital and still gain access to leveraged trading, making it accessible for both beginners and professionals.",
  },
  {
    icon: <FiLayers className="w-7 h-7" />,
    title: "Diverse trading opportunities",
    description:
      "With over 45+ currency pairs to choose from - including major, minor, and exotic pairs - forex trading offers opportunities in all market conditions.",
  },
  {
    icon: <FiTarget className="w-7 h-7" />,
    title: "Flexible trading strategies",
    description:
      "The forex market supports a wide range of trading styles - from scalping and day trading to swing and long-term position trading - offering flexibility for different trader profiles.",
  },
  {
    icon: <FiZap className="w-7 h-7" />,
    title: "High leverage",
    description:
      "Maximise your trading potential with access to leverage, giving you greater market exposure with lower capital requirements.",
  },
];

function ForexMarkets() {
  return (
    <section className="relative px-6 py-20 md:px-20 font-sans overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_-10%,rgba(139,92,246,0.12),transparent_60%),radial-gradient(50%_40%_at_80%_90%,rgba(236,72,153,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 mb-3">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />
            <span className="text-sm font-medium text-purple-700">Why trade</span>
          </div>
          <h2 className="font-extrabold text-4xl md:text-5xl leading-tight tracking-tight text-gray-900">
            Currencies
          </h2>
          <p className="mt-2 text-gray-600">Global. Liquid. Always moving.</p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map(({ icon, title, description }, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-purple-100/70 bg-white/80 backdrop-blur-xl p-6 shadow-[0_10px_35px_rgba(88,28,135,0.06)] hover:shadow-[0_18px_60px_rgba(88,28,135,0.14)] transition-all duration-300 hover:-translate-y-1 animate-scaleIn"
              style={{ animationDelay: `${i * 60}ms`, animationFillMode: 'both' }}
            >
              {/* Top accent */}
              <div className="absolute inset-x-0 -top-px h-[2px] bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />

              {/* Icon */}
              <div className="mx-auto w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white flex items-center justify-center shadow-lg shadow-fuchsia-500/20 mb-4 ring-1 ring-white/20">
                {icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg text-gray-900 text-center">
                {title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed text-center mt-2">
                {description}
              </p>

              {/* Hover glow */}
              <div className="pointer-events-none absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(200px_200px_at_var(--x,50%)_var(--y,50%),rgba(168,85,247,0.15),transparent_60%)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ForexMarkets;
