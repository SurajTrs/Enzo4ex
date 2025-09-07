import React, { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award as AwardIcon, Building2, ArrowRight } from "lucide-react";

function AwardCard({ year, title, org, summary, badge, href, category, idx = 0 }) {
  return (
    <motion.article
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: 0.04 * idx }}
      className="group h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-transparent transition-all transform-gpu will-change-transform hover:-translate-y-1 hover:shadow-md hover:ring-purple-200 focus-within:ring-2 focus-within:ring-purple-300"
    >
      <div className="flex items-center justify-between text-xs">
        <span className="inline-flex items-center gap-2 text-slate-700">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-medium">
            <AwardIcon className="w-3.5 h-3.5" /> {year}
          </span>
          {org && (
            <span className="inline-flex items-center gap-1 text-slate-500">
              <Building2 className="w-3.5 h-3.5" /> {org}
            </span>
          )}
        </span>
        <span className="inline-flex items-center gap-1">
          {badge ? (
            <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 font-medium">{badge}</span>
          ) : category ? (
            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-medium">{category}</span>
          ) : null}
        </span>
      </div>
      <h3 className="mt-2 text-base font-semibold text-slate-900 tracking-tight group-hover:text-purple-700">
        <Link to={href} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded">
          <span className="absolute inset-0" aria-hidden="true" />
          {title}
        </Link>
      </h3>
      {summary && <p className="mt-1 text-sm text-slate-600 leading-relaxed">{summary}</p>}

      <div className="mt-4">
        <Link
          to={href}
          className="inline-flex items-center gap-2 text-sm text-purple-700 hover:text-purple-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded"
          aria-label={`View details for ${title}`}
        >
          View details
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.article>
  );
}

export default memo(AwardCard);
