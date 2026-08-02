"use client";

import { useState } from "react";
import { ArrowLeft, Mail, MapPin, Send, CheckCircle, Sparkles } from "lucide-react";

export default function ConnectPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Di sini kamu bisa mengintegrasikan dengan EmailJS, Formspree, atau API Route buatanmu
    console.log("Form Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 flex flex-col justify-between">

      <main className="py-4 sm:py-8 bg-white text-zinc-900 flex-1">
        <div className="max-w-6xl mx-auto px-6">

          {/* Header Section */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-zinc-50 text-xs font-medium text-zinc-600 mb-4">
              <Mail className="w-3.5 h-3.5 text-zinc-900" />
              Get in Touch
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900 mb-4">
              Mari Berdiskusi.
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 max-w-xl leading-relaxed">
              Punya ide proyek, tawaran kolaborasi, atau sekadar ingin bertanya seputar pengembangan web? Kirimkan pesan di bawah ini.
            </p>
          </div>

          {/* Main Layout (Form + Info) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* FORM SECTION (Left Side) */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="p-8 rounded-3xl bg-emerald-50/50 border border-emerald-200/80 text-emerald-900 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold">Pesan Terkirim!</h2>
                  <p className="text-sm text-emerald-800 leading-relaxed max-w-md">
                    Terima kasih telah menghubungi saya. Saya akan membaca pesan Anda dan membalasnya secepat mungkin.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-full bg-emerald-900 text-white text-xs font-semibold hover:bg-emerald-800 transition-colors cursor-pointer"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-medium text-zinc-700 mb-2">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50/50 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 focus:bg-white transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-zinc-700 mb-2">
                        Alamat Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50/50 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 mb-2">
                      Subjek / Topik
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Konsultasi Proyek Website / Penawaran Kerjasama"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50/50 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 mb-2">
                      Pesan Anda
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Jelaskan kebutuhan atau detail proyek Anda di sini..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50/50 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-all cursor-pointer shadow-xs active:scale-95"
                  >
                    <span>Kirim Pesan</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              )}
            </div>

            {/* INFO & DETAILS (Right Side) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Direct Info Card */}
              <div className="p-8 rounded-3xl bg-zinc-50/70 border border-zinc-200/80 space-y-6">
                <h3 className="text-base font-bold text-zinc-900 border-b border-zinc-200/80 pb-4">
                  Informasi Kontak
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-white border border-zinc-200 shadow-2xs text-zinc-900">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-zinc-400">Email Utama</p>
                      <a href="mailto:email@domain.com" className="text-sm font-semibold text-zinc-900 hover:underline">
                        mdbahrulilmi@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-white border border-zinc-200 shadow-2xs text-zinc-900">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-zinc-400">Lokasi</p>
                      <p className="text-sm font-semibold text-zinc-900">Indonesia (Remote / Hybrid)</p>
                    </div>
                  </div>
                </div>

                {/* Status Availability */}
                <div className="pt-4 border-t border-zinc-200/80">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-medium text-zinc-700">
                      Terbuka untuk proyek freelance & kontrak
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="p-6 rounded-2xl border border-zinc-200/80 bg-white flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200/60 text-amber-900 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 mb-1">Respon Cepat</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Setiap email dan pesan masuk akan dibalas dalam kurun waktu kurang dari 24 jam di hari kerja.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>
    </div>
  );
}