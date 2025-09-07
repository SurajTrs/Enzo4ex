import React from "react";
import { Link } from "react-router-dom";

export default function SupportCategories() {
  const cats = [
    {
      title: "Account",
      links: [
        { label: "Account opening and closure", to: "/account-types" },
        { label: "Account management", to: "/account-management" },
        { label: "Account types", to: "/account-types" },
        { label: "ThinkPortal", to: "/account-management" },
      ],
    },
    {
      title: "Funding",
      links: [
        { label: "Deposit", to: "/deposit-withdraw" },
        { label: "Withdrawal", to: "/deposit-withdraw" },
        { label: "Payment solutions", to: "/deposit-withdraw" },
      ],
    },
    {
      title: "Platforms",
      links: [
        { label: "Enzo4exTrader", to: "/enzo4ex" },
        { label: "MT4/MT5", to: "/mt4" },
        { label: "TradingView", to: "/tradingview" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Regulation", to: "/about#regulators" },
        { label: "Security", to: "/about#values" },
        { label: "Who we are", to: "/about#overview" },
      ],
    },
  ];

  return (
    <section className="relative mt-10">
      <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Get help</h2>
      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cats.map((c) => (
          <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="font-semibold text-slate-900">{c.title}</div>
            <ul className="mt-2 space-y-1">
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-purple-700 hover:text-purple-800">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
