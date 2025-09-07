import React from "react";
import heroBg from "../../assets/forexbg.png";

export default function ContactHero() {
  return (
    <section className="relative">
      <div
        className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-lg"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/75 to-slate-900/55" />
        <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 120px rgba(0,0,0,0.35)" }} />
        <div className="relative p-8 md:p-12">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Contact us</h1>
            <p className="mt-3 text-slate-200/95 text-lg leading-relaxed">
              Our multilingual client support team is available 24/7 via live chat, email, or phone. Reach out to us any time you have an inquiry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
