import React from "react";

export default function TVTools() {
  const tools = [
    { title: "Advanced charting", desc: "Utilise 20+ chart types, multi‑chart mode, and custom timeframes from 1 second to 12 months.", icon: "📊" },
    { title: "Technical analysis", desc: "Access 400+ built‑in indicators, 110+ drawing tools, and automatic candlestick detection.", icon: "🛠️" },
    { title: "Network of traders", desc: "Connect with traders worldwide and share your trades, strategies and ideas.", icon: "🌐" },
    { title: "Customisable alerts", desc: "Stay informed via text, email, and push notifications for the price moves you care about.", icon: "🔔" },
    { title: "Strategy tester", desc: "Simulate activity and backtest strategies with detailed performance reports.", icon: "🧪" },
  ];

  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Enjoy access to advanced tools and features</h2>
          <p className="text-gray-600">Professional‑grade capabilities to analyse, test and execute with confidence.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((t)=> (
            <article key={t.title} className="group rounded-3xl bg-white border border-purple-100 shadow-[0_10px_35px_rgba(16,24,40,0.06)] hover:shadow-[0_18px_55px_rgba(16,24,40,0.10)] transition-shadow h-full">
              <div className="p-6 flex flex-col h-full">
                <div className="inline-flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white ring-1 ring-purple-200/30 shadow-lg shadow-fuchsia-500/20">{t.icon}</span>
                  <h3 className="font-semibold text-gray-900 text-lg">{t.title}</h3>
                </div>
                <div className="mt-3 text-sm text-gray-600">{t.desc}</div>
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
