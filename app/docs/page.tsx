"use client";

import { useState } from "react";
import { ArrowLeft, BookOpen, Terminal, Code2, Server, Shield, Cpu, ChevronRight } from "lucide-react";

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const menu = [
    { id: "overview", label: "Ringkasan & Standar", icon: BookOpen },
    { id: "tech-stack", label: "Arsitektur Tech Stack", icon: Cpu },
    { id: "frontend-guidelines", label: "Panduan Frontend", icon: Code2 },
    { id: "backend-guidelines", label: "Panduan Backend & API", icon: Server },
    { id: "deployment-security", label: "Deploy & Keamanan", icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 flex flex-col justify-between">

      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-4 sm:py-8">

        <div className="border-b border-zinc-200/80 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-zinc-50 text-xs font-medium text-zinc-600 mb-4">
            <Terminal className="w-3.5 h-3.5 text-zinc-900" />
            Developer Docs & Guidelines
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900">
            Dokumentasi Sistem & Standar Kerja
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 max-w-2xl leading-relaxed">
            Panduan teknis, standar arsitektur kode, serta alur pengembangan aplikasi web yang saya terapkan di setiap proyek.
          </p>
        </div>

        {/* Documentation Layout (Sidebar + Content) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* SIDEBAR NAVIGATION */}
          <aside className="md:col-span-1 space-y-1">
            <p className="px-3 text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              Daftar Isi
            </p>
            {menu.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-zinc-900 text-white shadow-xs"
                      : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 shrink-0" />
                    {item.label}
                  </span>
                  {isActive && <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />}
                </button>
              );
            })}
          </aside>

          {/* MAIN CONTENT AREA */}
          <article className="md:col-span-3 prose prose-zinc max-w-none text-zinc-700">
            
            {/* TAB 1: OVERVIEW */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-zinc-900">Ringkasan & Standar Proyek</h2>
                <p className="text-sm sm:text-base leading-relaxed text-zinc-600">
                  Setiap produk digital yang dibangun memegang tiga prinsip utama: **Kinerja Tinggi**, **Kemudahan Perawatan (Maintainability)**, dan **Keamanan Terjamin**.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                  <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                    <h3 className="text-base font-semibold text-zinc-900 mb-1">Clean Architecture</h3>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Pemisahan yang jelas antara lapisan UI (Frontend), Logika Bisnis, dan Basis Data (Backend).
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                    <h3 className="text-base font-semibold text-zinc-900 mb-1">Type Safety</h3>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Penggunaan TypeScript secara penuh dari frontend hingga backend untuk meminimalisir error saat runtime.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/60 text-amber-900 text-xs sm:text-sm">
                  💡 <strong>Note:</strong> Dokumentasi ini dirancang agar tim pengembang lain atau klien dapat dengan mudah mengintegrasikan dan melanjutkan pengembangan sistem tanpa *technical debt*.
                </div>
              </div>
            )}

            {/* TAB 2: TECH STACK */}
            {activeTab === "tech-stack" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-zinc-900">Arsitektur Tech Stack</h2>
                <p className="text-sm sm:text-base leading-relaxed text-zinc-600">
                  Kombinasi *stack* modern pilihan yang dioptimalkan untuk performa maksimal dan skala besar.
                </p>

                <div className="overflow-hidden rounded-2xl border border-zinc-200/80 my-6">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-zinc-100/70 border-b border-zinc-200/80 text-zinc-900 font-semibold">
                      <tr>
                        <th className="p-3.5">Layer</th>
                        <th className="p-3.5">Teknologi Utama</th>
                        <th className="p-3.5">Alasan Pemilihan</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200/60 text-zinc-600">
                      <tr>
                        <td className="p-3.5 font-medium text-zinc-900">Frontend</td>
                        <td className="p-3.5">Next.js (App Router), Tailwind CSS</td>
                        <td className="p-3.5">SEO-friendly, SSR/SSG instan, UI responsif.</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-medium text-zinc-900">Backend</td>
                        <td className="p-3.5">Node.js, Express / Hono, Prisma ORM</td>
                        <td className="p-3.5">API secepat kilat, pengelolaan kueri database yang aman.</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-medium text-zinc-900">Database</td>
                        <td className="p-3.5">PostgreSQL / Supabase, Redis</td>
                        <td className="p-3.5">Integritas data relasional + caching memori super cepat.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 3: FRONTEND */}
            {activeTab === "frontend-guidelines" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-zinc-900">Panduan Standar Frontend</h2>
                <p className="text-sm sm:text-base leading-relaxed text-zinc-600">
                  Aturan pengembangan komponen antarmuka untuk menjaga konsistensi desain dan keterbacaan kode.
                </p>

                <div className="p-5 rounded-2xl bg-zinc-900 text-zinc-100 font-mono text-xs overflow-x-auto my-4">
                  <span className="text-zinc-500">// Struktur Komponen React yang Direkomendasikan</span>
                  <br />
                  <span className="text-purple-400">export default function</span> <span className="text-blue-400">Card</span>({"{"} title, description {"}"}: Props) {"{"}
                  <br />
                  &nbsp;&nbsp;<span className="text-purple-400">return</span> (
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-red-400">div</span> <span className="text-yellow-400">className</span>=<span className="text-green-400">"p-6 rounded-2xl bg-white border border-zinc-200 shadow-xs"</span>&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-red-400">h3</span> <span className="text-yellow-400">className</span>=<span className="text-green-400">"font-bold text-zinc-900"</span>&gt;{"{"}title{"}"}&lt;/<span className="text-red-400">h3</span>&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-red-400">p</span> <span className="text-yellow-400">className</span>=<span className="text-green-400">"text-sm text-zinc-600"</span>&gt;{"{"}description{"}"}&lt;/<span className="text-red-400">p</span>&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-red-400">div</span>&gt;
                  <br />
                  &nbsp;&nbsp;);
                  <br />
                  {"}"}
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-zinc-600 list-disc list-inside">
                  <li>Gunakan **Atomic Component Strategy** untuk elemen reusabel.</li>
                  <li>Wajib menerapkan kriteria aksesibilitas dasar (semantic HTML & ARIA labels).</li>
                  <li>Semua *asset* gambar dioptimasi menggunakan Next.js `Image` component.</li>
                </ul>
              </div>
            )}

            {/* TAB 4: BACKEND */}
            {activeTab === "backend-guidelines" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-zinc-900">Panduan Backend & API</h2>
                <p className="text-sm sm:text-base leading-relaxed text-zinc-600">
                  Semua endpoint API dibangun dengan arsitektur **RESTful** dan mengembalikan respons berformat JSON yang terstandarisasi.
                </p>

                <div className="p-4 rounded-xl bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-800 space-y-2 my-4">
                  <div><strong>Format Standard Response JSON:</strong></div>
                  <pre className="text-zinc-600">{`{
  "success": true,
  "message": "Data berhasil diambil",
  "data": { ... }
}`}</pre>
                </div>
              </div>
            )}

            {/* TAB 5: DEPLOYMENT */}
            {activeTab === "deployment-security" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-zinc-900">Deployment & Keamanan</h2>
                <p className="text-sm sm:text-base leading-relaxed text-zinc-600">
                  Proses otomatisasi peluncuran dan proteksi keamanan tingkat aplikasi.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                  <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                    <h3 className="text-sm font-bold text-zinc-900 mb-1">CI/CD Pipeline</h3>
                    <p className="text-xs text-zinc-600">
                      Otomatisasi pengujian dan peluncuran kode via Vercel / GitHub Actions setiap ada *push* ke branch `main`.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                    <h3 className="text-sm font-bold text-zinc-900 mb-1">Proteksi Keamanan</h3>
                    <p className="text-xs text-zinc-600">
                      Enkripsi SSL/TLS 256-bit, Sanitasi input pencegah SQL Injection & XSS, serta CORS terkonfigurasi ketat.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </article>
        </div>
      </main>
    </div>
  );
}