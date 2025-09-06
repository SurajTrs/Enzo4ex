import React from "react";
import { FiBookOpen, FiArrowUpRight } from "react-icons/fi";

export default function FuturesEducation() {
  const learn = [
    { title: "What are futures?", meta: "3 min · Beginners" },
    { title: "Manage risks with CFDs", meta: "3 min · Beginners" },
    { title: "Technical analysis", meta: "3 min · Beginners" },
    { title: "More articles", meta: "Explore" },
  ];
  return (
    <section className="relative py-16 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_10%_-10%,rgba(168,85,247,0.12),transparent_60%),radial-gradient(45%_40%_at_100%_110%,rgba(236,72,153,0.10),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 mb-3">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />
            <span className="text-sm font-medium">Trading Academy</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Learn as you go</h3>
          <p className="text-gray-600">Check out our Trading Academy to learn more about futures trading.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {learn.map((a) => (
            <button key={a.title} type="button" className="group text-left p-6 rounded-3xl bg-white border border-purple-100 shadow-[0_10px_35px_rgba(16,24,40,0.06)] hover:shadow-[0_18px_55px_rgba(16,24,40,0.10)] transition-shadow relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 rounded-full blur-2xl" />
              <div className="flex items-start justify-between gap-3">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-fuchsia-500/20 ring-1 ring-purple-200/30">
                  <FiBookOpen />
                </span>
                <FiArrowUpRight className="text-purple-600 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <div className="mt-4 font-semibold text-gray-900">{a.title}</div>
              <div className="text-xs text-gray-500 mt-1">{a.meta}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
