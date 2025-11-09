import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-[#f9f4ef] text-[#3f3a2f]">
      {/* Section 1 - Hero */}
      <section className="py-24 text-center bg-gradient-to-b from-[#fffaf3] to-[#f7efe2]">
        <h1 className="text-5xl font-extrabold mb-4">Hallo, ich bin Luis 👋</h1>
        <p className="text-lg max-w-2xl mx-auto text-[#6e6655]">
          Willkommen in der FinanzWerkstatt – hier wird über Geld gesprochen, aber mit Herz, Verstand und Klarheit.
        </p>
      </section>

      {/* Section 2 - Mission (weiß) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Meine Mission</h2>
            <p className="mb-4 text-[#4a4538]">
              Finanzen sind kein Hexenwerk – jeder kann lernen, wie man klug mit Geld umgeht. 
              Ich zeige, dass Themen wie ETFs, Investieren und finanzielle Freiheit für alle zugänglich sind.
            </p>
            <p className="text-[#4a4538]">
              In der FinanzWerkstatt geht es nicht nur um Zahlen, sondern um Selbstvertrauen, 
              Bewusstsein und den Mut, die eigenen Finanzen in die Hand zu nehmen.
            </p>
          </div>
          <div>
            <Image
              src="/mission.jpg"
              alt="Mission Illustration"
              width={500}
              height={400}
              className="rounded-2xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Section 3 - Warum ich das mache (beige Hintergrund) */}
      <section className="py-20 bg-[#fff5ea]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Image
              src="/why.jpg"
              alt="Warum ich das mache"
              width={500}
              height={400}
              className="rounded-2xl shadow-md"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4">Warum ich das mache</h2>
            <p className="text-[#4a4538]">
              Ich habe selbst erlebt, wie verwirrend die Finanzwelt wirken kann – 
              Fachbegriffe, Risiken, Unsicherheit. Deshalb habe ich mir zum Ziel gesetzt, 
              das Thema Finanzen greifbar und menschlich zu machen.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 - Abschluss */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Mein Ziel</h2>
        <p className="max-w-2xl mx-auto text-[#6e6655]">
          Ich möchte, dass jeder das nötige Wissen und Selbstvertrauen gewinnt, 
          um finanzielle Freiheit zu erreichen – Schritt für Schritt, realistisch und motivierend.
        </p>
      </section>
    </main>
  );
}
