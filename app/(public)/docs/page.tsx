"use client";

import { useState } from "react";
import { BookOpen, Terminal, Code2, Server, Shield, Cpu, ChevronRight, Calendar, Search } from "lucide-react";

export default function LearningBlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Contoh data catatan belajar kamu (Bisa dipindah ke file JSON terpisah nanti)
  const notes = [
    {
      id: "laravel-eloquent-optimization",
      slug: "laravel-eloquent-optimization",
      category: "backend",
      title: "Optimasi Query Eloquent Laravel agar Terhindar dari N+1 Problem",
      summary: "Catatan belajar cara menggunakan eager loading (with) dan chunking untuk performa database Laravel yang masif.",
      date: "19 Agustus 2026",
      readTime: "4 min read",
      icon: Server,
    },
    {
      id: "nextjs-app-router-seo",
      slug: "nextjs-app-router-seo",
      category: "frontend",
      title: "Mengatur Dynamic Metadata & Sitemap di Next.js App Router untuk SEO",
      summary: "Eksplorasi cara memaksimalkan generateMetadata dan robots.txt agar website portofolio atau blog gampang diindeks Google.",
      date: "18 Agustus 2026",
      readTime: "5 min read",
      icon: Code2,
    },
    {
      id: "whatsmeow-golang-bot",
      slug: "whatsmeow-golang-bot",
      category: "systems",
      title: "Membuat WhatsApp Gateway Berperforma Tinggi dengan Go & Whatsmeow",
      summary: "Catatan setup library Whatsmeow di Golang untuk menangani webhook pesan otomatis tanpa ngadat.",
      date: "15 Agustus 2026",
      readTime: "6 min read",
      icon: Terminal,
    },
  ];

  const categories = [
    { id: "all", label: "Semua Catatan" },
    { id: "backend", label: "Laravel & Backend" },
    { id: "frontend", label: "Frontend & Next.js" },
    { id: "systems", label: "Go & Automation" },
  ];

  // Filter catatan berdasarkan kategori & pencarian
  const filteredNotes = notes.filter((note) => {
    const matchesCategory = selectedCategory === "all" || note.category === selectedCategory;
    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          note.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-sans text-blue-950 flex flex-col justify-between transition-colors">
      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-12 sm:py-16">

        {/* Header Blog / Catatan Belajar */}
        <div className="border-b border-blue-100 pb-8 mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block mb-4">
            Knowledge Base & Learning Log
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-blue-950">
            Catatan Belajar & Eksplorasi Kode<span className="text-blue-500">.</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-blue-950/80 max-w-2xl leading-relaxed">
            Tempat saya mendokumentasikan proses belajar Laravel, optimasi arsitektur fullstack, dan berbagai trik pemrograman harian.
          </p>
        </div>

        {/* SEARCH & FILTER BAR */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-10">
          
          {/* Kategori Filter */}
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-zinc-50 text-blue-950/70 border border-zinc-200 hover:bg-blue-50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box untuk SEO / Navigasi cepat */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Cari topik catatan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors text-blue-950"
            />
          </div>
        </div>

        {/* GRID DAFTAR CATATAN (BLOG LIST) */}
        <div className="grid grid-cols-1 gap-6">
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note) => {
              const Icon = note.icon;
              return (
                <a
                  key={note.id}
                  href={`/docs/${note.slug}`}
                  className="group p-6 rounded-2xl bg-zinc-50/50 border border-zinc-200/80 hover:border-blue-300 hover:bg-white hover:shadow-xl hover:shadow-blue-950/5 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-white border border-zinc-200 shadow-xs group-hover:scale-105 group-hover:border-blue-200 transition-all shrink-0">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 text-xs text-zinc-400 mb-2 font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> {note.date}
                        </span>
                        <span>•</span>
                        <span>{note.readTime}</span>
                      </div>
                      <h2 className="text-lg sm:text-xl font-bold text-blue-950 group-hover:text-blue-600 transition-colors mb-2">
                        {note.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-2xl">
                        {note.summary}
                      </p>
                    </div>
                  </div>

                  <div className="self-end sm:self-center p-2 rounded-full bg-transparent group-hover:bg-blue-50 transition-colors shrink-0">
                    <ChevronRight className="w-5 h-5 text-zinc-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-1" />
                  </div>
                </a>
              );
            })
          ) : (
            <div className="text-center py-20 bg-zinc-50 rounded-2xl border border-zinc-200">
              <p className="text-sm text-zinc-500">Tidak ada catatan yang cocok dengan pencarian Anda.</p>
            </div>
          )}
        </div>

      </main>
    </div>
  );
} 