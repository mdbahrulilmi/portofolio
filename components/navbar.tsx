"use client";

import { useState } from "react";
import { useLanguage } from "@/app/(public)/providers/LanguageProvider";

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/60 bg-white/70 backdrop-blur-md transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        <div className="flex-1">
          <a 
            href="/" 
            className="text-lg font-semibold tracking-tight text-zinc-900 hover:opacity-80 transition-opacity"
          >
            Mdbahrulilmi
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6 text-sm font-medium text-zinc-600">
            <li className="flex items-center gap-1 p-1 bg-zinc-100 rounded-full border border-zinc-200">
              <button
                onClick={() => setLang("id")}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  lang === "id" ? "bg-white text-zinc-900 shadow-xs" : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  lang === "en" ? "bg-white text-zinc-900 shadow-xs" : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                EN
              </button>
            </li>
            <li>
              <a href="/about" className="hover:text-zinc-900 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="/showcase" className="hover:text-zinc-900 transition-colors">
                Showcase
              </a>
            </li>
            <li>
              <a href="/docs" className="hover:text-zinc-900 transition-colors">
                Docs
              </a>
            </li>
            <li>
              <a 
                href="/connect" 
                className="px-4 py-2 rounded-full border border-blue-200 bg-blue-500 shadow-xs text-white hover:bg-blue-600 transition-all"
              >
                Connect
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <div className="flex items-center gap-1 p-1 bg-zinc-100 rounded-full border border-zinc-200">
            <button
              onClick={() => setLang("id")}
              className={`px-2 py-0.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                lang === "id" ? "bg-white text-zinc-900 shadow-xs" : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              ID
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-0.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                lang === "en" ? "bg-white text-zinc-900 shadow-xs" : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={toggleMenu}
            className="p-2 text-zinc-600 hover:text-zinc-900 focus:outline-none transition-colors"
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

      {isOpen && (
        <div className="md:hidden border-t border-zinc-200/60 bg-white/95 backdrop-blur-md px-6 py-6 transition-all shadow-lg">
          <ul className="flex flex-col gap-4 text-sm font-medium text-zinc-600">
            <li>
              <a 
                href="/about" 
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:text-zinc-900 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="/showcase" 
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:text-zinc-900 transition-colors"
              >
                Showcase
              </a>
            </li>
            <li>
              <a 
                href="/docs" 
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:text-zinc-900 transition-colors"
              >
                Docs
              </a>
            </li>
            <li className="pt-2">
              <a 
                href="/connect" 
                onClick={() => setIsOpen(false)}
                className="block text-center w-full px-4 py-2.5 rounded-full border border-blue-200 bg-blue-500 shadow-xs text-white hover:bg-blue-600 transition-all"
              >
                Connect
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}