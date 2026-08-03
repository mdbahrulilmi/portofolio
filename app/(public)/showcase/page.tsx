"use client";

import { useState } from "react";
import { Layers } from "lucide-react";
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
    <main className="py-8">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border">
            <Layers className="w-4 h-4" />
            Showcase Portfolio
          </div>

          <h1 className="text-5xl font-bold mt-4">
            Kumpulan Proyek Pilihan.
          </h1>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category
                  ? "bg-black text-white"
                  : "bg-zinc-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ShowcaseCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </main>
  );
}