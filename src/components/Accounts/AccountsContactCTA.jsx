import React from "react";

export default function AccountsContactCTA() {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="rounded-3xl border border-purple-100 bg-gradient-to-r from-purple-50 to-fuchsia-50 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-extrabold text-gray-900">Have questions? Get in touch</h3>
              <p className="text-gray-700 text-sm">If you have any questions or enquiries, please reach out to us at <a className="underline text-purple-700" href="mailto:support@thinkmarkets.com">support@thinkmarkets.com</a>.</p>
            </div>
            <div className="flex gap-2">
              <a href="/contact" className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-sm">Contact support</a>
              <a href="/classic-leverage" className="px-5 py-2.5 rounded-full border border-purple-200 text-purple-700 hover:bg-white/50 text-sm">View specifications</a>
            </div>
          </div>
          <div className="mt-2 text-[11px] text-gray-600">* Applies to FX pairs, gold and silver.</div>
        </div>
      </div>
    </section>
  );
}
