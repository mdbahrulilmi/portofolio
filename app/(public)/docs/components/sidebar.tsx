"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../../providers/LanguageProvider";
import Image from "next/image";

type Doc = { slug: string; title: string; category: string };

export default function DocsSidebar({
  groupedDocs,
}: {
  groupedDocs: Record<string, Doc[]>;
}) {
  const pathname = usePathname();
  const { lang } = useLanguage();
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const ui = {
    id: {
      brand: "Dokumentasi",
      searchPlaceholder: "Cari dokumen...",
      notFound: "Dokumen tidak ditemukan.",
      menu: "Menu",
      close: "Tutup",
    },
    en: {
      brand: "Documentation",
      searchPlaceholder: "Search docs...",
      notFound: "No documents found.",
      menu: "Menu",
      close: "Close",
    }
  };

  const t = ui[lang];
  const categories = Object.keys(groupedDocs);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return groupedDocs;
    const result: Record<string, Doc[]> = {};
    for (const cat of categories) {
      const docs = groupedDocs[cat].filter(d =>
        d.title.toLowerCase().includes(q)
      );
      if (docs.length) result[cat] = docs;
    }
    return result;
  }, [query, groupedDocs, categories]);

  return (
    <>
      <div className="md:hidden sticky top-0 z-40 flex items-center justify-between bg-white/85 backdrop-blur-md border-b border-zinc-200/80 px-4 py-2.5 shadow-xs">
        <Link href="/docs" className="flex items-center gap-2 font-bold text-zinc-900">
          <Image 
            src="/mdbahrulilmi.png"
            alt="Logo" 
            width={16}
            height={16}
            className="shadow-xs"
            />
          <span className="text-xs tracking-tight">{t.brand}</span>
        </Link>
        <button
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle Menu"
          className="text-[11px] font-semibold text-zinc-700 bg-white hover:bg-zinc-200 border border-zinc-200/80 rounded-md px-2.5 py-1 transition-colors z-50"
        >
          {mobileOpen ? t.close : t.menu}
        </button>
      </div>

      {mobileOpen && (
        <div 
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-xs md:hidden transition-opacity"
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-zinc-200/80 px-4 py-6 overflow-y-auto transition-transform duration-300 ease-in-out
          md:sticky md:top-0 md:h-screen md:translate-x-0 md:z-auto
          ${mobileOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"}
        `}
      >
        <Link href="/docs" className="hidden md:flex items-center gap-2 mb-6 group">
        <Image 
            src="/mdbahrulilmi.png"
            alt="mdbahrulilmi" 
            width={24}
            height={24}
            className="rounded bg-blue-600 group-hover:rotate-6 transition-transform shadow-xs"
            />
          <span className="font-bold text-sm text-zinc-900 tracking-tight">{t.brand}</span>
        </Link>

        <div className="relative mb-5 w-full">
          <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
            <svg
              className="w-3.5 h-3.5 text-zinc-400"
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full pl-8 pr-7 py-1.5 text-xs rounded-lg border border-zinc-200 bg-zinc-50/60 text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute inset-y-0 right-0 pr-2 flex items-center text-zinc-400 hover:text-zinc-600 text-xs"
              type="button"
            >
              ✕
            </button>
          )}
        </div>

        <nav className="space-y-4 pb-10">
          {Object.entries(filtered).map(([category, docs]) => (
            <div key={category}>
              <h3 className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5 px-2">
                {category}
              </h3>
              <ul className="space-y-0.5">
                {docs.map(doc => {
                  const href = `/docs/${doc.slug}`;
                  const active = pathname === href;
                  return (
                    <li key={doc.slug}>
                      <Link
                        href={href}
                        onClick={() => setMobileOpen(false)}
                        className={`
                          block px-2 py-1 rounded-md text-xs leading-normal transition-colors font-medium
                          ${active
                            ? "bg-blue-50 text-blue-600 font-semibold"
                            : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"}
                        `}
                      >
                        {doc.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {Object.keys(filtered).length === 0 && (
            <p className="text-[11px] text-zinc-400 px-2 py-3 text-center">{t.notFound}</p>
          )}
        </nav>
      </aside>
    </>
  );
}