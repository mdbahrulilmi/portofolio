---
title: "Memasang Widget Chat Assistant di Website"
category: "Integrasi"
date: "2026-11-03"
---

# Cara Memasang Widget Chat Assistant di Website (Panduan Blok Kode)

Memasang *chat assistant* di website sangat membantu pengunjung untuk langsung berinteraksi dengan Anda. Di bawah ini adalah panduan praktis pemasangan berdasarkan platform widget yang Anda gunakan.

---

## 🛠️ Langkah Universal
1. Siapkan **Kunci Akses** (*Access Key* atau *Widget Key*) dari platform pilihan Anda.
2. Letakkan kode di dalam file HTML website Anda, tepat sebelum tag penutup **`</body>`**.

---

## 1. Blok Kode: Widget Custom Chat (Cekat.ai)

Jika Anda menggunakan layanan widget custom seperti Cekat.ai, gunakan blok kode di bawah ini:

### 📄 Blok Kode:
```html
<script type="text/javascript">
     window.mychat = window.mychat || {};
     window.mychat.server = 'https://live.cekat.ai/widget.js';
     window.mychat.iframeWidth = '400px';
     window.mychat.iframeHeight = '700px';
     window.mychat.accessKey = 'GANTI_DENGAN_KEY_ANDA'; // Ubah bagian ini
     (function() {
         var mychat = document.createElement('script');
         mychat.type = 'text/javascript';
         mychat.async = true;
         mychat.src = window.mychat.server;
         var s = document.getElementsByTagName('script')[0];
         s.parentNode.insertBefore(mychat, s);
     })();
</script>
```

### ⚙️ Penyesuaian:
* Ganti `'GANTI_DENGAN_KEY_ANDA'` dengan *Access Key* asli Anda.
* Anda bisa mengatur ukuran tampilan widget lewat baris `iframeWidth` (lebar) dan `iframeHeight` (tinggi).

---

## 2. Blok Kode: Widget WhatsApp Chat (Watzap)

Jika Anda menggunakan widget berbasis WhatsApp dari Watzap, Anda dapat menggunakan format skrip ke bawah (*multiline*) agar lebih mudah disesuaikan:

### 📄 Blok Kode:
```html
<script 
    src="https://widget.watzap.chat/wzp/v1/chat.js?w=GANTI_DENGAN_KEY_ANDA" 
    data-wzp-widget="GANTI_DENGAN_KEY_ANDA" 
    async>
</script>
```

### ⚙️ Penyesuaian:
* Ganti `'GANTI_DENGAN_KEY_ANDA'` dengan *key* widget Watzap milik Anda.

---

## 📌 Contoh Penerapan Lengkap dalam HTML

Berikut adalah ilustrasi jika kode tersebut diletakkan di dalam struktur dasar file HTML website:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Website Saya</title>
</head>
<body>

    <h1>Halo, Selamat Datang!</h1>
    <p>Ini adalah halaman utama website bisnis saya.</p>


    <!-- Contoh jika pakai Cekat.ai -->
    <script type="text/javascript">
         window.mychat = window.mychat || {};
         window.mychat.server = 'https://live.cekat.ai/widget.js';
         window.mychat.iframeWidth = '400px';
         window.mychat.iframeHeight = '700px';
         window.mychat.accessKey = 'key-kamu';
         (function() {
             var mychat = document.createElement('script');
             mychat.type = 'text/javascript';
             mychat.async = true;
             mychat.src = window.mychat.server;
             var s = document.getElementsByTagName('script')[0];
             s.parentNode.insertBefore(mychat, s);
         })();
    </script>

    <!-- ATAU Contoh jika pakai Watzap -->
    <script 
        src="https://widget.watzap.chat/wzp/v1/chat.js?w=GANTI_DENGAN_KEY_ANDA" 
        data-wzp-widget="GANTI_DENGAN_KEY_ANDA" 
        async>
    </script>
    

</body>
</html>
```

Simpan file HTML Anda, lalu *refresh* website untuk melihat hasilnya!