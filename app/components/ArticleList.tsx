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

  const showMore = () => setVisible((v) => v + 4);

  return (
    <section className="py-8 px-4 sm:px-8 lg:px-16">
      {/* 🔍 Suche */}
      <div className="flex justify-center mb-10">
        <div className="relative w-full max-w-xl">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#b07a4a] dark:text-[#d4a373]"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Artikel suchen..."
            className="w-full border border-[#e7d8c5] dark:border-[#3a3328] bg-[#fffaf3] dark:bg-[#1c1a16] rounded-full py-2.5 pl-10 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d4a373] dark:focus:ring-[#b07a4a] transition text-sm sm:text-base text-[#3f3a2f] dark:text-[#f3f0ea]"
          />
        </div>
      </div>

      {/* 📰 Artikel-Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {filtered.slice(0, visible).map((article) => (
          <article
            key={article.id}
            className="bg-[#fffaf3] dark:bg-[#1e1b16] border border-[#e7d8c5] dark:border-[#3a3328] rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="text-xs sm:text-sm font-semibold text-[#b07a4a] dark:text-[#d4a373] uppercase mb-2 tracking-wide">
                Finanztipps
              </div>

              <h2 className="text-lg sm:text-xl font-bold mb-4 text-[#3f3a2f] dark:text-[#f5f0e8] leading-snug">
                {article.title}
              </h2>

              <div className="flex items-center flex-wrap gap-3 text-[#7d7663] dark:text-[#b9b3a6] text-sm mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={14} /> {article.date}
                </div>
                {article.readingTime && (
                  <div className="flex items-center gap-1">
                    <Clock size={14} /> {article.readingTime}
                  </div>
                )}
              </div>

              {/* Beschreibung ganz anzeigen */}
              <p className="text-[#4a4538] dark:text-[#d8d3c8] text-sm sm:text-base mb-5">
                {article.excerpt}
              </p>
            </div>

            <Link
              href={`/articles/${article.id}`}
              className="mt-auto inline-block bg-[#d4a373] hover:bg-[#b07a4a] dark:bg-[#a8774e] dark:hover:bg-[#8a5f3a] text-white px-5 py-2 rounded-full font-medium text-sm text-center shadow transition"
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
            className="px-6 py-2 bg-[#d4a373] hover:bg-[#b07a4a] dark:bg-[#a8774e] dark:hover:bg-[#8a5f3a] text-white rounded-full font-medium text-sm shadow transition"
          >
            Mehr anzeigen
          </button>
        </div>
      )}

      {/* 🚫 Keine Treffer */}
      {filtered.length === 0 && (
        <p className="mt-10 text-center text-[#7d7663] dark:text-[#b9b3a6]">
          Keine Artikel gefunden.
        </p>
      )}
    </section>
  );
}
