"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Doc = {
  slug: string;
  title: string;
  category: string;
  description?: string;
};

export default function DocsSearch({ allDocs }: { allDocs: Doc[] }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = useMemo(
    () => Array.from(new Set(allDocs.map(d => d.category))).sort(),
    [allDocs]
  );

  const filteredDocs = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allDocs.filter(doc => {
      const matchesQuery =
        !q ||
        doc.title.toLowerCase().includes(q) ||
        doc.description?.toLowerCase().includes(q) ||
        doc.category.toLowerCase().includes(q);
      const matchesCategory = !activeCategory || doc.category === activeCategory;
      return matchesQuery && matchesCategory;
    });
  }, [allDocs, query, activeCategory]);

  const groupedDocs = useMemo(() => {
    return filteredDocs.reduce((acc, doc) => {
      (acc[doc.category] = acc[doc.category] || []).push(doc);
      return acc;
    }, {} as Record<string, Doc[]>);
  }, [filteredDocs]);

  return (
    <div>
      <div className="relative mb-6">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Cari dokumentasi... (judul, deskripsi, kategori)"
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-zinc-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 text-sm"
          >
            Hapus
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
            activeCategory === null
              ? "bg-blue-600 text-white"
              : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
          }`}
        >
          Semua ({allDocs.length})
        </button>
        {categories.map(cat => {
          const count = allDocs.filter(d => d.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      <p className="text-sm text-zinc-500 mb-6">
        Menampilkan {filteredDocs.length} dari {allDocs.length} dokumen
      </p>

      {filteredDocs.length === 0 && (
        <div className="text-center py-16 text-zinc-500">
          <p className="text-lg font-medium mb-1">Tidak ada dokumen ditemukan</p>
          <p className="text-sm">Coba kata kunci lain atau reset filter kategori.</p>
        </div>
      )}

      {Object.entries(groupedDocs).map(([category, docs]) => (
        <section key={category} className="mb-12">
          <h2 className="text-sm font-bold uppercase text-blue-600 mb-4 tracking-widest">
            {category}
          </h2>
          <div className="grid gap-3">
            {docs.map(doc => (
              <Link
                key={doc.slug}
                href={`/docs/${doc.slug}`}
                className="block p-4 rounded-xl border border-zinc-200 hover:border-blue-400 hover:bg-blue-50 transition-all"
              >
                <div className="font-medium text-zinc-900">{doc.title}</div>
                {doc.description && (
                  <div className="text-sm text-zinc-500 mt-1">{doc.description}</div>
                )}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}