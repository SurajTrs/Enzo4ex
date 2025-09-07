import React from "react";
import { MessageCircle, Mail, Phone } from "lucide-react";

export default function SupportCTA() {
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
    <section className="relative mt-10">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Still have questions?</h2>
            <p className="mt-2 text-slate-700">Check out our dedicated Help Centre, or get in touch with our Support team 24/7.</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <button onClick={startChat} type="button" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700">
              <MessageCircle className="w-4 h-4" /> Live Chat
            </button>
            <a href="/contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 bg-white text-slate-900 hover:bg-slate-50">
              <Mail className="w-4 h-4" /> Contact form
            </a>
            <a href="mailto:support@enzo4ex.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 bg-white text-slate-900 hover:bg-slate-50">
              <Mail className="w-4 h-4" /> Email
            </a>
            <a href="tel:+442035142374" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 bg-white text-slate-900 hover:bg-slate-50">
              <Phone className="w-4 h-4" /> +44 203 514 2374
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
