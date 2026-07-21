import React, { useState } from "react";
import { WIKI_ARTICLES, WikiArticle } from "../data/portfolioData";
import { BookOpen, Search, Filter, Tag, Clock, Eye, X, ChevronRight, User, Share2, Sparkles, Folder } from "lucide-react";

export function WikiSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeArticle, setActiveArticle] = useState<WikiArticle | null>(null);

  const categories = ["All", "AI Research", "Cybersecurity", "Data Engineering", "Systems & Rust", "Nukebird Org"];

  const filteredArticles = WIKI_ARTICLES.filter((article) => {
    const matchesCat = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <section id="wiki" className="py-24 bg-black relative text-white overflow-hidden">
      {/* Background Neon Blur */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-mono tracking-widest uppercase mb-4">
            <Folder className="w-3.5 h-3.5" />
            Wiki / Articles Repository
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Knowledge <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400">Wiki & Articles</span>
          </h2>
          <p className="mt-4 max-w-2xl text-gray-400 text-sm sm:text-base leading-relaxed">
            Hasindu Senarathna's research publication hub — articles on AI neural architectures, data science, penetration testing, and Nukebird Org logs.
          </p>
        </div>

        {/* Controls: Search Bar & Category Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 p-4 rounded-2xl glass-panel border border-sky-500/20">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search wiki articles, tags, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/80 border border-gray-800 focus:border-sky-400 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-sky-500 text-black font-semibold shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                    : "bg-slate-900 text-gray-400 hover:text-white border border-gray-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between cursor-pointer space-y-4 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded bg-sky-950/80 border border-sky-500/30 text-[10px] font-mono font-semibold text-sky-300">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-3 text-gray-400 text-[11px] font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-sky-400" />
                      {article.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3 text-gray-400" />
                      {article.views}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="mt-3 text-gray-300 text-xs leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-slate-900 text-[10px] font-mono text-gray-400 border border-gray-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-gray-800 flex items-center justify-between text-xs font-mono text-sky-400 group-hover:text-sky-300">
                  <span>Read Full Article &rarr;</span>
                  <span className="text-[10px] text-gray-500">{article.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16 p-8 rounded-2xl bg-slate-900/40 border border-gray-800 text-gray-400">
            <BookOpen className="w-10 h-10 text-sky-400/50 mx-auto mb-3" />
            <p className="text-sm font-mono">No wiki articles found matching your query.</p>
          </div>
        )}
      </div>

      {/* Reader Modal for Selected Article */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in-long">
          <div className="w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl glass-panel border border-sky-500/40 p-6 sm:p-8 bg-slate-950 text-gray-200 relative shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Article Header */}
            <div className="mb-6 pb-6 border-b border-gray-800">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-2">
                <span>{activeArticle.category}</span>
                <span>•</span>
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {activeArticle.title}
              </h2>

              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-sky-500/20 border border-sky-400 flex items-center justify-center text-sky-300 font-mono text-xs font-bold">
                  HS
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">{activeArticle.author}</span>
                  <span className="text-[10px] text-gray-400 font-mono">Data Scientist & AI Engineer @ SLTC</span>
                </div>
              </div>
            </div>

            {/* Markdown Body Content */}
            <div className="prose prose-invert max-w-none text-sm leading-relaxed space-y-4 whitespace-pre-line font-sans">
              {activeArticle.content}
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-6 border-t border-gray-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {activeArticle.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded text-[10px] font-mono bg-sky-950 text-sky-300 border border-sky-500/30">
                    #{t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-black font-mono text-xs font-bold transition-all"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
