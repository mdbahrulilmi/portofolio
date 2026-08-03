"use client"

import { useLanguage } from "@/app/(public)/providers/LanguageProvider";

export default function Navbar() {
  
  const { lang, setLang } = useLanguage();

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

        <nav className="flex-none">
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
                className="px-4 py-2 rounded-full border border-zinc-200 bg-emerald-500 shadow-xs text-white hover:bg-emerald-800 transition-all"
              >
                Connect
              </a>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}