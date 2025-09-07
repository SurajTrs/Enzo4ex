import React from "react";
import one from "../../assets/enzo4ex-hero.png";
import two from "../../assets/enzo4ex-hero.png";
import three from "../../assets/enzo4ex-hero.png";

export default function MT5Zigzag() {
  const rows = [
    { title: "1,800+ instruments", desc: "Trade forex, indices, commodities and more with MT5.", img: one, icon: "📦" },
    { title: "Raw pricing", desc: "Reduce trading costs by accessing raw pricing from liquidity providers.", img: two, icon: "💠" },
    { title: "Trade the way you want", desc: "All strategies are welcome on our MT5 platform, including EA trading.", img: three, icon: "🧩" },
    { title: "VPS hosting", desc: "Stay permanently connected to MT5 with a discounted VPS.", img: two, icon: "🖥️" },
  ];
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Elevate your MT5 setup</h2>
          <p className="text-gray-600">Powerful infrastructure and flexible trading conditions to support your workflow.</p>
        </div>
        <div className="space-y-12">
          {rows.map((r, idx)=> (
            <div key={r.title} className={`grid lg:grid-cols-2 gap-8 items-center ${idx%2===1 ? 'lg:grid-flow-dense' : ''}`}>
              <div className={idx%2===1 ? 'lg:order-last' : ''}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 mb-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />
                  <span className="text-sm font-medium">{r.icon} Highlight</span>
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-gray-900">{r.title}</h3>
                <p className="text-gray-600 mt-1">{r.desc}</p>
              </div>
              <div className="group rounded-3xl overflow-hidden border border-purple-100 bg-white shadow-[0_10px_35px_rgba(16,24,40,0.06)] hover:shadow-[0_18px_55px_rgba(16,24,40,0.10)] transition-shadow">
                <div className="relative">
                  <div className="pointer-events-none absolute -top-6 -right-6 w-40 h-40 bg-purple-200/40 blur-3xl rounded-full" />
                  <div className="pointer-events-none absolute -bottom-6 -left-6 w-40 h-40 bg-fuchsia-200/40 blur-3xl rounded-full" />
                  <img src={r.img} alt={r.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
