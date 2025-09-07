import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Banknote, Gem, Bitcoin, LineChart, BarChart3, BadgePercent, Timer } from "lucide-react";
import phoneImg from "../../assets/phoneImg.webp";
import desktopImg from "../../assets/tradeSlider4.webp";

export default function TechShowcase({
  title = "Cutting-edge technology",
  description = "We empower traders with the latest technology across a wide range of financial markets on our award-winning trading platform.",
  ctaLabel = "Explore Platform",
  onCtaClick,
  items = [
    { label: "Forex", Icon: Banknote, href: "/forex" },
    { label: "Commodities", Icon: Gem, href: "/commodities" },
    { label: "Crypto", Icon: Bitcoin, href: "/crypto" },
    { label: "Indices", Icon: LineChart, href: "/indices" },
    { label: "Stocks", Icon: BarChart3, href: "/stocks" },
    { label: "ETFs", Icon: BadgePercent, href: "/etf" },
    { label: "Futures", Icon: Timer, href: "/futures" },
  ],
}) {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl bg-slate-100 p-4 md:p-6 lg:p-10 overflow-hidden"
          >
            <div className="absolute inset-0 rounded-3xl" style={{ boxShadow: "inset 0 0 0 1px rgba(148, 163, 184, 0.15)" }} />
            <div className="aspect-[16/9] w-full rounded-xl overflow-hidden shadow-lg">
              <img src={desktopImg} alt="Platform desktop" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <img
              src={phoneImg}
              alt="Platform mobile"
              className="hidden sm:block absolute bottom-0 right-6 w-36 md:w-44 lg:w-56 drop-shadow-xl translate-y-6"
              loading="lazy"
            />
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="px-1"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">{title}</h2>
            <p className="mt-3 text-gray-700 max-w-xl">{description}</p>
            <div className="mt-6">
              <button
                onClick={onCtaClick}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 text-slate-900 hover:bg-slate-50 transition-colors shadow-sm"
              >
                {ctaLabel}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Markets list */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-gray-900">Enjoy access to global markets</h3>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {items.map((it, idx) => (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.04 * idx }}
                className="rounded-2xl bg-slate-100 hover:bg-slate-200/70 transition-colors"
              >
                <Link to={it.href} className="flex items-center gap-2 justify-center px-4 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-2xl">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white text-emerald-600 shadow-sm border border-slate-200">
                    <it.Icon className="w-4 h-4" />
                  </span>
                  <span className="text-sm font-medium text-gray-900">{it.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
