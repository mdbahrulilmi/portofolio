# Ndeleng - Discover Movies & TV Series

**Ndeleng** adalah platform *movie discovery* yang dirancang untuk mempermudah pengguna dalam mencari, memantau, dan mendapatkan rekomendasi film atau serial TV berdasarkan preferensi pribadi. Proyek ini mengintegrasikan data luas dari TMDB (The Movie Database) dengan pengalaman pengguna yang personal.

---

## 🛠️ Peran & Tanggung Jawab

Dalam proyek ini, saya membangun aplikasi dari nol dengan fokus pada interaksi API yang dinamis dan sistem rekomendasi berbasis perilaku pengguna:

*   **API Integration:** Mengintegrasikan seluruh data film dan TV series dari **TMDB API**, mencakup *fetching* data *trending*, pencarian detail, hingga *trailer* media.
*   **Authentication & Personalization:** Mengimplementasikan **OAuth** agar pengguna dapat melakukan *login* dengan aman, menyimpan daftar film favorit, dan mempersonalisasi konten.
*   **Recommendation Engine:** Membangun algoritma rekomendasi sederhana yang menganalisis film yang disukai pengguna untuk menyarankan konten serupa (berbasis *genre*, *keywords*, dan *cast*).
*   **Performance Optimization:** Memanfaatkan fitur *Server-Side Rendering* (SSR) dan *Caching* di **Next.js** agar tampilan data film tetap cepat meskipun trafik data dari API TMDB cukup besar.

---

## 🚀 Fitur Utama

1. **Intelligent Discovery**
   * Pencarian film dan serial TV dengan filter lengkap (berdasarkan tahun, genre, rating, dan popularitas).
   * Halaman detail film yang informatif, termasuk sinopsis, daftar pemain, hingga rekomendasi film serupa.

2. **Personalized Dashboard**
   * Fitur **Watchlist** dan **Liked Movies** yang tersimpan di profil pengguna.
   * **Algoritma Rekomendasi:** Sistem akan menampilkan daftar film baru berdasarkan *genre* dan *tag* yang sering disukai oleh pengguna.

3. **Secure Authentication**
   * Integrasi OAuth untuk memastikan data favorit pengguna tersimpan secara unik dan aman.

4. **Modern UI/UX**
   * Desain yang terinspirasi dari platform *streaming* modern, menggunakan transisi halus dan tata letak *responsive* agar nyaman di berbagai perangkat.

---

## 💻 Tech Stack

* **Framework:** Next.js (App Router)
* **API:** TMDB API (The Movie Database)
* **Authentication:** NextAuth.js (dengan OAuth Provider)
* **Styling:** Tailwind CSS + Framer Motion (untuk animasi)
* **Deployment:** Vercel

---

## 🤝 Tantangan Pengembangan

* **Recommendation Logic:** Mengolah data dari TMDB API untuk mencocokkan preferensi pengguna secara *real-time* tanpa mengorbankan kecepatan *loading* halaman.
* **API Rate Limiting:** Mengelola frekuensi *request* ke TMDB API agar tidak melampaui batas *limit* dengan teknik *caching* yang efektif.
* **Data Consistency:** Menyelaraskan data antara profil pengguna (database lokal) dengan metadata film (dari API luar) agar sistem rekomendasi tetap relevan.

---

## 📸 Tampilan Antarmuka

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">

<div>
  <strong>Halaman Discover (Trending Movies)</strong>
  <img src="/ndeleng/discover.webp" alt="Discover Page" />
</div>

<div>
  <strong>Halaman Detail & Rekomendasi</strong>
  <img src="/ndeleng/detail.webp" alt="Movie Detail" />
</div>

</div>