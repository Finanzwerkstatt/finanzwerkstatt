"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import EuroGearIcon from "./EuroGearIcon";

const navLinks = [
  { href: "/", label: "Start" },
  { href: "/articles", label: "Blog" },
  { href: "/about", label: "Über mich" },
  { href: "/contact", label: "Kontakt" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-[#e9d8b7]/95 backdrop-blur-sm border-b border-[#c5a96d]/60 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4 md:p-5">
        {/* 🔹 Logo + Name */}
        <Link
          href="/"
          className="flex items-center gap-1.5 hover:opacity-90 transition"
        >
          <div className="w-8 h-8">
            <EuroGearIcon />
          </div>
          <span className="text-2xl md:text-3xl font-bold text-[#3a3428]">
            Finanz<span className="text-[#8a5c2e]">Werkstatt</span>
          </span>
        </Link>

        {/* 🔹 Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-base tracking-wide">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition duration-300 ${
                  isActive ? "text-[#8a5c2e]" : "text-[#4a4538]"
                } group`}
              >
                <span className="relative z-10 group-hover:text-[#8a5c2e]">
                  {link.label}
                </span>

                {/* 🔸 sanfte Unterstreichung */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-[#c58a4b] rounded-full transition-all duration-300 group-hover:w-full ${
                    isActive ? "w-full" : ""
                  }`}
                ></span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
