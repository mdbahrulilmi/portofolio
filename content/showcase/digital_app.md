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

## Tantangan & Solusi

1. **Efisiensi Server & Upload File Berukuran Besar**
   * **Tantangan:** Awalnya, pengunggahan aset digital dilakukan langsung ke server aplikasi. Hal ini berpotensi membebani kapasitas *storage*, menghabiskan *bandwidth* server, dan berisiko *timeout* pada koneksi lambat.
   * **Solusi:** Mengimplementasikan **AWS S3 Presigned URL**. *Browser* pengguna kini mengunggah file langsung ke *bucket* S3 tanpa melalui server backend, sehingga menghemat *resource* server dan mempercepat proses *upload*.

2. **Interaktivitas UI & Perubahan Status Real-Time**
   * **Tantangan:** Karena dibangun di atas Laravel yang berbasis *server-rendered*, proses pembaruan status transaksi *payment gateway* serta interaksi member (seperti melacak *progress* harian dan submit jurnal per materi) akan terasa lambat dan kaku jika harus melakukan *full page reload*.
   * **Solusi:** Menggunakan **Laravel Livewire** untuk mengelola *state* UI secara reaktif tanpa *reload* halaman, memberikan pengalaman pengguna (*user experience*) yang mulus layaknya aplikasi SPA (*Single Page Application*).

3. **Fleksibilitas Konten & Formatting Teks**
   * **Tantangan:** Klien membutuhkan *text editor* yang fleksibel untuk menyusun materi pembelajaran dan deskripsi produk, seperti kemampuan memformat teks (misalnya *bolding* khusus) sesuai keinginan tanpa merusak tampilan responsif.
   * **Solusi:** Mengintegrasikan **Tiptap Editor** yang terhubung langsung dengan Livewire untuk menghasilkan output HTML yang bersih, aman, dan mudah disesuaikan oleh klien.

## Screenshot

**Tampilan Dashboard**
![Tampilan Dashboard](/digital-app/admin-dashboard.webp)

**Tampilan Setting SEO**
![Tampilan Setting SEO](/digital-app/admin-seo.webp)

**Tampilan CMS**
![Tampilan CMS](/digital-app/admin-cms.webp)

**Tampilan Management Program**
![Tampilan Management Program](/digital-app/admin-program.webp)

**Tampilan Dashboard Member**
![Tampilan Dashboard Member](/digital-app/member-dashboard.webp)

**Tampilan Dashboard Program Member**
![Tampilan Dashboard Program Member](/digital-app/member-program-dashboard.webp)

**Tampilan Riwayat Jurnal**
![Tampilan Riwayat Jurnal](/digital-app/member-program-jurnal.webp)

**Tampilan Webinar**
![Tampilan Webinar](/digital-app/member-program-webinar.webp)
