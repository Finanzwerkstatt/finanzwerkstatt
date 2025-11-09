export default function ArticleNotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center bg-[#f9f4ef]">
      <h1 className="text-4xl font-bold text-[#3f3a2f] mb-4">Artikel nicht gefunden</h1>
      <p className="text-[#6e6655] mb-8">
        Der gesuchte Artikel existiert nicht oder wurde verschoben.
      </p>
      <a
        href="/articles"
        className="bg-[#d4a373] text-white px-6 py-3 rounded-full hover:bg-[#b07a4a] transition"
      >
        Zurück zur Übersicht
      </a>
    </main>
  );
}
