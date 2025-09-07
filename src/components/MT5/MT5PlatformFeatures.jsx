import React from "react";

export default function MT5PlatformFeatures() {
  const feats = [
    { title: "Expert Advisor trading", desc: "Automate your trading by creating or downloading an Expert Advisor programme.", icon: "🤖" },
    { title: "3 fully customisable charts", desc: "Quickly switch between different saved custom chart templates.", icon: "📊" },
    { title: "38 technical indicators", desc: "Identify trends and patterns through a wide selection of 38 indicators.", icon: "📈" },
    { title: "21 timeframes", desc: "Choose from 21 timeframes, from 1 minute to 1 month.", icon: "⏱️" },
    { title: "6 pending orders types", desc: "Open trades instantly or schedule them with 6 order types.", icon: "🧾" },
    { title: "Multi-thread strategy tester", desc: "Test and optimise Expert Advisors before using them.", icon: "🧪" },
  ];
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">MT5 features</h2>
          <p className="text-gray-600">Access the latest MetaTrader platform and enjoy a seamless trading experience.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feats.map((f)=> (
            <article key={f.title} className="group h-full rounded-3xl bg-white border border-purple-100 shadow-[0_10px_35px_rgba(16,24,40,0.06)] hover:shadow-[0_18px_55px_rgba(16,24,40,0.10)] transition-shadow">
              <div className="p-6 flex flex-col h-full">
                <div className="inline-flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to fuchsia-600 text-white ring-1 ring-purple-200/30 shadow-lg shadow-fuchsia-500/20">{f.icon}</span>
                  <h3 className="font-semibold text-gray-900 text-lg">{f.title}</h3>
                </div>
                <p className="mt-3 text-sm text-gray-600">{f.desc}</p>
                <div className="mt-4 pt-4 border-t border-purple-100">
                  <a href="#" className="text-sm font-medium text-purple-700 hover:text-purple-800">Learn more →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
