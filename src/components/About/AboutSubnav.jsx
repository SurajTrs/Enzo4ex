import React, { useEffect, useState } from "react";

const links = [
  { id: "overview", label: "Overview" },
  { id: "why-us", label: "Why Us" },
  { id: "brand", label: "Brand" },
  { id: "technology", label: "Technology" },
  { id: "values", label: "Values" },
  { id: "regulators", label: "Regulators" },
];

export default function AboutSubnav() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id);
          }
        });
      },
      { rootMargin: "-64px 0px -70% 0px", threshold: 0.1 }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ul className="flex flex-wrap gap-3 py-3 text-sm">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`px-3 py-1.5 rounded-full transition ${
                  active === l.id
                    ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white"
                    : "text-purple-700 border border-purple-200 hover:bg-purple-50"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
