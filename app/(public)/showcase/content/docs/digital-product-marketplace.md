# Digital Product Marketplace

## Tentang Project

Digital Product Marketplace adalah platform untuk menjual produk digital seperti source code, template, maupun e-book.

Project ini dibangun menggunakan Laravel sebagai backend dan Next.js sebagai frontend.

---

## Fitur

- Login & Register
- Dashboard Admin
- Dashboard Member
- Payment Gateway
- Upload Asset ke AWS S3
- Download Digital Product
- Manajemen Produk

---

## Tech Stack

- Laravel
- Next.js
- TypeScript
- Tailwind CSS
- PostgreSQL
- AWS S3

---

## Tantangan

Salah satu tantangan adalah proses upload file digital berukuran besar. Awalnya file diunggah ke server aplikasi sehingga berpotensi membebani storage dan bandwidth server.

## Solusi

Menggunakan AWS S3 Presigned URL sehingga browser pengguna dapat mengunggah file langsung ke S3 tanpa melewati server aplikasi.

---

## Screenshot

![Dashboard](./dashboard.webp)

![Product](./product.webp)

---

## Repository

https://github.com/username/digital-product-marketplace