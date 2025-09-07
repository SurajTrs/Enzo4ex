import React from "react";

export default function DemoCTA() {
  const steps = [
    { n: 1, title: "Sign up", desc: "Create an Enzo4ex account and verify your email." },
    { n: 2, title: "Set up", desc: "Choose your platform and enable the virtual funds account." },
    { n: 3, title: "Trade", desc: "Learn the ropes risk‑free and prepare to go live when ready." },
  ];

  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Get started with a demo account</h2>
          <p className="text-gray-600">It takes minutes to create an account and start practising with virtual funds.</p>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {steps.map((s)=> (
            <div key={s.n} className="p-6 rounded-3xl bg-white border border-purple-100 shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold">{s.n}</div>
              <div className="mt-3 font-semibold text-gray-900">{s.title}</div>
              <div className="text-sm text-gray-600">{s.desc}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <a href="/register" className="inline-flex px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:opacity-95">Create Demo account</a>
        </div>
      </div>
    </section>
  );
}
