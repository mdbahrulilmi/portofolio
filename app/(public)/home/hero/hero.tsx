"use client"

import { useLanguage } from "@/app/(public)/providers/LanguageProvider";
import { ArrowRight } from "lucide-react";
import id from "./content/id.json"
import en from "./content/en.json"

export default function Hero() {

  const { lang } = useLanguage();
  
    const content = {
      id, 
      en,
    };
  
    const t = content[lang];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-white text-blue-950 overflow-hidden px-6 transition-colors [&_*]:dark:bg-inherit [&_*]:dark:text-inherit">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-blue-200/55 via-indigo-100/30 to-blue-300/40  blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.12] max-w-3xl text-balance text-blue-950">
          <span className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 text-blue-950">
            {t.title}
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-xl text-blue-950/80 font-normal leading-relaxed max-w-2xl text-balance">
          {t.subTitle}
        </p>

        <div className="mt-10 flex items-center justify-center">
          <a href={t.buttonLink} className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-blue-900 hover:bg-blue-950 text-white font-medium text-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/20 active:scale-95 cursor-pointer">
            <span>{t.buttonTitle}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-white" />
          </a>
        </div>

      </div>
    </section>
  );
}