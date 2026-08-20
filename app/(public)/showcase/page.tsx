"use client";

import { useState } from "react";
import { FolderGit2 } from "lucide-react";
import { useLanguage } from "@/app/(public)/providers/LanguageProvider";
import showcase from "@/content/showcase.json";
import ShowcaseCard from "./components/ShowcaseCard";

const uiText = {
  id: {
    title: "Kumpulan Proyek Pilihan",
    subtitle: "Eksplorasi mendalam mengenai hasil karya rekayasa perangkat lunak, sistem backend berperforma tinggi, dan aplikasi web modern.",
    allCategory: "Semua",
    emptyCategory: "Belum ada proyek dalam kategori",
  },
  en: {
    title: "Featured Projects Showcase",
    subtitle: "In-depth exploration of software engineering masterpieces, high-performance backend systems, and modern web applications.",
    allCategory: "All",
    emptyCategory: "No projects found in category",
  },
};

export default function ShowcasePage() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const t = uiText[lang];
  const projects = showcase.projects;

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <main className="relative min-h-screen py-12 sm:py-16 overflow-hidden bg-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-blue-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="relative max-w-6xl mx-auto px-6">

        <div className="mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 text-blue-950">
            {t.title}<span className="text-blue-500">.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-blue-950/80 leading-relaxed font-normal max-w-3xl">
            {t.subtitle}
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-2 mb-12 p-1.5 rounded-2xl bg-white border border-blue-200 shadow-xs w-fit">
          {categories.map((category) => {
            const displayLabel = category === "All" && lang === "id" ? t.allCategory : category;
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white shadow-xs scale-[1.02]"
                    : "bg-white text-blue-950/70 hover:text-blue-950 hover:bg-blue-50"
                }`}
              >
                {displayLabel}
              </button>
            );
          })}
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => {
              const isFeatured = activeCategory === "All" && index === 0;

              return (
                <div
                  key={project.id}
                  className={`transition-all duration-300 hover:-translate-y-1 ${
                    isFeatured ? "md:col-span-2" : ""
                  }`}
                >
                  <ShowcaseCard project={project} />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-24 border border-dashed border-blue-200 rounded-3xl bg-white">
            <FolderGit2 className="w-10 h-10 mx-auto text-blue-400 mb-3 opacity-50" />
            <p className="text-blue-950/70 text-sm font-medium">
              {t.emptyCategory} <span className="text-blue-600 font-semibold">{activeCategory}</span>.
            </p>
          </div>
        )}

      </div>
    </main>
  );
}