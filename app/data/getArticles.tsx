import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDir = path.join(process.cwd(), "content/articles");

export interface Article {
  id: string;
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  content: string;
  image?: string;
}

export async function getArticles(): Promise<Article[]> {
  const files = fs.readdirSync(articlesDir);

  const articles = files.map((fileName) => {
    const filePath = path.join(articlesDir, fileName);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return {
      id: fileName.replace(/\.md$/, ""),
      title: data.title || "Ohne Titel",
      date: data.date || "Unbekanntes Datum",
      readingTime: data.readingTime || "",
      excerpt: data.excerpt || "",
      content,
      image: data.image || undefined,
    };
  });

  return articles.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getArticleById(id: string): Promise<Article | null> {
  const filePath = path.join(articlesDir, `${id}.md`);

  // ✅ Sicherstellen, dass die Datei existiert
  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️ Artikel nicht gefunden: ${id}`);
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    id,
    title: data.title || "Ohne Titel",
    date: data.date || "Unbekanntes Datum",
    readingTime: data.readingTime || "",
    excerpt: data.excerpt || "",
    content,
    image: data.image || undefined,
  };
}
