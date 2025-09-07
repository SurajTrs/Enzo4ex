import React from "react";

export default function MT4PlatformFeatures() {
  const feats = [
    { title: "Expert Advisor trading", desc: "Create or download an Expert Advisor to automatically place trades for you.", icon: "🤖" },
    { title: "3 fully customisable charts", desc: "Customise charts with indicators, grids and period separators.", icon: "📊" },
    { title: "4 pending orders types", desc: "Open trades instantly or schedule them with multiple order types.", icon: "⏱️" },
    { title: "30 technical indicators", desc: "Uncover trends with 30 built-in indicators.", icon: "📈" },
    { title: "31 drawing tools", desc: "Personalise analysis with 31 different drawing tools.", icon: "✏️" },
  ];
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">MT4 features</h2>
          <p className="text-gray-600">MT4 is a powerful platform with cutting-edge tools for analysis and research.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feats.map((f)=> (
            <article key={f.title} className="group h-full rounded-3xl bg-white border border-purple-100 shadow-[0_10px_35px_rgba(16,24,40,0.06)] hover:shadow-[0_18px_55px_rgba(16,24,40,0.10)] transition-shadow">
              <div className="p-6 flex flex-col h-full">
                <div className="inline-flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white ring-1 ring-purple-200/30 shadow-lg shadow-fuchsia-500/20">{f.icon}</span>
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
