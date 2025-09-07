import React from "react";

export default function AccountsSpecials() {
  const specials = [
    {
      title: "Swap-free account",
      desc: "Designed for traders of religious faith, our swap-free account is exempt from overnight interest adjustments.",
      points: ["Interest-free", "Superior conditions", "Cutting-edge platforms"],
      cta: { label: "Learn more", href: "/swap-free" },
      icon: "🕊️",
    },
    {
      title: "Demo account",
      desc: "Practise your trading skills and test strategies with virtual funds in a risk-free environment.",
      cta: { label: "Explore Demo", href: "/demo-account" },
      icon: "🎮",
    },
    {
      title: "Joint account",
      desc: "Share your trading experience with a family member or a trusted partner. Available on request.",
      cta: { label: "Request Joint account", href: "/joint-account" },
      icon: "👥",
    },
  ];

  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specials.map((s)=> (
            <article key={s.title} className="group rounded-3xl border border-purple-100 bg-white p-6 shadow-[0_10px_35px_rgba(16,24,40,0.06)] hover:shadow-[0_18px_55px_rgba(16,24,40,0.10)] transition-shadow">
              <div className="inline-flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white ring-1 ring-purple-200/30 shadow-lg shadow-fuchsia-500/20">{s.icon}</span>
                <h3 className="text-lg font-extrabold text-gray-900">{s.title}</h3>
              </div>
              <p className="mt-2 text-sm text-gray-700">{s.desc}</p>
              {s.points && (
                <ul className="mt-3 text-sm text-gray-700 space-y-1 list-disc pl-5">
                  {s.points.map((p)=> (<li key={p}>{p}</li>))}
                </ul>
              )}
              <div className="mt-4 pt-4 border-t border-purple-100 flex items-center justify-between">
                <a href={s.cta.href} className="inline-flex px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-sm shadow-lg shadow-fuchsia-500/20 hover:opacity-95">{s.cta.label}</a>
                <a href={s.cta.href} className="text-sm font-medium text-purple-700 hover:text-purple-800">Learn more →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
