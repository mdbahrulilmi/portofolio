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
    <div className="min-h-screen bg-white font-sans text-zinc-900 flex flex-col justify-between">
      <main className="py-6 sm:py-10 bg-white text-zinc-900 flex-1">
        <div className="max-w-6xl mx-auto px-6">

          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-zinc-50 text-xs font-medium text-zinc-600 mb-4">
              <Terminal className="w-3.5 h-3.5 text-zinc-900" />
              {t.badge}
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900 mb-6">
              {t.heading}
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed font-normal text-balance">
              {t.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-y border-zinc-200/80 mb-16">
            <div className="md:col-span-1">
              <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
                {t.approachTitle}
              </h2>
            </div>
            <div className="md:col-span-2 space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
              <p>{t.approachText1}</p>
              <p>{t.approachText2}</p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-zinc-900 mb-8 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-zinc-900" />
              {t.principlesTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.highlights.map((item, index) => {
                const [title, desc] = item.split(": ");
                return (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-zinc-50/60 border border-zinc-200/70 flex items-start gap-3.5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-zinc-700 leading-relaxed">
                      <strong className="font-semibold text-zinc-900">{title}:</strong> {desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-zinc-900 mb-8 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-zinc-900" />
              {t.techTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {techStack.map((stack) => (
                <div
                  key={stack.category}
                  className="p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-xs"
                >
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">
                    {stack.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-100 text-zinc-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">{t.ctaTitle}</h3>
              <p className="text-zinc-400 text-sm">{t.ctaSub}</p>
            </div>
            <a
              href="/connect"
              className="px-6 py-3 rounded-full bg-white text-zinc-900 text-sm font-semibold hover:bg-zinc-100 transition-colors shrink-0"
            >
              {t.ctaBtn}
            </a>
          </div>

        </div>
      </main>
    </div>
  );
}