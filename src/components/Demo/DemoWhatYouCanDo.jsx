import React from "react";
import preview from "../../assets/enzo4ex-hero.png";

export default function DemoWhatYouCanDo() {
  const bullets = [
    { title: "Access multiple markets", desc: "Trade forex, indices, commodities, crypto, stocks and ETFs in live market conditions.", icon: "🌐" },
    { title: "Try useful analytics tools", desc: "Experiment with indicators, EAs, drawing tools and more.", icon: "🛠️" },
    { title: "Setups and back‑tests", desc: "Save layouts and test strategies before committing real funds.", icon: "📈" },
  ];

  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 mb-3">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />
              <span className="text-sm font-medium">Overview</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">What you can do with a Demo account</h2>
            <p className="mt-2 text-gray-600">A demo account is perfect for learning the markets and platforms as you prepare to go live — or for testing a fresh idea without risk.</p>
            <ul className="mt-4 space-y-3">
              {bullets.map((b)=> (
                <li key={b.title} className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white text-sm ring-1 ring-purple-200/30 shadow-lg shadow-fuchsia-500/20">{b.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-900">{b.title}</div>
                    <div className="text-sm text-gray-600">{b.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-4 border-t border-purple-100">
              <a href="/register" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-sm shadow-lg shadow-fuchsia-500/20 hover:opacity-95">Create Demo account</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-28 h-28 bg-purple-200 rounded-full blur-2xl opacity-50" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-fuchsia-200 rounded-full blur-2xl opacity-50" />
            <div className="relative rounded-3xl overflow-hidden border border-purple-100 bg-white shadow-[0_12px_40px_rgba(16,24,40,0.08)]">
              <img src={preview} alt="Demo preview" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
