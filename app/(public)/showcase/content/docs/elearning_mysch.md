# Mysch E-Learning - Digital Learning Management System

**Mysch E-Learning** adalah sistem manajemen pembelajaran (LMS) berbasis web yang dirancang untuk kebutuhan akademik sekolah. Proyek ini memfokuskan diri pada efisiensi pengelolaan kelas digital, penyebaran materi pembelajaran, serta sistem ujian online yang aman dan terintegrasi.

---

## 🛠️ Peran & Tanggung Jawab

Dalam proyek ini, saya bertanggung jawab untuk mengembangkan dan menghubungkan modul-modul penting agar sistem menjadi ekosistem belajar yang utuh:

*   **Integrasi Sistem E-Course:** Menghubungkan alur materi pembelajaran dengan sistem evaluasi (ujian) agar transisi dari proses belajar ke tahap penilaian berjalan secara sistematis.
*   **Implementasi Face Recognition:** Mengembangkan fitur pengawasan ujian berbasis **Face Recognition**. Fitur ini memastikan validitas peserta ujian secara real-time untuk mencegah praktik kecurangan selama proses ujian berlangsung.
*   **System Refinement:** Mengoptimalkan konektivitas antara *backend* PHP dan komponen pengolahan data Python yang menangani logika pengenalan wajah.

---

## 🚀 Fitur Utama

1. **Integrated Class & Material Management**
   * Pengelolaan materi pembelajaran yang terstruktur, memudahkan guru dalam mendistribusikan konten pendidikan kepada siswa.
   * Alur sistem yang memastikan siswa harus menyelesaikan materi sebelum dapat mengakses ujian.

2. **Secure AI-Proctoring (Face Recognition)**
   * Fitur keamanan ujian online yang melakukan verifikasi wajah siswa secara berkala selama sesi berlangsung.
   * Menjamin bahwa peserta ujian adalah siswa yang terdaftar, memberikan kredibilitas pada hasil evaluasi digital.

3. **Online Examination System**
   * Sistem ujian yang mendukung berbagai format soal dengan manajemen waktu yang ketat dan transparan.

---

## 💻 Tech Stack

*   **Core Backend:** PHP Native
*   **AI/Recognition Engine:** Python (untuk logika pengenalan wajah)
*   **Database:** MySQL
*   **Environment:** Web-based System

---

## 🤝 Tantangan & Fokus Pengembangan

*   **Cross-Language Integration:** Tantangan teknis dalam menghubungkan ekosistem PHP yang menangani *web flow* dengan Python yang memproses *computer vision*. Saya memastikan komunikasi antar kedua teknologi ini berjalan *low-latency*.
*   **Accuracy & Reliability:** Melatih dan mengoptimalkan model pengenalan wajah agar tetap akurat dalam berbagai kondisi pencahayaan yang dihadapi siswa saat ujian.
*   **System Integrity:** Memastikan bahwa integrasi antara e-course dan ujian tidak membebani server, sehingga ujian tetap berjalan lancar meski diakses banyak siswa secara bersamaan.

---

## 📸 Tampilan Antarmuka

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div>
    <strong>Dashboard Materi E-Course</strong>
    <img src="/mysch/dashboard-materi.webp" alt="Dashboard Materi" />
  </div>
  <div>
    <strong>Sistem Ujian dengan Face Recognition</strong>
    <img src="/mysch/face-recognition.webp" alt="Face Recognition Exam" />
  </div>
</div>