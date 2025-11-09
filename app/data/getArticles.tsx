import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDir = path.join(process.cwd(), "content/articles");

export interface Article {
  id: string;
  title: string;
  date: string;
  readingTime: string;
  excerpt: string; // ✅ vorher summary
  content: string;
}

export async function getArticles(): Promise<Article[]> {
  const files = fs.readdirSync(articlesDir);

  const articles = files.map((fileName) => {
    const filePath = path.join(articlesDir, fileName);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return {
      id: fileName.replace(/\.md$/, ""),
      title: data.title,
      date: data.date,
      readingTime: data.readingTime,
      excerpt: data.excerpt, // ✅ vorher data.summary
      content,
    };
  });

  return articles.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getArticleById(id: string): Promise<Article> {
  const filePath = path.join(articlesDir, `${id}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    id,
    title: data.title,
    date: data.date,
    readingTime: data.readingTime,
    excerpt: data.excerpt, // ✅ vorher data.summary
    content,
  };
}
