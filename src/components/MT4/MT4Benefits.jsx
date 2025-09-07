import React from "react";

export default function MT4Benefits() {
  const items = [
    { title: "99.9% fill rate", desc: "Trade with confidence, knowing that your orders will get executed.", icon: "✅" },
    { title: "350+ instruments", desc: "Enjoy instant, easy access to a range of global markets.", icon: "📈" },
    { title: "No intervention of trades", desc: "No manual trade intervention with ultra‑fast execution.", icon: "⚡" },
    { title: "Automated trading", desc: "Orders are executed automatically with reliable pricing.", icon: "🤖" },
  ];
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i)=> (
            <div key={i.title} className="p-6 rounded-3xl bg-white border border-purple-100 shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white ring-1 ring-purple-200/30 shadow-lg shadow-fuchsia-500/20">{i.icon}</div>
              <div className="mt-3 font-semibold text-gray-900">{i.title}</div>
              <div className="text-sm text-gray-600">{i.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
