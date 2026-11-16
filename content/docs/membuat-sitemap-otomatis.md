---
title: "Cara Membuat Sitemap Otomatis"
category: "Next.js"
date: "2026-11-16"
---

# Cara Membuat Sitemap Otomatis di Next.js

Sitemap merupakan file XML yang berisi daftar URL halaman pada sebuah website. Sitemap membantu mesin pencari seperti Google menemukan dan memahami struktur halaman website kita.

Pada Next.js, kita bisa membuat sitemap secara otomatis menggunakan fitur bawaan **Metadata Route**. Dengan fitur ini, kita tidak perlu membuat file XML secara manual.

## 1. Membuat File Sitemap

Buat file bernama `sitemap.ts` di dalam folder `app`.

Struktur folder:

```text
app/
├── layout.tsx
├── page.tsx
└── sitemap.ts
```

## 2. Membuat Sitemap Statis

Masukkan kode berikut ke dalam `app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://example.com'

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
```

Penjelasan beberapa properti:

| Properti | Fungsi |
|---|---|
| `url` | Alamat halaman website |
| `lastModified` | Tanggal terakhir halaman diperbarui |
| `changeFrequency` | Perkiraan frekuensi perubahan halaman |
| `priority` | Tingkat prioritas halaman dari 0.0 sampai 1.0 |

## 3. Membuat Sitemap Dinamis

Jika website memiliki banyak halaman yang datanya berasal dari database atau file Markdown, kita bisa mengambil datanya secara otomatis.

Contohnya, kita memiliki dokumentasi Markdown di dalam folder `content/docs`:

```text
content/
└── docs/
    ├── docker.md
    ├── laravel.md
    ├── nextjs.md
    └── database.md
```

Misalnya, kita sudah memiliki fungsi `getAllDocs()` di `lib/docs.ts` yang mengambil seluruh dokumentasi.

Kita cukup mengimpor fungsi tersebut ke dalam `sitemap.ts`.

```typescript
import { MetadataRoute } from 'next'
import { getAllDocs } from '@/lib/docs'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://example.com'

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  const docsPages: MetadataRoute.Sitemap = getAllDocs().map((doc) => ({
    url: `${baseUrl}/docs/${doc.slug}`,
    lastModified: new Date(doc.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...docsPages]
}
```

### Bagaimana Cara Kerjanya?

Bagian paling penting adalah:

```typescript
const docsPages: MetadataRoute.Sitemap = getAllDocs().map((doc) => ({
  url: `${baseUrl}/docs/${doc.slug}`,
  lastModified: new Date(doc.date),
  changeFrequency: 'monthly',
  priority: 0.7,
}))
```

Penjelasannya:

1. `getAllDocs()` mengambil seluruh dokumen Markdown.
2. `.map()` mengubah setiap dokumen menjadi entri sitemap.
3. `doc.slug` digunakan untuk membentuk URL dokumentasi.
4. `doc.date` digunakan sebagai tanggal terakhir modifikasi.
5. `return [...staticPages, ...docsPages]` menggabungkan halaman statis dan dinamis.

Dengan cara ini, setiap kali kita menambahkan file Markdown baru ke folder `content/docs`, halaman tersebut akan ikut dimasukkan ke sitemap tanpa perlu menambahkan URL secara manual.

## 4. Melihat Hasil Sitemap

Jalankan aplikasi Next.js:

```bash
npm run dev
```

Kemudian buka alamat:

```text
http://localhost:3000/sitemap.xml
```

Setelah website di-deploy, sitemap dapat diakses melalui:

```text
https://example.com/sitemap.xml
```

Contoh URL yang dihasilkan:

```text
https://example.com/
https://example.com/about
https://example.com/docs
https://example.com/docs/docker
https://example.com/docs/laravel
https://example.com/docs/nextjs
https://example.com/docs/database
```

## 5. Mengirim Sitemap ke Google Search Console

Agar Google lebih mudah menemukan halaman website, kita bisa mendaftarkan sitemap melalui Google Search Console.

Langkah-langkah:

1. Buka [Google Search Console](https://search.google.com/search-console).
2. Pilih properti website yang sudah didaftarkan.
3. Masuk ke menu **Sitemaps**.
4. Masukkan `sitemap.xml`.
5. Klik **Submit**.

Google akan mencoba membaca sitemap dan menemukan URL yang tercantum di dalamnya.

Perlu diingat, sitemap membantu Google menemukan halaman, tetapi tidak menjamin semua halaman langsung terindeks.

## Kesimpulan

Next.js menyediakan fitur sitemap bawaan yang memudahkan developer membuat sitemap secara otomatis.

Dengan menggabungkan `MetadataRoute.Sitemap` dan fungsi pengambilan data seperti `getAllDocs()`, kita bisa membuat sitemap dinamis yang mengikuti perkembangan konten website.

Cara ini sangat cocok untuk website dokumentasi, blog, portfolio, maupun website yang memiliki banyak halaman dinamis.