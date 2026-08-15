"use client";

import { useState } from "react";
import { Mail, MapPin, Send, Sparkles, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function ConnectPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "6285188368643"; 

  const text = `Halo Kak Ilmi,%0A%0A*Saya:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Subjek:* ${encodeURIComponent(formData.subject)}%0A%0A*Pesan:*%0A${encodeURIComponent(formData.message)}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 flex flex-col justify-between">
      <main className="py-4 sm:py-8 bg-white text-zinc-900 flex-1">
        <div className="max-w-6xl mx-auto px-6">

          {/* Header Section */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-zinc-50 text-xs font-medium text-zinc-600 mb-4">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              Direct Chat
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900 mb-4">
              Mari Berdiskusi.
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 max-w-xl leading-relaxed">
              Punya ide proyek, tawaran kolaborasi, atau ingin bertanya cepat? Isi form di bawah untuk langsung terhubung via WhatsApp.
            </p>
          </div>

          {/* Main Layout (Form + Info) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* FORM SECTION (Left Side) */}
            <div className="lg:col-span-7">
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

                <button
                  type="submit"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition-all cursor-pointer shadow-xs active:scale-95"
                >
                  <div className="relative w-7 h-7 flex items-center justify-center">
                    <Image
                      src="/logo-wa.png" 
                      alt="WhatsApp Logo" 
                      fill 
                      className="object-contain"
                    />
                  </div>
                  <span>Kirim ke WhatsApp</span>
                </button>
              </form>
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
                      <a href="mailto:mdbahrulilmi@gmail.com" className="text-sm font-semibold text-zinc-900 hover:underline">
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
                    Pesan melalui form ini akan langsung terkirim ke WhatsApp saya untuk respon yang jauh lebih cepat.
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