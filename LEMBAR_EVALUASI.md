# LEMBAR EVALUASI — ISR (dikerjakan SETELAH jobsheet selesai)

| | |
|---|---|
| **Nama Peserta** | ........................................ |
| **Kelompok / Kelas** | ........................................ |

---

## A. Tugas Pengembangan (kerjakan minimal 2)

**Tugas 1 — Badge stok** ⭐
Di `app/produk/page.js`, tampilkan label di samping stok: stok `0` → "Habis", kurang dari 10 → "Menipis", selain itu "Tersedia". Ubah stok di `products.json` dan buktikan perubahan muncul lewat ISR.

<details>
<summary>💡 Petunjuk</summary>

```js
function labelStok(stok) {
  if (stok === 0) return "Habis";
  if (stok < 10) return "Menipis";
  return "Tersedia";
}
```
Pakai di JSX: `<small>Stok: {p.stok} ({labelStok(p.stok)})</small>`
</details>

**Tugas 2 — Bandingkan dengan SSR** ⭐⭐
Buat folder `app/produk-ssr/`, salin isi `app/produk/page.js` ke `page.js` di dalamnya, lalu ganti baris revalidate dengan `export const dynamic = "force-dynamic";`. Build ulang. Isi tabel:

| | `/produk` (ISR) | `/produk-ssr` (SSR) |
|---|---|---|
| Simbol di output build | | |
| Jam saat di-refresh berkali-kali | | |
| Kapan data baru muncul | | |

**Tugas 3 — Perbarui satu produk saja** ⭐⭐
Gunakan `/api/revalidate?secret=rahasia123&path=/produk/3` untuk memperbarui hanya halaman produk 3. Buktikan `/produk/3` berubah sementara `/produk/1` tetap lama.

**Tugas 4 — Tantangan (butuh internet)** ⭐⭐⭐
Buat `app/artikel/page.js` yang memakai:
```js
const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
  next: { revalidate: 30 },
});
const posts = await res.json();
```
Tampilkan 5 judul artikel dan `<BuildInfo />`. Jelaskan beda `revalidate` pada `fetch` dengan `export const revalidate`.

---

## B. Analisis Masalah

Tuliskan **penyebab** dan **perbaikan**.

| No | Gejala | Penyebab | Perbaikan |
|---|---|---|---|
| 1 | Temanmu memakai `npm run dev`, jam berubah **setiap refresh** padahal `revalidate = 3600`. | | |
| 2 | Data di `products.json` sudah diubah, tetapi halaman tetap lama walau sudah lewat 10 detik. (Minimal 2 kemungkinan) | | |
| 3 | Build gagal pada `export const revalidate = "10";`. | | |
| 4 | Error *"params should be awaited before using its properties"*. | | |
| 5 | Alamat revalidate selalu membalas "Secret salah" padahal yakin benar. | | |
| 6 | Produk 5 ada di JSON tetapi `/produk/5` masih 404. (Minimal 2 kemungkinan) | | |

---

## C. Pertanyaan Pemahaman

Jawab dengan kalimatmu sendiri.

1. Pada Langkah 17, mengapa jam belum berubah padahal sudah lewat 10 detik? Apa untungnya dibanding membuat pengunjung menunggu halaman baru?
2. Apa arti jam di kotak kuning? Dihasilkan oleh browser atau server? Kapan?
3. Jika `revalidate = 10` dan tidak ada yang membuka halaman selama 1 jam, apakah server tetap membuat ulang halaman tiap 10 detik?
4. Apa beda ISR berbasis waktu dengan on-demand revalidation? Beri satu contoh nyata untuk masing-masing.
5. Mengapa ISR tidak bisa diamati dengan `npm run dev`?
6. Tentukan SSR / SSG / ISR beserta alasannya: (a) saldo rekening bank pengguna, (b) halaman "Tentang Kami", (c) daftar berita yang diperbarui tiap beberapa jam.
7. Apa risiko memakai ISR untuk data yang harus selalu akurat (misal stok flash sale)? Apa alternatifnya?
8. Pada Langkah 29, halaman 404 pun "tersimpan" beberapa saat. Menurutmu mengapa?

---

## D. Refleksi

Tulis 3–5 kalimat dengan bahasamu sendiri:
1. Apa yang kamu pahami tentang ISR setelah praktik?
2. Bagian mana yang paling membingungkan, dan bagaimana kamu mengatasinya?
3. Kapan kamu akan memilih ISR di proyekmu sendiri?

........................................
........................................
