import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export interface Article {
  id: string;
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  content: string; // HTML
  image?: string;
}

// 📁 Absoluter Pfad zum Artikelverzeichnis
const articlesDir = path.join(process.cwd(), "content", "articles");

// 📖 Automatische Lesedauer berechnen (200 Wörter pro Minute)
function calculateReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 180)); // etwas großzügiger gerechnet 😉
  return `${minutes} ${minutes === 1 ? "Minute" : "Minuten"}`;
}


export async function getArticles(): Promise<Article[]> {
  // 🔍 Debug-Ausgabe – zeigt alle gefundenen Dateien beim Build
  const files = fs.readdirSync(articlesDir);
  console.log("📚 Gefundene Artikeldateien:", files);

  // 🧩 async map + Promise.all, weil marked() async ist
  const articles = await Promise.all(
    files
      .filter((fileName) => fileName.endsWith(".md")) // ✅ Nur Markdown-Dateien verarbeiten
      .map(async (fileName) => {
        const filePath = path.join(articlesDir, fileName);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data, content } = matter(fileContent);

        // ✅ Markdown zu HTML umwandeln
        const htmlContent = await marked(content);

        return {
          id: fileName.replace(/\.md$/, ""),
          title: data.title || "Ohne Titel",
          date: data.date || "Unbekanntes Datum",
          readingTime: data.readingTime || calculateReadingTime(content),
          excerpt: data.excerpt || "",
          content: htmlContent,
          image: data.image || undefined,
        };
      })
  );

  // 🔽 Sortiere Artikel nach Datum (neueste zuerst)
  return articles.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getArticleById(id: string): Promise<Article | null> {
  if (!id) return null;

  const filePath = path.join(articlesDir, `${id}.md`);

  // ✅ Prüfen, ob Datei existiert
  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️ Artikel nicht gefunden: ${id}`);
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  const htmlContent = await marked(content);

  return {
    id,
    title: data.title || "Ohne Titel",
    date: data.date || "Unbekanntes Datum",
    readingTime: data.readingTime || calculateReadingTime(content),
    excerpt: data.excerpt || "",
    content: htmlContent,
    image: data.image || undefined,
  };
}
