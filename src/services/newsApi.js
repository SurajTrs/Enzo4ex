// Unified news client with provider switch. Configure via Vite env:
// VITE_NEWS_PROVIDER=newsapi|gnews|finnhub|fmp
// VITE_NEWS_API_URL=Provider base URL (optional for known providers)
// VITE_NEWS_API_KEY=Your API key

export async function fetchNews({ q = "markets", page = 1, pageSize = 12, sortBy = "publishedAt" } = {}) {
  const provider = (import.meta.env.VITE_NEWS_PROVIDER || 'newsapi').toLowerCase();
  const key = import.meta.env.VITE_NEWS_API_KEY;
  const customBase = import.meta.env.VITE_NEWS_API_URL;

  if (!key && !customBase) {
    // Fallback demo data if API is not configured
    return {
      totalResults: 5,
      articles: [
        {
          title: "Weak August NFP could be a catalyst for gold",
          description: "Gold prices are at record highs at the start of the month as investors look forward...",
          url: "#",
          urlToImage: "/vite.svg",
          source: { name: "Enzo4ex Insights" },
          author: "Research Desk",
          publishedAt: new Date().toISOString(),
          category: "Forex",
        },
        {
          title: "Can Eurozone CPI push EURUSD towards 2025 highs?",
          description: "An overview of Eurozone inflation prints and potential FX impact.",
          url: "#",
          urlToImage: "/vite.svg",
          source: { name: "Enzo4ex Insights" },
          author: "Research Desk",
          publishedAt: new Date().toISOString(),
          category: "Forex",
        },
        {
          title: "Gold and Silver shine as dovish Fed sparks rally",
          description: "Precious metals surge following dovish commentary.",
          url: "#",
          urlToImage: "/vite.svg",
          source: { name: "Enzo4ex Insights" },
          author: "Research Desk",
          publishedAt: new Date().toISOString(),
          category: "Commodities",
        },
        {
          title: "Weekly Index Dividends",
          description: "A quick look at dividend adjustments across major indices.",
          url: "#",
          urlToImage: "/vite.svg",
          source: { name: "Enzo4ex" },
          author: "Desk",
          publishedAt: new Date().toISOString(),
          category: "Indices",
        },
        {
          title: "Can PCE push gold to new records after Nvidia earnings?",
          description: "Macro watch into PCE with cross-asset implications.",
          url: "#",
          urlToImage: "/vite.svg",
          source: { name: "Enzo4ex" },
          author: "Desk",
          publishedAt: new Date().toISOString(),
          category: "Commodities",
        },
      ],
    };
  }

  // Provider adapters
  const adapters = {
    async newsapi() {
      const base = customBase || 'https://newsapi.org/v2/everything';
      const params = new URLSearchParams({ q, page: String(page), pageSize: String(pageSize), sortBy });
      const url = `${base}?${params.toString()}`;
      const res = await fetch(url, { headers: { Authorization: `Bearer ${key}` } });
      if (!res.ok) throw new Error(`NewsAPI error: ${res.status}`);
      const data = await res.json();
      return {
        totalResults: data.totalResults ?? 0,
        articles: (data.articles ?? []).map((a) => ({
          title: a.title,
          description: a.description,
          url: a.url,
          urlToImage: a.urlToImage,
          source: a.source || { name: a.source?.name || '' },
          author: a.author || '',
          publishedAt: a.publishedAt,
          category: '',
        })),
      };
    },
    async gnews() {
      // https://gnews.io/docs/v4#search
      const base = customBase || 'https://gnews.io/api/v4/search';
      const params = new URLSearchParams({ q, lang: 'en', max: String(pageSize), page: String(page), sortby: 'publishedAt', token: key });
      const url = `${base}?${params.toString()}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`GNews error: ${res.status}`);
      const data = await res.json();
      return {
        totalResults: data.totalArticles ?? 0,
        articles: (data.articles ?? []).map((a) => ({
          title: a.title,
          description: a.description,
          url: a.url,
          urlToImage: a.image,
          source: a.source || { name: a.source?.name || '' },
          author: a.author || '',
          publishedAt: a.publishedAt,
          category: '',
        })),
      };
    },
    async finnhub() {
      // https://finnhub.io/docs/api/market-news
      // Finnhub market news does not support free-form q; we can fetch category and filter client-side.
      const base = customBase || 'https://finnhub.io/api/v1/news';
      const url = `${base}?category=general&token=${encodeURIComponent(key)}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Finnhub error: ${res.status}`);
      const data = await res.json();
      const filtered = q ? data.filter((a) => `${a.headline} ${a.summary}`.toLowerCase().includes(q.toLowerCase())) : data;
      const start = (page - 1) * pageSize;
      const slice = filtered.slice(start, start + pageSize);
      return {
        totalResults: filtered.length,
        articles: slice.map((a) => ({
          title: a.headline,
          description: a.summary,
          url: a.url,
          urlToImage: a.image,
          source: { name: a.source || 'Finnhub' },
          author: '',
          publishedAt: new Date(a.datetime * 1000).toISOString(),
          category: a.category || '',
        })),
      };
    },
    async fmp() {
      // Financial Modeling Prep: https://financialmodelingprep.com/developer/docs#news
      const base = customBase || 'https://financialmodelingprep.com/api/v3/fmp/articles';
      const params = new URLSearchParams({ page: String(page), size: String(pageSize), apikey: key });
      const url = `${base}?${params.toString()}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`FMP error: ${res.status}`);
      const data = await res.json();
      const articles = Array.isArray(data) ? data : (data.items || []);
      return {
        totalResults: articles.length, // FMP may not return total; approximate
        articles: articles.map((a) => ({
          title: a.title,
          description: a.text || a.content || '',
          url: a.url,
          urlToImage: a.image || a.banner_image,
          source: { name: a.site || a.source || 'FMP' },
          author: a.author || '',
          publishedAt: a.date || a.published_at,
          category: a.category || '',
        })),
      };
    },
  };

  const adapter = adapters[provider] || adapters.newsapi;
  return adapter();
}
