"use client";
import React from "react";
import { ChevronRight } from "lucide-react";
import { assets } from "../assets/assets";

export default function HeroSection() {
  return (
    <section className="relative text-white overflow-hidden rounded-b-[3rem]">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={assets.heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="relative max-w-[90%] mx-auto min-h-[70vh] flex flex-col items-center justify-center gap-6 py-14 text-center">
        {/* Centered Content */}
        <div className="w-full max-w-3xl space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#1B2B52]/50 text-sm px-3 py-1 rounded-full mx-auto">
            <span className="bg-purple-600 text-white text-xs font-semibold px-1.5 py-0.2 rounded-full">
              NEW
            </span>
            <span className="font-semibold text-sm">
              Trade with confidence on Enzo4exTrader — wide range of assets,
              smart tools, and real-time insights.
            </span>
            <ChevronRight className="w-4 h-4" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Think beyond the <br className="hidden sm:block" /> trade
          </h1>

          {/* Subtext */}
          <p className="text-gray-300 text-lg">
            Tools, insights, and access that go further than execution.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-white/90 transition">
              Trade now
            </button>
            <button className="px-6 py-3 bg-[#2A344A] text-white font-semibold rounded-full hover:bg-[#39445C] transition">
              Or try demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
