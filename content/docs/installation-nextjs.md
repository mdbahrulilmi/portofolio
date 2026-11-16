---
title: "Cara Install Project Next.js"
category: "Next.js"
date: "2026-11-16"
---

# Cara Install dan Membuat Project Next.js

## 1. Apa Itu Next.js?

Next.js adalah framework React yang digunakan untuk membangun aplikasi web modern. Next.js menyediakan berbagai fitur seperti Server-Side Rendering (SSR), Static Site Generation (SSG), routing, optimasi gambar, dan API Routes.

Next.js cocok digunakan untuk membuat berbagai jenis aplikasi, mulai dari portfolio, blog, dashboard, hingga aplikasi berskala besar.

## 2. Persiapan Sebelum Install

Sebelum membuat project Next.js, pastikan beberapa kebutuhan berikut sudah terpasang di komputer.

### Node.js

Node.js merupakan runtime JavaScript yang dibutuhkan untuk menjalankan Next.js.

Download melalui website resmi:

https://nodejs.org/

Disarankan menggunakan versi LTS agar lebih stabil.

### Code Editor

Gunakan code editor untuk menulis dan mengelola kode program. Salah satu yang direkomendasikan adalah Visual Studio Code.

Download:

https://code.visualstudio.com/

### Memeriksa Instalasi Node.js

Buka terminal atau Command Prompt, kemudian jalankan:

```bash
node -v
```

Periksa juga versi npm:

```bash
npm -v
```

Jika kedua perintah menampilkan nomor versi, berarti Node.js dan npm sudah berhasil terpasang.

## 3. Membuat Project Next.js

Setelah semua persiapan selesai, kita bisa mulai membuat project Next.js.

Buka terminal, arahkan ke folder tempat project akan disimpan, kemudian jalankan:

```bash
npx create-next-app@latest my-next-app
```

Keterangan:

- `npx` digunakan untuk menjalankan package tanpa harus menginstalnya secara global.
- `create-next-app` adalah CLI resmi untuk membuat project Next.js.
- `my-next-app` merupakan nama folder project.

## 4. Memilih Konfigurasi Project

Setelah menjalankan perintah instalasi, biasanya akan muncul beberapa pertanyaan konfigurasi.

Contoh konfigurasi yang bisa dipilih:

| Konfigurasi | Pilihan |
|---|---|
| TypeScript | Yes |
| ESLint | Yes |
| Tailwind CSS | Yes |
| Code inside `src/` directory | Yes |
| App Router | Yes |
| Turbopack | Yes |
| Customize import alias | No |

Pilihan tersebut merupakan rekomendasi awal. Kamu tetap bisa menyesuaikannya dengan kebutuhan project.

## 5. Masuk ke Folder Project

Setelah proses instalasi selesai, masuk ke direktori project:

```bash
cd my-next-app
```

## 6. Menjalankan Development Server

Jalankan perintah berikut:

```bash
npm run dev
```

Jika berhasil, terminal akan menampilkan informasi bahwa development server sudah berjalan.

Buka browser dan akses:

```text
http://localhost:3000
```

Kamu akan melihat halaman awal Next.js.

## 7. Mengenal Struktur Folder Next.js

Berikut contoh struktur project Next.js dengan App Router dan direktori `src`:

```text
my-next-app/
├── public/
│   ├── images/
│   └── favicon.ico
├── src/
│   └── app/
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── node_modules/
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
└── eslint.config.mjs
```

Penjelasan beberapa folder dan file penting:

| Folder/File | Fungsi |
|---|---|
| `public/` | Menyimpan file statis seperti gambar dan ikon |
| `src/app/` | Menyimpan halaman dan routing aplikasi |
| `page.tsx` | Komponen halaman utama |
| `layout.tsx` | Layout utama yang digunakan oleh halaman |
| `globals.css` | CSS global aplikasi |
| `package.json` | Menyimpan konfigurasi dan dependencies project |
| `next.config.ts` | Konfigurasi Next.js |
| `tsconfig.json` | Konfigurasi TypeScript |

## 8. Membuat Halaman Pertama

Buka file `src/app/page.tsx`, kemudian ganti isinya:

```tsx
export default function Home() {
  return (
    <main>
      <h1>Halo, Next.js!</h1>
      <p>Ini adalah project Next.js pertama saya.</p>
    </main>
  )
}
```

Simpan file tersebut, kemudian buka kembali browser di `http://localhost:3000`.

Perubahan akan terlihat secara otomatis melalui fitur Fast Refresh.

## 9. Membuat Halaman Baru

Next.js menggunakan sistem routing berbasis folder.

Misalnya, kita ingin membuat halaman About.

Buat folder dan file berikut:

```text
src/
└── app/
    ├── page.tsx
    └── about/
        └── page.tsx
```

Isi file `src/app/about/page.tsx`:

```tsx
export default function About() {
  return (
    <main>
      <h1>About Me</h1>
      <p>Ini adalah halaman About.</p>
    </main>
  )
}
```

Sekarang buka:

```text
http://localhost:3000/about
```

Halaman About akan ditampilkan tanpa perlu mengatur routing secara manual.

## 10. Membuat Build untuk Production

Jika aplikasi sudah selesai dikembangkan, jalankan perintah:

```bash
npm run build
```

Perintah tersebut akan melakukan proses build dan memeriksa aplikasi untuk kebutuhan production.

Untuk menjalankan hasil build secara lokal:

```bash
npm run start
```

Pastikan `npm run build` sudah berhasil sebelum menjalankan perintah tersebut.

## Kesimpulan

Next.js dapat diinstal dengan mudah menggunakan `create-next-app`. Dengan konfigurasi bawaan seperti TypeScript, Tailwind CSS, dan App Router, kita sudah memiliki fondasi yang cukup untuk mulai membangun aplikasi web modern.

Setelah project berhasil dibuat, kita bisa mulai mempelajari routing, komponen, styling, fetching data, hingga deployment.