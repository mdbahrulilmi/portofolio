"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "../../providers/LanguageProvider";
import id from "./content/id.json";
import en from "./content/en.json";

export default function Services() {
  const { lang } = useLanguage();
  const content = { id, en };
  const header = content[lang].header;
  const servicesList = content[lang].services;

  return (
    <section id="services" className="py-24 bg-white text-zinc-900 border-t border-zinc-200/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-950 mb-6">
            {header.title}
          </h2>
          <p className="text-lg text-zinc-600 max-w-xl mx-auto leading-relaxed">
            {header.description}
          </p>
        </div>

        <div className="space-y-4">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row md:items-start gap-6 p-8 rounded-2xl transition-all duration-500 hover:bg-blue-50 border border-transparent hover:border-blue-200"
            >
              <div className="text-zinc-300 font-mono text-3xl font-bold group-hover:text-blue-500 transition-colors">
                0{index + 1}
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-zinc-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed mb-4 max-w-md">
                  {service.description}
                </p>
              </div>

              <a
                href={service.link}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-0 group-hover:translate-x-2 pt-2"
              >
                {header.actionText} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}