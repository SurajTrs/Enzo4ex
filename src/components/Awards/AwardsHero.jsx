import React from "react";
import { motion } from "framer-motion";
import { awards } from "../../data/awards";
import AwardCard from "./AwardCard";
import heroBg from "../../assets/forexbg.png";

export default function Awards() {
  const hero = {
    title: "Awards",
    subtitle: "Recognition for excellence in platforms, partnerships and client service.",
  };

  const categories = ["All", ...Array.from(new Set(awards.map(a => a.category || "Other")))];
  const years = ["All", ...Array.from(new Set(awards.map(a => String(a.year))))].sort((a, b) => (a === "All" ? -1 : Number(b) - Number(a)));

  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState("All");
  const [year, setYear] = React.useState("All");
  const [sortDesc, setSortDesc] = React.useState(true);
  const [visible, setVisible] = React.useState(9);

  const filtered = React.useMemo(() => {
    let list = awards.slice();
    if (query) {
      const q = query.toLowerCase();
      list = list.filter(a => a.title.toLowerCase().includes(q) || (a.org || "").toLowerCase().includes(q) || (a.summary || "").toLowerCase().includes(q));
    }
    if (category !== "All") {
      list = list.filter(a => (a.category || "Other") === category);
    }
    if (year !== "All") {
      list = list.filter(a => String(a.year) === String(year));
    }
    list.sort((a, b) => {
      const da = new Date(a.dateISO || `${a.year}-01-01`);
      const db = new Date(b.dateISO || `${b.year}-01-01`);
      return sortDesc ? db - da : da - db;
    });
    return list;
  }, [query, category, year, sortDesc]);

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        {/* Hero */}
        <div
          className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-lg"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/75 to-slate-900/55" />
          <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 120px rgba(0,0,0,0.35)" }} />
          <div className="relative p-6 md:p-10 lg:p-12 min-h-[16rem] md:min-h-[16rem] lg:min-h-[20rem]">
            <div className="grid md:grid-cols-2 gap-8 items-center h-full">
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">{hero.title}</h1>
                <p className="mt-3 text-slate-200/95 max-w-2xl leading-relaxed text-lg">{hero.subtitle}</p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="justify-self-end"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-600 bg-slate-900/80 text-slate-100 shadow-sm">
                  Latest accolades
                  <span className="inline-flex h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setCategory(c);
                  setVisible(9);
                }}
                className={`px-3 py-1.5 rounded-full text-sm border transition ${
                  category === c ? "bg-purple-600 text-white border-purple-600" : "text-purple-700 border-purple-200 hover:bg-purple-50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <select
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
                setVisible(9);
              }}
              className="border border-slate-300 bg-white text-slate-900 rounded-lg px-2 py-1 text-sm"
            >
              {years.map(y => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
            <select
              value={sortDesc ? "newest" : "oldest"}
              onChange={(e) => setSortDesc(e.target.value === "newest")}
              className="border border-slate-300 bg-white text-slate-900 rounded-lg px-2 py-1 text-sm"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setVisible(9);
              }}
              placeholder="Search awards..."
              className="border border-slate-300 bg-white text-slate-900 placeholder-slate-500 rounded-lg px-3 py-2 text-sm w-56"
            />
          </div>
        </div>

        {/* List */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.slice(0, visible).map((a, idx) => (
            <AwardCard key={a.title + a.dateISO} idx={idx} {...a} />
          ))}
        </div>

        {/* Load more */}
        {visible < filtered.length && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setVisible(v => v + 9)}
              className="inline-flex items-center px-5 py-3 rounded-xl border border-slate-300 text-slate-900 hover:bg-slate-50 shadow-sm"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
