import React from "react";

export default function ContactDepartments() {
  const depts = [
    { name: "Media Relations", email: "pr@enzo4ex.com" },
    { name: "Marketing", email: "marketing@enzo4ex.com" },
    { name: "Sales and Support", email: "sales@enzo4ex.com" },
    { name: "Partnerships", email: "partnerships@enzo4ex.com" },
    { name: "Financial Department", email: "deposits@enzo4ex.com" },
  ];

  return (
    <section className="relative mt-10">
      <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Get in touch</h2>
      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {depts.map((d) => (
          <div key={d.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="font-semibold text-slate-900">{d.name}</div>
            <a href={`mailto:${d.email}`} className="text-sm text-purple-700 hover:text-purple-800">{d.email}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
