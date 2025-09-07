import React from "react";

export default function ContactOffices() {
  const offices = [
    {
      city: "London",
      address: ["G07, 35 New Broad St,", "London", "EC2M 1NH"],
    },
    {
      city: "Melbourne",
      address: ["Level 18, 357 Collins St,", "Melbourne, VIC", "Australia, 3000"],
    },
    {
      city: "Johannesburg",
      address: ["3 Gwen Lane, Sandown,", "Sandton, 2031", "South Africa"],
    },
  ];

  return (
    <section className="relative mt-10">
      <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Our offices</h2>
      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {offices.map((o) => (
          <div key={o.city} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-sm text-purple-700 font-semibold">{o.city}</div>
            <div className="mt-1 text-sm text-slate-700 leading-relaxed">
              {o.address.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
