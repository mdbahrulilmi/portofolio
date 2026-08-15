# WA-AI Bot Engine - STB B860H Deployment

**WA-AI Bot Engine** adalah sistem otomatisasi pesan WhatsApp berbasis AI yang di-deploy pada perangkat *Set-Top Box* (STB) B860H. Proyek ini bertujuan untuk menciptakan solusi *chatbot* cerdas dengan biaya operasional rendah (low-power), menggunakan bahasa pemrograman Go untuk performa maksimal pada perangkat dengan spesifikasi terbatas.

---

## 🛠️ Peran & Tanggung Jawab

Dalam proyek ini, saya membangun sistem dari nol, mulai dari konfigurasi *hardware* hingga pengembangan *logic* AI:

*   **Hardware Orchestration:** Melakukan *re-purposing* STB B860H menjadi server mandiri dengan menginstal Linux environment (Armbian) sebagai *host* aplikasi.
*   **Backend Development (Go):** Membangun aplikasi *bot* menggunakan bahasa Go dengan *library* **Whatsmeow** untuk koneksi protokol WhatsApp yang stabil dan cepat.
*   **AI Integration:** Mengintegrasikan **Gemini API** sebagai "otak" untuk memproses pesan masuk dan menghasilkan jawaban yang kontekstual dan natural.
*   **Optimization:** Melakukan optimasi penggunaan RAM dan CPU pada STB agar proses *long-running* bot tetap stabil 24/7.

---

## 🚀 Fitur Utama

1. **AI Chat Intelligence**
   * Menggunakan model Gemini Pro untuk memahami intent pesan pengguna, mulai dari tanya jawab umum, bantuan layanan, hingga pengolahan data sederhana.

2. **Low-Resource Bot Engine**
   * Berjalan secara efisien di STB B860H (Quad-core ARM) dengan penggunaan memori yang sangat minim berkat efisiensi bahasa Go.

3. **Multi-Session Handling**
   * Implementasi sistem *session* yang aman menggunakan Whatsmeow untuk menjaga koneksi WhatsApp tetap terhubung tanpa harus sering melakukan QR Scan ulang.

4. **Automatic Response Pipeline**
   * Sistem *filter* pesan masuk agar bot hanya memproses pesan yang relevan, menghemat penggunaan *token* API Gemini.

---

## 💻 Tech Stack

*   **Hardware:** STB B860H (Armbian OS)
*   **Language:** Go (Golang)
*   **WhatsApp Protocol:** [Whatsmeow](https://github.com/tulir/whatsmeow)
*   **AI Engine:** Google Gemini API
*   **Database (Session):** SQLite (ringan dan efektif untuk penyimpanan sesi bot)

---

## 🤝 Tantangan & Fokus Pengembangan

*   **Hardware Limitation:** Mengelola sumber daya perangkat yang terbatas agar proses *encoding* pesan dan interaksi AI tidak menyebabkan *bottleneck* pada CPU STB.
*   **Connection Stability:** Memastikan *Whatsmeow* dapat melakukan *reconnect* secara otomatis jika koneksi internet terputus atau terjadi *refresh* pada sesi WhatsApp Web.
*   **AI Response Latency:** Mengatur *timeout* dan *asynchronous processing* agar respon bot tetap terasa cepat meskipun harus menunggu balasan dari API Gemini.

---

## 📸 Dokumentasi Setup

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">

<div>
  <strong>Server STB B860H</strong>
  <img src="/bot-wa/stb-setup.webp" alt="Setup STB B860H" />
</div>

<div>
  <strong>Terminal Monitoring Bot</strong>
  <img src="/bot-wa/bot-log.webp" alt="Log Bot Berjalan" />
</div>

</div>