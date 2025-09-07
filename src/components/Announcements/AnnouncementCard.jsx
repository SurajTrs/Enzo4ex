import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AnnouncementCard({ date, title, excerpt, tag, href, idx = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.04 * idx }}
      className="group h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-transparent transition-all hover:-translate-y-1 hover:shadow-md hover:ring-purple-200"
    >
      <div className="flex items-center gap-2 text-xs text-slate-600">
        <time dateTime={new Date(date).toISOString()} className="font-medium text-slate-700">
          {date}
        </time>
        {tag && (
          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 font-medium text-[11px]">
            {tag}
          </span>
        )}
      </div>
      <h3 className="mt-2 text-base font-semibold text-slate-900 tracking-tight group-hover:text-purple-700">
        <Link to={href}>
          <span className="absolute inset-0" aria-hidden="true" />
          {title}
        </Link>
      </h3>
      {excerpt && <p className="mt-1 text-sm text-slate-600 leading-relaxed">{excerpt}</p>}
    </motion.article>
  );
}
