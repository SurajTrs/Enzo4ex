import React from "react";
import heroBg from "../../assets/forexbg.png";
import previewShot from "../../assets/enzo4ex-hero.png";

export default function TradersGym() {
  const features = [
    {
      title: "Multiple strategies",
      desc: "Create up to 50 simulations and switch between timeframes and markets.",
      icon: "⬇️",
    },
    {
      title: "Fully customisable",
      desc: "Customise simulations, instruments and periods to suit your strategy.",
      icon: "➕",
    },
    {
      title: "Multiple markets",
      desc: "Use indicators and risk tools as if you were trading live.",
      icon: "🟢",
    },
    {
      title: "Technical tools",
      desc: "Test on thousands of instruments across FX, indices, commodities and more.",
      icon: "👍",
    },
    {
      title: "24/7 testing",
      desc: "Practise even when markets are closed with round‑the‑clock access.",
      icon: "🕓",
    },
    {
      title: "Save charts",
      desc: "Save Gym charts and access them seamlessly on your live account.",
      icon: "💾",
    },
  ];

  return (
    <section className="relative py-14 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_10%_-10%,rgba(168,85,247,0.12),transparent_60%),radial-gradient(45%_40%_at_100%_110%,rgba(236,72,153,0.10),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Dark hero card */}
        <div className="mb-10">
          <div className="relative overflow-hidden rounded-[28px] border border-slate-800 bg-gradient-to-br from-[#0b1024] via-[#0b1024] to-[#121736] text-white shadow-[0_16px_60px_rgba(2,6,23,0.6)]">
            <img src={heroBg} alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_10%_10%,rgba(139,92,246,0.18),transparent_60%),radial-gradient(50%_40%_at_100%_90%,rgba(236,72,153,0.12),transparent_60%)]" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-extrabold">Mastering the markets</h1>
              <p className="text-slate-200">starts with mastering your strategies</p>
              <div className="mt-5">
                <a href="#start" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-lg hover:opacity-95">
                  Try Traders' Gym now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div id="start" className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-[22px] bg-purple-50/40 border border-purple-100 p-6 shadow-[0_8px_24px_rgba(16,24,40,0.06)] hover:shadow-[0_14px_40px_rgba(16,24,40,0.10)] transition">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white ring-1 ring-purple-200/30 shadow-lg shadow-fuchsia-500/20 mb-3">{f.icon}</div>
              <div className="font-semibold text-gray-900">{f.title}</div>
              <div className="text-sm text-gray-600">{f.desc}</div>
            </div>
          ))}
        </div>

        {/* What is Traders' Gym? */}
        <div className="mt-16">
          <h2 className="text-[28px] md:text-[36px] leading-tight font-extrabold text-gray-900 tracking-tight">What is Traders’ Gym?</h2>
          <p className="mt-3 text-gray-600 max-w-3xl">Traders’ Gym is our exclusive tool that lets you test your trading strategies on historical data in minutes. This innovative simulator creates a realistic environment to see how your ideas would have performed in the past.</p>

          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
            {/* Left list */}
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-100">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white ring-1 ring-purple-200/30">⏱️</div>
                  <div>
                    <div className="font-semibold text-gray-900">Historical market data*</div>
                    <div className="text-sm text-gray-600">Visualise your strategies against authentic price movements across global markets, gaining invaluable insight into potential performance.</div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-100">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white ring-1 ring-purple-200/30">⚙️</div>
                  <div>
                    <div className="font-semibold text-gray-900">Customisable settings</div>
                    <div className="text-sm text-gray-600">Choose instruments, set time ranges and fine‑tune parameters to mirror your exact trading method.</div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-100">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white ring-1 ring-purple-200/30">📈</div>
                  <div>
                    <div className="font-semibold text-gray-900">Technical analysis tools*</div>
                    <div className="text-sm text-gray-600">Add indicators and risk controls just like you would in live trading to evaluate strategy robustness.</div>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-xs text-gray-500">* Some features may vary by account type and region.</div>
            </div>

            {/* Right image */}
            <div className="rounded-3xl overflow-hidden bg-white border border-purple-100 shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
              <img src={previewShot} alt="Traders’ Gym preview" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <div className="flex items-end justify-between gap-3 mb-4">
            <h2 className="text-[28px] md:text-[32px] leading-tight font-extrabold text-gray-900 tracking-tight">Frequently asked questions</h2>
            <a href="#" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 text-purple-700 hover:bg-purple-50 text-sm">View all FAQs</a>
          </div>
          <div className="rounded-3xl border border-purple-100 bg-white p-4 md:p-6 shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
            <div className="divide-y divide-purple-100">
              <details className="group py-3" open>
                <summary className="list-none cursor-pointer flex items-center justify-between gap-2">
                  <span className="font-semibold text-gray-900">Can I use Traders’ Gym on a demo account?</span>
                  <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-50 text-purple-700 group-open:rotate-45 transition">+</span>
                </summary>
                <div className="mt-2 text-sm text-gray-600">Yes. Traders’ Gym is designed for learning and testing, so you can use it alongside your demo account to refine strategies without risk.</div>
              </details>
              <details className="group py-3">
                <summary className="list-none cursor-pointer flex items-center justify-between gap-2">
                  <span className="font-semibold text-gray-900">Can I use Traders’ Gym on all platforms?</span>
                  <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-50 text-purple-700 group-open:rotate-45 transition">+</span>
                </summary>
                <div className="mt-2 text-sm text-gray-600">Traders’ Gym is available within our ecosystem. Availability may vary by region and account type; we’ll surface an in‑app prompt where supported.</div>
              </details>
              <details className="group py-3">
                <summary className="list-none cursor-pointer flex items-center justify-between gap-2">
                  <span className="font-semibold text-gray-900">Is Traders’ Gym free to use?</span>
                  <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-50 text-purple-700 group-open:rotate-45 transition">+</span>
                </summary>
                <div className="mt-2 text-sm text-gray-600">Yes. It’s free for Enzo4ex clients. Certain advanced datasets or extended history windows may require eligibility.</div>
              </details>
            </div>
            <div className="mt-3 text-xs text-gray-500">* Please note, Traders’ Gym is a simulated environment based on previous historical data. Performance on Traders’ Gym does not guarantee future returns.</div>
            <div className="mt-4 md:hidden">
              <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 text-purple-700 hover:bg-purple-50 text-sm">View all FAQs</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
