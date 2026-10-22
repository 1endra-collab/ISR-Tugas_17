# Lembar Evaluasi Praktik ISR

**Nama:** ____________________  
**Kelas / Kelompok:** ____________________  
**Tanggal:** ____________________

Kerjakan setelah menyelesaikan langkah praktik pada `JOBSHEET.md`.

## A. Bukti praktik

Isi tabel berdasarkan hasil yang benar-benar kamu amati.

| No. | Pemeriksaan | Hasil / bukti |
|---|---|---|
| 1 | Build production | |
| 2 | Waktu katalog saat refresh cepat | |
| 3 | Perubahan harga setelah revalidasi | |
| 4 | Status saat secret salah | |
| 5 | Status saat path tidak diizinkan | |
| 6 | Hasil membuka ID produk yang tidak ada | |

## B. Tugas pengembangan

Kerjakan **minimal dua** tugas dan sertakan penjelasan singkat atau screenshot hasilnya.

### Tugas 1 — Label stok

Tampilkan label stok di katalog:
- Stok 0: **Habis**
- Stok 1–9: **Menipis**
- Stok 10 atau lebih: **Tersedia**

Buktikan perubahan label setelah mengubah data dan menunggu revalidasi.

**Penjelasan / bukti:**

____________________________________________________________

### Tugas 2 — Interval revalidasi

Ubah interval katalog dari 10 menjadi 30 detik. Catat apa yang berubah pada hasil pengamatan, lalu kembalikan ke 10 detik.

**Penjelasan / bukti:**

____________________________________________________________

### Tugas 3 — Bandingkan ISR dengan SSR

Buat route terpisah `/produk-ssr` menggunakan `export const dynamic = "force-dynamic";`. Jangan mengubah route katalog ISR yang sudah ada.

| Pengamatan | `/produk` (ISR) | `/produk-ssr` (SSR) |
|---|---|---|
| Kapan halaman dibuat | | |
| Waktu setelah refresh | | |
| Perilaku cache | | |

### Tugas 4 — On-demand revalidation

Panggil endpoint untuk `/produk/3`, lalu jelaskan bagaimana kamu mengetahui bahwa path tersebut direvalidasi.

**Penjelasan / bukti:**

____________________________________________________________

## C. Analisis masalah

Tuliskan penyebab dan cara memperbaiki setiap kasus.

| No. | Gejala | Penyebab | Perbaikan |
|---|---|---|---|
| 1 | Build gagal setelah mengubah kode | | |
| 2 | Data JSON berubah tetapi halaman masih lama | | |
| 3 | Endpoint membalas 401 | | |
| 4 | Endpoint membalas 400 | | |
| 5 | Halaman detail tidak ditemukan | | |
| 6 | Waktu berubah pada setiap permintaan | | |

## D. Pertanyaan pemahaman

Jawab dengan bahasamu sendiri.

1. Jelaskan perbedaan SSG, ISR, dan SSR.
2. Mengapa ISR dapat menyajikan halaman lama pada permintaan pertama setelah cache kedaluwarsa?
3. Apa yang ditunjukkan oleh komponen `BuildInfo`?
4. Apa fungsi `generateStaticParams`?
5. Apa perbedaan revalidasi berbasis waktu dengan on-demand revalidation?
6. Mengapa endpoint revalidation perlu memvalidasi secret?
7. Berikan contoh jenis halaman yang cocok untuk ISR dan contoh yang lebih cocok untuk SSR.

## E. Refleksi

1. Hal baru apa yang kamu pahami tentang ISR?
2. Langkah mana yang paling sulit, dan bagaimana kamu menyelesaikannya?
3. Jika membuat aplikasi sendiri, kapan kamu akan memilih ISR?

____________________________________________________________

____________________________________________________________

## F. Rubrik penilaian (saran)

| Komponen | Bobot |
|---|---:|
| Bukti praktik dan ketepatan pengamatan | 25% |
| Minimal dua tugas pengembangan | 30% |
| Analisis masalah | 20% |
| Pertanyaan pemahaman | 20% |
| Refleksi dan kerapian pengumpulan | 5% |
| **Total** | **100%** |
