# Bot Whatsapp (Whatsmeow Library)

**Bot Whatsapp** adalah sistem otomatisasi pesan WhatsApp berbasis AI yang dirancang khusus untuk menghidupkan suasana di dalam grup WhatsApp teman kecil. Proyek ini bertujuan untuk menciptakan solusi *chatbot* cerdas dengan performa tinggi dan respons yang natural.

---

## 🛠️ Peran & Tanggung Jawab

Dalam proyek ini, saya membangun sistem dari nol, mulai dari konfigurasi dasar hingga pengembangan *logic* AI:

*   **Backend Development (Go):** Membangun aplikasi *bot* menggunakan bahasa Go dengan *library* **Whatsmeow** untuk koneksi protokol WhatsApp yang stabil dan cepat di grup teman kecil.
*   **AI Integration:** Mengintegrasikan **Gemini API** sebagai "otak" untuk memproses pesan masuk dan menghasilkan jawaban yang kontekstual, santai, dan relevan dengan obrolan.
*   **Optimization:** Melakukan optimasi kode dan memori agar proses *long-running* bot tetap stabil 24/7.

---

## 🚀 Fitur Utama

1. **AI Chat Intelligence**
   * Menggunakan model Gemini Pro untuk memahami intent pesan pengguna di dalam grup, mulai dari tanya jawab umum, candaan, hingga obrolan santai antar teman kecil.

2. **Smart Response Pipeline**
   * Sistem *filter* pesan masuk agar bot hanya merespons pesan yang relevan, menjaga kenyamanan percakapan tanpa terlalu spamming.

3. **Multi-Session Handling**
   * Implementasi sistem *session* yang aman menggunakan Whatsmeow untuk menjaga koneksi WhatsApp tetap terhubung tanpa harus sering melakukan QR Scan ulang.

4. **Tools Pendukung Lainnya**
   * Integrasi utilitas tambahan untuk mendukung fungsionalitas bot, seperti pengelolaan *logging* aktivitas secara *real-time*, sistem manajemen environment, serta otomatisasi *error handling* agar bot dapat pulih sendiri saat terjadi gangguan koneksi.

---

## 💻 Tech Stack

*   **Language:** Go (Golang)
*   **WhatsApp Protocol:** [Whatsmeow](https://github.com/tulir/whatsmeow)
*   **AI Engine:** Google Gemini API
*   **Database (Session):** SQLite (ringan dan efektif untuk penyimpanan sesi bot)

---

## 🤝 Tantangan & Fokus Pengembangan

*   **Connection Stability:** Memastikan *Whatsmeow* dapat melakukan *reconnect* secara otomatis jika koneksi internet terputus atau terjadi *refresh* pada sesi WhatsApp Web.
*   **AI Response Latency:** Mengatur *timeout* dan *asynchronous processing* agar respon bot tetap terasa cepat meskipun harus menunggu balasan dari API Gemini.

---

## 📸 Dokumentasi Interaksi Bot

<div class="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">

<div>
  <strong>Contoh Response</strong>
  <img src="/bot-wa/bot-wa_4.webp" alt="Contoh Response Bot" />
</div>

<div>
  <strong>Interaksi Bot 1</strong>
  <img src="/bot-wa/bot-wa_1.webp" alt="Interaksi Bot 1" />
</div>

<div>
  <strong>Interaksi Bot 2</strong>
  <img src="/bot-wa/bot-wa_2.webp" alt="Interaksi Bot 2" />
</div>

<div>
  <strong>Interaksi Bot 3</strong>
  <img src="/bot-wa/bot-wa_3.webp" alt="Interaksi Bot 3" />
</div>

</div>