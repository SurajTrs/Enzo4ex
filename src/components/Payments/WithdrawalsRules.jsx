import React from "react";

export default function WithdrawalsRules() {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="rounded-3xl border border-purple-100 bg-white p-6 shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
          <h3 className="text-xl md:text-2xl font-extrabold text-gray-900">Withdrawal of funds rules</h3>
          <div className="mt-3 text-sm text-gray-700 space-y-3">
            <p>Withdrawals are typically processed within 24 hours during business days. Processing times may vary based on your chosen payment method and your bank or provider.</p>
            <p>To ensure the security of your funds, withdrawals are generally returned to the original funding method wherever feasible. Additional verification may be requested.</p>
            <p>Third‑party payments are not permitted. Account details must match your registered Enzo4ex account details. Discrepancies may result in delays.</p>
            <p>Currency conversion fees may apply if your withdrawal currency differs from your base currency. Your provider may levy additional fees outside our control.</p>
            <p>Please consult our Help Center for region‑specific information and any documentation requirements that may apply to your account.</p>
          </div>
          <div className="mt-4 text-xs text-gray-500">* Terms and conditions apply and may change without prior notice.</div>
        </div>
      </div>
    </section>
  );
}
