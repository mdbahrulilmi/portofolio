"use client";

import { Terminal, Cpu, Sparkles, CheckCircle2 } from "lucide-react";
import id from "./content/id.json"
import en from "./content/en.json"
import { useLanguage } from "../providers/LanguageProvider";

export default function AboutPage() {

  const { lang } = useLanguage();

  const content = {
    id, 
    en,
  };

  const t = content[lang];

  const techStack = [
    { category: "Frontend", skills: ["React", "Next.js", "Livewire", "Flutter", "Tailwind CSS"] },
    { category: "Backend", skills: ["Laravel", "Node.js", "PHP", "Express.js", "MySQL", "PostgreSQL"] },
    { category: "DevOps & Tools", skills: ["Git / GitHub", "Vercel", "Linux", "cPanel", "Postman"] },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans text-blue-950 dark:text-white flex flex-col justify-between transition-colors">
      <main className="py-12 sm:py-16 flex-1">
        <div className="max-w-6xl mx-auto px-6">

          {/* Header Section */}
          <div className="mb-12 md:mb-16">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6">
              {t.heading}<span className="text-blue-500">.</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-950/80 dark:text-blue-200/80 leading-relaxed font-normal max-w-3xl">
              {t.subheading}
            </p>
          </div>

          {/* Approach Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-y border-blue-100 dark:border-blue-950 mb-16">
            <div className="md:col-span-1">
              <h2 className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                {t.approachTitle}
              </h2>
            </div>
            <div className="md:col-span-2 space-y-4 text-blue-950/80 dark:text-blue-200/80 text-sm sm:text-base leading-relaxed">
              <p>{t.approachText1}</p>
              <p>{t.approachText2}</p>
            </div>
          </div>

          {/* Principles / Highlights Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-blue-500" />
              {t.principlesTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.highlights.map((item: string, index: number) => {
                const parts = item.split(": ");
                const title = parts[0];
                const desc = parts.slice(1).join(": ");
                return (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-white dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-900/60 flex items-start gap-3.5 shadow-xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-950/90 dark:text-blue-100 leading-relaxed">
                      <strong className="font-semibold text-blue-950 dark:text-white">{title}:</strong> {desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2.5">
              <Cpu className="w-5 h-5 text-blue-500" />
              {t.techTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {techStack.map((stack) => (
                <div
                  key={stack.category}
                  className="p-6 rounded-2xl bg-white dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-900/50 shadow-xs"
                >
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
                    {stack.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-800 dark:text-blue-200 border border-blue-200/60 dark:border-blue-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="p-8 sm:p-10 rounded-3xl bg-blue-600 dark:bg-blue-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">{t.ctaTitle}</h3>
              <p className="text-blue-100 text-sm">{t.ctaSub}</p>
            </div>
            <a
              href="/connect"
              className="px-6 py-3 rounded-full bg-white text-blue-950 text-xs font-bold hover:bg-blue-50 transition-colors shrink-0 shadow-xs"
            >
              {t.ctaBtn}
            </a>
          </div>

        </div>
      </main>
    </div>
  );
}