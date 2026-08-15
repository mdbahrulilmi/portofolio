# Rasa Publik - Sentiment Analysis of Public Opinion on X

**Rasa Publik** adalah aplikasi analisis sentimen berbasis web yang dirancang untuk menangkap dan menganalisis opini publik—khususnya dari platform X (Twitter)—terkait berbagai topik perbincangan hangat di Indonesia. Platform ini memungkinkan pengguna untuk mengumpulkan data, melakukan klasifikasi sentimen, serta memvisualisasikan suasana hati publik dan tren topik secara interaktif.

---

## 🛠️ Peran & Tanggung Jawab

Dalam proyek ini, saya bertanggung jawab penuh terhadap pengembangan sistem secara keseluruhan, mulai dari pengolahan data teks hingga penyajian antarmuka web yang interaktif:

*   **NLP Pipeline Development:** Membangun *preprocessing pipeline* khusus untuk membersihkan, menokenisasi, dan menormalisasi teks bahasa Indonesia yang sering kali tidak formal (bahasa slang/gaul).
*   **Sentiment Classification:** Menerapkan model analisis untuk mengklasifikasikan teks ke dalam kategori sentimen: positif, netral, atau negatif.
*   **Interactive Web Interface:** Mengembangkan antarmuka pengguna menggunakan **Streamlit** agar aplikasi mudah diakses, responsif, dan menyajikan visualisasi data yang intuitif.

---

## 🚀 Fitur Utama

1. **Flexible Input**
   * Mendukung pengunggahan data secara massal melalui file teks atau CSV.
   * Dilengkapi fitur pengambilan data (*scraping*) langsung untuk memantau topik terkini dari X.

2. **Indonesian Text Preprocessing Pipeline**
   * Pembersihan teks (*cleaning*) dari URL, tanda baca, dan karakter khusus.
   * Normalisasi kata tidak baku/slang bahasa Indonesia agar hasil analisis sentimen lebih akurat.

3. **Sentiment Analysis Engine**
   * Mengklasifikasikan opini publik secara otomatis ke dalam tiga kategori utama: **Positif, Netral, dan Negatif**.

4. **Data Visualization & Metrics**
   * Menyediakan grafik interaktif dan metrik ringkas untuk mempermudah pembacaan tren sentimen publik secara *real-time*.

---

## 💻 Tech Stack

*   **Core Language:** Python
*   **Web Framework:** Streamlit
*   **Data Processing & NLP:** Pandas, NumPy, Scikit-learn (atau pustaka pendukung NLP bahasa Indonesia)
*   **Deployment:** Streamlit Community Cloud / Cloud Infrastructure

---

## 🤝 Tantangan & Fokus Pengembangan

*   **Text Normalization:** Menangani tantangan bahasa gaul, singkatan, dan *typo* pada data media sosial Indonesia agar tidak menurunkan akurasi model sentimen.
*   **Performance & UI Speed:** Memastikan proses pembersihan data teks berskala besar tetap berjalan cepat tanpa membuat antarmuka Streamlit mengalami *lagging*.

---

## 📸 Tangkapan Layar & Antarmuka

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">

<div>
  <strong>Dashboard Analisis Sentimen</strong>
  <img src="/rasapublik/dashboard.webp" alt="Dashboard Rasa Publik" />
</div>

<div>
  <strong>Visualisasi & Grafik Tren</strong>
  <img src="/rasapublik/visualization.webp" alt="Visualisasi Grafik Rasa Publik" />
</div>

</div>