import React from "react";
import { motion } from "framer-motion";
import AnnouncementCard from "./AnnouncementCard";
import { announcements } from "../../data/announcements";
import heroBg from "../../assets/forexbg.png";

export default function AnnouncementsPage() {
  const hero = {
    title: "Announcements",
    subtitle: "Check our news to stay up to date with Enzo4ex developments and next moves.",
  };

  const categories = ["All", "Platform", "Markets", "Security", "General"];
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState("All");
  const [onlyNew, setOnlyNew] = React.useState(false);
  const [sortDesc, setSortDesc] = React.useState(true);
  const [visible, setVisible] = React.useState(9);

  const filtered = React.useMemo(() => {
    let list = announcements.slice();
    if (query) {
      const q = query.toLowerCase();
      list = list.filter((a) =>
        a.title.toLowerCase().includes(q) || (a.excerpt || "").toLowerCase().includes(q)
      );
    }
    if (category !== "All") {
      list = list.filter((a) => (a.category || "General") === category);
    }
    if (onlyNew) {
      list = list.filter((a) => a.tag === "NEW");
    }
    list.sort((a, b) => {
      const da = new Date(a.dateISO || a.date);
      const db = new Date(b.dateISO || b.date);
      return sortDesc ? db - da : da - db;
    });
    return list;
  }, [query, category, onlyNew, sortDesc]);

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        {/* Hero */}
        <div
          className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-sm"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          {/* Light professional gradient overlay with subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/75 to-white/55" />
          <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 90px rgba(15,23,42,0.08)" }} />
          <div className="relative p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">{hero.title}</h1>
                <p className="mt-2 text-slate-700 max-w-2xl leading-relaxed">{hero.subtitle}</p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="justify-self-end"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 bg-white text-slate-900 shadow-sm">
                  Latest from Enzo4ex
                  <span className="inline-flex h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
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
                  category === c
                    ? "bg-purple-600 text-white border-purple-600"
                    : "text-purple-700 border-purple-200 hover:bg-purple-50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <label className="inline-flex items-center gap-2 text-sm text-slate-700">
              <input
                type="checkbox"
                className="rounded border-slate-300"
                checked={onlyNew}
                onChange={(e) => {
                  setOnlyNew(e.target.checked);
                  setVisible(9);
                }}
              />
              NEW only
            </label>
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
              placeholder="Search announcements..."
              className="border border-slate-300 bg-white text-slate-900 placeholder-slate-500 rounded-lg px-3 py-2 text-sm w-56"
            />
          </div>
        </div>

        {/* List */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.slice(0, visible).map((a, idx) => (
            <AnnouncementCard key={a.title + a.date} idx={idx} {...a} />
          ))}
        </div>

        {/* Load more */}
        {visible < filtered.length && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setVisible((v) => v + 9)}
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
