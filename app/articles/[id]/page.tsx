import React from "react";
import { getArticleById, getArticles } from "@/app/data/getArticles";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: { id: string };
};

// 🧠 WICHTIG: Diese Funktion erzeugt die statischen Seiten beim Build
export async function generateStaticParams() {
  const articles = await getArticles();

  // 🪶 Debug-Ausgabe:
  console.log("🧭 Static Params:", articles.map((a) => a.id));

  return articles.map((article) => ({
    id: article.id,
  }));
}

export const dynamicParams = true; // <--- temporär ändern
 // <--- hinzufügen

export async function generateMetadata({ params }: Props) {
  const article = await getArticleById(params.id);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt || "Spannender Finanzartikel auf der FinanzWerkstatt.",
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.image ? [{ url: article.image }] : [],
      type: "article",
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // 🧠 params zuerst auflösen
  const article = await getArticleById(id);

  if (!article) notFound();

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-[#f9f4ef] via-[#f5efe6] to-[#f1eadf] dark:from-[#13110d] dark:via-[#171510] dark:to-[#1c1914] text-[#3f3a2f] dark:text-[#f3eee4] transition-colors duration-300">
      {/* Hintergrunddeko */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-[#d4a373]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#b07a4a]/15 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <article className="backdrop-blur-md bg-[#fffaf3]/90 dark:bg-[#1e1b16]/80 rounded-3xl shadow-lg p-6 sm:p-10 border border-[#e7d8c5]/50 dark:border-[#3a3328]/60 transition">
          
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-[#b07a4a] dark:text-[#d4a373] hover:underline mb-6 sm:mb-8 text-sm sm:text-base"
          >
            <ArrowLeft size={18} />
            Zurück zu den Artikeln
          </Link>

          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 sm:mb-4 leading-snug text-center sm:text-left">
            {article.title}
          </h1>

          <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-[#7d7663] dark:text-[#b9b3a6] text-sm mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={16} /> {article.date}
            </div>
            {article.readingTime && (
              <div className="flex items-center gap-2">
                <Clock size={16} /> {article.readingTime}
              </div>
            )}
          </div>

          {article.image && (
            <div className="mb-10 flex justify-center">
              <Image
                src={article.image}
                alt={article.title}
                width={900}
                height={500}
                className="w-full max-w-3xl h-auto object-cover rounded-2xl shadow-md"
                priority
              />
            </div>
          )}

          <div
            className="prose prose-lg sm:prose-xl max-w-none leading-relaxed
                       text-[#3f3a2f] dark:text-[#f3eee4]
                       prose-headings:text-[#3f3a2f] dark:prose-headings:text-[#f5f0e8]
                       prose-strong:text-[#3f3a2f] dark:prose-strong:text-[#f5f0e8]
                       prose-a:text-[#b07a4a] dark:prose-a:text-[#d4a373] hover:prose-a:underline
                       prose-img:rounded-xl prose-img:shadow-md prose-img:mx-auto
                       prose-li:marker:text-[#b07a4a] dark:prose-li:marker:text-[#d4a373]"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-12 sm:mt-16 text-center">
            <Link
              href="/articles"
              className="inline-block bg-[#d4a373] hover:bg-[#b07a4a] dark:bg-[#a8774e] dark:hover:bg-[#8a5f3a] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-medium text-sm sm:text-base shadow transition"
            >
              ← Zurück zur Übersicht
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
