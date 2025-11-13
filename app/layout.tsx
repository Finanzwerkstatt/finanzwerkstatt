import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "FinanzWerkstatt",
  description: "Deine Werkstatt für Finanzwissen und Vermögensaufbau.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="h-full scroll-smooth">
      <body className="flex flex-col min-h-screen bg-[#f9f4ef] text-[#3f3a2f] m-0 p-0">
        {/* 🔹 Header bleibt immer oben */}
        <Header />

        {/* 🔹 Main füllt automatisch den Platz aus */}
        <main className="flex-grow m-0 p-0">
          {children}
        </main>

        {/* 🔹 Footer immer am Ende */}
        <Footer />
      </body>
    </html>
  );
}
