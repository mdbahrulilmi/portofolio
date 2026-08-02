"use client";

import { useState } from "react";
import { ExternalLink, Code2, Layers, ArrowLeft } from "lucide-react";

export default function ShowcasePage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Web App", "SaaS", "API & Backend"];

  const projects = [
    {
      id: 1,
      title: "E-Commerce SaaS Platform",
      category: "SaaS",
      description:
        "Platform toko online multi-tenant dengan sistem pembayaran otomatis (Midtrans), manajemen stok real-time, dan dashboard analitik interaktif.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 2,
      title: "AI Document Analyzer",
      category: "Web App",
      description:
        "Aplikasi pemroses dokumen otomatis berbasis AI untuk mengekstrak data dari file PDF berukuran besar dan merangkum isinya dalam hitungan detik.",
      techStack: ["React", "Node.js", "Express", "OpenAI API", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 3,
      title: "High-Performance REST Gateway",
      category: "API & Backend",
      description:
        "Layanan microservice backend dengan sistem autentikasi JWT, caching Redis untuk respons cepat under 50ms, dan rate-limiting otomatis.",
      techStack: ["Node.js", "Express", "Redis", "Docker", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 4,
      title: "Real-time Collaboration Dashboard",
      category: "Web App",
      description:
        "Alat manajemen proyek tim dengan fitur papan Kanban interaktif, obrolan langsung via WebSocket, dan notifikasi email instan.",
      techStack: ["Next.js", "Socket.io", "Tailwind CSS", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 flex flex-col justify-between">

      <main className="py-4 sm:py-8 bg-white text-zinc-900 flex-1">
        <div className="max-w-6xl mx-auto px-6">

          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-zinc-50 text-xs font-medium text-zinc-600 mb-4">
                <Layers className="w-3.5 h-3.5" />
                Showcase Portfolio
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900">
                Kumpulan Proyek Pilihan.
              </h1>
            </div>
            <p className="text-sm sm:text-base text-zinc-600 max-w-md leading-relaxed">
              Eksplorasi aplikasi web, platform SaaS, dan sistem backend yang telah dirancang serta dibangun dengan standar kode profesional.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === category
                    ? "bg-zinc-900 text-white shadow-md"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200/80 hover:text-zinc-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between p-8 rounded-3xl bg-zinc-50/50 border border-zinc-200/80 hover:border-zinc-300 hover:bg-white hover:shadow-xl hover:shadow-zinc-900/5 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 text-xs font-semibold rounded-lg bg-zinc-200/70 text-zinc-700">
                      {project.category}
                    </span>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-zinc-800 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-8">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-zinc-200/60">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md bg-white border border-zinc-200 text-zinc-700"
                    >
                      <Code2 className="w-3 h-3 text-zinc-400" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}