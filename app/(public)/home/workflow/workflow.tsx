"use client";

import { Compass, Code2, ShieldCheck, Rocket } from "lucide-react";
import { useLanguage } from "../../providers/LanguageProvider";
import id from "./content/id.json";
import en from "./content/en.json";

export default function Workflow() {
  const { lang } = useLanguage();
  const content = { id, en };

  const icons = {
    Compass,
    Code2,
    ShieldCheck,
    Rocket,
  };

  const header = content[lang].header;
  const steps = content[lang].steps;

  return (
    <section id="workflow" className="py-24 bg-white text-zinc-900 border-t border-zinc-200/50">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950">
            {header.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-xl mx-auto leading-relaxed">
            {header.description}
          </p>
        </div>

        <div className="relative border-l border-zinc-200 ml-4 md:ml-32 space-y-12">
          {steps.map((step, index) => {
            const Icon = icons[step.icon as keyof typeof icons] || Compass;
            return (
              <div key={step.number} className="relative pl-8 md:pl-12 group">
                
                <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center shadow-xs group-hover:border-blue-600 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-4 h-4 text-zinc-600 group-hover:text-blue-600 transition-colors" />
                </div>

                <div className="hidden md:block absolute -left-32 top-1 text-zinc-300 font-mono text-sm font-bold">
                  STEP {step.number}
                </div>

                <div className="bg-transparent">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="md:hidden text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      STEP {step.number}
                    </span>
                    <h3 className="text-xl font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-zinc-600 leading-relaxed mb-4 max-w-xl">
                    {step.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-zinc-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}