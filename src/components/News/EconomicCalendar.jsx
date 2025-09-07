import React, { useEffect, useMemo, useRef, useState } from "react";

// TradingView Economic Calendar widget (no API key required)
// Docs: https://www.tradingview.com/widget/economic-calendar/
export default function EconomicCalendar({ theme = "dark", height = 720 }) {
  const containerRef = useRef(null);
  const [date, setDate] = useState(new Date());
  const monthKey = `${date.getFullYear()}-${date.getMonth()}`;
  const [selectedDay, setSelectedDay] = useState(null);

  // Impact filters: 0 low, 1 medium, 2 high
  const [impacts, setImpacts] = useState({ low: true, medium: true, high: true });
  const impactFilter = [impacts.low && '0', impacts.medium && '1', impacts.high && '2'].filter(Boolean).join(',');

  // Country filters
  const countryOptions = ["US","EU","GB","JP","CN","AU","NZ","CA"];
  const [countries, setCountries] = useState(new Set(countryOptions));
  const countryFilter = Array.from(countries).map(c => c.toLowerCase()).join(',');

  const month = useMemo(() => {
    const year = date.getFullYear();
    const m = date.getMonth();
    const first = new Date(year, m, 1);
    const startDay = first.getDay(); // 0 Sun - 6 Sat
    const daysInMonth = new Date(year, m + 1, 0).getDate();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    return { year, m, startDay, days };
  }, [monthKey]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: theme,
      isTransparent: false,
      width: "100%",
      height,
      locale: "en",
      importanceFilter: impactFilter || "0,1,2",
      countryFilter: countryFilter || "us,eu,gb,jp,cn,au,nz,ca",
    });

    const el = containerRef.current;
    if (el) {
      el.innerHTML = "";
      el.appendChild(script);
    }

    return () => {
      if (el) el.innerHTML = "";
    };
  }, [theme, height, impactFilter, countryFilter]);

  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left rail */}
          <aside className="lg:col-span-3 rounded-3xl border border-purple-100 bg-white p-4 shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
            <div>
              <h3 className="text-sm font-extrabold text-gray-900">Recent & Next</h3>
              <div className="mt-2 h-1 rounded-full bg-slate-200">
                <div className="h-1 w-1/3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600" />
              </div>
            </div>

            {/* Mini calendar */}
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <button onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1))} className="px-2 py-1 rounded-lg border border-purple-200 text-purple-700 hover:bg-purple-50">◀</button>
                <div className="text-sm font-semibold text-gray-900">
                  {new Date(date.getFullYear(), date.getMonth()).toLocaleString('en', { month: 'long', year: 'numeric' })}
                </div>
                <button onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1))} className="px-2 py-1 rounded-lg border border-purple-200 text-purple-700 hover:bg-purple-50">▶</button>
              </div>
              <div className="mt-2 grid grid-cols-7 gap-1 text-xs text-gray-500">
                {["S","M","T","W","T","F","S"].map((d)=> (<div key={d} className="text-center py-1">{d}</div>))}
                {Array.from({length: month.startDay}).map((_,i)=> (<div key={`e-${i}`} />))}
                {month.days.map((d) => {
                  const isSel = selectedDay === d;
                  return (
                    <button
                      type="button"
                      key={d}
                      onClick={() => setSelectedDay(d)}
                      className={`text-center py-1 rounded-lg cursor-pointer text-gray-700 hover:bg-purple-50 ${isSel ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white' : ''}`}
                    >
                      {d}
                    </button>
                  );
                })}
              </div>
              <div className="mt-3 text-xs text-gray-600">{formatTzLine()}</div>
            </div>

            {/* Filters */}
            <div className="mt-6">
              <h4 className="text-sm font-extrabold text-gray-900">Filters</h4>
              <div className="mt-2 space-y-2 text-sm">
                <label className="flex items-center gap-2"><input type="checkbox" className="accent-purple-600" checked={impacts.low} onChange={(e)=>setImpacts(v=>({...v,low:e.target.checked}))} /> Low impact</label>
                <label className="flex items-center gap-2"><input type="checkbox" className="accent-purple-600" checked={impacts.medium} onChange={(e)=>setImpacts(v=>({...v,medium:e.target.checked}))} /> Medium impact</label>
                <label className="flex items-center gap-2"><input type="checkbox" className="accent-purple-600" checked={impacts.high} onChange={(e)=>setImpacts(v=>({...v,high:e.target.checked}))} /> High impact</label>
              </div>
              <div className="mt-3">
                <label className="text-xs text-gray-600">Countries</label>
                <div className="mt-1 flex flex-wrap gap-2">
                  {countryOptions.map(c => {
                    const on = countries.has(c);
                    return (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setCountries(prev => { const n = new Set(prev); on ? n.delete(c) : n.add(c); return n; })}
                        className={`px-2 py-1 rounded-full border text-xs ${on ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white border-transparent' : 'border-purple-200 text-purple-700 hover:bg-purple-50'}`}
                      >
                        {c}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-2 flex gap-2">
                  <button type="button" onClick={()=>setCountries(new Set(countryOptions))} className="px-2 py-1 rounded-lg border border-purple-200 text-xs text-purple-700 hover:bg-purple-50">Select all</button>
                  <button type="button" onClick={()=>setCountries(new Set())} className="px-2 py-1 rounded-lg border border-purple-200 text-xs text-purple-700 hover:bg-purple-50">Clear</button>
                </div>
              </div>
            </div>
          </aside>

          {/* Calendar embed */}
          <div className="lg:col-span-9">
            <div className="rounded-3xl overflow-hidden border border-purple-100 bg-white shadow-[0_10px_35px_rgba(16,24,40,0.06)]">
              <div className="tradingview-widget-container" ref={containerRef} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helpers
function formatTzLine() {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const offsetMin = new Date().getTimezoneOffset() * -1; // minutes east of UTC
  const sign = offsetMin >= 0 ? '+' : '-';
  const abs = Math.abs(offsetMin);
  const hh = String(Math.floor(abs / 60)).padStart(2, '0');
  const mm = String(abs % 60).padStart(2, '0');
  return `(GMT ${sign}${hh}:${mm}) • ${tz}`;
}
