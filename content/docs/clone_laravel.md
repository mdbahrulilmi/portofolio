---
title: "Cloning Laravel"
category: "Laravel"
date: "2026-08-20"
---

# Instalasi Laravel dari Repository Git

Jika project Laravel sudah tersedia di repository Git, Anda tidak perlu membuat project baru menggunakan `laravel new`. Cukup **clone repository**, install dependency, kemudian konfigurasi environment aplikasi.

## 1. Clone Repository

Clone repository menggunakan Git:

```bash
git clone https://github.com/username/nama-project.git
```

Masuk ke folder project:

```bash
cd nama-project
```

> Ganti URL repository dan `nama-project` sesuai dengan project yang ingin digunakan.

Jika menggunakan repository private, pastikan Anda sudah memiliki akses ke repository tersebut.

---

## 2. Install Dependency PHP

Laravel menggunakan Composer untuk mengelola dependency PHP.

Jalankan:

```bash
composer install
```

Setelah selesai, folder `vendor` akan dibuat secara otomatis.

> Jangan menjalankan `composer update` saat pertama kali melakukan setup project, kecuali memang diperlukan. Gunakan `composer install` agar versi package mengikuti `composer.lock`.

---

## 3. Install Dependency Frontend

Jika project menggunakan Vite dan Node.js, jalankan:

```bash
npm install
```

Kemudian lakukan build frontend:

```bash
npm run build
```

Jika project menggunakan Bun, Anda dapat menggunakan:

```bash
bun install
bun run build
```

---

## 4. Konfigurasi File Environment

Laravel menggunakan file `.env` untuk menyimpan konfigurasi aplikasi.

Jika file `.env` belum tersedia, salin file `.env.example`:

### Linux / macOS

```bash
cp .env.example .env
```

### Windows

```powershell
Copy-Item .env.example .env
```

Atau jika menggunakan Command Prompt:

```cmd
copy .env.example .env
```

Kemudian buka file `.env` dan sesuaikan konfigurasi yang diperlukan.

Contoh konfigurasi database:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nama_database
DB_USERNAME=root
DB_PASSWORD=
```

> Jangan meng-upload file `.env` ke repository Git karena file tersebut dapat berisi credential dan konfigurasi sensitif.

---

## 5. Generate Application Key

Setelah file `.env` tersedia, generate application key:

```bash
php artisan key:generate
```

Perintah ini akan mengisi nilai `APP_KEY` pada file `.env`.

Contoh:

```env
APP_KEY=base64:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

---

## 6. Konfigurasi Database

Buat database sesuai dengan konfigurasi pada `.env`.

Setelah database siap, jalankan migration:

```bash
php artisan migrate
```

Jika project menyediakan seeder dan membutuhkan data awal:

```bash
php artisan db:seed
```

Atau sekaligus melakukan migration dan seeding:

```bash
php artisan migrate --seed
```

> Perhatikan dokumentasi project sebelum menjalankan `migrate:fresh`, karena perintah tersebut akan menghapus seluruh tabel dan data yang ada.

---

## 7. Storage Link

Jika aplikasi menggunakan Laravel Storage untuk menyimpan file yang dapat diakses melalui browser, jalankan:

```bash
php artisan storage:link
```

Perintah ini membuat symbolic link:

```text
public/storage -> storage/app/public
```

---

## 8. Membersihkan dan Membuat Cache

Untuk memastikan konfigurasi terbaru digunakan Laravel, Anda dapat membersihkan cache:

```bash
php artisan optimize:clear
```

Jika project menggunakan cache konfigurasi untuk production, konfigurasi dapat dibuat ulang menggunakan:

```bash
php artisan config:cache
```

> Untuk development, biasanya cukup menggunakan `php artisan optimize:clear`.

---

## 9. Menjalankan Aplikasi

Untuk development, jalankan:

```bash
composer run dev
```

Kemudian buka:

```text
http://localhost:8000
```

Alternatifnya, Anda juga dapat menjalankan server Laravel secara langsung:

```bash
php artisan serve
```

Kemudian akses:

```text
http://127.0.0.1:8000
```

Jika menggunakan Vite secara terpisah, jalankan:

```bash
npm run dev
```

---

## 10. Urutan Instalasi Singkat

Jika semua kebutuhan seperti **PHP, Composer, Node.js, NPM, dan database** sudah tersedia, proses instalasi umumnya cukup dilakukan dengan urutan berikut:

```bash
git clone https://github.com/username/nama-project.git

cd nama-project

composer install

cp .env.example .env

php artisan key:generate

npm install

npm run build

php artisan migrate

php artisan storage:link

php artisan optimize:clear

composer run dev
```

Untuk Windows, bagian:

```bash
cp .env.example .env
```

dapat diganti dengan:

```powershell
Copy-Item .env.example .env
```

---

## 11. Jika Project Memiliki Seeder

Jika project membutuhkan data awal, gunakan:

```bash
php artisan migrate --seed
```

Atau jika migration sudah pernah dijalankan:

```bash
php artisan db:seed
```

Beberapa project juga memiliki seeder khusus, misalnya:

```bash
php artisan db:seed --class=UserSeeder
```

Sesuaikan dengan dokumentasi project.

---

## 12. Jika Menggunakan Queue

Jika project menggunakan Laravel Queue, jalankan worker pada terminal terpisah:

```bash
php artisan queue:work
```

Untuk development, jika sudah dikonfigurasi pada `composer run dev`, queue worker biasanya dapat dijalankan bersama proses development lainnya.

---

## 13. Checklist Instalasi

Sebelum mulai mengembangkan project hasil clone, pastikan:

* [ ] Repository berhasil di-clone
* [ ] `composer install` berhasil
* [ ] File `.env` sudah dibuat
* [ ] Konfigurasi database sudah benar
* [ ] `php artisan key:generate` sudah dijalankan
* [ ] `npm install` berhasil
* [ ] Frontend sudah di-build
* [ ] Migration sudah dijalankan
* [ ] Seeder sudah dijalankan jika diperlukan
* [ ] `php artisan storage:link` sudah dijalankan jika diperlukan
* [ ] Cache Laravel sudah dibersihkan
* [ ] Aplikasi dapat dijalankan melalui `composer run dev`

Setelah semua langkah selesai, project Laravel hasil clone sudah siap digunakan untuk development.
