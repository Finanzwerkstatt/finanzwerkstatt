import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-[#f9f4ef] text-[#3f3a2f] overflow-x-hidden">
      {/* Section 1 - Hero */}
      <section className="py-20 sm:py-24 text-center bg-gradient-to-b from-[#fffaf3] to-[#f7efe2] px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
          Hallo, ich bin Luis 👋
        </h1>
        <p className="text-base sm:text-lg max-w-2xl mx-auto text-[#6e6655]">
          Willkommen in der FinanzWerkstatt – hier wird über Geld gesprochen, aber mit Herz, Verstand und Klarheit.
        </p>
      </section>

      {/* Section 2 - Mission */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Meine Mission</h2>
            <p className="mb-4 text-[#4a4538] text-base sm:text-lg leading-relaxed">
              Finanzen sind kein Hexenwerk – jeder kann lernen, wie man klug mit Geld umgeht. 
              Ich zeige, dass Themen wie ETFs, Investieren und finanzielle Freiheit für alle zugänglich sind.
            </p>
            <p className="text-[#4a4538] text-base sm:text-lg leading-relaxed">
              In der FinanzWerkstatt geht es nicht nur um Zahlen, sondern um Selbstvertrauen, 
              Bewusstsein und den Mut, die eigenen Finanzen in die Hand zu nehmen.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/mission.jpg"
              alt="Mission Illustration"
              width={500}
              height={400}
              className="rounded-2xl shadow-md w-full max-w-sm sm:max-w-md h-auto"
            />
          </div>
        </div>
      </section>

      {/* Section 3 - Warum ich das mache */}
      <section className="py-16 sm:py-20 bg-[#fff5ea]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="order-2 md:order-1 flex justify-center md:justify-start">
            <Image
              src="/why.jpg"
              alt="Warum ich das mache"
              width={500}
              height={400}
              className="rounded-2xl shadow-md w-full max-w-sm sm:max-w-md h-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Warum ich das mache</h2>
            <p className="text-[#4a4538] text-base sm:text-lg leading-relaxed">
              Ich habe selbst erlebt, wie verwirrend die Finanzwelt wirken kann – 
              Fachbegriffe, Risiken, Unsicherheit. Deshalb habe ich mir zum Ziel gesetzt, 
              das Thema Finanzen greifbar und menschlich zu machen.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 - Abschluss */}
      <section className="py-16 sm:py-20 bg-white text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Mein Ziel</h2>
        <p className="max-w-2xl mx-auto text-[#6e6655] text-base sm:text-lg leading-relaxed">
          Ich möchte, dass jeder das nötige Wissen und Selbstvertrauen gewinnt, 
          um finanzielle Freiheit zu erreichen – Schritt für Schritt, realistisch und motivierend.
        </p>
      </section>
    </main>
  );
}
