import React from "react";

export default function EtfWhyChoose() {
  const items = [
    { title: "Dependable platforms", desc: "Benefit from 99.87% uptime on the ThinkTrader platform." },
    { title: "300+ ETFs", desc: "Build a diversified portfolio across many different sectors and countries." },
    { title: "No dealing desk", desc: "Your orders are executed automatically with no manual intervention." },
  ];
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-8 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">The benefits of trading with ThinkMarkets</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((b) => (
            <div key={b.title} className="p-6 rounded-3xl bg-white border border-purple-100 shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
              <h4 className="font-semibold text-gray-900 mb-1">{b.title}</h4>
              <p className="text-sm text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
