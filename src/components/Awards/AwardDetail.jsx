import React from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, Building2, Award as AwardIcon, Tag, ArrowRight } from "lucide-react";
import { awards } from "../../data/awards";
import heroBg from "../../assets/forexbg.png";

export default function AwardDetail() {
  const { slug } = useParams();
  const item = React.useMemo(() => {
    return (
      awards.find(a => a.slug === slug) ||
      awards.find(a => (a.href || "").endsWith(slug)) ||
      null
    );
  }, [slug]);

  if (!item) {
    return (
      <section className="relative bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-16 text-center">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Award not found</h1>
          <p className="mt-2 text-gray-600">The award you’re looking for may have been moved or removed.</p>
          <div className="mt-6">
            <Link to="/awards" className="inline-block px-5 py-3 rounded-xl bg-purple-600 text-white hover:bg-purple-700">Back to awards</Link>
          </div>
        </div>
      </section>
    );
  }

  const { title, org, year, category, summary, content, dateISO, badge } = item;
  const isPremium = String(badge || "").toLowerCase() === "winner";

  const related = React.useMemo(() => {
    return awards
      .filter(a => a.slug !== slug && (a.category === category || a.year === year))
      .slice(0, 3);
  }, [slug, category, year]);

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white">
      {/* Premium Hero */}
      {isPremium && (
        <div
          className="relative mx-auto max-w-7xl mb-8 rounded-3xl overflow-hidden border border-slate-800 shadow-lg"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/75 to-slate-900/55" />
          <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 120px rgba(0,0,0,0.35)" }} />
          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-400/40 bg-purple-400/10 text-purple-200 text-xs font-medium">Winner</span>
              <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-white">{title}</h1>
              {summary && <p className="mt-3 text-slate-200/95 text-lg leading-relaxed">{summary}</p>}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm">
          <Link to="/awards" className="text-purple-700 hover:underline">Awards</Link>
          <span className="text-slate-500"> / </span>
          <Link to={`/awards?category=${encodeURIComponent(category || "All")}`} className="text-purple-700 hover:underline">{category || "General"}</Link>
          <span className="text-slate-500"> / </span>
          <span className="text-slate-700">{title}</span>
        </nav>

        {/* Header */}
        <header className="mt-4">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">{title}</h1>
          {summary && <p className="mt-2 text-slate-700 text-lg leading-relaxed">{summary}</p>}

          {/* Meta */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            {dateISO && (
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                <Calendar className="w-4 h-4" />
                <time>{dateISO}</time>
              </span>
            )}
            {year && (
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                <AwardIcon className="w-4 h-4" />
                {year}
              </span>
            )}
            {org && (
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                <Building2 className="w-4 h-4" />
                {org}
              </span>
            )}
            {category && (
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-purple-100 text-purple-700">
                <Tag className="w-4 h-4" />
                {category}
              </span>
            )}
          </div>
        </header>

        {/* Content */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <article className="prose prose-slate max-w-none">
            {content ? (
              <div dangerouslySetInnerHTML={{ __html: content }} />
            ) : (
              <p>Full details will be available soon. Please check back later.</p>
            )}
          </article>
        </div>

        {/* Related awards */}
        {related.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Related awards</h2>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3">
              {related.map(r => (
                <li key={r.slug} className="rounded-2xl border border-slate-200 bg-white p-4 hover:shadow-sm transition">
                  <Link to={`/awards/${r.slug}`} className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm text-slate-500">{r.year} · {r.org}</div>
                      <div className="font-semibold text-slate-900">{r.title}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-purple-700 mt-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Back link */}
        <div className="mt-8">
          <Link to="/awards" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 shadow-sm">
            Back to awards
          </Link>
        </div>
      </div>
    </section>
  );
}
