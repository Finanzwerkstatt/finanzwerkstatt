import Link from "next/link";
import Image from "next/image";
import EuroGearIcon from "./components/EuroGearIcon";
import { getArticles } from "./data/getArticles";
import { Calendar, Clock, Wrench, Eye, Lightbulb } from "lucide-react";


export const metadata = {
  title: "FinanzWerkstatt | Deine Werkstatt für Finanzwissen",
  description:
    "Finanzwissen verständlich, ehrlich und praxisnah – willkommen in der FinanzWerkstatt.",
};

export default async function HomePage() {
  const articles = await getArticles();
  const latest = articles.slice(0, 3); // Nur die neuesten 3 Artikel

  return (
    <main className="bg-gradient-to-b from-[#f9f4ef] via-[#f6f1e8] to-[#f2ebe0] text-[#3f3a2f]">
      {/* 🏁 Hero Section */}
      <section className="text-center py-32 px-6 bg-gradient-to-br from-[#f6eee2] to-[#e9ddc6]">
        <h1 className="text-5xl font-extrabold mb-6">
          Willkommen in der <span className="text-[#b07a4a]">FinanzWerkstatt</span> 🔧
        </h1>
        <p className="max-w-2xl mx-auto text-lg mb-8 text-[#5c5443]">
          Verstehe Finanzen endlich so, dass sie Sinn machen.
        </p>
        <Link
          href="/articles"
          className="inline-block bg-[#d4a373] hover:bg-[#b07a4a] text-white px-6 py-3 rounded-full font-semibold shadow transition"
        >
          Jetzt entdecken →
        </Link>
      </section>

      {/* 📰 Neueste Artikel */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Neueste Artikel aus der Werkstatt
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {latest.map((article) => (
            <article
              key={article.id}
              className="bg-[#fffaf3] border border-[#e7d8c5] rounded-2xl shadow-md hover:shadow-lg transition-all p-6"
            >
              <h3 className="text-xl font-bold mb-3 text-[#3f3a2f]">
                {article.title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-[#7d7663] mb-3">
                <div className="flex items-center gap-1">
                  <Calendar size={15} /> {article.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={15} /> {article.readingTime}
                </div>
              </div>
              <p className="text-[#5c5443] mb-4 line-clamp-3">{article.excerpt}</p>
              <Link
                href={`/articles/${article.id}`}
                className="inline-block bg-[#d4a373] hover:bg-[#b07a4a] text-white px-4 py-2 rounded-full font-medium text-sm shadow transition"
              >
                Weiterlesen →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* 💬 Zitat Sektion */}
      <section className="bg-[#ebdfc9] py-28 text-center">
        <blockquote className="text-2xl italic max-w-3xl mx-auto text-[#4a4538] leading-relaxed">
          „Finanzielle Freiheit beginnt nicht mit Geld – sondern mit dem Wissen,
          wie man es versteht.“ 💡
        </blockquote>
      </section>

      {/* 🔧 Wie ich dir helfen kann */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Wie ich dir helfen kann
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="p-8 bg-[#fffaf3] rounded-2xl shadow-sm hover:shadow-md transition">
            <Wrench size={40} className="mx-auto text-[#b07a4a] mb-4" />
            <h3 className="font-bold text-xl mb-2">Praxisnahes Wissen</h3>
            <p className="text-[#6e6655]">
              Ich erkläre komplexe Themen wie ETFs, Geldanlage und Finanzen
              einfach und greifbar.
            </p>
          </div>

          <div className="p-8 bg-[#fffaf3] rounded-2xl shadow-sm hover:shadow-md transition">
            <Eye size={40} className="mx-auto text-[#b07a4a] mb-4" />
            <h3 className="font-bold text-xl mb-2">Durchblick statt Buzzwords</h3>
            <p className="text-[#6e6655]">
            Versteh Finanzbegriffe und Konzepte wirklich – ohne Fachchinesisch, dafür mit Klarheit und Aha-Momenten.
            </p>
          </div>

          <div className="p-8 bg-[#fffaf3] rounded-2xl shadow-sm hover:shadow-md transition">
            <Lightbulb size={40} className="mx-auto text-[#b07a4a] mb-4" />
            <h3 className="font-bold text-xl mb-2">Neue Perspektiven</h3>
            <p className="text-[#6e6655]">
              Finanzen dürfen Spaß machen – mit Aha-Momenten und verständlichen
              Beispielen aus dem Alltag.
            </p>
          </div>
        </div>
      </section>

{/* 📱 Coming Soon – App */}
<section className="bg-[#ebdfc9] py-28 text-center">
  <div className="flex flex-col items-center justify-center gap-6">
    {/* Nutzt dein EuroGearIcon Component */}
    <div className="w-24 h-24 text-[#b07a4a] motion-safe:animate-spin-slow">
  <EuroGearIcon />
</div>


    <h2 className="text-3xl font-bold text-[#3f3a2f]">
      Die FinanzWerkstatt App
    </h2>

    <p className="text-[#6e6655] text-lg max-w-xl mx-auto">
      Bald kannst du die Werkstatt immer bei dir tragen – Tools, Tipps &
      Wissen in einer App. <br />
      <span className="italic text-[#b07a4a]">Coming Soon...</span>
    </p>
  </div>
</section>

    </main>
  );
}
