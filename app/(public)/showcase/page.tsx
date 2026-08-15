"use client";

import { useState } from "react";
import { Sparkles, FolderGit2 } from "lucide-react";
import showcase from "./content/showcase.json";
import ShowcaseCard from "./components/ShowcaseCard";

export default function ShowcasePage() {
  const [activeCategory, setActiveCategory] = useState("All");

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
    <main className="relative min-h-screen py-12 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-blue-500/10 dark:bg-blue-500/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="relative max-w-6xl mx-auto px-6">

        <div className="mb-12 md:mb-16">
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-900 dark:text-white">
            Kumpulan Proyek Pilihan<span className="text-blue-500">.</span>
          </h1>
          
          <p className="text-zinc-600 dark:text-zinc-400 mt-4 text-base md:text-lg max-w-2xl leading-relaxed">
            Eksplorasi mendalam mengenai hasil karya rekayasa perangkat lunak, sistem backend berperforma tinggi, dan aplikasi web modern.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-2 mb-12 p-1.5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs w-fit">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white dark:bg-blue-500 dark:text-zinc-950 shadow-xs scale-[1.02]"
                    : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
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
          <div className="text-center py-24 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-3xl bg-white dark:bg-zinc-900/50">
            <FolderGit2 className="w-10 h-10 mx-auto text-zinc-400 mb-3 opacity-50" />
            <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">
              Belum ada proyek dalam kategori <span className="text-blue-600 dark:text-blue-400 font-semibold">{activeCategory}</span>.
            </p>
          </div>
        )}

      </div>
    </main>
  );
}