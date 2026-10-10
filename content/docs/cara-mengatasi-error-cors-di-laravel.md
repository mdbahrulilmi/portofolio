---
title: "Cara Mengatasi Error CORS di Laravel"
category: "Laravel"
date: "2026-10-10"
---

# Cara Mengatasi Error CORS di Laravel

Pernah mengalami error CORS ketika menghubungkan frontend dengan backend Laravel? Masalah ini sering terjadi saat aplikasi frontend berjalan pada domain atau port yang berbeda dari backend API.

Contohnya, frontend berjalan di `http://localhost:3000`, sedangkan backend Laravel berada di `http://localhost:8000`. Ketika frontend mengirim permintaan ke backend, browser dapat memblokir permintaan tersebut jika konfigurasi Cross-Origin Resource Sharing (CORS) tidak sesuai.

Pada artikel ini, kita akan membahas penyebab error CORS di Laravel dan langkah-langkah untuk mengatasinya.

## 1. Apa Itu CORS?

CORS adalah mekanisme keamanan browser yang mengatur apakah sebuah halaman web diizinkan mengakses resource dari origin yang berbeda.

Origin terdiri dari tiga bagian utama:
- Protokol, seperti `http` atau `https`.
- Hostname, seperti `localhost` atau `api.example.com`.
- Port, seperti `3000` atau `8000`.

Sebagai contoh, kedua URL berikut memiliki origin yang berbeda:

```text
Frontend: http://localhost:3000
Backend:  http://localhost:8000
```

Walaupun sama-sama menggunakan `localhost`, perbedaan port membuat keduanya dianggap sebagai origin yang berbeda.

Ketika frontend mengakses backend, browser akan menerapkan aturan CORS untuk menentukan apakah respons dari backend boleh dibaca oleh frontend.

## 2. Periksa Konfigurasi CORS Laravel

Laravel modern menyediakan konfigurasi CORS melalui file `config/cors.php`. Namun, file tersebut mungkin belum tersedia secara langsung pada project tertentu.

Periksa apakah file berikut tersedia:

```text
config/cors.php
```

Jika tersedia, buka file tersebut dan periksa pengaturannya.

Contoh konfigurasi untuk API yang diakses dari frontend lokal:

```php
return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['http://localhost:3000'],
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,
];
```

Sesuaikan konfigurasi tersebut dengan kebutuhan aplikasi.

Penjelasan beberapa pengaturan penting:

- `paths`: menentukan endpoint yang menerapkan konfigurasi CORS.
- `allowed_methods`: menentukan metode HTTP yang diizinkan.
- `allowed_origins`: menentukan origin frontend yang diperbolehkan.
- `allowed_headers`: menentukan header permintaan yang diizinkan.
- `supports_credentials`: menentukan apakah permintaan lintas origin boleh menggunakan kredensial seperti cookie.

**Catatan:** Jangan langsung menyalin konfigurasi ini tanpa menyesuaikan autentikasi dan kebutuhan aplikasi. Jika menggunakan cookie atau Laravel Sanctum, pengaturan kredensial perlu diperhatikan secara khusus.

## 3. Jika File `cors.php` Tidak Tersedia

Pada beberapa versi atau konfigurasi instalasi Laravel, file `config/cors.php` tidak otomatis tersedia.

Untuk menerbitkan konfigurasi CORS bawaan framework, jalankan:

```bash
php artisan config:publish cors
```

Setelah file konfigurasi tersedia, sesuaikan origin, endpoint, metode, dan header yang diperlukan.

Pastikan juga perintah tersebut didukung oleh versi Laravel yang digunakan.

## 4. Bersihkan Cache Konfigurasi

Setelah mengubah konfigurasi CORS, Laravel mungkin masih menggunakan konfigurasi yang tersimpan dalam cache.

Jalankan:

```bash
php artisan config:clear
```

Jika aplikasi menggunakan cache konfigurasi untuk deployment, buat ulang cache setelah semua konfigurasi sudah benar:

```bash
php artisan config:cache
```

Langkah ini membantu memastikan Laravel membaca konfigurasi terbaru.

## 5. Periksa Request OPTIONS

Salah satu penyebab error CORS adalah kegagalan menangani permintaan `OPTIONS`, yang biasa disebut preflight request.

Browser dapat mengirim request `OPTIONS` sebelum permintaan utama jika request menggunakan metode atau header tertentu.

Contohnya:

```http
OPTIONS /api/users HTTP/1.1
Origin: http://localhost:3000
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type, authorization
```

Server perlu memberikan respons yang sesuai agar browser dapat melanjutkan permintaan utama.

Jika request `OPTIONS` menghasilkan status `500 Internal Server Error`, jangan langsung menganggap masalahnya hanya berasal dari CORS. Periksa log Laravel untuk menemukan exception yang sebenarnya:

```text
storage/logs/laravel.log
```

Jika respons `OPTIONS` mendapat status `404`, `405`, atau `500`, periksa juga routing, middleware, konfigurasi server web, dan log server.

## 6. Pastikan Origin Frontend Sudah Benar

Origin yang diizinkan harus sesuai dengan alamat frontend yang benar-benar digunakan.

Contohnya, jika frontend berjalan pada:

```text
http://localhost:3000
```

Maka konfigurasi berikut tidak otomatis mencakup origin tersebut:

```php
'allowed_origins' => ['http://127.0.0.1:3000'],
```

Meskipun keduanya mengarah ke komputer lokal, `localhost` dan `127.0.0.1` merupakan hostname yang berbeda.

Begitu pula dengan protokol dan port. Origin HTTPS tidak sama dengan origin HTTP, dan port yang berbeda juga dianggap berbeda.

Untuk aplikasi produksi, gunakan origin frontend yang benar, misalnya:

```php
'allowed_origins' => ['https://app.example.com'],
```

Hindari mengizinkan semua origin tanpa mempertimbangkan kebutuhan keamanan aplikasi.

## 7. Periksa Header dan Autentikasi

Jika konfigurasi origin sudah benar tetapi error masih terjadi, periksa header yang dikirim oleh frontend.

Contohnya, frontend mungkin mengirim:

```http
Content-Type: application/json
Authorization: Bearer your-token
```

Pastikan header tersebut diizinkan oleh konfigurasi CORS.

Jika aplikasi menggunakan cookie atau Laravel Sanctum, pastikan juga:
- `supports_credentials` diatur sesuai kebutuhan.
- Origin frontend ditentukan secara eksplisit, bukan menggunakan wildcard.
- Konfigurasi cookie dan domain sudah sesuai.
- Frontend mengirim permintaan dengan pengaturan kredensial yang benar.

Jangan mengaktifkan kredensial jika aplikasi tidak membutuhkannya.

## 8. Cara Memeriksa Error CORS di Browser

Untuk mengetahui penyebab error, buka Developer Tools pada browser.

Ikuti langkah berikut:

1. Buka halaman frontend.
2. Tekan `F12` atau klik kanan lalu pilih Inspect.
3. Buka tab Network.
4. Jalankan kembali permintaan API.
5. Cari request yang gagal, termasuk request `OPTIONS` jika ada.
6. Periksa status HTTP, response headers, dan pesan error pada tab Console.

Perhatikan header berikut pada respons server:

```http
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
```

Header yang diperlukan bergantung pada jenis permintaan. Tidak semua header harus selalu dicantumkan secara manual karena Laravel dapat menghasilkan header berdasarkan konfigurasi CORS.

Jika respons tidak memuat header yang sesuai, periksa apakah request masuk ke Laravel, apakah middleware berjalan, dan apakah server atau proxy mengubah respons.

## 9. Kesimpulan

Error CORS di Laravel biasanya berkaitan dengan origin frontend yang tidak diizinkan, konfigurasi CORS yang belum sesuai, atau kegagalan menangani preflight request.

Untuk mengatasinya, periksa `config/cors.php`, pastikan origin dan header sudah benar, bersihkan cache konfigurasi, lalu periksa request yang gagal melalui Developer Tools.

Jika request `OPTIONS` menghasilkan error server seperti `500 Internal Server Error`, temukan penyebabnya melalui log Laravel atau log server terlebih dahulu. Memperbaiki konfigurasi CORS saja tidak akan menyelesaikan exception yang terjadi di backend.

Dengan pemeriksaan yang sistematis, Anda dapat mengetahui sumber masalah dan menghubungkan frontend dengan backend Laravel secara lebih aman.