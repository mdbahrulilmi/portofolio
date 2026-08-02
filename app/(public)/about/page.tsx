"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Terminal, Cpu, Sparkles, CheckCircle2, Globe } from "lucide-react";

export default function AboutPage() {
  const [lang, setLang] = useState<"id" | "en">("id");

  const content = {
    id: {
      back: "Kembali",
      badge: "About Me",
      heading: "Halo, Saya Muhammad Bahrul Ilmi",
      subheading:
        "Saya membantu bisnis dan founder mengubah alur kerja rumit menjadi aplikasi web yang cepat, efisien, dan mudah digunakan oleh tim maupun pengguna akhir.",
      approachTitle: "Pendekatan Kerja",
      approachText1:
        "Bikin web itu bukan cuma soal tampilannya cantik di layar, tapi juga dalemannya. Bagi saya, kodingan yang baik harus punya arsitektur backend yang stabil, query database yang efisien, dan antarmuka yang responsif di segala ukuran layar.",
      approachText2:
        "Setiap proyek saya garap dari sudut pandang bisnis—bukan sekadar nulis kode, tapi juga memastikan solusi teknis yang dibuat benar-benar menyelesaikan masalah dan siap di-scale.",
      principlesTitle: "Prinsip & Nilai Kerja",
      highlights: [
        "Clean Code & Arsitektur Scalable: Kodingan rapi dan gampang di-maintain oleh tim.",
        "Performa Super Cepat & SEO: Web dioptimasi agar loading instan dan mudah ditemukan di Google.",
        "Komunikasi Transparan: Tanpa istilah teknis yang ribet, fokus pada solusi bisnis.",
        "End-to-End Delivery: Berpengalaman membangun dari skema database hingga deployment ke cloud.",
      ],
      techTitle: "Teknologi & Tools",
      ctaTitle: "Punya ide proyek atau butuh bantuan?",
      ctaSub: "Mari ngobrol santai untuk bahas kebutuhan teknis web kamu.",
      ctaBtn: "Hubungi Saya",
    },
    en: {
      back: "Back",
      badge: "About Me",
      heading: "Hi, I'm Muhammad Bahrul Ilmi",
      subheading:
        "I help businesses and founders turn complex workflows into fast, scalable, and intuitive web applications built for both teams and end-users.",
      approachTitle: "Work Approach",
      approachText1:
        "Building a great web app isn't just about making it look pretty; it's about what goes on under the hood. I focus on solid backend architectures, efficient database queries, and seamless responsiveness across all screen sizes.",
      approachText2:
        "I approach every project with a product mindset—solving actual business problems through clean code, thoughtful system design, and scalable infrastructure.",
      principlesTitle: "Principles & Values",
      highlights: [
        "Clean & Maintainable Code: Well-structured code that your team can easily scale.",
        "High Performance & SEO: Optimized for instant load times and search engine visibility.",
        "Transparent Communication: Clear, plain-English updates without confusing technical jargon.",
        "End-to-End Delivery: Hands-on experience from database schema design to cloud deployment.",
      ],
      techTitle: "Tech Stack & Tools",
      ctaTitle: "Have a project in mind?",
      ctaSub: "Let's discuss your technical needs and build something solid together.",
      ctaBtn: "Get in Touch",
    },
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
        <div className="max-w-5xl mx-auto px-6">
          
          {/* Top Bar: Back & Language Switcher */}
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              {t.back}
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 p-1 bg-zinc-100 rounded-full border border-zinc-200">
              <Globe className="w-3.5 h-3.5 text-zinc-500 ml-2 mr-1" />
              <button
                onClick={() => setLang("id")}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${
                  lang === "id" ? "bg-white text-zinc-900 shadow-xs" : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${
                  lang === "en" ? "bg-white text-zinc-900 shadow-xs" : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Hero Section */}
          <div className="mb-16">
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

          {/* Bio Section */}
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

          {/* Prinsip & Nilai Kerja */}
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

          {/* Teknologi & Tools */}
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

          {/* CTA Box */}
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