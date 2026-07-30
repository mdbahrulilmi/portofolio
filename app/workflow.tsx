import { Compass, Code2, ShieldCheck, Rocket } from "lucide-react";

export default function Workflow() {
  const steps = [
    {
      number: "01",
      icon: Compass,
      title: "Perencanaan & Arsitektur",
      description:
        "Menganalisis kebutuhan bisnis, menentukan stack teknologi terkuat, serta merancang skema database dan Wireframe visual sebelum baris kode pertama ditulis.",
      tags: ["System Design", "Database Schema", "UI/UX Flow"],
    },
    {
      number: "02",
      icon: Code2,
      title: "Pengembangan Fullstack",
      description:
        "Membangun API handal di backend dan antarmuka responsif di frontend dengan kode yang bersih, scalable, serta terdokumentasi rapi.",
      tags: ["Frontend & Backend", "RESTful API", "Clean Code"],
    },
    {
      number: "03",
      icon: ShieldCheck,
      title: "Pengujian & Optimalisasi",
      description:
        "Memastikan aplikasi bebas bugs, menguji keamanan dari kerentanan, serta melakukan tuning performa agar loading secepat kilat.",
      tags: ["Performance Tuning", "Security Check", "Cross-Browser"],
    },
    {
      number: "04",
      icon: Rocket,
      title: "Peluncuran & Pemeliharaan",
      description:
        "Proses deployment ke cloud server, konfigurasi domain & SSL, hingga pemantauan aplikasi pasca-rilis agar tetap berjalan 24/7 tanpa kendala.",
      tags: ["CI/CD Pipeline", "Cloud Hosting", "Maintenance"],
    },
  ];

  return (
    <section id="workflow" className="py-24 bg-white text-zinc-900 border-t border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold tracking-wider uppercase text-zinc-500 mb-3">
            Workflow & Alur Kerja
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900">
            Dari Ide Konseptual Hingga Aplikasi Siap Pakai.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
            Setiap proyek dikerjakan dengan metodologi terstruktur untuk memastikan produk Anda tidak hanya cepat dirilis, tetapi juga stabil dan siap berkembang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative p-8 rounded-2xl bg-zinc-50/50 border border-zinc-200/80 hover:border-zinc-300 hover:bg-white hover:shadow-xl hover:shadow-zinc-900/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-white border border-zinc-200 shadow-xs group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-zinc-900" />
                    </div>
                    <span className="text-2xl font-bold text-zinc-300 group-hover:text-zinc-400 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-200/60">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-200/60 text-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}