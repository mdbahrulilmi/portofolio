# 🐦 Rasa Publik - Sentiment Analysis of Public Opinion on X

**Rasa Publik** adalah aplikasi analisis sentimen berbasis web yang dirancang khusus untuk menangkap, mengekstrak, dan menganalisis opini publik secara *real-time* dari platform **X (Twitter)** terkait berbagai topik perbincangan hangat di Indonesia. Platform ini memungkinkan pengguna untuk melakukan *scraping* twit secara langsung, mengelola korpus data media sosial, melakukan klasifikasi sentimen, serta memvisualisasikan dinamika suara publik secara interaktif.

---

## 🛠️ Peran & Tanggung Jawab (Fokus Data & Ekstraksi Twitter)

*   **X (Twitter) Data Extraction Pipeline:** Membangun dan mengoptimalkan modul pengambilan data (*scraping/API integration*) untuk mengumpulkan twit publik secara spesifik berdasarkan *keyword*, tagar (*hashtag*), atau durasi waktu tertentu dari platform **X**.
*   **Social Media NLP Pipeline:** Mengembangkan *preprocessing pipeline* khusus untuk membersihkan data twit yang sangat tidak terstruktur, meliputi pembersihan *mention*, tautan URL, tagar, emoji, serta normalisasi bahasa gaul/slang khas pengguna **X**.
*   **Sentiment Classification:** Menerapkan model analisis untuk mengklasifikasikan korpus twit ke dalam kategori sentimen: positif, netral, atau negatif secara akurat.
*   **Interactive Web Interface:** Mengembangkan antarmuka pengguna berbasis **Streamlit** untuk menampilkan hasil analitik twit secara dinamis dan responsif.

---

## 🚀 Fitur Utama

1. **X Data Scraping & Flexible Input**
   * Menyediakan fitur pengambilan data (*scraping*) langsung dari **X (Twitter)** berdasarkan *keyword* atau topik hangat yang sedang dibicarakan publik.
   * Mendukung pengunggahan *dataset* twit dalam format CSV atau teks untuk analisis riwayat.

2. **Indonesian Social Media Text Preprocessing**
   * Pembersihan teks (*cleaning*) khusus struktur twit (menghapus *username* `@`, tautan, karakter berulang, dan simbol khusus).
   * Kamus normalisasi kata tidak baku dan slang yang sering digunakan di linimasa **X**.

3. **Sentiment Analysis Engine**
   * Mengklasifikasikan twit dari **X** secara otomatis ke dalam tiga kategori utama: **Positif, Netral, dan Negatif**.

4. **Twitter Trend & Visualization Dashboard**
   * Menyediakan grafik interaktif, *word cloud* dari kata kunci yang paling sering muncul di twit, serta metrik ringkas untuk membaca pergeseran opini publik di **X**.

---

## 💻 Tech Stack

*   **Core Language:** Python
*   **Web Framework:** Streamlit
*   **X Data Scraping / API:** Twikit / Tweepy / Scraper Pendukung X
*   **Data Processing & NLP:** Pandas, NumPy, Scikit-learn, Sastrawi / NLTK
*   **Deployment:** Streamlit Community Cloud / Cloud Infrastructure

---

## 🤝 Tantangan & Fokus Pengembangan

*   **Dinamika & Noise Data X:** Menangani karakteristik twit yang pendek, penuh singkatan, bahasa gaul yang cepat berubah, serta banyaknya *noise* (seperti akun *bot* atau spam iklan) pada platform **X** agar tidak mendistorsi hasil analisis sentimen.
*   **Rate Limit & Stabilitas Ekstraksi X:** Mengelola strategi *scraping* atau pembatasan akses data (*rate limiting*) dari **X** agar proses pengambilan twit baru tetap berjalan lancar dan andal.
*   **Performance & UI Speed:** Memastikan proses pembersihan korpus twit berskala besar tetap responsif tanpa membuat antarmuka Streamlit mengalami *lagging*.