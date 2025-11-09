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
    <main className="min-h-screen bg-gradient-to-br from-[#faf7f2] via-[#f7f2ea] to-[#f2ebe1]">
      {/* 🌿 Abstand nach Header */}
      <div className="h-6 sm:h-8" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14">
        <article className="relative bg-white shadow-lg rounded-xl sm:rounded-2xl border border-[#e5dcc7]/60 p-6 sm:p-8 md:p-10 overflow-hidden">
          {/* 🌸 Dekor nur auf größeren Screens */}
          <div className="hidden md:block absolute -left-10 top-0 bottom-0 w-20 bg-gradient-to-r from-[#f4eee2] to-transparent opacity-70" />
          <div className="hidden md:block absolute -right-10 top-0 bottom-0 w-20 bg-gradient-to-l from-[#f4eee2] to-transparent opacity-70" />

          {/* 🧭 Header */}
          <header className="mb-6 sm:mb-8 border-b border-gray-200 pb-3 sm:pb-4 relative z-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 leading-tight">
              {article.title}
            </h1>
            <p className="text-xs sm:text-sm text-gray-500">
              {article.date} • {article.readingTime}
            </p>
          </header>

          {/* 📖 Inhalt */}
          <section
            className="prose prose-base sm:prose-lg prose-slate max-w-none leading-relaxed relative z-10 text-[#3f3a2f]"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* ⚙️ Footer */}
          <footer className="mt-10 sm:mt-12 pt-5 sm:pt-6 border-t border-gray-200 text-gray-500 text-xs sm:text-sm text-center relative z-10">
            © {new Date().getFullYear()} FinanzWerkstatt · Alle Rechte vorbehalten
          </footer>
        </article>
      </div>
    </main>
  );
}
