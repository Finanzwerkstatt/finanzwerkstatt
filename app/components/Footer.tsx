"use client";

import Link from "next/link";
import { Mail, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#ddc79f] text-[#3f3a2f] pt-16 pb-10 mt-auto border-t border-[#d4b98a]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Saubere Spaltenverteilung */}
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1.2fr] gap-20 text-sm">
          {/* 🧰 Spalte 1 */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold">
              Finanz<span className="text-[#b07a4a]">Werkstatt</span>
            </h3>
            <p className="text-[#4f4735] leading-relaxed">
              Deine Werkstatt für Finanzwissen, Selbstvertrauen und kluge
              Geldentscheidungen. Lerne, wie du deine Finanzen mit Freude selbst
              in die Hand nimmst.
            </p>
          </div>

          {/* 🧭 Spalte 2 */}
          <div className="space-y-3 md:ml-12">
            <h3 className="text-lg font-semibold mb-2">Navigation</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/" className="hover:text-[#b07a4a] transition">
                  Start
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="hover:text-[#b07a4a] transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#b07a4a] transition">
                  Über mich
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#b07a4a] transition"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* ✉️ Spalte 3 */}
          <div className="space-y-3 md:ml-24">
            <h3 className="text-lg font-semibold mb-2">Kontakt</h3>
            <div className="flex items-center gap-2">
              <Mail size={16} />{" "}
              <a
                href="mailto:kontakt@finanzwerkstatt.de"
                className="hover:text-[#b07a4a] transition"
              >
                kontakt@finanzwerkstatt.at
              </a>
            </div>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-[#b07a4a] transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-[#b07a4a] transition">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* 📜 Unterer Bereich */}
        <div className="border-t border-[#d4b98a] mt-10 pt-6 text-center text-xs text-[#5c5443]">
          © {new Date().getFullYear()} FinanzWerkstatt · Alle Rechte vorbehalten
        </div>
      </div>
    </footer>
  );
}
