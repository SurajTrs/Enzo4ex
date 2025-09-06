import React from "react";
import mobileShot from "../../assets/enzo4ex-hero.png";

export default function Enzo4exMobile({ previewSrc }) {
  const bullets = [
    { title: "Stay tuned wherever you go", desc: "Mobile apps with alerts, watchlists and order management." },
    { title: "Custom order ticket", desc: "Quick entries with clear margin, costs and risk controls." },
    { title: "Spotlight search", desc: "Jump to any instrument instantly with global search." },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_10%_-10%,rgba(168,85,247,0.12),transparent_60%),radial-gradient(45%_40%_at_100%_110%,rgba(236,72,153,0.10),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="rounded-3xl overflow-hidden border border-purple-100 bg-white shadow-[0_16px_50px_rgba(16,24,40,0.08)]">
          <div className="grid lg:grid-cols-2">
            {/* Copy */}
            <div className="p-8 md:p-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 mb-3">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />
                <span className="text-sm font-medium">Mobile trading</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">Trade anywhere with Enzo4exTrader</h3>
              <p className="mt-1 text-gray-600">Fast, powerful and built for the go. Keep your strategies moving with our iOS, Android and Desktop apps.</p>

              <div className="mt-5 grid sm:grid-cols-2 gap-3">
                {bullets.map((b)=> (
                  <div key={b.title} className="p-4 rounded-2xl bg-purple-50/40 border border-purple-100">
                    <div className="font-semibold text-gray-900">{b.title}</div>
                    <div className="text-sm text-gray-600">{b.desc}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <a href="#download" className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-fuchsia-500/30 hover:opacity-95">Download</a>
                <a href="#features" className="px-5 py-2.5 rounded-full border border-purple-200 text-purple-700 hover:bg-purple-50">Explore features</a>
              </div>
            </div>

            {/* Image */}
            <div className="relative p-6 md:p-10">
              <div className="pointer-events-none absolute -top-10 right-0 w-60 h-60 bg-purple-300/30 blur-3xl rounded-full" />
              <div className="pointer-events-none absolute bottom-0 -left-10 w-60 h-60 bg-fuchsia-300/30 blur-3xl rounded-full" />
              <div className="rounded-[22px] overflow-hidden border border-purple-100 bg-white shadow-[0_12px_40px_rgba(16,24,40,0.10)]">
                <img src={previewSrc || mobileShot} alt="Enzo4ex mobile preview" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
