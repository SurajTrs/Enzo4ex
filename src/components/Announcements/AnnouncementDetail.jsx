import React from "react";
import { useParams, Link } from "react-router-dom";
import { announcements } from "../../data/announcements";

export default function AnnouncementDetail() {
  const { slug } = useParams();
  const item = React.useMemo(() => {
    return (
      announcements.find(a => a.slug === slug) ||
      announcements.find(a => (a.href || "").endsWith(slug)) ||
      null
    );
  }, [slug]);

  if (!item) {
    return (
      <section className="relative bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-16 text-center">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Announcement not found</h1>
          <p className="mt-2 text-gray-600">The announcement you’re looking for may have been moved or removed.</p>
          <div className="mt-6">
            <Link to="/announcements" className="inline-block px-5 py-3 rounded-xl bg-purple-600 text-white hover:bg-purple-700">Back to announcements</Link>
          </div>
        </div>
      </section>
    );
  }

  const date = item.date || item.dateISO || "";
  const category = item.category || "General";
  const tag = item.tag || null;

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-12">
        <nav className="text-sm">
          <Link to="/announcements" className="text-purple-700 hover:underline">Announcements</Link>
          <span className="text-slate-500"> / </span>
          <Link to={`/announcements?category=${encodeURIComponent(category)}`} className="text-purple-700 hover:underline">{category}</Link>
          <span className="text-slate-500"> / </span>
          <span className="text-slate-700">{item.title}</span>
        </nav>
        <header className="mt-4">
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <time>{date}</time>
            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">{category}</span>
            {tag && (
              <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">{tag}</span>
            )}
          </div>
          <h1 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">{item.title}</h1>
        </header>
        {item.excerpt && (
          <p className="mt-3 text-slate-700 text-lg">{item.excerpt}</p>
        )}
        <article className="prose prose-slate max-w-none mt-6">
          <p>{item.content || "Full details will be available soon. Please check back later."}</p>
        </article>
      </div>
    </section>
  );
}
