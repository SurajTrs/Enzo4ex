import React from "react";

export default function Values() {
  const vals = [
    { title: "Client first", desc: "We listen and act on feedback to deliver the best trading experience.", icon: "🤝" },
    { title: "Security matters", desc: "We adhere to high regulatory standards and modern encryption.", icon: "🛡️" },
    { title: "Knowledge is the key", desc: "We provide rich education so you can level up your skills.", icon: "📚" },
  ];
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Our values</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {vals.map(v => (
            <div key={v.title} className="rounded-3xl border border-purple-100 bg-white p-5 shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-lg">{v.icon}</div>
              <div className="mt-2 font-semibold text-gray-900">{v.title}</div>
              <div className="text-sm text-gray-600">{v.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
