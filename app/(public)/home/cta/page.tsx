"use client";

import Link from "next/link";
import { useLanguage } from "../../providers/LanguageProvider";

export default function ContactCTA() {
  const { lang } = useLanguage();

  const content = {
    id: {
      title: "Siap Membangun Sesuatu?",
      description: "Mari diskusikan kebutuhan proyek Anda. Saya siap membantu mengubah ide Anda menjadi sistem yang efisien dan skalabel.",
      buttonText: "Hubungi Saya Sekarang"
    },
    en: {
      title: "Ready to Build Something?",
      description: "Let's discuss your project requirements. I'm ready to help turn your ideas into efficient and scalable systems.",
      buttonText: "Contact Me Now"
    }
  };

  const t = content[lang];

  return (
    <section className="py-24 bg-blue-950 text-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          {t.title}
        </h2>
        <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          {t.description}
        </p>
        <Link
          href="/connect" 
          className="inline-block px-10 py-4 bg-white text-blue-950 font-bold rounded-full hover:bg-blue-50 transition-colors shadow-lg shadow-black/10"
        >
          {t.buttonText}
        </Link>
      </div>
    </section>
  );
}