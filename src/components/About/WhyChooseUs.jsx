import React from "react";
import { motion } from "framer-motion";
import { Target, Zap, Headphones, ShieldCheck, GraduationCap, Globe2 } from "lucide-react";

export default function WhyChooseUs() {
  const items = [
    { title: "Tight spreads", desc: "Lower trading costs with competitive, transparent pricing.", Icon: Target },
    { title: "Reliable execution", desc: "Low‑latency fills via top‑tier data centres.", Icon: Zap },
    { title: "24/7 client support", desc: "Multilingual support available around the clock.", Icon: Headphones },
    { title: "Data security", desc: "Enterprise‑grade security and encryption across platforms.", Icon: ShieldCheck },
    { title: "Free education", desc: "In‑depth articles, webinars and videos to build your skills.", Icon: GraduationCap },
    { title: "4,000+ instruments", desc: "Trade a wide selection across global markets.", Icon: Globe2 },
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">Why traders choose us</h2>
          <p className="mt-2 text-gray-700">Performance, protection and support built for serious traders.</p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 * idx }}
              className="h-full group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/80 backdrop-blur-sm p-5 shadow-sm ring-1 ring-transparent transition-all hover:-translate-y-1 hover:shadow-md hover:ring-purple-200"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-sm">
                <it.Icon className="w-5 h-5" />
              </span>
              <div className="mt-3 font-semibold text-gray-900">{it.title}</div>
              <div className="text-sm text-gray-600 leading-relaxed">{it.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
