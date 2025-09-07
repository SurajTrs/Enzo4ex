import React, { useMemo } from "react";

export default function MT4Downloads() {
  const LINKS = {
    windows: "https://download.mql5.com/cdn/web/metaquotes.software.corp/mt4/mt4setup.exe",
    macos: "https://www.metatrader4.com/en/trading-platform/mac",
    android: "https://play.google.com/store/apps/details?id=net.metaquotes.metatrader4",
    ios: "https://apps.apple.com/app/metatrader-4/id496212596",
    web: "https://www.metatrader4.com/en/trading-platform/webtrader",
  };

  const os = useMemo(()=>{
    const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
    if (/Windows/i.test(ua)) return 'windows';
    if (/Mac OS X|Macintosh/i.test(ua)) return 'macos';
    if (/Android/i.test(ua)) return 'android';
    if (/iPhone|iPad/i.test(ua)) return 'ios';
    return 'web';
  }, []);

  const btn = (key, label) => (
    <a
      key={key}
      href={LINKS[key]}
      target="_blank"
      rel="noopener noreferrer"
      className={`px-5 py-3 rounded-full text-center text-sm ${os===key ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white' : 'border border-purple-200 text-purple-700 hover:bg-purple-50'}`}
    >
      {label}
    </a>
  );

  return (
    <section id="download" className="relative py-14 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_10%_-10%,rgba(168,85,247,0.12),transparent_60%),radial-gradient(45%_40%_at_100%_110%,rgba(236,72,153,0.10),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="rounded-3xl border border-purple-100 bg-white p-6 shadow-[0_12px_40px_rgba(16,24,40,0.08)]">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-extrabold text-gray-900">Download MT4</h3>
            <p className="text-gray-600">Choose your platform</p>
          </div>
          <div className="mt-5 grid sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {btn('windows','Windows')}
            {btn('macos','macOS')}
            {btn('android','Android')}
            {btn('ios','iOS')}
            {btn('web','Web')}
          </div>
        </div>
      </div>
    </section>
  );
}
