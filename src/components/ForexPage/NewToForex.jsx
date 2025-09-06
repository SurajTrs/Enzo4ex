import React from "react";

export default function NewToForex() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: copy card (light) */}
          <div className="p-8 rounded-3xl bg-white border border-purple-100 shadow-[0_8px_30px_rgba(88,28,135,0.06)]">
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">New to forex?</h3>
            <p className="mt-2 text-gray-600">
              Learn the essentials with bite‑sized lessons, guides and practice trading on a risk‑free demo account.
            </p>
            <div className="mt-6 flex gap-3">
              <button className="px-5 py-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition">Start a demo</button>
              <button className="px-5 py-3 rounded-full border border-purple-200 text-purple-700 hover:bg-purple-50 transition">Explore education</button>
            </div>
          </div>

          {/* Right: topic tiles (light) */}
          <div className="grid grid-cols-2 gap-4">
            {["Basics", "Strategies", "Risk", "Platforms", "Analysis", "Glossary"].map((t) => (
              <div key={t} className="p-5 rounded-2xl bg-white border border-purple-100 text-center shadow-[0_6px_20px_rgba(88,28,135,0.04)]">
                <div className="text-sm font-medium text-gray-800">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
