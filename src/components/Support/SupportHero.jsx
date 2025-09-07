import React from "react";
import heroBg from "../../assets/forexbg.png";

export default function SupportHero() {
  const startChat = () => {
    if (typeof window !== 'undefined' && window.Intercom) {
      window.Intercom('show');
      return;
    }
    if (typeof window !== 'undefined' && window.$crisp) {
      window.$crisp.push(['do', 'chat:open']);
      return;
    }
    if (typeof window !== 'undefined' && window.Tawk_API) {
      window.Tawk_API.maximize();
      return;
    }
    alert('Live chat is not available at the moment. Please email support@enzo4ex.com.');
  };

  return (
    <section className="relative">
      <div
        className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-lg"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/75 to-slate-900/55" />
        <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 120px rgba(0,0,0,0.35)" }} />
        <div className="relative p-8 md:p-14 lg:p-16 min-h-[20rem] md:min-h-[24rem] lg:min-h-[28rem]">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Support</h1>
            <p className="mt-3 text-slate-200/95 text-lg leading-relaxed">Find answers to the most common questions you may have during your trading journey.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={startChat} type="button" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-purple-600 text-white hover:bg-purple-700">
                Start Live Chat
              </button>
              <a href="/help" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 bg-white/90 text-slate-900 hover:bg-white">
                Visit Help Centre
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
