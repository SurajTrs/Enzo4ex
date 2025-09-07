import React from "react";
import hero from "../../assets/Home.jpg";

export default function SecuritySection() {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-28 h-28 bg-purple-200 rounded-full blur-2xl opacity-50" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-fuchsia-200 rounded-full blur-2xl opacity-50" />
            <div className="relative rounded-3xl overflow-hidden border border-purple-100 bg-white shadow-[0_12px_40px_rgba(16,24,40,0.08)]">
              <img src={hero} alt="Security illustration" className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">We take your security seriously</h2>
            <p className="mt-3 text-gray-600">At Enzo4ex, we place a great importance on regulation, security, and oversight. Discover the measures and processes we take to ensure your funds are protected.</p>
            <div className="mt-6">
              <a href="/security" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-fuchsia-500/20 hover:opacity-95">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
