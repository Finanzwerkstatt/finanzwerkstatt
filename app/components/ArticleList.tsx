"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import type { Article } from "@/app/data/getArticles";
import { Calendar, Clock, Search } from "lucide-react";

type Props = {
  articles: Article[];
};

export default function ArticleList({ articles }: Props) {
  const [visible, setVisible] = useState<number>(6);
  const [query, setQuery] = useState<string>("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return articles;
    return articles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        (a.excerpt && a.excerpt.toLowerCase().includes(q))
    );
  }, [articles, query]);

  const showMore = () => setVisible((v) => v + 6);

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 md:px-12 lg:px-16 bg-gradient-to-b from-[#faf7f2] to-[#f5efe6]">
      {/* 🔍 Suche */}
      <div className="flex justify-center mb-8 sm:mb-12">
        <div className="relative w-full max-w-md sm:max-w-xl">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#b07a4a]"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Artikel suchen..."
            className="w-full border border-[#e7d8c5] bg-[#fffaf3] rounded-full py-2.5 sm:py-3 pl-10 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d4a373] transition text-sm sm:text-base placeholder:text-[#bfa98a]"
          />
        </div>
      </div>

      {/* 📰 Artikel-Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filtered.slice(0, visible).map((article) => (
          <article
            key={article.id}
            className="bg-white border border-[#e7d8c5] rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between"
          >
            <div>
              <div className="text-xs sm:text-sm font-semibold text-[#b07a4a] uppercase mb-2 tracking-wide">
                Finanztipps
              </div>

              <h2 className="text-lg sm:text-xl font-bold mb-3 text-[#3f3a2f] leading-snug line-clamp-2">
                {article.title}
              </h2>

              <div className="flex items-center flex-wrap gap-3 text-[#7d7663] text-xs sm:text-sm mb-3">
                <div className="flex items-center gap-1">
                  <Calendar size={14} /> {article.date}
                </div>
                {article.readingTime && (
                  <div className="flex items-center gap-1">
                    <Clock size={14} /> {article.readingTime}
                  </div>
                )}
              </div>

              <p className="text-[#4a4538] text-sm sm:text-base mb-5 line-clamp-3">
                {article.excerpt}
              </p>
            </div>

            <Link
              href={`/articles/${article.id}`}
              className="mt-auto inline-block bg-[#d4a373] hover:bg-[#b07a4a] text-white px-4 py-2 rounded-full font-medium text-sm text-center shadow-sm hover:shadow transition"
            >
              Weiterlesen →
            </Link>
          </article>
        ))}
      </div>

      {/* 🔽 Mehr anzeigen */}
      {visible < filtered.length && (
        <div className="text-center mt-10">
          <button
            onClick={showMore}
            className="px-6 py-2 bg-[#d4a373] hover:bg-[#b07a4a] text-white rounded-full font-medium text-sm sm:text-base shadow-sm hover:shadow transition"
          >
            Mehr anzeigen
          </button>
        </div>
      )}

      {/* 🚫 Keine Treffer */}
      {filtered.length === 0 && (
        <p className="mt-10 text-center text-[#7d7663]">
          Keine Artikel gefunden.
        </p>
      )}
    </section>
  );
}
