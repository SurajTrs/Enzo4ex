import React from "react";

export default function AboutCTA() {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="rounded-3xl border border-purple-100 bg-gradient-to-r from-purple-50 to-fuchsia-50 p-6 text-center shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
          <h3 className="text-2xl font-extrabold text-gray-900">Discover the ultimate trading experience</h3>
          <p className="text-gray-700">Create a live account or try a demo to explore our platforms and markets.</p>
          <div className="mt-4 flex justify-center gap-3">
            <a href="/register" className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:opacity-95">Create live account</a>
            <a href="/demo-account" className="px-6 py-3 rounded-full border border-purple-200 text-purple-700 hover:bg-purple-50 font-semibold">Or try demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
