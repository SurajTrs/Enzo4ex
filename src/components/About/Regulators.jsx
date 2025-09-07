import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Landmark } from "lucide-react";

export default function Regulators() {
  const regs = [
    { code: "FCA", name: "Financial Conduct Authority", country: "United Kingdom", countryCode: "GB", region: "UK/EU", url: "https://www.fca.org.uk", license: null },
    { code: "CySEC", name: "Cyprus Securities and Exchange Commission", country: "Cyprus", countryCode: "CY", region: "UK/EU", url: "https://www.cysec.gov.cy", license: null },
    { code: "ASIC", name: "Australian Securities and Investments Commission", country: "Australia", countryCode: "AU", region: "APAC", url: "https://asic.gov.au", license: null },
    { code: "NZFMA", name: "New Zealand Financial Markets Association", country: "New Zealand", countryCode: "NZ", region: "APAC", url: "https://www.nzfma.org", license: null },
    { code: "DFSA", name: "Dubai Financial Services Authority", country: "United Arab Emirates", countryCode: "AE", region: "MENA", url: "https://www.dfsa.ae", license: null },
    { code: "FSCA", name: "Financial Sector Conduct Authority", country: "South Africa", countryCode: "ZA", region: "Africa", url: "https://www.fsca.co.za", license: null },
    { code: "FSA", name: "Financial Services Authority", country: "Seychelles", countryCode: "SC", region: "Indian Ocean", url: "https://fsaseychelles.sc", license: null },
    { code: "FSC", name: "Financial Services Commission", country: "Mauritius", countryCode: "MU", region: "Indian Ocean", url: "https://www.fscmauritius.org", license: null },
    { code: "CIMA", name: "Cayman Islands Monetary Authority", country: "Cayman Islands", countryCode: "KY", region: "Offshore", url: "https://www.cima.ky", license: null },
  ];

  const regionOrder = ["UK/EU", "APAC", "MENA", "Africa", "Indian Ocean", "Offshore"]; 

  const flagFromCountryCode = (cc) => {
    if (!cc) return "";
    // Convert ISO country code to emoji flag
    return cc
      .toUpperCase()
      .replace(/./g, char => String.fromCodePoint(127397 + char.charCodeAt()));
  };
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex items-start gap-3">
          <span className="hidden sm:inline-flex p-2 rounded-xl bg-purple-50 text-purple-700 border border-purple-100"><ShieldCheck className="w-5 h-5" /></span>
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">Globally regulated broker</h2>
            <p className="mt-1 text-gray-700">We operate under oversight from trusted financial authorities worldwide, adding robust protections for our clients.</p>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[...regs]
            .sort((a, b) => regionOrder.indexOf(a.region) - regionOrder.indexOf(b.region))
            .map((r, idx) => (
            <motion.div
              key={r.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 * idx }}
              className="group rounded-3xl border border-purple-100 bg-white p-5 shadow-[0_10px_35px_rgba(16,24,40,0.06)] hover:shadow-md hover:border-purple-200 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="inline-flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-purple-50 text-purple-700 border border-purple-100" title={r.region}>
                    <Landmark className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="text-sm font-extrabold text-gray-900 tracking-tight">{r.code}</div>
                    <div className="text-[11px] text-gray-600">{r.name}</div>
                    {r.license && (
                      <div className="mt-1 text-[11px] text-gray-500"><span className="font-medium">Licence:</span> {r.license}</div>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl" aria-label={r.country} title={r.country}>
                    {flagFromCountryCode(r.countryCode)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-xs text-gray-500">
          Authorisations and regulatory coverage vary by entity and jurisdiction.
        </p>
      </div>
    </section>
  );
}
