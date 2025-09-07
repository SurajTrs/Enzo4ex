import React from "react";
import applePay from "../../assets/applePay.svg";
import gpay from "../../assets/gpay.svg";
import masterCard from "../../assets/masterCard.svg";

export default function WithdrawalsSection() {
  const badges = [
    { name: "Bankwire", placeholder: true },
    { name: "VISA", placeholder: true },
    { name: "Mastercard", img: masterCard },
    { name: "Skrill", placeholder: true },
    { name: "NETELLER", placeholder: true },
    { name: "SWIFT", placeholder: true },
    { name: "SEPA", placeholder: true },
    { name: "Apple Pay", img: applePay },
    { name: "Google Pay", img: gpay },
  ];

  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Enjoy seamless withdrawals</h2>
            <p className="mt-3 text-gray-600">Withdrawing your funds is quick, easy, and free*. We aim to process all withdrawals within 24 hours, returning your funds to your original payment method.</p>
          </div>

          <div className="relative rounded-3xl border border-purple-100 bg-purple-50/40 p-6 shadow-[0_12px_40px_rgba(16,24,40,0.08)]">
            <div className="grid grid-cols-3 gap-4">
              {badges.map((b)=> (
                <div key={b.name} className="flex items-center justify-center rounded-2xl bg-white border border-purple-100 h-16 shadow-sm">
                  {b.img ? (
                    <img src={b.img} alt={b.name} className="max-h-7" />
                  ) : (
                    <span className="text-sm font-semibold text-gray-700">{b.name}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-3 text-[11px] text-gray-600">* Subject to internal processing timelines and your payment provider.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
