"use client";

import {
  Briefcase,
  GraduationCap,
  Sparkles,
  Cpu,
  CheckCircle2,
  ArrowUpRight,
  Calendar,
  Layers,
  Code,
  Bot,
  BrainCircuit,
  FolderGit2,
  Smartphone,
  Globe,
  Award
} from "lucide-react";
import id from "./content/id.json";
import en from "./content/en.json";
import { useLanguage } from "../providers/LanguageProvider";

const iconMap: Record<string, React.ReactNode> = {
  layers: <Layers className="w-5 h-5 text-blue-600" />,
  code: <Code className="w-5 h-5 text-blue-600" />,
  brain: <BrainCircuit className="w-5 h-5 text-blue-600" />,
  bot: <Bot className="w-5 h-5 text-blue-600" />,
  git: <FolderGit2 className="w-6 h-6 text-blue-600" />,
  smartphone: <Smartphone className="w-6 h-6 text-blue-600" />,
  globe: <Globe className="w-6 h-6 text-blue-600" />,
};

export default function AboutPage() {
  const { lang } = useLanguage();

  const content = {
    id,
    en,
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-white font-sans text-blue-950 flex flex-col justify-between transition-colors [&_*]:dark:bg-inherit [&_*]:dark:text-inherit">
      <main className="py-16 flex-1">
        <div className="max-w-6xl mx-auto px-6">

          <div className="mb-16">
            
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 text-blue-950 leading-[1.15]">
              {t.heading}<span className="text-blue-600">.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-blue-950/80 leading-relaxed font-normal max-w-2xl">
              {t.subheading}
            </p>
          </div>

          <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-white border border-blue-100 shadow-xl shadow-blue-900/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
            
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> {t.approachTitle}
            </h2>
            
            <div className="space-y-4 text-blue-950/80 text-base sm:text-lg leading-relaxed relative z-10">
              <p>{t.approachText1}</p>
              <p>{t.approachText2}</p>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-blue-950 flex items-center gap-2.5">
                <Cpu className="w-6 h-6 text-blue-600" />
                {t.techTitle || "Keahlian & Spesialisasi Domain"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.descriptiveSkills?.map((skillGroup: any, index: number) => (
                <div
                  key={index}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-blue-100/80 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-blue-50">
                        {iconMap[skillGroup.icon] || <Layers className="w-5 h-5 text-blue-600" />}
                      </div>
                      <h3 className="text-base font-bold text-blue-950">{skillGroup.category}</h3>
                    </div>
                    <p className="text-sm text-blue-950/75 leading-relaxed mb-4">
                      {skillGroup.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-blue-50">
                    {skillGroup.techs?.map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-semibold rounded-md bg-blue-50/60 text-blue-800 border border-blue-100/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2.5 text-blue-950">
              <Award className="w-6 h-6 text-blue-600" />
              {t.statsTitle || "Rekam Jejak & Portofolio Singkat"}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.statsHighlights?.map((stat: any, index: number) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white border border-blue-100/80 hover:border-blue-300 transition-all shadow-sm flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-blue-50 shrink-0 mt-0.5">
                    {iconMap[stat.icon] || <FolderGit2 className="w-6 h-6 text-blue-600" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-blue-950 mb-1">{stat.title}</h3>
                    <p className="text-sm text-blue-950/70 leading-relaxed">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-blue-950 flex items-center gap-2.5">
                <Briefcase className="w-6 h-6 text-blue-600" />
                {t.experienceTitle || "Pengalaman & Riwayat"}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {t.experiences?.map((item: any, index: number) => (
                <div 
                  key={index}
                  className="group p-6 sm:p-8 rounded-2xl bg-white border border-blue-100/80 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 relative"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        {item.type === "Experience" ? <Briefcase className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-blue-950">{item.role}</h3>
                        <p className="text-sm font-semibold text-blue-600">{item.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-medium text-blue-950/60 sm:text-right">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-100">
                        <Calendar className="w-3.5 h-3.5" /> {item.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-blue-950/75 leading-relaxed pl-0 sm:pl-14">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-blue-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-900/10">
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">{t.ctaTitle}</h3>
              <p className="text-blue-100 text-sm max-w-md">{t.ctaSub}</p>
            </div>
            <a
              href="/connect"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-blue-950 text-xs font-bold hover:bg-blue-50 transition-all shrink-0 shadow-md active:scale-95"
            >
              <span>{t.ctaBtn}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

        </div>
      </main>
    </div>
  );
}