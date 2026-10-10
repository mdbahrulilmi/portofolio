---
title: "Installing Laravel"
category: "Laravel"
date: "2026-08-19"

---

# Cara Install Laravel

Sebelum membuat aplikasi Laravel pertama Anda, pastikan **PHP**, **Composer**, dan **Laravel Installer** sudah terpasang di komputer. Selain itu, Anda juga membutuhkan **Node.js & NPM** atau **Bun** untuk mengelola dan melakukan build frontend assets.

## 1. Install PHP, Composer, dan Laravel Installer

Ada beberapa cara untuk menyiapkan environment Laravel. Berikut dua opsi yang bisa digunakan.

### Opsi 1 — Install menggunakan `php.new`

Cara ini paling praktis karena PHP, Composer, dan Laravel Installer dapat dipasang sekaligus.

#### macOS

```bash
/bin/bash -c "$(curl -fsSL https://php.new/install/mac/8.5)"
```

#### Windows

Jalankan **PowerShell** sebagai administrator:

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://php.new/install/windows'))
```

#### Linux

```bash
/bin/bash -c "$(curl -fsSL https://php.new/install/linux/8.5)"
```

Setelah proses instalasi selesai, **restart terminal** agar perubahan environment dapat diterapkan.

Jika PHP, Composer, dan Laravel Installer sudah pernah dipasang menggunakan `php.new`, Anda dapat menjalankan kembali perintah tersebut untuk memperbarui instalasinya.

---

### Opsi 2 — Install Laravel Installer secara global menggunakan Composer

Jika **PHP dan Composer sudah terpasang**, Laravel Installer dapat di-install secara global menggunakan Composer:

```bash
composer global require laravel/installer
```

Setelah proses selesai, pastikan Laravel Installer dapat dipanggil dari terminal:

```bash
laravel --version
```

Jika perintah `laravel` tidak ditemukan, pastikan direktori Composer global sudah masuk ke dalam `PATH` sistem Anda.

> **Catatan:** Opsi ini hanya memasang Laravel Installer. PHP dan Composer harus sudah tersedia terlebih dahulu.

---

## 2. Install Node.js dan NPM

Laravel menggunakan **Vite** untuk mengelola dan melakukan build frontend assets.

Pastikan **Node.js dan NPM** sudah terpasang:

```bash
node --version
npm --version
```

Jika Anda lebih memilih Bun, Anda juga dapat menggunakannya sebagai alternatif NPM.

---

## 3. Membuat Aplikasi Laravel

Setelah PHP, Composer, Laravel Installer, dan Node.js/NPM tersedia, Anda dapat membuat aplikasi Laravel baru menggunakan:

```bash
laravel new example-app
```

Ganti `example-app` dengan nama aplikasi yang ingin dibuat.

Contoh:

```bash
laravel new toko-online
```

Laravel Installer kemudian akan membantu menyiapkan project Laravel baru.

---

## 4. Menjalankan Aplikasi Laravel

Masuk ke direktori project:

```bash
cd example-app
```

Install dependency frontend dan lakukan build:

```bash
npm install && npm run build
```

Kemudian jalankan development server Laravel:

```bash
composer run dev
```

Perintah tersebut akan menjalankan environment development Laravel, termasuk server aplikasi dan proses yang diperlukan untuk pengembangan frontend.

Setelah server berjalan, buka browser dan akses:

```text
http://localhost:8000
```

Jika halaman Laravel tampil, berarti instalasi dan project Laravel Anda sudah berhasil dibuat.

---

## 5. Langkah Berikutnya

Setelah aplikasi berhasil dijalankan, Anda biasanya perlu mengatur beberapa hal berikut:

* Konfigurasi database pada file `.env`
* Membuat dan menjalankan migration
* Membuat model dan controller
* Mengatur routing
* Membuat authentication
* Mengembangkan frontend menggunakan Blade, React, Vue, atau teknologi frontend lainnya

Contoh menjalankan migration:

```bash
php artisan migrate
```

Selamat! Anda sudah siap mulai mengembangkan aplikasi menggunakan Laravel.