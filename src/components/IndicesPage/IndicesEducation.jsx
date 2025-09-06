import React from "react";

export default function IndicesEducation() {
  const topics = [
    "What is a stock index?",
    "All types of indices you need to know",
    "What affects a stock index prices?",
    "More articles",
  ];
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left copy */}
          <div className="p-8 rounded-3xl bg-white border border-purple-100 shadow-[0_8px_30px_rgba(88,28,135,0.06)]">
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">New to indices trading?</h3>
            <p className="mt-2 text-gray-600">
              Learn the basics and build confidence at your own pace. Our Trading academy gives you simple, structured guidance on how indices work and how to trade them.
            </p>
            <div className="mt-6 flex gap-3">
              <button className="px-5 py-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition">Start trading</button>
            </div>
          </div>

          {/* Right topics */}
          <div className="grid grid-cols-2 gap-4">
            {topics.map((t) => (
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
