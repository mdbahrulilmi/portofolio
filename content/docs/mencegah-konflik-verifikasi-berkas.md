---
title: "Implementasi Concurrent Verification Lock pada Laravel untuk Mencegah Konflik Verifikasi Data"
category: "Laravel"
date: "2026-11-04"
---

# Implementasi Concurrent Verification Lock pada Laravel untuk Mencegah Konflik Verifikasi Data

Dalam pengembangan sistem SPMB (Seleksi Penerimaan Murid Baru), terdapat tantangan yang perlu diperhatikan ketika aplikasi digunakan oleh banyak operator secara bersamaan.

Salah satu permasalahan yang dapat terjadi adalah dua operator membuka dan memverifikasi data pendaftaran yang sama dalam waktu bersamaan. Kondisi ini berpotensi menyebabkan konflik proses, perubahan data yang tidak diinginkan, hingga inkonsistensi status verifikasi.

Untuk mengatasi permasalahan tersebut, saya mengimplementasikan mekanisme **Concurrent Verification Lock** pada aplikasi berbasis Laravel.

Pada artikel ini, kita akan membahas konsep, mekanisme kerja, dan beberapa pendekatan teknis yang digunakan dalam implementasinya.

## 1. Apa Itu Concurrent Verification Lock?

Concurrent Verification Lock merupakan mekanisme penguncian sementara pada suatu data agar hanya satu pengguna yang dapat melakukan proses tertentu dalam satu waktu.

Dalam konteks sistem SPMB, setiap data pendaftaran hanya dapat ditinjau oleh satu operator selama proses verifikasi berlangsung.

Ketika seorang operator membuka halaman detail pendaftaran, sistem akan mengambil lock untuk data tersebut. Operator lain tetap dapat melihat data pada halaman daftar, tetapi tidak dapat membuka halaman detail selama lock masih aktif.

Dengan mekanisme ini, proses verifikasi dapat berjalan lebih terkontrol tanpa menghalangi operator lain mengakses data pendaftaran yang berbeda.

## 2. Mengapa Mekanisme Lock Diperlukan?

Pada aplikasi multi-user, beberapa pengguna dapat mengakses record database yang sama secara bersamaan.

Sebagai contoh:

- Operator A membuka detail pendaftaran seorang murid.
- Operator B juga mencoba membuka detail pendaftaran yang sama.
- Operator A menyetujui dokumen.
- Operator B melakukan penolakan terhadap dokumen yang sama.

Tanpa mekanisme penguncian, kedua operator berpotensi melakukan tindakan yang saling bertentangan.

Permasalahan seperti ini bukan hanya berkaitan dengan tampilan antarmuka, tetapi juga menyangkut konsistensi data pada database.

Karena itu, diperlukan validasi di sisi server untuk memastikan hanya pemilik lock yang dapat melakukan perubahan terhadap data pendaftaran tersebut.

## 3. Menambahkan Kolom Lock pada Database

Langkah pertama adalah menambahkan beberapa kolom pada tabel `student_registrations`.

Kolom yang digunakan meliputi:

- `verification_locked_by`: menyimpan ID operator yang sedang memegang lock.
- `verification_locked_at`: menyimpan waktu pertama kali lock dibuat.
- `verification_lock_expires_at`: menyimpan waktu kedaluwarsa lock.

Contoh migration:

```php
Schema::table('student_registrations', function (Blueprint $table) {
    $table->foreignId('verification_locked_by')
        ->nullable()
        ->constrained('users')
        ->nullOnDelete();

    $table->timestamp('verification_locked_at')->nullable();
    $table->timestamp('verification_lock_expires_at')->nullable();

    $table->index(
        ['verification_locked_by', 'verification_lock_expires_at'],
        'reg_verification_lock_idx'
    );
});
```

Dengan struktur tersebut, sistem dapat mengetahui siapa operator yang sedang memegang lock dan kapan masa berlaku lock berakhir.

## 4. Mengatur Durasi Lock

Dalam implementasi ini, setiap lock memiliki masa berlaku selama 5 menit atau 300 detik.

Mengapa perlu menggunakan batas waktu?

Karena operator mungkin saja menutup browser, kehilangan koneksi internet, atau meninggalkan halaman tanpa menjalankan proses pelepasan lock.

Tanpa batas waktu, data pendaftaran berpotensi terkunci terus-menerus meskipun operator sudah tidak melakukan verifikasi.

Dengan adanya expiration time, lock yang tidak diperpanjang akan otomatis dianggap tidak aktif ketika waktu kedaluwarsanya terlewati.

## 5. Menggunakan Database Transaction dan lockForUpdate()

Salah satu bagian penting dalam implementasi ini adalah mencegah dua request mengambil lock pada data yang sama secara bersamaan.

Laravel menyediakan metode `lockForUpdate()` untuk melakukan penguncian baris database selama transaksi berlangsung.

Contoh implementasi:

```php
DB::transaction(function () use ($registrationId, $userId) {
    $registration = StudentRegistration::whereKey($registrationId)
        ->lockForUpdate()
        ->first();

    if (!$registration) {
        return false;
    }

    $now = now();

    $lockedByOther = $registration->verification_locked_by
        && (int) $registration->verification_locked_by !== $userId
        && $registration->verification_lock_expires_at
        && $registration->verification_lock_expires_at->isFuture();

    if ($lockedByOther) {
        return false;
    }

    $registration->update([
        'verification_locked_by' => $userId,
        'verification_locked_at' => $now,
        'verification_lock_expires_at' => $now->copy()->addMinutes(5),
    ]);

    return true;
});
```

Dengan pendekatan ini, request lain yang mencoba mengambil lock pada record yang sama harus menunggu transaksi sebelumnya selesai.

Hal tersebut membantu mencegah dua operator memperoleh lock secara bersamaan.

## 6. Automatic Lock Renewal

Lock selama 5 menit dapat menjadi masalah apabila operator membutuhkan waktu lebih lama untuk memeriksa seluruh dokumen pendaftaran.

Untuk mengatasi hal tersebut, saya menambahkan mekanisme automatic lock renewal.

Browser mengirimkan request ke backend setiap 60 detik selama halaman verifikasi masih terbuka.

Contoh implementasi JavaScript:

```javascript
let lockActive = true;

async function renewLock() {
    if (!lockActive) return;

    try {
        const response = await fetch(renewUrl, {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': csrf,
                'Accept': 'application/json'
            },
            credentials: 'same-origin'
        });

        if (!response.ok) {
            lockActive = false;
            clearInterval(renewInterval);
        }
    } catch (error) {
        console.error('Renew lock gagal:', error);
    }
}

const renewInterval = setInterval(renewLock, 60000);
```

Pada sisi backend, proses renewal hanya memperbarui `verification_lock_expires_at` menjadi 5 menit dari waktu request diterima.

Waktu awal penguncian pada `verification_locked_at` tetap dipertahankan.

Dengan mekanisme ini, operator dapat melakukan pemeriksaan dokumen dalam waktu yang lebih lama tanpa kehilangan lock selama proses renewal masih berjalan.

## 7. Automatic Lock Release

Selain mekanisme renewal, sistem juga perlu melepaskan lock ketika operator meninggalkan halaman verifikasi.

Untuk kebutuhan tersebut, saya menggunakan JavaScript `navigator.sendBeacon()`.

Contoh implementasi:

```javascript
window.addEventListener('pagehide', function () {
    if (!lockActive) return;

    const data = new FormData();
    data.append('_token', csrf);

    navigator.sendBeacon(releaseUrl, data);

    lockActive = false;
});
```

`sendBeacon()` memungkinkan browser mengirimkan request ketika halaman sedang ditinggalkan.

Namun, mekanisme ini tidak menjamin request selalu berhasil. Karena itu, expiration time tetap diperlukan sebagai mekanisme pengaman apabila proses release gagal.

## 8. Validasi Kepemilikan Lock di Backend

Penguncian pada tampilan antarmuka saja tidak cukup.

Meskipun tombol persetujuan dan penolakan disembunyikan atau dinonaktifkan, pengguna tetap berpotensi mengirimkan request secara langsung ke endpoint backend.

Karena itu, setiap proses perubahan status dokumen harus memeriksa kepemilikan lock di sisi server.

Validasi perlu memastikan:

1. Data pendaftaran masih tersedia.
2. Lock masih aktif.
3. ID operator yang sedang login sesuai dengan pemilik lock.
4. Masa berlaku lock belum berakhir.

Validasi tersebut harus dilakukan dalam transaksi yang sama dengan proses perubahan data agar tidak terjadi race condition antara pemeriksaan kepemilikan dan eksekusi perubahan.

Dengan demikian, operator yang tidak memiliki lock tidak dapat melakukan persetujuan maupun penolakan dokumen.

## 9. Kesimpulan

Implementasi Concurrent Verification Lock merupakan salah satu pendekatan untuk meningkatkan konsistensi data pada aplikasi multi-user.

Dengan menggabungkan database transaction, row-level locking, expiration time, automatic renewal, dan validasi kepemilikan di sisi server, proses verifikasi dapat berjalan lebih terkontrol.

Pengembangan aplikasi bukan hanya tentang memastikan setiap fitur berjalan sesuai fungsinya, tetapi juga memastikan sistem tetap aman ketika digunakan oleh banyak pengguna secara bersamaan.

Melalui implementasi ini, saya belajar bahwa pengelolaan concurrency merupakan salah satu aspek penting dalam membangun aplikasi backend yang andal, khususnya pada sistem yang melibatkan banyak operator dan proses perubahan data secara bersamaan.