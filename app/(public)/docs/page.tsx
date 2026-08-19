"use client";

import { useLanguage } from "@/app/(public)/providers/LanguageProvider";

export default function DocsIndexPage() {
  const { lang } = useLanguage();

  const content = {
    id: {
      badge: "Basis Pengetahuan",
      title: "Catatan & Dokumentasi Teknis",
      description: "Kumpulan dokumentasi, hasil riset, dan catatan belajar seputar pengembangan sistem, arsitektur backend, serta optimasi frontend dari berbagai proyek.",
    },
    en: {
      badge: "KNOWLEDGE BASE",
      title: "Technical Notes & Documentation",
      description: "A collection of documentation, research, and learning logs regarding system development, backend architecture, and frontend optimization across various projects.",
    }
  };

  const t = content[lang];

  return (
    <article className="prose-none">
      <p className="text-sm font-semibold tracking-wider uppercase text-blue-600 mb-2">
        {t.badge}
      </p>
      <h1 className="text-4xl font-black text-zinc-900 mb-4 tracking-tight">
        {t.title}
      </h1>
      <p className="text-lg text-zinc-600 mb-10 leading-relaxed max-w-2xl">
        {t.description}
      </p>
    </article>
  );
}