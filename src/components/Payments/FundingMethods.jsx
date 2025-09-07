import React from "react";
import applePay from "../../assets/applePay.svg";
import gpay from "../../assets/gpay.svg";
import masterCard from "../../assets/masterCard.svg";

export default function FundingMethods() {
  const methods = [
    {
      name: "Swift",
      type: "BANK WIRE TRANSFER | 1-3 BUSINESS DAYS",
      desc: "Transfer funds globally through bank wire.",
      fee: "$0",
      currencies: "AUD, EUR, CHF, GBP and USD",
    },
    {
      name: "Crypto",
      type: "DIGITAL WALLET | INSTANT",
      desc: "Deposit funds using popular cryptocurrencies, processed instantly.",
      fee: "$0",
      currencies: "Bitcoin (BTC), Ether (ETH), Tether (USDT)",
    },
    {
      name: "VISA",
      type: "CREDIT CARD | INSTANT",
      desc: "Swiftly fund your trading account with major credit and debit cards.",
      fee: "$0",
      currencies: "AUD, EUR, CHF, GBP and USD",
    },
    {
      name: "Mastercard",
      type: "CREDIT CARD | INSTANT",
      desc: "Swiftly fund your trading account with major credit and debit cards.",
      fee: "$0",
      currencies: "AUD, EUR, CHF, GBP and USD",
      img: masterCard,
    },
    {
      name: "Apple Pay",
      type: "DIGITAL WALLET | INSTANT",
      desc: "Seamless transactions with Apple Pay using your Apple devices.",
      fee: "0%",
      currencies: "AUD, EUR, CHF, GBP and USD",
      img: applePay,
    },
    {
      name: "Google Pay",
      type: "DIGITAL WALLET | INSTANT",
      desc: "Swift and secure funding via any Android or iOS device.",
      fee: "0%",
      currencies: "USD, EUR, GBP, JPY, AUD and CHF",
      img: gpay,
    },
    {
      name: "NETELLER",
      type: "DIGITAL WALLET | INSTANT",
      desc: "Effortlessly manage your trading funds with Neteller.",
      fee: "$0",
      currencies: "USD, EUR, GBP, JPY and AUD",
    },
    {
      name: "Skrill",
      type: "DIGITAL WALLET | INSTANT",
      desc: "Seamlessly handle your funding with Skrill.",
      fee: "$0",
      currencies: "AUD, EUR, CHF, GBP and USD",
    },
    {
      name: "UPI",
      type: "DIGITAL WALLET | INSTANT",
      desc: "Make instant deposits through UPI for funding in India.",
      fee: "$0",
      currencies: "INR",
    },
    {
      name: "Indian Net Banking",
      type: "DIGITAL WALLET | INSTANT",
      desc: "Fund via Netbanking, a straightforward method for depositing funds in India.",
      fee: "$0",
      currencies: "INR",
    },
    {
      name: "MPesa",
      type: "DIGITAL WALLET | INSTANT",
      desc: "Seamless funding via MPesa, a money transfer solution in Kenya.",
      fee: "$0",
      currencies: "KES",
    },
    {
      name: "Mobile Money Ghana",
      type: "DIGITAL WALLET | INSTANT",
      desc: "Conveniently transfer funds via Mobile Money Ghana.",
      fee: "0%",
      currencies: "GHS",
    },
    {
      name: "Mashreq Bank",
      type: "BANK WIRE TRANSFER | 1-3 BUSINESS DAYS",
      desc: "Transfer funds locally through bank wire.",
      fee: "$0",
      currencies: "AED, SAR and QAR",
    },
  ];

  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="flex items-end justify-between gap-3 mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Funding methods</h2>
          <a href="/deposit-withdraw" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 text-purple-700 hover:bg-purple-50 text-sm">More on deposits</a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methods.map((m) => (
            <article key={m.name} className="group rounded-3xl border border-purple-100 bg-white p-6 shadow-[0_10px_35px_rgba(16,24,40,0.06)] hover:shadow-[0_18px_55px_rgba(16,24,40,0.10)] transition-shadow">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white ring-1 ring-purple-200/30 shadow-lg shadow-fuchsia-500/20">{m.img ? <img src={m.img} alt={m.name} className="max-h-6" /> : m.name[0]}</span>
                  <div>
                    <h3 className="font-extrabold text-gray-900">{m.name}</h3>
                    <div className="text-[12px] text-purple-700 font-medium">{m.type}</div>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-700">{m.desc}</p>
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                <div className="rounded-2xl border border-purple-100 p-3 bg-purple-50/40">
                  <div className="text-gray-600">FEE</div>
                  <div className="font-semibold text-gray-900">{m.fee}</div>
                </div>
                <div className="rounded-2xl border border-purple-100 p-3 bg-purple-50/40">
                  <div className="text-gray-600">CURRENCIES</div>
                  <div className="font-semibold text-gray-900 truncate" title={m.currencies}>{m.currencies}</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-purple-100 flex items-center justify-between">
                <a href="/deposit-withdraw" className="inline-flex px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-sm shadow-lg shadow-fuchsia-500/20 hover:opacity-95">Deposit now</a>
                <a href="/help" className="text-sm font-medium text-purple-700 hover:text-purple-800">Load more →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
