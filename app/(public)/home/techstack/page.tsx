"use client";

import { useLanguage } from "../../providers/LanguageProvider";

export default function TechStackCarousel() {
  const { lang } = useLanguage();

  const content = {
    id: {
      badge: "Keahlian Teknis",
      title: "Tech Stack & Tools",
      description: "Teknologi yang saya gunakan secara profesional untuk merancang sistem yang cepat, aman, dan skalabel.",
    },
    en: {
      badge: "Technical Expertise",
      title: "Tech Stack & Tools",
      description: "Technologies I use professionally to engineer fast, secure, and scalable systems.",
    }
  };

  const t = content[lang];

  const skills = [
    "React.js", "Next.js", "Flutter", "Tailwind CSS", "Alpine.js", "Livewire",
    "Laravel", "Node.js", "Go", "Python", "Flask", "Streamlit",
    "MySQL", "PostgreSQL", "SQLite", "Firebase", "AWS S3", "Docker"
  ];

  return (
    <section className="py-24 bg-white text-zinc-900 border-t border-blue-200/50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
          {t.title}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-600 max-w-lg mx-auto leading-relaxed">
          {t.description}
        </p>
      </div>

      <div className="relative w-full flex overflow-x-hidden group">
        
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap gap-4 py-4">
          {skills.concat(skills).map((skill, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-xl bg-blue-50 border border-blue-200 text-zinc-800 text-sm font-semibold tracking-wide shadow-xs hover:border-blue-500 hover:text-blue-600 transition-colors cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}