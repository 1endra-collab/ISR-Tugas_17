# 📘 JOBSHEET PRAKTIK
# Incremental Static Regeneration (ISR) pada Next.js

**Cara memakai:** ikuti langkahnya berurutan dari Langkah 1, jangan loncat. Sebagian besar kode kamu ketik sendiri dengan penjelasan dan petunjuk, bukan sekadar disalin.

> **Catatan pengujian:** hasil build dapat sedikit berbeda sesuai versi Node.js dan Next.js. Jobsheet ini menggunakan Next.js 15 dan perlu diuji dengan `npm run build` serta `npm start`; jangan menganggap hasil sudah diuji pada semua komputer.

## A. Identitas

| Keterangan | Isi |
|---|---|
| Judul Praktik | Membuat Katalog Produk dengan ISR |
| Topik Rendering | Incremental Static Regeneration (ISR) |
| Kelompok Pembuat | Kelompok 4 |
| Alokasi Waktu | ±70 menit, termasuk tugas pengembangan |
| Nama Peserta / Kelas | ........................................ |

## B. Tujuan Praktik

Setelah menyelesaikan praktik, peserta mampu:

- Membedakan SSG, ISR, dan SSR dari hasil yang diamati sendiri.
- Mengimplementasikan ISR berbasis waktu dengan `revalidate`.
- Membuat halaman dinamis `[id]` dengan `generateStaticParams`.
- Memperbarui halaman secara manual dengan `revalidatePath` (on-demand revalidation).
- Membaca pesan error dan memperbaiki masalah umum pada ISR.
- Menjelaskan kapan ISR sebaiknya dipakai.

## C. Prasyarat

| Alat | Fungsi | Unduh |
|---|---|---|
| Node.js versi 18.18+ (pilih LTS yang kompatibel) | Menjalankan Next.js | [nodejs.org](https://nodejs.org) |
| Git | Mengunduh proyek dari GitHub | [git-scm.com](https://git-scm.com) |
| VS Code | Menulis kode | [code.visualstudio.com](https://code.visualstudio.com) |

Sudah mengikuti presentasi dan demo ISR. Tidak perlu jago Next.js: setiap kode dijelaskan.

## D. Skenario / Kasus 🍞

Kamu membuat katalog produk toko online. Halamannya dilihat banyak orang, tetapi harga dan stok hanya berubah beberapa kali sehari.

| Cara | Analogi toko roti | Masalah |
|---|---|---|
| SSR | Roti dibuat setiap ada yang pesan | Dapur bekerja setiap kali ada permintaan; pengunjung bisa menunggu |
| SSG | Roti dibuat sekali di pagi hari | Harga berubah pun, daftar lama tetap dipajang sampai dibuat ulang |
| ISR | Roti dibuat di pagi hari. Setelah kedaluwarsa, dapur membuat yang baru saat ada pembeli datang | Permintaan pertama setelah kedaluwarsa bisa menerima versi lama sementara versi baru dibuat |

ISR dapat secepat SSG untuk halaman yang sudah di-cache, tetapi dapat memperbarui halaman tanpa build ulang. Di praktik ini kamu akan membangun katalog produk dan mengamati cara kerjanya.

### Istilah yang akan kamu temui

| Istilah | Artinya |
|---|---|
| Build | “Memasak” proyek menjadi versi siap pakai (`npm run build`) |
| Production | Mode siap pakai yang dijalankan dengan `npm start` |
| Statis | Halaman HTML sudah dibuat dan dapat disajikan dari cache |
| Revalidate | Menandai atau membuat ulang halaman/cache setelah aturan revalidasi terpenuhi |
| Stale | Data atau halaman lama yang sudah melewati interval revalidasi |
| Cache | Salinan halaman/data yang disimpan agar respons lebih cepat |
| Terminal | Jendela tempat mengetik perintah |

### ⚠️ Dua aturan penting

1. **ISR diamati dengan mode production.** Gunakan `npm run build` lalu `npm start`, bukan `npm run dev`. Alasannya akan kamu amati di Langkah 45.
2. Setelah mengubah **kode JavaScript**: tekan Ctrl+C, jalankan `npm run build`, lalu `npm start`. Mengubah `products.json` tidak memerlukan build ulang untuk praktik ini, karena file dibaca kembali saat halaman dibuat ulang.

### Tanda yang dipakai

| Tanda | Artinya |
|---|---|
| 🖥️ | Ketik perintah di terminal |
| ✍️ | Kamu menulis atau mengubah kode sendiri |
| 👀 | Buka browser dan amati |
| ✅ | Hasil yang diharapkan |
| ⚠️ | Hati-hati, sering salah di sini |
| 💡 | Petunjuk tersedia di Lampiran |
| 💭 | Berhenti sebentar dan pikirkan; jawab di bagian I |

## E. Langkah Praktik

# TAHAP 1 — PERSIAPAN

### Langkah 1 — Cek alat

🖥️ Buka terminal (Windows: Command Prompt atau terminal VS Code; macOS/Linux: Terminal):

```bash
node -v
git --version
```

✅ Muncul nomor versi, misalnya `v22.11.0`. Node.js minimal 18.18.

⚠️ Kalau “not recognized” atau “command not found”, pasang alatnya lalu tutup dan buka lagi terminal.

### Langkah 2 — Unduh proyek

🖥️

```bash
git clone https://github.com/syauqiazka/ISR.git
cd ISR
```

### Langkah 3 — Buka di VS Code

🖥️ Ketik `code .` (pakai titik), atau pilih **File → Open Folder** di VS Code lalu buka folder `ISR`. Terminal bawaan VS Code dapat dibuka lewat **Terminal → New Terminal**.

### Langkah 4 — Pasang kebutuhan proyek

🖥️

```bash
npm install
```

✅ Tunggu sampai selesai. Perlu koneksi internet. Pesan `warn` tidak selalu berarti instalasi gagal; pastikan perintah selesai tanpa error fatal.

### Langkah 5 — Buat file pengaturan rahasia

🖥️ Windows Command Prompt:

```bat
copy .env.local.example .env.local
```

Windows PowerShell:

```powershell
Copy-Item .env.local.example .env.local
```

macOS/Linux:

```bash
cp .env.local.example .env.local
```

File contoh berisi `REVALIDATE_SECRET=rahasia123`. Nilai ini hanya untuk latihan lokal. Jangan gunakan secret contoh di situs publik dan jangan unggah `.env.local` ke GitHub.

### Langkah 6 — Kenali isi proyek

| File | Fungsinya |
|---|---|
| `data/products.json` | Gudang data: daftar produk. Kamu mengubahnya seolah-olah admin toko mengganti harga atau stok |
| `lib/products.js` | Petugas gudang: fungsi `getProducts` dan `getProductById` |
| `components/BuildInfo.js` | Kotak waktu saat halaman dibuat di server |
| `app/produk/page.js` | Halaman daftar produk (`/produk`) |
| `app/produk/[id]/page.js` | Halaman detail produk (`/produk/1`, dan seterusnya) |
| `app/api/revalidate/route.js` | Endpoint “perbarui sekarang” yang akan kamu lengkapi pada Tahap 6 |

### 🔑 Cara membaca kotak waktu

Jam di kotak waktu adalah saat halaman dirender di server, bukan jam berjalan di browser. Jam sama saat refresh berarti HTML/cache lama masih digunakan. Jam berubah berarti halaman baru sudah dibuat. Format waktu lokal Indonesia dapat memakai titik, misalnya `11.06.45` berarti 11:06:45.

### Cara membaca hasil `npm run build`

Pada kondisi awal, hasil yang diharapkan kurang lebih:

```text
Route (app)                    Revalidate
┌ ○ /
├ ○ /_not-found
├ ƒ /api/revalidate
├ ○ /produk
└ ƒ /produk/[id]
```

Simbol dan detail output dapat berbeda sedikit sesuai versi Next.js.

| Simbol | Artinya |
|---|---|
| `○` | Route statis yang dibuat saat build. Jika ada nilai Revalidate, route memakai ISR |
| `●` | Route dinamis yang diprerender melalui `generateStaticParams` |
| `ƒ` | Route dinamis yang dirender saat permintaan datang |

# TAHAP 2 — LIHAT MASALAH SSG DULU

Saat ini `/produk` belum diberi pengaturan revalidasi, jadi ia halaman statis biasa.

### Langkah 7 — Jalankan mode production

🖥️

```bash
npm run build
npm start
```

✅ Terminal menampilkan pesan siap berjalan dan alamat `http://localhost:3000`. Biarkan terminal ini terbuka.

⚠️ Jangan ketik perintah lain di terminal server. Untuk perintah lain, buka terminal kedua. Untuk menghentikan server, tekan Ctrl+C.

Lihat tabel build: `/produk` seharusnya bersimbol `○` tanpa angka Revalidate.

### Langkah 8 — Buka halaman produk

👀 Buka http://localhost:3000/produk.

✅ Muncul empat produk dan kotak waktu.

### Langkah 9 — Refresh beberapa kali

👀 Tekan F5 tiga kali.

✅ Waktu di kotak tetap sama.

### Langkah 10 — Ubah data di “gudang”

✍️ Tanpa mematikan server, buka `data/products.json`. Ubah harga Keyboard Mekanik dari `450000` menjadi `500000`. Simpan dengan Ctrl+S.

### Langkah 11 — Refresh lagi

👀 Refresh `/produk`.

✅ Harga masih Rp450.000 dan waktu tetap sama. Inilah masalah SSG: data sumber sudah berubah, tetapi pengunjung masih menerima halaman yang dibuat saat build.

💭 Pertanyaan 10: halaman ini dibuat di mana dan kapan?

### Langkah 12 — Matikan server

🖥️ Klik terminal server dan tekan Ctrl+C.

# TAHAP 3 — AKTIFKAN ISR

### Langkah 13 — Tulis satu baris ISR

✍️ Buka `app/produk/page.js`. Cari komentar:

```js
// TODO (Tahap 3, Langkah 13): tambahkan export const revalidate = ... di sini.
```

Ganti komentar tersebut dengan satu baris yang kamu ketik sendiri: `export const revalidate` dengan nilai 10.

💡 Petunjuk 1 tersedia di Lampiran. Coba sendiri dahulu, lalu simpan file.

### Langkah 14 — Build ulang dan jalankan

🖥️ Karena kode berubah:

```bash
npm run build
npm start
```

### Langkah 15 — Lihat tabel build

✅ Baris `/produk` kini menampilkan `10s` di kolom Revalidate. Simbol tetap `○): ISR adalah halaman statis yang dapat direvalidasi.

### Langkah 16 — Buka halaman

👀 Buka http://localhost:3000/produk. Perhatikan waktu di kotak sebagai waktu awal.

⚠️ Waktu bisa terlihat “sudah lama”; hitungan revalidasi dapat dimulai dari halaman yang dibuat saat build.

### Langkah 17 — Tunggu, lalu refresh

👀 Tunggu 15 detik penuh, lalu refresh sekali.

✅ Permintaan pertama setelah cache kedaluwarsa dapat menampilkan halaman lama. 💭 Pertanyaan 1.

### Langkah 18 — Refresh sekali lagi

👀 Refresh segera sekali lagi setelah permintaan pertama selesai.

✅ Halaman baru seharusnya mulai terlihat, dan waktu pembuatan berubah. 💭 Pertanyaan 2.

### Langkah 19 — Refresh cepat berkali-kali

👀 Refresh tiga kali dalam waktu kurang dari 10 detik.

✅ Waktu tidak berubah lagi selama cache masih segar.

Alur ISR (stale-while-revalidate) yang diamati:

```text
Interval revalidasi lewat
   ↓
Ada pengunjung datang
   ↓
Server dapat memberikan halaman lama dengan cepat
   ↓
Server membuat ulang halaman di belakang layar
   ↓
Permintaan berikutnya menerima halaman baru
```

# TAHAP 4 — UBAH DATA, HALAMAN MEMPERBARUI DIRI

Server masih berjalan dengan `revalidate = 10`.

### Langkah 20 — Ubah dua data

✍️ Di `data/products.json`:
- Ubah harga Mouse Wireless menjadi `199000`.
- Ubah stok Webcam Full HD menjadi `0`.

Simpan file tanpa mematikan server.

### Langkah 21 — Refresh segera

👀 Refresh `/produk`.

✅ Data lama mungkin masih terlihat karena halaman masih berada di cache.

### Langkah 22 — Tunggu 15 detik, lalu refresh

👀 Tunggu 15 detik penuh, lalu refresh sekali.

✅ Permintaan pertama setelah cache kedaluwarsa dapat menerima data lama sementara regenerasi berlangsung.

### Langkah 23 — Refresh sekali lagi

👀 Refresh lagi setelah permintaan pertama selesai.

✅ Data baru muncul: Mouse Rp199.000 dan stok Webcam 0, tanpa build ulang dan tanpa restart server.

# TAHAP 5 — ISR PADA HALAMAN DETAIL [id]

Folder `[id]` berarti bagian URL dapat berisi ID produk. Agar halaman produk yang sudah diketahui dibuat saat build, Next.js perlu daftar ID melalui `generateStaticParams`.

### Langkah 24 — Lengkapi import dan revalidate

✍️ Buka `app/produk/[id]/page.js`. Temukan komentar TODO pada bagian import. Lengkapi import agar mengambil `getProducts` dan `getProductById` dari `@/lib/products`, lalu tambahkan konfigurasi `revalidate`.

💡 Petunjuk 2 ada di Lampiran.

### Langkah 25 — Tulis generateStaticParams

✍️ Pada TODO Langkah 25, tulis fungsi `generateStaticParams` dan lengkapi titik-titiknya:

```js
export async function generateStaticParams() {
  const products = await ........;
  return products.map((p) => ({ id: ........ }));
}
```

Fungsi ini mengembalikan daftar seperti `[{ id: "1" }, { id: "2" }]`. Next.js menggunakan daftar tersebut untuk membuat halaman detail saat build.

💡 Petunjuk 3 ada di Lampiran. Simpan file.

### Langkah 26 — Build ulang dan jalankan

🖥️ Matikan server dengan Ctrl+C, lalu:

```bash
npm run build
npm start
```

✅ Di tabel build, `/produk/[id]` seharusnya bersimbol `●` dan menampilkan daftar `/produk/1` sampai `/produk/4`, dengan revalidasi 10 detik.

⚠️ Jika build error, baca pesan error dan periksa import, kurung, serta nilai yang kamu isi.

### Langkah 27 — Buka halaman detail

👀 Buka `/produk/1` sampai `/produk/4`.

✅ Semua halaman tampil lengkap dengan kotak waktu.

### Langkah 28 — Buka produk yang belum ada

👀 Buka http://localhost:3000/produk/5.

✅ Muncul 404.

### Langkah 29 — Tambah produk 5

✍️ Di `data/products.json`, tambahkan produk baru di akhir array. Pastikan ada koma setelah objek sebelumnya:

```json
{ "id": 5, "nama": "Monitor 24 inch", "harga": 1500000, "stok": 3 }
```

Pastikan JSON tetap valid.

### Langkah 30 — Refresh produk 5

👀 Refresh `/produk/5`.

✅ Halaman mungkin masih 404. Pada route yang memakai ISR, hasil not-found dapat ikut tersimpan dalam cache.

👀 Tunggu 15 detik, lalu refresh dua kali.

✅ Produk Monitor 24 inch seharusnya muncul setelah route direvalidasi. 💭 Pertanyaan 7.

### Langkah 31 — Tambah produk 6 yang belum pernah dibuka

✍️ Tambahkan produk dengan `"id": 6` (nama dan harga bebas), lalu simpan. Jangan dibuka dulu.

👀 Buka `/produk/6`.

✅ Karena `dynamicParams` masih menggunakan nilai default `true`, ID yang belum diprerender dapat dibuat saat pertama kali diminta dan kemudian di-cache.

### Langkah 32 — Kunci daftar halaman

✍️ Di `app/produk/[id]/page.js`, tambahkan di bawah baris revalidate:

```js
export const dynamicParams = false;
```

### Langkah 33 — Build ulang dan uji

🖥️ Matikan server, lalu jalankan `npm run build` dan `npm start`.

✍️ Setelah build selesai, tambahkan produk dengan ID 9 di `products.json`. 👀 Buka `/produk/9`, tunggu 15 detik, lalu buka lagi.

✅ Dengan `dynamicParams = false`, ID yang tidak termasuk daftar saat build tetap 404 sampai ID tersebut dimasukkan ke hasil build berikutnya. Produk yang sudah dibuat saat build tetap normal.

### Langkah 34 — Kembalikan seperti semula

✍️ Hapus baris `export const dynamicParams = false;` lalu simpan. Untuk langkah berikutnya, biarkan server berhenti sampai diminta menjalankannya lagi.

# TAHAP 6 — PERBARUI HALAMAN SECARA MANUAL

Kadang admin tidak mau menunggu interval, misalnya saat memperbaiki harga yang salah. Endpoint `/api/revalidate` akan memerintahkan Next.js menandai path untuk dibuat ulang.

### Langkah 35 — Tulis kode tombolnya

✍️ Buka `app/api/revalidate/route.js`. Kerjakan sendiri empat hal berikut:

1. Import `revalidatePath` dari `next/cache`.
2. Jika secret tidak sama dengan `process.env.REVALIDATE_SECRET`, kirim `{ message: "Secret salah" }` dengan status 401.
3. Jika secret benar, panggil `revalidatePath(path)`.
4. Ubah respons sukses menjadi `{ revalidated: true, path }`.

💡 Petunjuk 4 tersedia di Lampiran.

### Langkah 36 — Perpanjang waktu revalidate

✍️ Di `app/produk/page.js`, ubah `revalidate = 10` menjadi `revalidate = 3600` (1 jam), supaya perbedaan revalidasi manual terlihat jelas.

### Langkah 37 — Build ulang dan jalankan

🖥️ Matikan server dengan Ctrl+C, lalu jalankan:

```bash
npm run build
npm start
```

### Langkah 38 — Ubah harga, lalu cek

✍️ Ubah harga produk apa saja di `data/products.json`.

👀 Refresh `/produk`.

✅ Data lama mungkin masih tampil karena cache belum melewati interval satu jam.

### Langkah 39 — Coba kata sandi salah

👀 Buka:

`http://localhost:3000/api/revalidate?secret=salah`

✅ Muncul `{"message":"Secret salah"}` dengan status 401.

### Langkah 40 — Coba kata sandi benar

👀 Buka:

`http://localhost:3000/api/revalidate?secret=rahasia123&path=/produk`

✅ Muncul `{"revalidated":true,"path":"/produk"}`.

### Langkah 41 — Lihat hasilnya

👀 Refresh `/produk`.

✅ Setelah regenerasi selesai, harga baru muncul tanpa menunggu satu jam dan tanpa build ulang. 💭 Pertanyaan 6.

### Langkah 42 — Kembalikan nilai revalidate

✍️ Ubah `revalidate` di `app/produk/page.js` kembali ke 10. Matikan server dengan Ctrl+C.

# TAHAP 7 — DEBUG: SENGAJA MERUSAK, LALU PERBAIKI

Programmer yang baik membaca pesan error, mencari penyebab, lalu memperbaikinya.

### Langkah 43 — Kasus 1: nilai revalidate salah tulis

✍️ Di `app/produk/page.js`, ubah:

```js
export const revalidate = 10;
```

menjadi:

```js
export const revalidate = "10";
```

🖥️ Jalankan `npm run build`.

👀 Baca pesan error yang menyebut nilai revalidate tidak valid. Build seharusnya gagal karena nilainya harus berupa angka, bukan string.

✍️ Perbaiki sendiri berdasarkan pesan error, lalu build lagi sampai berhasil.

### Langkah 44 — Kasus 2: data JSON rusak

✍️ Di `data/products.json`, hapus koma setelah objek produk pertama. Simpan.

🖥️ Jalankan `npm run build`.

👀 Baca error parsing JSON. Pesan biasanya menunjukkan baris dan kolom yang bermasalah.

✍️ Perbaiki koma, pastikan JSON valid, lalu build lagi sampai berhasil.

💡 Petunjuk: cari kata `line` dan `column`; pesan error pertama biasanya paling membantu.

### Langkah 45 — Kasus 3: kenapa tidak boleh memakai dev?

🖥️ Jalankan:

```bash
npm run dev
```

👀 Buka `http://localhost:3000/produk`, lalu refresh setiap 2–3 detik sebanyak lima kali.

Amati bahwa perilaku cache dan waktu render di mode development berbeda dari mode production. Jangan menjadikan hasil `dev` sebagai bukti ISR production.

💭 Pertanyaan 5. Matikan server dengan Ctrl+C.

### Langkah 46 — Cek hasil akhir

🖥️ Pastikan `data/products.json` valid dan `revalidate` pada `/produk` kembali menjadi 10. Pastikan kode halaman detail dan endpoint revalidation sudah lengkap, lalu jalankan:

```bash
npm run build
npm start
```

✅ Hasil akhir yang diharapkan:

| Cek | Hasil yang benar |
|---|---|
| Tabel build `/produk` | `○` dengan `10s` |
| Tabel build `/produk/[id]` | `●` dengan daftar ID produk dan `10s` |
| Tabel build `/api/revalidate` | `ƒ` |
| `/produk` setelah ubah data, tunggu, lalu refresh dua kali | Data baru muncul |
| Endpoint dengan secret benar | `{"revalidated":true,...}` |
| Endpoint dengan secret salah | `{"message":"Secret salah"}`, status 401 |

## F. Source Code

Semua kode starter sudah ada di repository. Bagian yang kamu tulis sendiri:

| File | Yang kamu tulis |
|---|---|
| `app/produk/page.js` | `export const revalidate = ...` |
| `app/produk/[id]/page.js` | Import fungsi produk, revalidate, dan `generateStaticParams` |
| `app/api/revalidate/route.js` | Import, validasi secret, dan `revalidatePath` |

Tiga kode kunci ISR:

```js
export const revalidate = 10;                 // ISR berbasis waktu
export async function generateStaticParams()  // daftar halaman [id] saat build
revalidatePath("/produk");                    // tandai path untuk dibuat ulang
```

## G. Tugas Pengembangan

Kerjakan **Tugas 1 (wajib) + minimal satu tugas lainnya**. Tidak ada langkah rinci; kamu menentukan cara pengerjaannya.

### Tugas 1 — Badge stok (wajib) ⭐

Pada `app/produk/page.js`, tampilkan label di samping stok:

- Stok 0 → **Habis**
- Stok kurang dari 10 → **Menipis**
- Selain itu → **Tersedia**

Buktikan dengan mengubah stok di `products.json`, menunggu revalidasi, dan menunjukkan label berubah tanpa build ulang.

💡 Petunjuk 5 ada di Lampiran.

### Tugas 2 — Bandingkan dengan SSR ⭐⭐

Buat folder `app/produk-ssr/`, salin isi `app/produk/page.js` ke `page.js` di dalamnya, lalu gunakan:

```js
export const dynamic = "force-dynamic";
```

Build ulang. Isi tabel:

| Pengamatan | `/produk` (ISR) | `/produk-ssr` (SSR) |
|---|---|---|
| Simbol di tabel build | | |
| Jam saat refresh berkali-kali | | |
| Kapan data baru muncul | | |

### Tugas 3 — Perbarui satu produk saja ⭐⭐

Gunakan `/api/revalidate?secret=rahasia123&path=/produk/3` untuk menandai halaman detail produk 3. Ubah harga produk 1 dan 3, panggil endpoint, lalu amati halaman daftar dan detail. Jelaskan path mana yang ditandai untuk direvalidasi.

### Tugas 4 — Data bukan dari file lokal ⭐⭐⭐

Buat `app/artikel/page.js` yang mengambil data dari internet:

```js
const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
  next: { revalidate: 30 },
});
const posts = await res.json();
```

Tampilkan lima judul artikel (`post.title`) dan komponen `<BuildInfo />`. Jelaskan perbedaan `revalidate` pada opsi `fetch` dengan `export const revalidate`.

## H. Troubleshooting

### H1. Panduan masalah umum

| Gejala | Penyebab | Solusi |
|---|---|---|
| `node` / `git` / `npm` “not recognized” | Belum terpasang atau terminal belum dibuka ulang | Pasang alatnya, lalu buka ulang terminal |
| `Could not read package.json` / `next: not found` | Bukan di folder proyek atau dependency belum dipasang | Masuk ke folder `ISR`, lalu jalankan `npm install` |
| Port 3000 sudah dipakai | Server lama belum dimatikan | Ctrl+C di terminal lama atau jalankan `npm start -- -p 3001` |
| `Could not find a production build` | Menjalankan `npm start` sebelum build | Jalankan `npm run build` dulu |
| Perubahan data belum muncul | Cache belum kedaluwarsa, belum ada permintaan setelah interval, atau regenerasi belum selesai | Tunggu lebih dari interval, refresh lagi, periksa log server dan JSON |
| Secret selalu salah | `.env.local` belum dibuat, nilai tidak cocok, atau server belum dimulai ulang setelah env diubah | Periksa `REVALIDATE_SECRET`, lalu restart server |
| Error pada `params` | Di Next.js 15, `params` merupakan Promise | Gunakan `const { id } = await params` di komponen async |

### H2. Analisis masalah ✍️

Tuliskan penyebab dan perbaikan dengan kalimatmu sendiri.

| No. | Gejala | Penyebab | Perbaikan |
|---|---|---|---|
| 1 | Teman memakai `npm run dev`; waktu berubah setiap refresh walau revalidate = 3600 | | |
| 2 | Data di `products.json` sudah diubah, tetapi halaman tetap lama walau lewat 10 detik. Tulis minimal dua kemungkinan | | |
| 3 | Build gagal pada `export const revalidate = "10";` | | |
| 4 | Error “params should be awaited before using its properties” pada halaman `[id]` | | |
| 5 | Endpoint revalidate membalas “Secret salah” padahal merasa sudah benar | | |
| 6 | Produk 5 ada di JSON tetapi `/produk/5` masih 404. Tulis minimal dua kemungkinan | | |

## I. Pertanyaan Pemahaman

Jawab dengan kalimatmu sendiri, bukan menyalin slide.

1. Pada Langkah 17, mengapa permintaan pertama setelah 10 detik masih bisa menampilkan halaman lama? Apa untungnya dibanding membuat pengunjung menunggu halaman baru?
2. Pada Langkah 18, apa yang terjadi di server sebelum pengunjung mendapat halaman baru? Urutkan kejadiannya.
3. Apa arti waktu di kotak? Bagian mana yang menghasilkannya: browser atau server? Kapan?
4. Jika revalidate = 10 dan tidak ada yang membuka halaman selama satu jam, apakah server tetap membuat ulang halaman setiap 10 detik? Jelaskan.
5. Mengapa perilaku ISR perlu diamati dengan `npm run build` dan `npm start`, bukan hanya `npm run dev`?
6. Apa beda ISR berbasis waktu dengan on-demand revalidation? Beri satu contoh nyata untuk masing-masing.
7. Apa fungsi `dynamicParams = false)? Mengapa halaman not-found bisa ikut tersimpan?
8. Tentukan SSR / SSG / ISR beserta alasannya: (a) saldo rekening bank pengguna, (b) halaman “Tentang Kami”, (c) daftar berita yang diperbarui setiap beberapa jam.
9. Apa risiko memakai ISR untuk data yang harus selalu akurat, misalnya stok flash sale? Apa alternatifnya?
10. Di praktik ini, mana yang berjalan di server dan mana yang di browser? Pada Tahap 2, halaman `/produk` dibuat di mana dan kapan?

## J. Kesimpulan / Refleksi

Tulis 3–5 kalimat dengan bahasamu sendiri:

- Apa yang kamu pahami tentang ISR setelah praktik?
- Bagian mana yang paling membingungkan dan bagaimana kamu mengatasinya?
- Kapan kamu akan memilih ISR pada proyekmu sendiri?

........................................................................  
........................................................................  
........................................................................

### 📊 Ringkasan: SSG vs ISR vs SSR

Isi setelah praktik.

| Aspek | SSG | ISR | SSR |
|---|---|---|---|
| Kapan HTML dibuat? | | | |
| Kapan data baru muncul? | | | |
| Kecepatan | | | |
| Cocok untuk | | | |
| Simbol di tabel build | | | |

### ✅ Checklist Penyelesaian

- [ ] Langkah 1–46 selesai dan hasil Langkah 46 sudah ditunjukkan.
- [ ] Kode di tiga file praktik sudah ditulis sendiri.
- [ ] Tugas 1 dan minimal satu tugas lain selesai.
- [ ] Analisis masalah H2 terisi.
- [ ] Pertanyaan pemahaman terjawab.
- [ ] Refleksi ditulis.

### 🆘 Urutan meminta bantuan

1. Coba analisis sendiri: baca ulang langkah, tanda ⚠️, dan petunjuk 💡.
2. Diskusikan dengan teman satu kelompok.
3. Tanya kelompok pemateri.
4. Tanya guru.

## LAMPIRAN — PETUNJUK

⚠️ Jangan dibuka dulu! Coba kerjakan sendiri minimal lima menit. Petunjuk ini membantu jika benar-benar buntu.

### Petunjuk 1 — Langkah 13

```js
export const revalidate = 10;
```

Artinya: anggap halaman kedaluwarsa setelah 10 detik. Setelah interval lewat dan ada permintaan, Next.js dapat menyajikan versi lama sambil membuat versi baru.

⚠️ Gunakan angka tanpa tanda kutip.

### Petunjuk 2 — Langkah 24

```js
import { getProducts, getProductById } from "@/lib/products";

export const revalidate = 10;
```

### Petunjuk 3 — Langkah 25

```js
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ id: String(p.id) }));
}
```

`String(p.id)` mengubah angka 1 menjadi teks `"1"`.

### Petunjuk 4 — Langkah 35

```js
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request) {
  const secret = request.nextUrl.searchParams.get("secret");
  const path = request.nextUrl.searchParams.get("path") || "/produk";

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Secret salah" }, { status: 401 });
  }

  // Praktik ini membatasi revalidasi ke daftar dan detail produk.
  if (!/^\/produk(?:\/\d+)?$/.test(path)) {
    return NextResponse.json({ message: "Path tidak diizinkan" }, { status: 400 });
  }

  revalidatePath(path);
  return NextResponse.json({ revalidated: true, path });
}
```

| Kode | Artinya |
|---|---|
| `searchParams.get("secret")` | Mengambil secret dari URL |
| `process.env.REVALIDATE_SECRET` | Secret yang disimpan di `.env.local` |
| `status: 401` | Permintaan tidak diizinkan karena secret salah |
| `revalidatePath(path)` | Menandai path untuk direvalidasi |

### Petunjuk 5 — Tugas 1: Badge stok

Letakkan fungsi ini di atas komponen halaman:

```js
function labelStok(stok) {
  if (stok === 0) return "Habis";
  if (stok < 10) return "Menipis";
  return "Tersedia";
}
```

Lalu tampilkan label di bagian stok, misalnya:

```jsx
<small>Stok: {product.stok} ({labelStok(product.stok)})</small>
```

## Referensi

- [Next.js 15 — Incremental Static Regeneration](https://nextjs.org/docs/15/app/guides/incremental-static-regeneration)
- [Next.js — revalidatePath](https://nextjs.org/docs/app/api-reference/functions/revalidatePath)
- [Next.js — generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)
