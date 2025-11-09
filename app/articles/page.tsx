import React from "react";
import { getArticles } from "../data/getArticles";
import ArticleList from "../components/ArticleList"; // 👈 WICHTIGER IMPORT

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f9f4ef] via-[#f5efe6] to-[#f1eadf]">
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-[#d4a373]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#b07a4a]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <section className="backdrop-blur-md bg-[#fffaf3]/80 rounded-3xl shadow-lg p-10 border border-[#e7d8c5]/50">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#3f3a2f] mb-4">
              Entdecke spannende Finanzartikel
            </h1>
            <p className="text-[#6e6655] text-lg max-w-2xl mx-auto">
              Lass dich inspirieren, lerne Neues über Finanzen und entdecke,
              wie du dein Geld sinnvoll einsetzt 💡
            </p>
          </div>

          <ArticleList articles={articles} /> {/* 👈 funktioniert jetzt */}
        </section>
      </div>
    </main>
  );
}
