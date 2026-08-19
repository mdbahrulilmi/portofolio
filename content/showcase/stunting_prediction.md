# 📊 Stunting Monitor App: Child Growth & Prediction System

**Stunting Monitor App** adalah aplikasi berbasis web yang dirancang untuk memantau pertumbuhan anak dan memprediksi status stunting menggunakan algoritma *Machine Learning* **K-Nearest Neighbors (KNN)**. Sistem ini dikembangkan untuk membantu tenaga kesehatan (kader posyandu/puskesmas) dan orang tua dalam mendeteksi secara dini risiko stunting berdasarkan data antropometri anak yang dikumpulkan secara rutin setiap bulan.

---

## 🛠️ Peran & Tanggung Jawab (Fokus Posyandu Bulanan)

* **Machine Learning Integration:** Menerapkan algoritma **K-Nearest Neighbors (KNN)** untuk mengklasifikasikan status pertumbuhan anak berdasarkan parameter **usia (bulan)**, **berat badan**, **tinggi/panjang badan**, dan **jenis kelamin** sesuai standar antropometri nasional.
* **Kelurahan & Posyandu Data Integration:** Mengintegrasikan struktur data pencatatan rutin bulanan dari tingkat **kelurahan/posyandu**, sehingga kader dapat memantau progres kenaikan berat dan tinggi badan anak secara berkala.
* **Backend & Database Development:** Membangun RESTful *flow* menggunakan **Flask** serta mengelola penyimpanan data **riwayat pemeriksaan bulanan** yang terstruktur menggunakan **SQLite / PostgreSQL**.
* **Dashboard & Visualization:** Menyediakan antarmuka visualisasi tren pertumbuhan (grafik berat dan tinggi badan terhadap usia) untuk memudahkan evaluasi jangka panjang di posyandu.

---

## 🚀 Fitur Utama

1. **Pencatatan Rutin Bulanan Posyandu**
   * Memfasilitasi input data hasil penimbangan dan pengukuran bulanan (usia anak dalam bulan, berat badan, serta tinggi badan) langsung di posyandu atau tingkat kelurahan.
2. **Prediksi Stunting Berbasis KNN**
   * Memproses parameter **usia (bulan)** serta **antropometri (berat & tinggi)** menggunakan model KNN untuk memberikan estimasi status gizi dan risiko stunting secara akurat setiap kali kunjungan bulanan.
3. **Growth Monitoring Dashboard**
   * Dashboard interaktif bagi tenaga kesehatan untuk melihat rekapitulasi status kesehatan balita berdasarkan kelompok usia dan wilayah posyandu secara menyeluruh.
4. **Historical Data Tracking & Visualisasi Kurva Pertumbuhan**
   * Menyimpan riwayat pemeriksaan dan menampilkan grafik pertumbuhan (*growth chart*) untuk memantau tren kenaikan fisik anak dari bulan ke bulan.
5. **Antarmuka Ramah Pengguna**
   * Desain web yang intuitif agar kader posyandu dapat melakukan input data dengan cepat di tengah kesibukan pelayanan bulanan.

---

## 💻 Tech Stack

* **Backend:** Python, Flask
* **Machine Learning:** K-Nearest Neighbors (KNN), Scikit-Learn, Pandas, NumPy
* **Frontend:** HTML, CSS (Bootstrap / Custom UI)
* **Database:** SQLite / PostgreSQL
* **Domain Data:** Data Antropometri Bulanan (Usia, Berat Badan, Tinggi Badan) & Rekapitulasi Posyandu Kelurahan

---

## 🤝 Tantangan & Fokus Pengembangan

* **Akurasi Data Usia & Antropometri Bulanan:** Menyelaraskan perhitungan **usia dalam satuan bulan** (variabel krusial dalam standar antropometri) dengan model KNN untuk memastikan hasil prediksi status stunting tetap akurat di setiap fase pertumbuhan.
* **Manajemen Riwayat Berkala (*Time-Series Data*):** Mengatur struktur basis data agar mampu merekam dan mengelola tren kenaikan **berat dan tinggi badan per bulan** tanpa menurunkan performa aplikasi saat rekapitulasi massal.
* **Usability di Lapangan:** Merancang alur input data yang efisien agar kader posyandu dapat memasukkan data berat dan tinggi badan balita dengan cepat dan minim *error* saat kegiatan berlangsung.