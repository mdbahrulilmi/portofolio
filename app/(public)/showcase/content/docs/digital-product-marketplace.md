# Digital Product Marketplace

## Tentang Project

Digital App adalah platform untuk menjual produk digital dan juga untuk berjualan kelas.

Project ini dibangun menggunakan Laravel sebagai backend dan Livewire sebagai frontend. dan Doku sebagai payment gateway dan NexaS3 sebagai object storage berbasis aws s3

---

## Fitur

**Fitur Admin**
* Dashboard
    - Ringkasan Keuntungan
    - Analisis Tingkat Konversi
    - Grafik Penjualan
    - Statistik Platform Terpopuler
    - Daftar Produk Terlaris (Top Selling)
* Manajemen Landing Page
    - Konfigurasi SEO
    - Content Management System (CMS)
    - Kategori Umum (Kampanye) atau Kategori Program
* Manajemen Program
    - Konfigurasi Landing Page Program
    - Manajemen Materi dan Tugas Harian
    - Manajemen Tugas Member
    - Manajemen Webinar
    - Feedback Tugas & Jurnal Member
* Manajemen Produk
    - Pengelolaan Produk (Aset Digital)
    - Integrasi AWS S3
Dukungan Format: MP3, MP4, Gambar, PDF, Google Drive, YouTube, dll.
* Manajemen Pesanan (Order)
    - Riwayat Pembelian
    - Pembatalan Otomatis (Automatic Failed) menggunakan Cron Job
    - Pengelompokan Berdasarkan Kategori Umum (Kampanye) atau Kategori Program
* Manajemen Member
    - Pemantauan Keikutsertaan Program Member
---
**Fitur Member**

* Dashboard
    - Ringkasan Program yang Dibeli
    - Akses Cepat ke Program Aktif

* Program
    - Daftar Program yang Telah Dibeli
    - Dashboard Program (Halaman Detail Program):
    - Akses Materi & Tugas Harian
    - Pengisian Jurnal Hari Ini
    - Riwayat Jurnal (History Journal)
    - Akses Sesi Webinar
    - Katalog/Akses Semua Materi

* Produk
    - Daftar Produk Digital yang Telah Dibeli

* Riwayat Pembelian
    - Catatan Transaksi dan Status Pesanan

* Pengaturan Akun
    - Pengelolaan Profil dan Keamanan Akun

---
**Fitur Landing Page**
* Desain & Tampilan
    - Mobile-First Orientation (Tampilan dioptimalkan untuk perangkat seluler, termasuk saat diakses via Desktop)
    - Desain Responsif & User-Friendly

* Performa & Optimalisasi Teknis
    - Konversi Otomatis ke WebP (Optimasi otomatis seluruh gambar ke format WebP)
    - Skor SEO Optimization: Up To 100%
    - Skor Performance: Up To 100%
    - Skor Accessibility & Best Practices: High Standard
    - Waktu Muat Cepat (Fast Loading Speed)

* Katalog & Konten
    - Informasi Detail Program & Produk
    - Penawaran & Call to Action (CTA) Penjualan
    - Transaksi & Pembelian
    - Alur Pembelian Sederhana (Seamless Checkout Process)
    - Integrasi Gerbang Pembayaran (VA, Qris, E Wallet)

---

## Tech Stack

- Laravel
- Livewire
- Alpine.js
- Tailwind CSS
- Mysql
- AWS S3
- DOKU Payment Gateway (VA, Qris, E Wallet)

---

## Tantangan

Salah satu tantangan adalah proses upload file digital berukuran besar. Awalnya file diunggah ke server aplikasi sehingga berpotensi membebani storage dan bandwidth server.

## Solusi

Menggunakan AWS S3 Presigned URL sehingga browser pengguna dapat mengunggah file langsung ke S3 tanpa melewati server aplikasi.

---

## Screenshot

![Image](https://github.com/user-attachments/assets/3bd8fe80-e42f-4f08-8c13-25e0bea35457)

![Product](./digital_app/product.webp)