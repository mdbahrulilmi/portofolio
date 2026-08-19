"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/app/(public)/providers/LanguageProvider";

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Cek menu mana yang sedang aktif
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname?.startsWith(path);
  };

  // Kamus teks Navbar berdasarkan bahasa (ID / EN)
  const navText = {
    id: {
      about: "Tentang",
      showcase: "Portofolio",
      docs: "Dokumentasi",
      connect: "Hubungi",
    },
    en: {
      about: "About",
      showcase: "Showcase",
      docs: "Docs",
      connect: "Connect",
    },
  };

  const t = navText[lang];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-100 bg-white/85 backdrop-blur-md transition-all shadow-[0_4px_20px_-4px_rgba(59,130,246,0.06)]">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Brand / Logo */}
        <div className="flex-1">
          <Link 
            href="/" 
            className="text-lg font-bold tracking-tight text-blue-950 hover:opacity-80 transition-opacity"
          >
            Mdbahrulilmi<span className="text-blue-500">.</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6 text-sm font-semibold text-blue-950/80">
            {/* Language Switcher */}
            <li className="flex items-center gap-1 p-1 bg-white rounded-full border border-blue-200 shadow-xs">
              <button
                onClick={() => setLang("id")}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  lang === "id" 
                    ? "bg-blue-600 text-white shadow-xs" 
                    : "text-blue-950/60 hover:text-blue-950"
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  lang === "en" 
                    ? "bg-blue-600 text-white shadow-xs" 
                    : "text-blue-950/60 hover:text-blue-950"
                }`}
              >
                EN
              </button>
            </li>

            {/* Menu Links dengan Garis Bawah Biru jika Aktif */}
            <li>
              <Link 
                href="/about" 
                className={`relative py-1 transition-colors ${
                  isActive("/about") 
                    ? "text-blue-600 font-bold after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-blue-500 after:rounded-full" 
                    : "hover:text-blue-600"
                }`}
              >
                {t.about}
              </Link>
            </li>
            <li>
              <Link 
                href="/showcase" 
                className={`relative py-1 transition-colors ${
                  isActive("/showcase") 
                    ? "text-blue-600 font-bold after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-blue-500 after:rounded-full" 
                    : "hover:text-blue-600"
                }`}
              >
                {t.showcase}
              </Link>
            </li>
            <li>
              <Link 
                href="/docs" 
                className={`relative py-1 transition-colors ${
                  isActive("/docs") 
                    ? "text-blue-600 font-bold after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-blue-500 after:rounded-full" 
                    : "hover:text-blue-600"
                }`}
              >
                {t.docs}
              </Link>
            </li>
            <li>
              <Link 
                href="/connect" 
                className={`px-4 py-2 rounded-full border transition-all shadow-xs ${
                  isActive("/connect")
                    ? "bg-blue-700 text-white border-blue-800"
                    : "border-blue-200 bg-blue-600 text-white hover:bg-blue-500"
                }`}
              >
                {t.connect}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Mobile Language Switcher */}
          <div className="flex items-center gap-1 p-1 bg-white rounded-full border border-blue-200 shadow-xs">
            <button
              onClick={() => setLang("id")}
              className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                lang === "id" 
                  ? "bg-blue-600 text-white shadow-xs" 
                  : "text-blue-950/60"
              }`}
            >
              ID
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                lang === "en" 
                  ? "bg-blue-600 text-white shadow-xs" 
                  : "text-blue-950/60"
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={toggleMenu}
            className="p-2 text-blue-950 hover:text-blue-600 focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-blue-100 bg-white/95 backdrop-blur-md px-6 py-6 transition-all shadow-xl">
          <ul className="flex flex-col gap-4 text-sm font-semibold text-blue-950/80">
            <li>
              <Link 
                href="/about" 
                onClick={() => setIsOpen(false)}
                className={`block py-2 transition-colors ${isActive("/about") ? "text-blue-600 font-bold" : "hover:text-blue-600"}`}
              >
                {t.about}
              </Link>
            </li>
            <li>
              <Link 
                href="/showcase" 
                onClick={() => setIsOpen(false)}
                className={`block py-2 transition-colors ${isActive("/showcase") ? "text-blue-600 font-bold" : "hover:text-blue-600"}`}
              >
                {t.showcase}
              </Link>
            </li>
            <li>
              <Link 
                href="/docs" 
                onClick={() => setIsOpen(false)}
                className={`block py-2 transition-colors ${isActive("/docs") ? "text-blue-600 font-bold" : "hover:text-blue-600"}`}
              >
                {t.docs}
              </Link>
            </li>
            <li className="pt-2">
              <Link 
                href="/connect" 
                onClick={() => setIsOpen(false)}
                className="block text-center w-full px-4 py-2.5 rounded-full border border-blue-200 bg-blue-600 shadow-xs text-white hover:bg-blue-500 transition-all"
              >
                {t.connect}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}