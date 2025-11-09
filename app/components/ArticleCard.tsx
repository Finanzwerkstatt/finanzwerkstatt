import Link from "next/link";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
}

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/articles/${article.id}`}
      className="block border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-transform bg-white"
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        {article.title}
      </h2>
      <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
      <div className="text-indigo-600 text-sm font-medium">
        📅 {article.date}
      </div>
    </Link>
  );
}
