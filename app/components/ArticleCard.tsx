import Link from "next/link";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
}

export default function ArticleCard({ article }: { article: Article }) {
  // ✨ HTML aus Excerpt entfernen & Text kürzen
  const cleanExcerpt = article.excerpt
    .replace(/(<([^>]+)>)/gi, "") // HTML-Tags entfernen
    .slice(0, 160); // Kürzen auf 160 Zeichen

  return (
    <Link
      href={`/articles/${article.id}`}
      className="block border border-gray-200 rounded-2xl p-6 sm:p-8 bg-white hover:shadow-lg hover:-translate-y-1 transition-transform duration-200"
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
            {article.title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3">
            {cleanExcerpt}...
          </p>
        </div>
        <div className="text-sm text-amber-600 font-medium mt-auto flex items-center gap-2">
          <span>📅</span>
          <span>{article.date}</span>
        </div>
      </div>
    </Link>
  );
}
