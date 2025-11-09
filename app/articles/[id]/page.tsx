import { getArticles, getArticleById } from "@/app/data/getArticles";
import { marked } from "marked";

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ id: article.id }));
}

export default async function ArticlePage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const article = await getArticleById(id);

  if (!article) {
    return (
      <div className="text-center py-20 text-gray-600">
        Artikel nicht gefunden.
      </div>
    );
  }

  const htmlContent = await marked(article.content);

  return (
    <main className="min-h-screen bg-[#faf7f2]">
      {/* Abstand nach Header */}
      <div className="h-8" />

      <div className="max-w-5xl mx-auto px-6 py-10">
        <article className="bg-white shadow-lg rounded-2xl border border-[#e5dcc7]/60 p-10 relative overflow-hidden">
          {/* Dekorative linke/rechte Schattenflächen */}
          <div className="absolute -left-10 top-0 bottom-0 w-20 bg-gradient-to-r from-[#f4eee2] to-transparent opacity-70" />
          <div className="absolute -right-10 top-0 bottom-0 w-20 bg-gradient-to-l from-[#f4eee2] to-transparent opacity-70" />

          <header className="mb-8 border-b border-gray-200 pb-4 relative z-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {article.title}
            </h1>
            <p className="text-sm text-gray-500">
              {article.date} • {article.readingTime}
            </p>
          </header>

          <section
            className="prose prose-lg prose-slate max-w-none leading-relaxed relative z-10"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          <footer className="mt-12 pt-6 border-t border-gray-200 text-gray-500 text-sm relative z-10">
            © {new Date().getFullYear()} FinanzWerkstatt · Alle Rechte vorbehalten
          </footer>
        </article>
      </div>
    </main>
  );
}
