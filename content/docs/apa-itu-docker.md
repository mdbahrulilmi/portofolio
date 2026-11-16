---
title: "Mengenal Docker: Panduan Lengkap Konsep, Arsitektur, dan Cara Penggunaannya"
category: "DevOps"
date: "2026-11-16"
---

# Mengenal Docker: Panduan Lengkap Konsep, Arsitektur, dan Cara Penggunaannya

Bagi para *developer* dan praktisi IT, istilah **Docker** tentu sudah tidak asing lagi. Docker telah mengubah cara perangkat lunak dikembangkan, dikemas, dan didistribusikan. Masalah klasik seperti *"Aplikasi ini berjalan normal di komputer saya, tapi kenapa error di server produksi?"* kini dapat diatasi dengan mudah menggunakan Docker.

Artikel ini akan mengupas tuntas apa itu Docker, mengapa teknologi ini begitu populer, arsitektur dasarnya, hingga panduan praktis cara menggunakannya.

---

## Apa itu Docker?

**Docker** adalah platform open-source yang digunakan untuk mengemas (*packaging*), mendistribusikan, dan menjalankan aplikasi di dalam sebuah **container** (wadah). 

Berbeda dengan Virtual Machine (VM) tradisional yang harus menjalankan sistem operasi penuh secara mandiri, Docker container memanfaatkan kernel sistem operasi host secara bersama-sama (*OS-level virtualization*). Hal ini membuat Docker menjadi sangat ringan, cepat dijalankan, dan hemat sumber daya.

---

## Komponen Utama Docker

Sebelum mulai menggunakannya, Anda perlu memahami beberapa istilah inti dalam ekosistem Docker:

1. **Dockerfile**: Sebuah file teks berisi baris instruksi atau perintah otomatis untuk merakit sebuah *Docker Image*.
2. **Docker Image**: Cetak biru (*blueprint* atau *template*) yang bersifat *read-only*. Image ini berisi kode program, *runtime*, pustaka (*libraries*), dan dependensi yang dibutuhkan aplikasi.
3. **Docker Container**: Instansiasi atau wujud nyata dari sebuah *Docker Image* yang sedang berjalan (*running*). Container bersifat terisolasi dan mandiri.
4. **Docker Hub**: Repositori publik/privat tempat para *developer* menyimpan dan membagikan *Docker Image* (serupa seperti GitHub untuk kode program).

---

## Perbedaan Docker Container vs Virtual Machine

| Fitur | Docker Container | Virtual Machine (VM) |
| :--- | :--- | :--- |
| **Sistem Operasi** | Berbagi kernel OS host | Menjalankan OS penuh (*Guest OS*) di tiap VM |
| **Ukuran** | Ringan (dalam hitungan Megabyte) | Berat (dalam Gigabyte) |
| **Kecepatan Boot** | Cepat (hitungan detik) | Lambat (menit) |
| **Penggunaan Sumber Daya** | Sangat efisien | Boros (membutuhkan alokasi RAM/CPU tetap) |

---

## Panduan Praktis: Cara Menggunakan Docker

Berikut adalah langkah-langkah dasar untuk mulai menjalankan aplikasi menggunakan Docker di komputer Anda.

### 1. Instalasi Docker
Pastikan Anda sudah mengunduh dan memasang **Docker Desktop** (tersedia untuk Windows, macOS, dan Linux) melalui situs resmi Docker. Setelah terpasang, Anda bisa mengeceknya lewat terminal:
```bash
docker --version
```

### 2. Menjalankan Container Pertama (Nginx Web Server)
Mari coba jalankan server web Nginx menggunakan Docker dengan satu baris perintah:
```bash
docker run -d -p 8080:80 --name web-pertamaku nginx
```

**Penjelasan Perintah:**
- `docker run`: Perintah untuk membuat dan menjalankan container baru.
- `-d`: Menjalankan container di latar belakang (*detached mode*).
- `-p 8080:80`: Meneruskan port `8080` di komputer Anda ke port `80` di dalam container.
- `--name web-pertamaku`: Memberikan nama khusus untuk container Anda.
- `nginx`: Nama *image* yang diambil dari Docker Hub.

Setelah itu, buka browser Anda dan akses `http://localhost:8080`. Anda akan melihat halaman sambutan *"Welcome to nginx!"*.

### 3. Perintah Dasar Pengelolaan Docker
Berikut adalah daftar perintah yang paling sering digunakan sehari-hari:

- **Melihat container yang sedang berjalan:**
  ```bash
  docker ps
  ```
- **Melihat semua container (aktif maupun mati):**
  ```bash
  docker ps -a
  ```
- **Menghentikan container yang berjalan:**
  ```bash
  docker stop web-pertamaku
  ```
- **Menghapus container:**
  ```bash
  docker rm web-pertamaku
  ```

---

## 📝 Contoh Pembuatan Dockerfile

### A. Contoh untuk Aplikasi Laravel (PHP & Apache)
Jika Anda ingin membungkus aplikasi berbasis Laravel, buatlah file `Dockerfile` di direktori proyek Anda:

```dockerfile
# Gunakan base image resmi PHP dengan Apache
FROM php:8.2-apache

# Instal dependensi sistem yang dibutuhkan Laravel
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

# Bersihkan cache apt
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Instal ekstensi PHP yang diperlukan Laravel
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Aktifkan mod_rewrite Apache untuk URL routing Laravel
RUN a2enmod rewrite

# Tetapkan direktori kerja ke folder public Laravel
ENV APACHE_DOCUMENT_ROOT /var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/000-default.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf

# Salin seluruh file proyek
WORKDIR /var/www/html
COPY . .

# Instal Composer untuk dependensi PHP
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN composer install --no-dev --optimize-autoloader

# Atur izin akses folder storage dan bootstrap cache
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

EXPOSE 80
```

---

### B. Contoh untuk Aplikasi Node.js
Jika Anda menggunakan Node.js, buatlah file `Dockerfile` dengan konfigurasi berikut:

```dockerfile
# Gunakan base image resmi Node.js
FROM node:18-alpine

# Tentukan direktori kerja di dalam container
WORKDIR /app

# Salin file package.json dan instal dependensi
COPY package*.json ./
RUN npm install

# Salin seluruh kode aplikasi
COPY . .

# Buka port aplikasi
EXPOSE 3000

# Perintah untuk menjalankan aplikasi
CMD ["npm", "start"]
```

---

## Kesimpulan

Docker telah menjadi standar industri dalam pengembangan perangkat lunak modern karena kemampuannya menghadirkan konsistensi lingkungan dari tahap pengembangan, pengujian, hingga tahap produksi. Dengan memahami konsep dasar image, container, dan perintah dasarnya, Anda kini siap meningkatkan efisiensi alur kerja *coding* Anda!