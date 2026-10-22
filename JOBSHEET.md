# Jobsheet Praktik: Incremental Static Regeneration (ISR)

**Mata pelajaran:** Pengembangan Web dengan Next.js  
**Praktik:** Katalog produk dengan ISR dan on-demand revalidation  
**Perkiraan waktu:** 70–90 menit  
**Nama:** ____________________ **Kelas:** __________ **Kelompok:** __________

## Tujuan

Setelah praktik, kamu mampu:
1. Menjelaskan perbedaan SSG, ISR, dan SSR.
2. Mengamati cache dan waktu pembuatan halaman di server.
3. Menjelaskan fungsi `revalidate` dan `generateStaticParams`.
4. Mengubah data katalog dan mengamati proses revalidasi.
5. Memanggil endpoint on-demand revalidation dengan secret.
6. Mengidentifikasi masalah umum saat build dan revalidasi.

## A. Persiapan

### Langkah 1 — Periksa alat

Buka terminal dan jalankan:

```powershell
node -v
npm -v
git --version
```

Pastikan Node.js minimal 18.18; Node.js 20 LTS atau versi LTS yang kompatibel lebih disarankan. Jika perintah tidak dikenali, instal alat yang diperlukan lalu buka ulang terminal.

### Langkah 2 — Unduh repository

```powershell
git clone https://github.com/syauqiazka/ISR.git
cd ISR
```

### Langkah 3 — Pasang dependency dan siapkan environment

PowerShell:

```powershell
npm install
Copy-Item .env.local.example .env.local
```

macOS/Linux:

```bash
npm install
cp .env.local.example .env.local
```

File `.env.local` menyimpan secret lokal untuk endpoint revalidation. Jangan commit file ini atau menggunakan secret contoh pada deployment publik.

### Langkah 4 — Kenali file penting

| File | Fungsi |
|---|---|
| `data/products.json` | Data katalog yang akan diubah |
| `lib/products.js` | Membaca dan mencari produk dari file JSON |
| `components/BuildInfo.js` | Menampilkan waktu saat HTML dibuat di server |
| `app/produk/page.js` | Halaman daftar produk |
| `app/produk/[id]/page.js` | Halaman detail produk |
| `app/api/revalidate/route.js` | Endpoint untuk on-demand revalidation |
| `README.md` | Petunjuk setup singkat |

## B. Jalankan dan amati ISR

> Pengujian cache untuk praktik ini dilakukan dengan server production, bukan `npm run dev`.

### Langkah 5 — Build aplikasi

```powershell
npm run build
```

Tunggu sampai build selesai. Perhatikan tabel route di terminal. Halaman katalog dan detail menggunakan revalidation 10 detik. Bentuk tampilan tabel dapat sedikit berbeda antarversi Next.js.

Jika build gagal, baca error pertama yang muncul dan periksa nama file, import, serta sintaks sebelum melanjutkan.

### Langkah 6 — Jalankan server production

```powershell
npm start
```

Biarkan terminal ini tetap terbuka. Buka terminal kedua untuk perintah lain. Akses:

- Daftar produk: http://localhost:3000/produk
- Detail Keyboard Mekanik: http://localhost:3000/produk/1
- Detail Mouse Wireless: http://localhost:3000/produk/2

### Langkah 7 — Amati waktu pembuatan halaman

Di halaman produk, temukan kotak waktu **Katalog terakhir dibuat pada**. Refresh beberapa kali dalam rentang kurang dari 10 detik.

**Amati:** waktu biasanya tetap sama karena halaman cache masih segar. Waktu ini dibuat oleh server, bukan jam yang terus berjalan di browser.

### Langkah 8 — Ubah data produk

Tanpa menghentikan server, buka `data/products.json`. Ubah harga Mouse Wireless dari:

```json
{ "id": 2, "nama": "Mouse Wireless", "harga": 175000, "stok": 30 }
```

menjadi:

```json
{ "id": 2, "nama": "Mouse Wireless", "harga": 199000, "stok": 30 }
```

Simpan file. Jangan mengubah struktur JSON atau menghapus koma yang diperlukan.

### Langkah 9 — Amati revalidasi berbasis waktu

1. Buka atau refresh `/produk` sebelum 10 detik berlalu. Data yang lama mungkin masih tampil.
2. Tunggu lebih dari 10 detik.
3. Refresh sekali. Dalam pola stale-while-revalidate, permintaan pertama setelah cache kedaluwarsa dapat menerima halaman lama sementara server membuat ulang halaman.
4. Refresh lagi setelah respons pertama selesai.

**Hasil yang diharapkan:** harga Mouse Wireless akhirnya berubah menjadi Rp199.000 tanpa build ulang atau restart server. Waktu pembuatan katalog juga berubah setelah versi baru tersedia.

Catat pengamatanmu:

| Pengamatan | Hasil |
|---|---|
| Harga sebelum perubahan | |
| Harga tepat setelah file disimpan | |
| Harga setelah revalidasi selesai | |
| Apakah build ulang diperlukan untuk perubahan data ini? | |

### Langkah 10 — Periksa halaman detail

Buka `http://localhost:3000/produk/2`. Bandingkan harga dan waktu pembuatan halaman detail dengan daftar produk. Setiap path memiliki cache sendiri, sehingga pembaruannya tidak harus terjadi pada permintaan yang sama.

Coba juga `http://localhost:3000/produk/999`. Produk yang tidak ada seharusnya menampilkan halaman 404.

## C. On-demand revalidation

Endpoint menggunakan nilai `REVALIDATE_SECRET` dari `.env.local`. Pada salinan contoh, nilainya adalah `rahasia123`.

### Langkah 11 — Panggil endpoint dengan secret benar

Pastikan server tetap berjalan. Dari terminal PowerShell kedua, jalankan:

```powershell
Invoke-RestMethod "http://localhost:3000/api/revalidate?secret=rahasia123&path=%2Fproduk"
```

**Hasil yang diharapkan:** respons JSON berisi `revalidated: true` dan path `/produk`. Ini menandai path untuk dibuat ulang ketika diminta berikutnya.

Buka `/produk` kembali dan amati data serta waktu pembuatan halaman.

### Langkah 12 — Uji secret yang salah

```powershell
try {
  Invoke-RestMethod "http://localhost:3000/api/revalidate?secret=salah&path=%2Fproduk"
} catch {
  $_.Exception.Response.StatusCode
}
```

**Hasil yang diharapkan:** status HTTP 401. Endpoint tidak boleh melakukan revalidasi jika secret tidak cocok.

### Langkah 13 — Uji path yang tidak diizinkan

```powershell
try {
  Invoke-RestMethod "http://localhost:3000/api/revalidate?secret=rahasia123&path=%2F"
} catch {
  $_.Exception.Response.StatusCode
}
```

**Hasil yang diharapkan:** status HTTP 400 karena endpoint latihan ini hanya mengizinkan path katalog yang dimulai dengan `/produk`.

> Pada aplikasi nyata, secret contoh harus diganti, URL yang mengandung secret tidak boleh dibagikan, dan akses endpoint perlu dipertimbangkan dengan cermat karena query URL dapat tersimpan di log.

## D. Pahami kode

### Langkah 14 — Temukan pengaturan revalidation

Buka `app/produk/page.js` dan `app/produk/[id]/page.js`. Temukan:

```js
export const revalidate = 10;
```

Ubah sementara nilainya menjadi 30, simpan, hentikan server dengan **Ctrl+C**, lalu jalankan:

```powershell
npm run build
npm start
```

Amati kembali cache. Setelah selesai, kembalikan nilainya ke 10 dan build ulang.

**Catatan:** perubahan kode memerlukan build ulang untuk praktik ini; perubahan data JSON dapat diamati saat halaman direvalidasi karena data dibaca ketika halaman dibuat ulang.

### Langkah 15 — Pahami `generateStaticParams`

Buka `app/produk/[id]/page.js`. Perhatikan fungsi:

```js
export function generateStaticParams() {
  return getProducts().map((product) => ({
    id: String(product.id),
  }));
}
```

Fungsi tersebut menyediakan daftar ID yang dapat dibuat saat build. `params` pada halaman detail merupakan Promise di Next.js 15, sehingga dibaca dengan `await params`.

### Langkah 16 — Bedakan SSG, ISR, dan SSR

| Metode | Kapan halaman dibuat | Cocok untuk |
|---|---|---|
| SSG | Saat build | Konten yang jarang berubah |
| ISR | Saat build atau dibuat ulang setelah revalidasi | Katalog atau artikel yang berubah berkala |
| SSR | Saat permintaan datang | Konten yang harus dihitung per permintaan |

ISR bukan jaminan data selalu terbaru pada setiap permintaan. Pertimbangkan SSR atau sumber data real-time jika data harus selalu akurat, misalnya harga transaksi yang sensitif.

## E. Tugas pengembangan

Kerjakan minimal dua tugas berikut.

### Tugas 1 — Label stok

Di kartu produk, tampilkan:
- Stok 0: **Habis**
- Stok 1–9: **Menipis**
- Stok 10 atau lebih: **Tersedia**

Ubah nilai stok di `data/products.json` dan buktikan bahwa label berubah setelah revalidasi.

### Tugas 2 — Ubah interval

Ubah interval revalidasi katalog menjadi 30 detik. Catat perubahan perilaku cache. Kembalikan ke 10 detik setelah pengujian.

### Tugas 3 — Bandingkan dengan SSR

Buat route latihan terpisah `app/produk-ssr/page.js` yang menampilkan katalog melalui Server Component dengan `export const dynamic = "force-dynamic";`. Jangan mengubah route `/produk`.

Bandingkan waktu pembuatan dan perilaku setelah refresh pada `/produk` dan `/produk-ssr`.

### Tugas 4 — Revalidasi satu detail

Gunakan endpoint dengan `path=/produk/3`. Pastikan URL dikodekan dengan benar. Amati detail produk 3 setelah revalidasi, lalu jelaskan perbedaan cache path detail dengan cache daftar.

## F. Pertanyaan pemahaman

Jawab dengan kalimatmu sendiri.

1. Apa perbedaan SSG, ISR, dan SSR?
2. Mengapa permintaan pertama setelah cache kedaluwarsa masih dapat menampilkan data lama?
3. Apa arti waktu di komponen `BuildInfo`?
4. Mengapa perubahan kode memerlukan build ulang, sedangkan perubahan file data dapat diamati saat revalidasi pada praktik ini?
5. Apa fungsi `generateStaticParams`?
6. Mengapa `/produk/999` menampilkan 404?
7. Apa perbedaan revalidasi berbasis waktu dan on-demand revalidation?
8. Mengapa endpoint revalidation perlu dilindungi secret?
9. Kapan ISR bukan pilihan yang tepat?
10. Sebutkan satu masalah yang kamu temui dan cara memperbaikinya.

## G. Checklist sebelum dikumpulkan

- [ ] `npm install` berhasil.
- [ ] `npm run build` berhasil.
- [ ] `npm start` dapat dijalankan.
- [ ] Daftar dan detail produk dapat dibuka.
- [ ] Perubahan data akhirnya muncul setelah revalidasi.
- [ ] Secret salah menghasilkan status 401.
- [ ] Path yang tidak diizinkan menghasilkan status 400.
- [ ] Minimal dua tugas pengembangan selesai.
- [ ] Pertanyaan pemahaman dijawab.
- [ ] Tidak ada file `.env.local` atau secret pribadi yang dikumpulkan ke repository.

## H. Referensi

- [Next.js 15 — Incremental Static Regeneration](https://nextjs.org/docs/15/app/guides/incremental-static-regeneration)
- [Next.js — revalidatePath](https://nextjs.org/docs/app/api-reference/functions/revalidatePath)
- [Next.js — generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)
