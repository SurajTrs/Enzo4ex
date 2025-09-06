import React, { useMemo } from "react";
import preview from "../../assets/enzo4ex-hero.png";

export default function TVDesktopApp() {
  const LINKS = {
    windows: "https://www.tradingview.com/desktop/",
    macos: "https://www.tradingview.com/desktop/",
    linux: "https://www.tradingview.com/desktop/",
    learn: "https://www.tradingview.com/desktop/",
  };

  const os = useMemo(() => {
    const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
    if (/Windows/i.test(ua)) return 'windows';
    if (/Mac OS X|Macintosh/i.test(ua)) return 'macos';
    if (/Linux|X11/i.test(ua)) return 'linux';
    return 'windows';
  }, []);

  return (
    <section className="relative py-14 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_10%_-10%,rgba(168,85,247,0.12),transparent_60%),radial-gradient(45%_40%_at_100%_110%,rgba(236,72,153,0.10),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="rounded-3xl border border-purple-100 bg-white p-6 shadow-[0_12px_40px_rgba(16,24,40,0.08)]">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-gray-900">Download the TradingView desktop app</h3>
              <p className="text-gray-600">Unlock additional features and elevate your trading experience with the powerful desktop application.</p>
              <ul className="mt-3 text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li>100% synchronisation with the browser version</li>
                <li>Configure your charts across multiple displays</li>
                <li>Expanded workspace size for better analysis</li>
                <li>Link several tabs with the same symbols</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href={LINKS.windows} target="_blank" rel="noopener noreferrer" className={`px-4 py-2 rounded-full text-sm ${os==='windows' ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white' : 'border border-purple-200 text-purple-700 hover:bg-purple-50'}`}>Download for Windows</a>
                <a href={LINKS.macos} target="_blank" rel="noopener noreferrer" className={`px-4 py-2 rounded-full text-sm ${os==='macos' ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white' : 'border border-purple-200 text-purple-700 hover:bg-purple-50'}`}>Download for macOS</a>
                <a href={LINKS.linux} target="_blank" rel="noopener noreferrer" className={`px-4 py-2 rounded-full text-sm ${os==='linux' ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white' : 'border border-purple-200 text-purple-700 hover:bg-purple-50'}`}>Download for Linux</a>
                <a href={LINKS.learn} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm text-purple-700 underline">Learn more about desktop apps</a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-purple-100">
              <img src={preview} alt="Desktop app" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
