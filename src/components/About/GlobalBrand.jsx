import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Globe, Building2, Headset, Clock } from "lucide-react";
import globeImg from "../../assets/globe.png";

export default function GlobalBrand() {
  const stats = [
    { label: "Established", value: "2010", Icon: Clock },
    { label: "Countries Served", value: "165+", Icon: Globe },
    { label: "Offices", value: "Global", Icon: Building2 },
    { label: "Support", value: "24/7", Icon: Headset },
  ];

  const milestones = [
    { year: "2025", items: ["Dynamic Tiered Leverage", "ThinkRewards Loyalty Programme"] },
    { year: "2024", items: ["Best Newcomer award TradingView"] },
    { year: "2023", items: ["DFSA licence", "Regulated by NZFMA"] },
    { year: "2022", items: ["Launched in EU", "Licensed by FSCA"] },
  ];

  const [currentMilestone, setCurrentMilestone] = React.useState(0);

  const nextMilestone = () => {
    setCurrentMilestone((prev) => (prev === milestones.length - 1 ? 0 : prev + 1));
  };

  const prevMilestone = () => {
    setCurrentMilestone((prev) => (prev === 0 ? milestones.length - 1 : prev - 1));
  };

  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        {/* Globe Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-12 h-80 md:h-[28rem] lg:h-[36rem]">
          <img
            src={globeImg}
            alt="Global presence"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="px-4 text-center">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                A global brand trusted worldwide
              </h2>
              <p className="mt-3 text-white/90 text-sm md:text-base max-w-3xl mx-auto">
                Built for performance and reliability, delivering best‑in‑class trading experiences since 2010.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column */}
          <div className="flex flex-col h-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">A global presence, local expertise</h2>
              <p className="mt-2 text-gray-700 leading-relaxed">Our worldwide team of specialists supports you at every step, with responsive service and resources tailored to your trading goals.</p>
              
              <div className="mt-6 flex-1 rounded-3xl border border-purple-100 p-6 bg-white/70 backdrop-blur-sm shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
                <h3 className="text-lg font-extrabold text-gray-900">Committed to your success</h3>
                <p className="mt-2 text-gray-700 leading-relaxed">At Enzo4ex, we enhance your trading journey with institutional‑grade conditions, powerful tools, rich education, and world‑class 24/7 support.</p>
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.08 * index }}
                      className="p-4 rounded-xl border border-purple-100 bg-gradient-to-br from-purple-50 to-white hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white border border-purple-100 text-purple-700">
                          <stat.Icon className="w-5 h-5" />
                        </span>
                        <div>
                          <dt className="text-xs uppercase tracking-wide text-purple-700">{stat.label}</dt>
                          <dd className="text-2xl font-bold text-gray-900 leading-tight">{stat.value}</dd>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Milestones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex flex-col h-full"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">Key milestones</h2>
              <div className="flex gap-2">
                <button 
                  onClick={prevMilestone}
                  className="p-2 rounded-full bg-white border border-purple-200 text-purple-700 hover:bg-purple-50 transition-colors"
                  aria-label="Previous milestone"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextMilestone}
                  className="p-2 rounded-full bg-white border border-purple-200 text-purple-700 hover:bg-purple-50 transition-colors"
                  aria-label="Next milestone"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="relative h-full min-h-[300px] flex-1 rounded-3xl bg-gradient-to-br from-purple-50 to-white p-6 border border-purple-100 shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
              <motion.div 
                key={currentMilestone}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col"
              >
                <span className="inline-flex items-center gap-2 text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                  {milestones[currentMilestone].year}
                </span>
                <ul className="mt-4 space-y-3 flex-1">
                  {milestones[currentMilestone].items.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * (i + 1) }}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="mt-1 flex-shrink-0 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />
                      <span className="inline-flex items-center gap-2">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">New</span>
                        <span>{item}</span>
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {milestones.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMilestone(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentMilestone === index ? 'bg-purple-600 w-6' : 'bg-purple-200'
                    }`}
                    aria-label={`Go to milestone ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
