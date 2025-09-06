import React from "react";

export default function TVBenefits() {
  const bullets = [
    { title: "Seamless account connection", desc: "Connect your ThinkMarkets account and trade directly on the TradingView platform." },
    { title: "Excellent trading conditions", desc: "Benefit from tight spreads, fast execution and no dealing desk intervention." },
    { title: "Dynamic leverage", desc: "Manage your risk with leverage that automatically adjusts to your trading volume." },
    { title: "4,000+ instruments", desc: "Trade CFDs on a wide range of financial instruments across global markets." },
  ];

  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Elevate your trading experience</h2>
          <p className="text-gray-600">TradingView is the world's largest charting platform – used by 60 million people in 200+ countries</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bullets.map((b)=> (
            <div key={b.title} className="p-6 rounded-3xl bg-white border border-purple-100 shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white ring-1 ring-purple-200/30 shadow-lg shadow-fuchsia-500/20">★</div>
              <div className="mt-3 font-semibold text-gray-900">{b.title}</div>
              <div className="text-sm text-gray-600">{b.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
