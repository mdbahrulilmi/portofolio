"use client";

import { useState } from "react";
import { Mail, MapPin, Sparkles, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function ConnectPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const email = "mdbahrulilmi@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "6285188368643"; 

    const text = `Halo Kak Ilmi,%0A%0A*Saya:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Subjek:* ${encodeURIComponent(formData.subject)}%0A%0A*Pesan:*%0A${encodeURIComponent(formData.message)}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-white font-sans text-blue-950 flex flex-col justify-between transition-colors">
      <main className="py-8 sm:py-12 flex-1">
        <div className="max-w-6xl mx-auto px-6">

          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-xs font-semibold text-blue-700 mb-4 shadow-xs">
              <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
              Direct Chat
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-4 text-blue-950">
              Mari Berdiskusi<span className="text-blue-500">.</span>
            </h1>
            <p className="text-base sm:text-lg text-blue-950/80 max-w-xl leading-relaxed">
              Punya ide proyek, tawaran kolaborasi, atau ingin bertanya cepat? Isi form di bawah untuk langsung terhubung via WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-blue-950 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-blue-200 bg-white text-sm text-blue-950 focus:outline-none focus:border-blue-500 transition-all shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-blue-950 mb-2">
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-blue-200 bg-white text-sm text-blue-950 focus:outline-none focus:border-blue-500 transition-all shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-blue-950 mb-2">
                    Subjek / Topik
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Konsultasi Proyek Website / Penawaran Kerjasama"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-blue-200 bg-white text-sm text-blue-950 focus:outline-none focus:border-blue-500 transition-all shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-blue-950 mb-2">
                    Pesan Anda
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Jelaskan kebutuhan atau detail proyek Anda di sini..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-blue-200 bg-white text-sm text-blue-950 focus:outline-none focus:border-blue-500 transition-all resize-none shadow-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500 transition-all cursor-pointer shadow-xs active:scale-95"
                >
                  <div className="relative w-5 h-5 flex items-center justify-center">
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

            <div className="lg:col-span-5 space-y-8">
              
              <div className="p-8 rounded-3xl bg-white border border-blue-200 space-y-6 shadow-xs">
                <h3 className="text-sm font-bold text-blue-950 border-b border-blue-100 pb-4">
                  Informasi Kontak
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-blue-600">Email Utama</p>
                      <button
                        onClick={handleCopy}
                        className="text-sm font-semibold text-blue-950 text-left cursor-pointer bg-transparent border-none p-0 inline-flex items-center gap-2 group transition-all"
                        type="button"
                        title="Klik untuk menyalin email"
                      >
                        <span>{email}</span>
                        <span className={`text-[10px] font-medium transition-opacity px-1.5 py-0.5 rounded ${copied ? "bg-emerald-100 text-emerald-700 opacity-100" : "opacity-0 group-hover:opacity-100 bg-zinc-100 text-zinc-600"}`}>
                          {copied ? "Tersalin!" : "Salin"}
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-blue-600">Lokasi</p>
                      <p className="text-sm font-semibold text-blue-950">Indonesia (Remote / Hybrid)</p>
                    </div>
                  </div>
                </div>

                {/* Status Availability */}
                <div className="pt-4 border-t border-blue-100">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-semibold text-blue-950/80">
                      Terbuka untuk proyek freelance & kontrak
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-blue-200 bg-white flex items-start gap-4 shadow-xs">
                <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-blue-950 mb-1">Respon Cepat</h4>
                  <p className="text-xs text-blue-950/80 leading-relaxed">
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