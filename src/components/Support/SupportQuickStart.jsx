import React from "react";
import { ArrowRight, UserPlus, CreditCard, LineChart, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

export default function SupportQuickStart() {
  const items = [
    { title: "How to open an account", desc: "Create your Enzo4ex account in minutes.", Icon: UserPlus, href: "/account-types" },
    { title: "How to fund my account", desc: "Deposit securely using your preferred method.", Icon: CreditCard, href: "/deposit-withdraw" },
    { title: "How to place a trade", desc: "Place your first order on our platforms.", Icon: LineChart, href: "/enzo4ex" },
    { title: "How to withdraw funds", desc: "Request a withdrawal quickly and safely.", Icon: Wallet, href: "/deposit-withdraw" },
  ];
  return (
    <section className="relative mt-8">
      <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Quick start guide</h2>
      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map(({ title, desc, Icon, href }) => (
          <article key={title} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-transparent transition-all hover:shadow-md hover:ring-purple-200">
            <div className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white">
                <Icon className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                <Link to={href} className="mt-2 inline-flex items-center gap-1 text-sm text-purple-700 hover:text-purple-800">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
