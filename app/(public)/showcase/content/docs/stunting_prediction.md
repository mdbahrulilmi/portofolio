# Stunting Monitor App - Child Growth & Prediction System

**Stunting Monitor App** adalah aplikasi berbasis web yang dirancang untuk memantau pertumbuhan anak dan memprediksi status stunting menggunakan algoritma *Machine Learning* **K-Nearest Neighbors (KNN)**. Sistem ini dikembangkan untuk membantu tenaga kesehatan (kader posyandu/puskesmas) dan orang tua dalam mendeteksi secara dini risiko stunting berdasarkan data antropometri anak, yang juga terintegrasi langsung dengan pendataan berbasis wilayah di tingkat **kelurahan**.

---

## 🛠️ Peran & Tanggung Jawab

Dalam proyek ini, saya bertanggung jawab penuh atas pengembangan sistem secara menyeluruh dari sisi *backend*, integrasi model *machine learning*, hingga pengelolaan basis data wilayah:

*   **Machine Learning Integration:** Menerapkan algoritma **K-Nearest Neighbors (KNN)** via Scikit-Learn untuk mengklasifikasikan status pertumbuhan anak berdasarkan parameter usia, tinggi badan, berat badan, dan jenis kelamin.
*   **Kelurahan Data Integration:** Mengintegrasikan struktur data kependudukan dan rekapitulasi kesehatan anak dari tingkat **kelurahan**, sehingga kader posyandu dapat melakukan pemantauan secara komparatif per wilayah.
*   **Backend & Database Development:** Membangun RESTful *flow* menggunakan **Flask** serta mengelola penyimpanan data historis menggunakan **SQLite / PostgreSQL**.
*   **Dashboard & Visualization:** Menyediakan antarmuka visualisasi tren pertumbuhan anak dari waktu ke waktu untuk memudahkan evaluasi jangka panjang.

---

## 🚀 Fitur Utama

1. **Sinkronisasi Data Kelurahan**
   * Mengelola data anak dan balita berbasis wilayah kelurahan/posyandu, memudahkan pemangku kepentingan lokal untuk memetakan wilayah yang membutuhkan intervensi gizi lebih cepat.

2. **Prediksi Stunting Berbasis KNN**
   * Memproses data antropometri (usia, berat badan, tinggi badan, jenis kelamin) menggunakan model KNN untuk memberikan estimasi status gizi anak secara akurat.

3. **Growth Monitoring Dashboard**
   * Dashboard interaktif bagi tenaga kesehatan untuk melihat rekapitulasi status kesehatan balita secara menyeluruh.

4. **Historical Data Tracking & Visualisasi**
   * Menyimpan riwayat pemeriksaan anak secara berkala dan menampilkan grafik pertumbuhan (*growth chart*) untuk memantau perkembangan fisik dari waktu ke waktu.

5. **Antarmuka yang Ramah Pengguna**
   * Desain web yang sederhana dan intuitif agar mudah dioperasikan oleh kader posyandu maupun orang tua.

---

## 💻 Tech Stack

*   **Backend:** Python, Flask
*   **Machine Learning:** K-Nearest Neighbors (KNN), Scikit-Learn, Pandas, NumPy
*   **Frontend:** HTML, CSS (Bootstrap / Custom UI)
*   **Database:** SQLite / PostgreSQL
*   **Domain Data:** Data Antropometri & Rekapitulasi Kesehatan Kelurahan

---

## 🤝 Tantangan & Fokus Pengembangan

*   **Data Accuracy:** Menyelaraskan standar pengukuran antropometri nasional dengan model KNN agar hasil prediksi status stunting memiliki tingkat akurasi yang tinggi.
*   **Territorial Management:** Mengatur struktur basis data agar mampu mengelompokkan data anak berdasarkan wilayah kelurahan secara efisien tanpa memperlambat kinerja aplikasi.
*   **Usability:** Merancang sistem yang mudah digunakan oleh tenaga kesehatan lapangan yang mungkin memiliki tingkat literasi digital yang beragam.

---

## 📸 Tangkapan Layar & Antarmuka

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">

<div>
  <strong>Dashboard Pemantauan Wilayah Kelurahan</strong>
  <img src="/stunting-monitor/dashboard-kelurahan.webp" alt="Dashboard Kelurahan" />
</div>

<div>
  <strong>Form Input & Prediksi KNN</strong>
  <img src="/stunting-monitor/prediksi-knn.webp" alt="Prediksi KNN" />
</div>

</div>