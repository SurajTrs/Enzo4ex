import React, { useEffect, useState } from "react";
import { fetchNews } from "../../services/newsApi";

export default function NewsList() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const pageSize = 12;

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    const catClause = category === "All" ? "markets OR forex OR indices OR commodities" : category.toLowerCase();
    const fullQuery = [catClause, query].filter(Boolean).join(" ");
    fetchNews({ q: fullQuery || "markets", page, pageSize })
      .then((data) => {
        if (!isMounted) return;
        setItems(data.articles || []);
        setTotal(data.totalResults || 0);
        setLoading(false);
      })
      .catch((e) => {
        if (!isMounted) return;
        setError(e.message || "Failed to load news");
        setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, [page, query, category]);

  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
          <h2 className="text-[28px] md:text-[32px] leading-tight font-extrabold text-gray-900 tracking-tight">All news</h2>
          <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
            <div className="inline-flex rounded-full border border-purple-200 overflow-hidden">
              {['All','Forex','Indices','Commodities','Crypto','Stocks'].map((c)=> (
                <button key={c} onClick={()=> { setCategory(c); setPage(1); }} className={`px-3 py-1.5 text-sm ${category===c ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white' : 'text-purple-700 hover:bg-purple-50'}`}>
                  {c}
                </button>
              ))}
            </div>
            <input value={query} onChange={(e)=> { setQuery(e.target.value); setPage(1); }} placeholder="Search news..." className="px-3 py-1.5 text-sm rounded-full border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
        </div>
        <div className="text-sm text-gray-600 mb-3">{total.toLocaleString()} results found</div>

        {loading && <div className="text-gray-600">Loading news…</div>}
        {error && <div className="text-red-600">{error}</div>}

        {!loading && !error && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((a, idx) => (
              <article key={`${a.url || idx}`} className="rounded-3xl border border-purple-100 bg-white p-4 shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
                <div className="text-xs text-gray-500 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />
                  <span>{a.source?.name || ""}</span>
                  {a.publishedAt && <span>• {new Date(a.publishedAt).toLocaleDateString()}</span>}
                </div>
                <h3 className="mt-2 font-extrabold text-gray-900 text-lg line-clamp-2">{a.title}</h3>
                {a.urlToImage && (
                  <div className="mt-3 rounded-2xl overflow-hidden border border-purple-100">
                    <img src={a.urlToImage} alt="" className="w-full h-40 object-cover" />
                  </div>
                )}
                <p className="mt-2 text-sm text-gray-700 line-clamp-3">{a.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <a href={a.url || "#"} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-purple-700 hover:text-purple-800">Read more →</a>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-6 flex items-center gap-2 justify-center">
          <button disabled={page===1} onClick={() => setPage((p)=>Math.max(1, p-1))} className="px-4 py-2 rounded-full border border-purple-200 text-purple-700 hover:bg-purple-50 text-sm disabled:opacity-50">Prev</button>
          <span className="text-sm text-gray-600">Page {page}</span>
          <button onClick={() => setPage((p)=>p+1)} className="px-4 py-2 rounded-full border border-purple-200 text-purple-700 hover:bg-purple-50 text-sm">Next</button>
        </div>
      </div>
    </section>
  );
}
