---
title: "Ekstensi php tidak terdeteksi"
category: "Server"
date: "2026-11-02"

---

# Cara Mengatasi PHP Extension Tidak Terdeteksi di cPanel + CloudLinux (Alt-PHP & CageFS)**

## Kasus: Saya punya 2 versi php di 1 cpanel yaitu 8.2 dan 8.5**

Kalian pernah mengalami error seperti `ext-mbstring is missing \ fileinfo is missing`, padahal extension PHP sudah tersedia di server?

Aku hari ini mengalami kejadian tersebut. Solusinya gampang yaitu cukup buka php selector lalu sesuaikan php ke versi yang dipakai lalu aktifkan ekstensinya.

Cara diatas bisa dilakukan hanya ketika 1 cpanel menggunakan 1 versi saja. Tapi bagaimana jika 1 cpanel menggunakan 2 versi ???

Jangan buru-buru reinstall PHP atau menyalahkan aplikasi. Bisa jadi masalahnya ada pada konfigurasi extension yang belum masuk ke direktori aktif.

Saya menemukan kasus ini pada server hosting dengan konfigurasi:
- Control Panel: cPanel
- OS Environment: CloudLinux
- PHP Handler: LSAPI
- PHP Version: Alt-PHP 8.5
- Isolation: CageFS

Berikut langkah troubleshooting yang bisa dicoba.

### 1. Rebuild konfigurasi Alt-PHP

Jalankan perintah berikut sebagai **ROOT**:

```bash
cagefsctl --rebuild-alt-php-ini
```

Kemudian periksa apakah extension `mbstring` sudah terbaca:

```bash
/opt/alt/php85/usr/bin/php -m | grep mbstring
```

Jika tidak ada output, lanjutkan ke langkah berikutnya.

### 2. Periksa lokasi konfigurasi PHP

Cek symlink konfigurasi:

```bash
ls -la /opt/alt/php85/link/conf
```

Pada kasus saya, hasilnya:

```text
/opt/alt/php85/link/conf -> /opt/alt/php85/etc/php.d
```

Artinya, direktori konfigurasi aktif mengarah ke:

```text
/opt/alt/php85/etc/php.d
```

### 3. Periksa file konfigurasi extension

Sekarang periksa apakah file `mbstring.ini` tersedia di direktori template:

```bash
ls /opt/alt/php85/etc/php.d.all/ | grep mbstring
```

Jika muncul:

```text
mbstring.ini
```

Tetapi extension masih belum terbaca, periksa apakah file tersebut belum tersedia di direktori aktif.

```bash
ls /opt/alt/php85/etc/php.d/ | grep mbstring
```

### 4. Salin konfigurasi extension

Jika file belum tersedia di direktori aktif, salin konfigurasi:

```bash
cp /opt/alt/php85/etc/php.d.all/mbstring.ini /opt/alt/php85/etc/php.d/
```

Lakukan pengecekan kembali:

```bash
/opt/alt/php85/usr/bin/php -m | grep mbstring
```

Jika berhasil, output akan menampilkan:

```text
mbstring
```

### 5. Periksa extension lainnya

Jangan hanya fokus pada `mbstring`. Periksa juga extension lain yang dibutuhkan aplikasi, misalnya `fileinfo`.

```bash
/opt/alt/php85/usr/bin/php -m | grep fileinfo
```

Jika belum terdeteksi, periksa file konfigurasinya:

```bash
ls /opt/alt/php85/etc/php.d.all/ | grep fileinfo
```

Jika tersedia dan belum ada di direktori aktif, salin:

```bash
cp /opt/alt/php85/etc/php.d.all/fileinfo.ini /opt/alt/php85/etc/php.d/
```

### 6. Terapkan perubahan CageFS

Setelah konfigurasi diperbaiki, jalankan:

```bash
cagefsctl --force-update
```

Kemudian restart proses PHP LSAPI:

```bash
pkill -9 lsphp
```

**Catatan:** Perintah tersebut menghentikan proses LSAPI yang sedang berjalan dan dapat memengaruhi request aktif. Gunakan dengan hati-hati pada production server.

### 7. Verifikasi hasil

Jalankan:

```bash
/opt/alt/php85/usr/bin/php -m | grep -E 'mbstring|fileinfo'
```

Pastikan kedua extension muncul.

Selanjutnya, lakukan pengujian kembali melalui website.

Perlu diingat, `php -m` hanya memeriksa PHP CLI. Pastikan juga website menggunakan versi PHP dan handler yang sama, lalu verifikasi melalui PHP yang benar-benar digunakan oleh website.

---

### Kesimpulan

Ada beberapa hal penting yang perlu diperhatikan ketika melakukan troubleshooting PHP extension:

1. Pastikan versi PHP yang digunakan website.
2. Periksa lokasi konfigurasi aktif melalui symlink.
3. Pastikan file `.ini` berada di direktori konfigurasi yang benar.
4. Terapkan perubahan CageFS.
5. Verifikasi extension pada CLI dan environment website.

Tutorial ini menggunakan contoh PHP 8.5. Jika menggunakan Alt-PHP versi lain, sesuaikan path `/opt/alt/php85/` dengan versi PHP yang digunakan.