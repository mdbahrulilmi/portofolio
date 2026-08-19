# Desago Digital - Platform Layanan Digital Desa

**Desago Digital** adalah platform layanan digital desa terpadu yang dirancang untuk mempercepat transformasi digital di tingkat pemerintahan desa. Platform ini menyediakan layanan administrasi kependudukan (pengajuan surat), pelaporan warga secara real-time, transparansi keuangan dana desa, direktori UMKM lokal, serta portal berita dan agenda kegiatan desa yang dapat diakses melalui Web dan Aplikasi Mobile.

---

## Fitur Utama

1. **Layanan Pengajuan Surat Mandiri dengan OCR**
   * Warga dapat mengajukan berbagai jenis surat keterangan dan pengantar desa secara online.
   * **Fitur OCR KTP:** Integrasi pemindaian KTP berbasis AI yang mampu mengekstrak data identitas secara otomatis, sehingga warga tidak perlu lagi mengisi form manual secara berulang.
   * Pelacakan status pengajuan surat secara *real-time*.

2. **Pelaporan & Pengaduan Warga**
   * Fitur bagi warga untuk melaporkan infrastruktur rusak, keamanan, atau kejadian darurat di lingkungan desa.
   * Dilengkapi dengan status penanganan laporan oleh perangkat desa.

3. **Transparansi Dana Desa**
   * Publikasi anggaran pendapatan dan belanja desa (APBDes) secara transparan agar mudah diakses dan dibaca oleh seluruh warga masyarakat.

4. **Direktori UMKM Desa**
   * Wadah promosi produk dan jasa unggulan dari pelaku usaha mikro, kecil, dan menengah (UMKM) lokal desa guna mendongkrak ekonomi digital desa.

5. **Portal Berita & Agenda Desa**
   * Informasi resmi, pengumuman penting, serta kalender agenda kegiatan desa yang diperbarui secara berkala oleh admin desa.

---

## Tech Stack & Arsitektur

Sistem ini dibangun menggunakan kombinasi teknologi modern untuk menjamin performa yang cepat, keamanan data, serta kemudahan akses lintas platform:

* **Mobile App:** Flutter (Cross-platform Android & iOS)
* **OCR Engine:** Google ML Kit / Tesseract (Integrasi otomatisasi data)
* **Backend API & Web Admin:** Laravel (PHP Framework)
* **Realtime Database & Notification:** Firebase
* **Database:** MySQL
* **Deployment & Hosting:** Vercel & Cloud Infrastructure

---

## Tangkapan Layar & Antarmuka

Berikut adalah beberapa tampilan utama dari aplikasi dan sistem Desago Digital:

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">

<div>
  <strong>Tampilan Dashboard Utama</strong>
  <img src="/desago-digital/home.webp" alt="Tampilan Dashboard" />
</div>

<div>
  <strong>Tampilan Layanan Pengajuan Surat</strong>
  <img src="/desago-digital/surat.webp" alt="Tampilan Layanan Surat" />
</div>

<div>
  <strong>Tampilan Layanan Lapor</strong>
  <img src="/desago-digital/lapor.webp" alt="Tampilan Lapor Desa" />
</div>

</div>

---

## 🔒 Keamanan & Performa

* **Autentikasi & Otorisasi:** Penggunaan token keamanan berbasis JWT/Firebase Auth untuk melindungi akses data warga dan perangkat desa.
* **Integrasi Data Cerdas:** Fitur OCR memastikan akurasi data penduduk yang diinput, meminimalisir kesalahan manusia (*human error*) saat pengisian formulir.
* **Optimasi Kueri:** Indeks database terstruktur untuk memastikan pencarian data kependudukan dan laporan berjalan instan.
* **Responsive Design:** Antarmuka web admin yang dioptimalkan agar nyaman diakses melalui perangkat desktop maupun tablet.