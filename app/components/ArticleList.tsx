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
    <section className="py-8 px-4 sm:px-8 lg:px-16">
      {/* 🔍 Suche */}
      <div className="flex justify-center mb-10">
        <div className="relative w-full max-w-xl">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#b07a4a]"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Artikel suchen..."
            className="w-full border border-[#e7d8c5] bg-[#fffaf3] rounded-full py-2 pl-10 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d4a373] transition"
          />
        </div>
      </div>

      {/* 📰 Artikel-Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.slice(0, visible).map((article) => (
          <article
            key={article.id}
            className="bg-[#fffaf3] border border-[#e7d8c5] rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 p-6"
          >
            <div className="text-sm font-semibold text-[#b07a4a] uppercase mb-2 tracking-wide">
              Finanztipps
            </div>

            <h2 className="text-lg font-bold mb-3 text-[#3f3a2f] leading-snug">
              {article.title}
            </h2>

            <div className="flex items-center gap-4 text-[#7d7663] text-sm mb-3">
              <div className="flex items-center gap-1">
                <Calendar size={15} /> {article.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock size={15} /> {article.readingTime}
              </div>
            </div>

            <p className="text-[#4a4538] text-sm mb-5 line-clamp-3">
              {article.excerpt}
            </p>

            <Link
              href={`/articles/${article.id}`}
              className="inline-block bg-[#d4a373] hover:bg-[#b07a4a] text-white px-4 py-2 rounded-full font-medium text-sm shadow transition"
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
            className="px-6 py-2 bg-[#d4a373] hover:bg-[#b07a4a] text-white rounded-full font-medium shadow transition"
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
