# 📘 JOBSHEET PRAKTIK
## Incremental Static Regeneration (ISR) pada Next.js

<<<<<<< HEAD
> **Cara memakai:** ikuti langkahnya **berurutan dari Langkah 1**, jangan loncat. Sebagian besar kode **kamu ketik sendiri** (dengan penjelasan dan petunjuk), bukan sekadar disalin. Semua hasil di jobsheet ini sudah diuji langsung.

---

## A. Identitas
=======
> **Cara memakai jobsheet ini:** ikuti langkahnya **berurutan dari Langkah 1**, jangan loncat. Setiap langkah memberi tahu **apa yang dikerjakan** dan **apa yang akan kamu lihat**. Semua hasil di sini sudah diuji langsung.
>>>>>>> 8082c87 (first commit)

| | |
|---|---|
| **Judul Praktik** | Membuat Katalog Produk dengan ISR |
| **Topik Rendering** | Incremental Static Regeneration (ISR) |
| **Kelompok Pembuat** | Kelompok 4 |
<<<<<<< HEAD
| **Alokasi Waktu** | ± 70 menit (Tugas Pengembangan sebagai kelanjutan) |
| **Nama Peserta / Kelas** | ........................................ |

## B. Tujuan Praktik

Setelah menyelesaikan praktik, peserta mampu:
1. Membedakan SSG, ISR, dan SSR dari hasil yang diamati sendiri.
2. Mengimplementasikan ISR berbasis waktu dengan `revalidate`.
3. Membuat halaman dinamis `[id]` dengan `generateStaticParams`.
4. Memperbarui halaman secara manual dengan `revalidatePath` (on-demand revalidation).
5. Membaca pesan error dan memperbaiki masalah umum pada ISR.
6. Menjelaskan kapan ISR sebaiknya dipakai.

## C. Prasyarat
=======
| **Alokasi Waktu** | ± 70 menit |

---

## Tujuan Praktik

Setelah mengikuti semua langkah, kamu mampu:
1. Membedakan SSG, ISR, dan SSR dari hasil yang kamu lihat sendiri.
2. Membuat halaman ISR dengan `revalidate`.
3. Membuat halaman dinamis `[id]` dengan `generateStaticParams`.
4. Memperbarui halaman secara manual dengan `revalidatePath`.

## Yang Perlu Disiapkan
>>>>>>> 8082c87 (first commit)

| Alat | Fungsi | Unduh |
|---|---|---|
| **Node.js** (versi 18.18+, pilih "LTS") | Menjalankan Next.js | https://nodejs.org |
| **Git** | Mengunduh proyek dari GitHub | https://git-scm.com |
| **VS Code** | Menulis kode | https://code.visualstudio.com |

<<<<<<< HEAD
Sudah mengikuti presentasi dan demo ISR. Tidak perlu jago Next.js: setiap kode dijelaskan.

## D. Skenario / Kasus 🍞

Kamu membuat **katalog produk toko online**. Halamannya dilihat ribuan orang, tetapi harga dan stok hanya berubah beberapa kali sehari. Pilihan yang ada:

| Cara | Analogi toko roti | Masalah |
|---|---|---|
| **SSR** | Roti dibuat **setiap ada yang pesan** | Dapur sibuk terus, pembeli menunggu |
| **SSG** | Roti dibuat **sekali di pagi hari** | Harga berubah pun, daftar lama tetap dipajang |
| **ISR** | Roti dibuat di pagi hari. **Kalau sudah kedaluwarsa, dapur diam-diam membuat yang baru** saat ada pembeli datang | — |

**ISR = secepat SSG, tetapi bisa memperbarui diri tanpa build ulang.** Di praktik ini kamu akan membangun katalog produk dan membuktikan sendiri cara kerjanya.
=======
Tidak perlu jago Next.js. Setiap kode dijelaskan.

---

## Ceritanya Dulu: Apa Itu ISR? 🍞

Bayangkan **toko roti online**. Daftar roti dan harganya dilihat ribuan orang, tetapi harganya hanya berubah beberapa kali sehari.

| Cara | Analogi | Masalah |
|---|---|---|
| **SSR** | Roti dibuat **setiap ada yang pesan** | Dapur sibuk terus, pembeli menunggu |
| **SSG** | Roti dibuat **sekali di pagi hari** | Harga berubah pun, daftar lama tetap dipajang |
| **ISR** | Roti dibuat di pagi hari, dan **kalau sudah kedaluwarsa, dapur diam-diam membuat yang baru** saat ada pembeli datang | — (cepat **dan** bisa diperbarui) |

**ISR = secepat SSG, tetapi bisa memperbarui diri tanpa build ulang.**
>>>>>>> 8082c87 (first commit)

### Istilah yang akan kamu temui

| Istilah | Artinya |
|---|---|
| **Build** | "Memasak" proyek menjadi versi siap pakai (`npm run build`) |
| **Production** | Mode sungguhan saat dipakai pengunjung (`npm start`) |
| **Statis** | Halaman sudah jadi sebelum ada yang membuka |
| **Revalidate** | Cek ulang, lalu buat ulang halaman kalau sudah kedaluwarsa |
| **Stale** | Basi / data lama |
| **Cache** | Salinan halaman yang disimpan supaya cepat |
| **Terminal** | Jendela tempat mengetik perintah |

### ⚠️ Dua Aturan Penting

<<<<<<< HEAD
1. **ISR hanya terlihat di mode production.** Selalu pakai `npm run build` lalu `npm start`. **Jangan** pakai `npm run dev`. (Alasannya akan kamu buktikan sendiri di Langkah 45.)
2. **Setelah mengubah KODE (file `.js`)**: **Ctrl + C** (matikan server) → `npm run build` → `npm start`.
   **Mengubah DATA (`products.json`) tidak perlu build ulang.**
=======
1. **ISR hanya terlihat di mode production.** Selalu pakai `npm run build` lalu `npm start`. **Jangan** pakai `npm run dev`.
2. **Setelah mengubah KODE (file `.js`)**, lakukan: **Ctrl + C** (matikan server) → `npm run build` → `npm start`.
   **Mengubah DATA (`products.json`) tidak perlu build ulang**, dan itulah yang akan kita amati.
>>>>>>> 8082c87 (first commit)

### Tanda yang dipakai

| Tanda | Artinya |
|---|---|
| 🖥️ | Ketik perintah di terminal |
<<<<<<< HEAD
| ✍️ | Kamu menulis / mengubah kode sendiri |
| 👀 | Buka browser dan amati |
| ✅ | Hasil yang seharusnya kamu lihat |
| ⚠️ | Hati-hati, sering salah di sini |
| 💭 | Berhenti sebentar dan pikirkan (jawab di bagian I) |

---

## E. Langkah Praktik

=======
| ✍️ | Tulis / ubah kode |
| 👀 | Buka browser dan lihat hasilnya |
| ✅ | Hasil yang akan kamu lihat |
| ⚠️ | Hati-hati, sering salah di sini |

---

>>>>>>> 8082c87 (first commit)
# TAHAP 1 — PERSIAPAN

### Langkah 1 — Cek alat

<<<<<<< HEAD
🖥️ Buka terminal (Windows: "Command Prompt"; Mac: "Terminal"):
=======
🖥️ Buka terminal (Windows: cari "Command Prompt"; Mac: "Terminal"). Ketik:
>>>>>>> 8082c87 (first commit)

```bash
node -v
git --version
```

<<<<<<< HEAD
✅ Muncul nomor versi (misal `v22.11.0`). `node` minimal **v18.18**.
⚠️ Kalau *"not recognized"* / *"command not found"*: pasang alatnya, lalu **tutup dan buka lagi terminal**.
=======
✅ Muncul nomor versi, misalnya `v22.11.0` dan `git version 2.45.0`. Nomor `node` minimal **v18.18**.
⚠️ Kalau muncul *"not recognized"* atau *"command not found"*, pasang alatnya dari tabel di atas, lalu **tutup dan buka lagi terminal**.
>>>>>>> 8082c87 (first commit)

### Langkah 2 — Unduh proyek

🖥️
```bash
git clone <URL-REPO-KELOMPOK-4>
cd isr-jobsheet
```

<<<<<<< HEAD
### Langkah 3 — Buka di VS Code

🖥️ Ketik `code .` (pakai titik), atau VS Code → File → Open Folder → pilih folder `isr-jobsheet`. Kamu boleh memakai terminal bawaan VS Code: **Terminal → New Terminal**.
=======
`git clone` menyalin proyek dari GitHub ke laptopmu. `cd isr-jobsheet` masuk ke folder proyek.

### Langkah 3 — Buka di VS Code

🖥️ Ketik `code .` (pakai titik). Atau: VS Code → File → Open Folder → pilih folder `isr-jobsheet`.

Mulai sekarang kamu boleh memakai terminal di dalam VS Code: menu **Terminal → New Terminal** (sudah otomatis berada di folder yang benar).
>>>>>>> 8082c87 (first commit)

### Langkah 4 — Pasang kebutuhan proyek

🖥️
```bash
npm install
```
<<<<<<< HEAD
✅ Tunggu 1–3 menit (butuh internet). Folder `node_modules` muncul. Abaikan tulisan "warn".

### Langkah 5 — Buat file pengaturan rahasia

🖥️ Mac/Linux: `cp .env.local.example .env.local`
Windows (Command Prompt): `copy .env.local.example .env.local`

### Langkah 6 — Kenali isi proyek

| File | Fungsinya |
|---|---|
| `data/products.json` | **Gudang data**: daftar produk. Kamu ubah seolah-olah admin toko mengganti harga |
| `lib/products.js` | **Petugas gudang**: fungsi `getProducts` dan `getProductById` |
| `components/BuildInfo.js` | **Kotak kuning** berisi **jam saat halaman dibuat** |
| `app/produk/page.js` | Halaman **daftar produk** (`/produk`) |
| `app/produk/[id]/page.js` | Halaman **detail produk** (`/produk/1`, ...) |
| `app/api/revalidate/route.js` | **Tombol "perbarui sekarang"** |

### 🔑 Cara membaca kotak kuning

Jam di kotak kuning adalah **waktu halaman DIBUAT**, bukan waktu sekarang. Jam **sama** saat refresh = halaman lama dipakai ulang. Jam **berubah** = halaman baru dibuat ulang. (Format jam memakai titik: `11.06.45` = 11:06:45.)

### Cara membaca hasil `npm run build`

=======

✅ Tunggu 1–3 menit (butuh internet) sampai selesai. Folder `node_modules` akan muncul. Abaikan tulisan "warn" atau "notice".

### Langkah 5 — Buat file pengaturan rahasia

File ini menyimpan "kata sandi" yang dipakai di Tahap 6.

🖥️ Mac/Linux:
```bash
cp .env.local.example .env.local
```
Windows (Command Prompt):
```bash
copy .env.local.example .env.local
```

### Langkah 6 — Kenali isi proyek

Lihat panel kiri VS Code:

| File | Fungsinya |
|---|---|
| `data/products.json` | **Gudang data**: daftar produk. Nanti kamu ubah seolah-olah admin toko mengganti harga |
| `lib/products.js` | **Petugas gudang**: mengambil data dari gudang |
| `components/BuildInfo.js` | **Kotak kuning** berisi **jam saat halaman dibuat** |
| `app/produk/page.js` | Halaman **daftar produk** (`/produk`) |
| `app/produk/[id]/page.js` | Halaman **detail produk** (`/produk/1`, `/produk/2`, ...) |
| `app/api/revalidate/route.js` | **Tombol "perbarui sekarang"** (dipakai di Tahap 6) |

### 🔑 Cara membaca kotak kuning (penting!)

Jam di kotak kuning adalah **waktu halaman DIBUAT**, bukan waktu sekarang.

- Jam **sama** saat di-refresh → halaman lama dipakai ulang.
- Jam **berubah** → halaman baru saja dibuat ulang.

Jam memakai titik, misalnya `11.06.45` artinya pukul 11:06:45.

### Cara membaca hasil `npm run build`

Setelah build, terminal menampilkan tabel seperti ini:

>>>>>>> 8082c87 (first commit)
```
Route (app)                    Revalidate
┌ ○ /
├ ƒ /api/revalidate
├ ○ /produk                    10s
└ ● /produk/[id]               10s
```

| Simbol | Artinya |
|---|---|
<<<<<<< HEAD
| **○ (Static)** | Halaman dibuat **saat build**. Jika ada angka Revalidate (misal `10s`), itu **ISR** |
=======
| **○ (Static)** | Halaman dibuat **saat build**. Jika ada angka di kolom Revalidate (misal `10s`), itu **ISR** |
>>>>>>> 8082c87 (first commit)
| **● (SSG)** | Halaman `[id]` yang dibuat saat build lewat `generateStaticParams` |
| **ƒ (Dynamic)** | Halaman dibuat **setiap ada yang membuka** (seperti SSR) |

---

# TAHAP 2 — LIHAT MASALAH SSG DULU

<<<<<<< HEAD
Saat ini `/produk` belum diberi pengaturan apa pun, jadi ia halaman statis biasa.
=======
Saat ini `/produk` belum diberi pengaturan apa pun, sehingga ia halaman statis biasa.
>>>>>>> 8082c87 (first commit)

### Langkah 7 — Jalankan mode production

🖥️
```bash
npm run build
npm start
```
<<<<<<< HEAD
✅ Terminal berhenti di tulisan `Ready` / `http://localhost:3000`. **Biarkan terminal ini terbuka.**
⚠️ Jangan ketik apa pun lagi di terminal ini. Untuk mengetik perintah lain, matikan server dulu dengan **Ctrl + C**.

Lihat tabel build: `/produk` bersimbol **○** tanpa angka Revalidate.

### Langkah 8 — Buka halaman produk

👀 Buka **http://localhost:3000/produk**. ✅ Muncul 4 produk dan kotak kuning berisi jam.

### Langkah 9 — Refresh beberapa kali

👀 Tekan **F5** tiga kali. ✅ Jam **tidak berubah**.

### Langkah 10 — Ubah data di "gudang"

✍️ Tanpa mematikan server, buka `data/products.json`. Ubah harga Keyboard Mekanik dari `450000` menjadi `500000`. Simpan (**Ctrl + S**).

### Langkah 11 — Refresh lagi

👀 Refresh `/produk`. ✅ Harga **tetap Rp 450.000**, jam tetap sama.

> **Inilah masalah SSG:** data berubah, tetapi pengunjung tetap melihat yang lama. 💭 *Pertanyaan 10: halaman ini dibuat di mana dan kapan?*
=======

✅ Terminal berhenti di tulisan seperti `Ready` atau `http://localhost:3000`. **Biarkan terminal ini terbuka**, server sedang berjalan.
⚠️ Jangan ketik apa pun lagi di terminal ini. Kalau perlu mengetik perintah lain, matikan server dulu dengan **Ctrl + C**.

Gulir ke atas di terminal, lihat tabel build: `/produk` bersimbol **○** dan **belum ada angka Revalidate**.

### Langkah 8 — Buka halaman produk

👀 Buka browser: **http://localhost:3000/produk**

✅ Muncul 4 produk dan kotak kuning berisi jam.

### Langkah 9 — Refresh beberapa kali

👀 Tekan **F5** tiga kali.

✅ Jam di kotak kuning **tidak berubah**. Halaman yang sama dipakai terus.

### Langkah 10 — Ubah data di "gudang"

✍️ Tanpa mematikan server, buka `data/products.json`. Ubah harga Keyboard Mekanik:

```json
"harga": 450000
```
menjadi
```json
"harga": 500000
```
Simpan (**Ctrl + S**).

### Langkah 11 — Refresh lagi

👀 Refresh `/produk`.

✅ Harga **tetap Rp 450.000** dan jam tetap sama, padahal datanya sudah diubah.

> **Inilah masalah SSG:** halaman dibuat sekali saat build. Data berubah, tetapi pengunjung tetap melihat yang lama. ISR hadir untuk menyelesaikan ini.
>>>>>>> 8082c87 (first commit)

### Langkah 12 — Matikan server

🖥️ Klik terminal, tekan **Ctrl + C**.

---

# TAHAP 3 — AKTIFKAN ISR

### Langkah 13 — Tulis satu baris ISR

✍️ Buka `app/produk/page.js`. Cari baris:

```js
// TODO (Tahap 3, Langkah 13): tulis export const revalidate = ... di sini (lihat JOBSHEET.md)
```

<<<<<<< HEAD
Ganti dengan satu baris yang **kamu ketik sendiri**: `export const revalidate` dengan nilai **10**.

<details>
<summary>💡 Petunjuk (buka kalau sudah mencoba)</summary>
=======
Ganti dengan:
>>>>>>> 8082c87 (first commit)

```js
export const revalidate = 10;
```
<<<<<<< HEAD
**Arti:** *"Anggap halaman ini basi setelah 10 detik. Kalau sudah basi dan ada yang membuka, buat ulang."*
⚠️ Angka biasa tanpa tanda kutip.
</details>

Simpan file.
=======

**Arti:** *"Anggap halaman ini basi setelah 10 detik. Kalau sudah basi dan ada yang membuka, buat ulang halamannya."*
⚠️ Tulis angka biasa `10` (tanpa tanda kutip dan bukan hitungan seperti `5 * 2`). Simpan file.
>>>>>>> 8082c87 (first commit)

### Langkah 14 — Build ulang dan jalankan

🖥️ Karena kode berubah:
```bash
npm run build
npm start
```

### Langkah 15 — Lihat tabel build

<<<<<<< HEAD
✅ Baris `/produk` kini menampilkan **`10s`** di kolom Revalidate. Simbol tetap `○`: ISR adalah halaman statis yang bisa memperbarui diri.

### Langkah 16 — Buka halaman

👀 Buka **http://localhost:3000/produk**. Perhatikan jam di kotak kuning (anggap ini jam awal).
⚠️ Kalau jamnya terlihat "sudah lama", itu normal: hitungan 10 detik dimulai sejak halaman **dibuat saat build**.
=======
✅ Baris `/produk` sekarang menampilkan **`10s`** di kolom Revalidate. Simbolnya tetap `○`: ISR adalah halaman statis yang bisa memperbarui diri.

### Langkah 16 — Buka halaman

👀 Buka **http://localhost:3000/produk** dan perhatikan jam di kotak kuning (anggap ini jam awal).

⚠️ Kalau jamnya terlihat "sudah lama", itu normal. Hitungan 10 detik dimulai sejak halaman **dibuat saat build**, bukan sejak kamu membukanya.
>>>>>>> 8082c87 (first commit)

### Langkah 17 — Tunggu, lalu refresh

👀 **Tunggu 15 detik penuh** (pakai stopwatch HP), lalu refresh **sekali**.
<<<<<<< HEAD
✅ Jam **masih sama**. 💭 *Pertanyaan 1.*
=======

✅ Jam **masih sama** seperti Langkah 16. Halaman basi tetap ditampilkan, sementara server diam-diam membuat versi baru di belakang layar.
>>>>>>> 8082c87 (first commit)

### Langkah 18 — Refresh sekali lagi

👀 Refresh **segera** sekali lagi.
<<<<<<< HEAD
✅ Jam **berubah menjadi jam baru**. 💭 *Pertanyaan 2.*

### Langkah 19 — Refresh cepat berkali-kali

👀 Refresh 3 kali dalam waktu kurang dari 10 detik. ✅ Jam **tidak berubah** lagi.

**Alur ISR yang baru saja kamu lihat (stale-while-revalidate):**
=======

✅ Jam **berubah menjadi jam baru**. Kamu sekarang mendapat halaman hasil pembuatan ulang.

### Langkah 19 — Refresh cepat berkali-kali

👀 Refresh 3 kali dalam waktu kurang dari 10 detik.

✅ Jam **tidak berubah** lagi. Halaman masih segar.

**Alur ISR yang baru saja kamu lihat:**
>>>>>>> 8082c87 (first commit)

```
Lewat 10 detik → ada pengunjung datang
   → server memberikan halaman LAMA (cepat, tanpa menunggu)
   → di belakang layar, server MEMBUAT ULANG halaman
Pengunjung berikutnya
   → server memberikan halaman BARU
```
<<<<<<< HEAD
=======
Cara ini disebut **stale-while-revalidate**.
>>>>>>> 8082c87 (first commit)

---

# TAHAP 4 — UBAH DATA, HALAMAN MEMPERBARUI DIRI

Server masih berjalan dengan `revalidate = 10`.

### Langkah 20 — Ubah dua data

<<<<<<< HEAD
✍️ Di `data/products.json`: harga **Mouse Wireless** → `199000`, stok **Webcam Full HD** → `0`. Simpan.

### Langkah 21 — Refresh segera

👀 Refresh `/produk`. ✅ Belum berubah.

### Langkah 22 — Tunggu 15 detik, lalu refresh

👀 Tunggu **15 detik penuh**, refresh **sekali**. ✅ Data **masih lama** (halaman basi diberikan dulu).

### Langkah 23 — Refresh sekali lagi

👀 Refresh lagi. ✅ **Data baru muncul**: Mouse Rp 199.000 dan stok Webcam 0, tanpa build ulang dan tanpa restart server.
=======
✍️ Buka `data/products.json`, lalu ubah:
- harga **Mouse Wireless** menjadi `199000`
- stok **Webcam Full HD** menjadi `0`

Simpan.

### Langkah 21 — Refresh segera

👀 Refresh `/produk`.

✅ Belum berubah (belum lewat 10 detik sejak halaman dibuat).

### Langkah 22 — Tunggu 15 detik, lalu refresh

👀 Tunggu **15 detik penuh**, refresh **sekali**.

✅ Data **masih lama**. Ingat: halaman basi diberikan dulu, versi baru dibuat di belakang layar.

### Langkah 23 — Refresh sekali lagi

👀 Refresh sekali lagi.

✅ **Data baru muncul**: Mouse Rp 199.000 dan stok Webcam 0. Tanpa build ulang, tanpa restart server.
>>>>>>> 8082c87 (first commit)

---

# TAHAP 5 — ISR PADA HALAMAN DETAIL `[id]`

<<<<<<< HEAD
Folder `[id]` artinya *"bagian ini bisa diganti apa saja"*. Agar semua halaman produk dibuat **saat build**, Next.js harus tahu **daftar id** yang ada. Fungsinya bernama `generateStaticParams`.

### Langkah 24 — Lengkapi import dan revalidate

✍️ Buka `app/produk/[id]/page.js`. Di bawah baris `import BuildInfo ...` ada komentar TODO (Langkah 24). Ganti dengan kode berikut, **isi titik-titiknya sendiri**:

```js
import { ........, ........ } from "@/lib/products";

export const revalidate = ........;
```

- Nama dua fungsi diambil dari `lib/products.js` (buka file itu dan lihat apa yang di-`export`). Fungsi ini dipakai di bawah: `getProductById(id)` dan satu lagi untuk langkah berikutnya.
- Nilai `revalidate` sama seperti halaman daftar.

<details>
<summary>💡 Petunjuk</summary>

```js
import { getProducts, getProductById } from "@/lib/products";

export const revalidate = 10;
```
</details>

### Langkah 25 — Tulis `generateStaticParams`

✍️ Pada TODO (Langkah 25), tulis fungsi berikut dan **lengkapi titik-titiknya sendiri**:

```js
export async function generateStaticParams() {
  const products = await ........;                  // ambil SEMUA produk
  return products.map((p) => ({ id: ........ }));   // id harus berupa TEKS (string)
}
```

**Cara berpikir:** fungsi ini mengembalikan daftar seperti `[{ id: "1" }, { id: "2" }, ...]`. Next.js membuat satu halaman untuk setiap item saat build.

<details>
<summary>💡 Petunjuk</summary>

```js
=======
Setiap produk punya halaman sendiri: `/produk/1`, `/produk/2`, dst. Nama folder `[id]` artinya *"bagian ini bisa diganti apa saja"*.

Agar semua halaman produk dibuat **saat build**, Next.js harus tahu **daftar id** yang ada. Fungsinya bernama `generateStaticParams`.

### Langkah 24 — Tulis kode halaman detail

✍️ Buka `app/produk/[id]/page.js`. Ganti **seluruh isinya** dengan kode berikut:

```js
import { notFound } from "next/navigation";
import BuildInfo from "@/components/BuildInfo";
import { getProducts, getProductById } from "@/lib/products";

export const revalidate = 10;

>>>>>>> 8082c87 (first commit)
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ id: String(p.id) }));
}
<<<<<<< HEAD
```
`String(p.id)` mengubah angka `1` menjadi teks `"1"`.
</details>

Simpan.

### Langkah 26 — Build ulang dan jalankan

🖥️ Matikan server (**Ctrl + C**), lalu `npm run build` dan `npm start`.
✅ Di tabel build, `/produk/[id]` bersimbol **●** dan terdaftar `/produk/1` sampai `/produk/4`.
⚠️ Kalau build error, baca pesan errornya dan cek titik-titik yang kamu isi.

### Langkah 27 — Buka halaman detail

👀 Buka `/produk/1` sampai `/produk/4`. ✅ Semua tampil lengkap dengan kotak kuning.

### Langkah 28 — Buka produk yang belum ada

👀 Buka **/produk/5**. ✅ Muncul **404**.

### Langkah 29 — Tambah produk 5

✍️ Di `data/products.json`, tambahkan produk baru di akhir daftar. **Jangan lupa koma** setelah `}` produk sebelumnya:

```json
  { "id": 5, "nama": "Monitor 24 inch", "harga": 1500000, "stok": 3 }
```

### Langkah 30 — Refresh produk 5

👀 Refresh `/produk/5`. ✅ **Mungkin masih 404, dan itu normal**: halaman "tidak ditemukan" pun ikut disimpan selama 10 detik.

👀 **Tunggu 15 detik**, lalu refresh **2 kali**. ✅ Produk **Monitor 24 inch** muncul. 💭 *Pertanyaan 7.*

### Langkah 31 — Tambah produk 6 yang belum pernah dibuka

✍️ Tambahkan produk `"id": 6` (nama dan harga bebas, jangan lupa koma). Simpan. **Jangan dibuka dulu.**

👀 Sekarang buka `/produk/6`. ✅ **Langsung muncul**: halaman yang belum pernah diminta dibuat saat itu juga, lalu disimpan.

### Langkah 32 — Kunci daftar halaman
=======

export default async function DetailProduk({ params }) {
  const { id } = await params;
  const p = await getProductById(id);
  if (!p) notFound();

  return (
    <main>
      <h1>{p.nama}</h1>
      <BuildInfo label="Halaman detail dirender pukul" />
      <p>Harga: Rp {p.harga.toLocaleString("id-ID")}</p>
      <p>Stok: {p.stok}</p>
    </main>
  );
}
```

**Penjelasan bagian-bagiannya:**

| Kode | Artinya |
|---|---|
| `import { getProducts, getProductById }` | Memanggil "petugas gudang" dari `lib/products.js` |
| `export const revalidate = 10` | ISR: halaman dianggap basi setelah 10 detik |
| `generateStaticParams()` | Memberi daftar id yang halamannya dibuat saat build: `"1"`, `"2"`, `"3"`, `"4"` |
| `String(p.id)` | Mengubah angka `1` menjadi teks `"1"` (id harus berbentuk teks) |
| `await params` | Mengambil `id` dari alamat (wajib `await` di Next.js 15) |
| `if (!p) notFound()` | Kalau produk tidak ada, tampilkan halaman 404 |

Simpan file.

### Langkah 25 — Build ulang dan jalankan

🖥️ Matikan server (**Ctrl + C**), lalu:
```bash
npm run build
npm start
```

✅ Di tabel build, `/produk/[id]` bersimbol **●** dan di bawahnya terdaftar `/produk/1` sampai `/produk/4`.

### Langkah 26 — Buka halaman detail

👀 Buka `/produk/1`, `/produk/2`, `/produk/3`, dan `/produk/4`.

✅ Semuanya tampil dengan nama, harga, stok, dan kotak kuning.

### Langkah 27 — Buka produk yang belum ada

👀 Buka **/produk/5**.

✅ Muncul **404** (halaman tidak ditemukan), karena produk 5 belum ada di data.

### Langkah 28 — Tambah produk 5

✍️ Buka `data/products.json`. Tambahkan produk baru di akhir daftar. **Jangan lupa koma** setelah `}` produk sebelumnya:

```json
  { "id": 4, "nama": "Webcam Full HD", "harga": 280000, "stok": 0 },
  { "id": 5, "nama": "Monitor 24 inch", "harga": 1500000, "stok": 3 }
```
Simpan.

### Langkah 29 — Refresh produk 5

👀 Refresh `/produk/5`.

✅ **Mungkin masih 404, dan itu normal!** Halaman "tidak ditemukan" pun ikut disimpan (cache) selama 10 detik.

👀 **Tunggu 15 detik**, lalu refresh **2 kali**.

✅ Sekarang produk **Monitor 24 inch** muncul. Jadi ISR bekerja untuk halaman apa pun, termasuk halaman 404.

### Langkah 30 — Tambah produk 6 yang belum pernah dibuka

✍️ Tambahkan produk dengan `"id": 6` di `products.json` (nama dan harga bebas, jangan lupa koma). Simpan. **Jangan dibuka dulu.**

👀 Sekarang buka `/produk/6`.

✅ **Langsung muncul.** Karena halaman ini belum pernah diminta, server membuatnya saat itu juga, lalu menyimpannya untuk pengunjung berikutnya.

### Langkah 31 — Kunci daftar halaman

Sekarang kita coba melarang pembuatan halaman baru di luar daftar saat build.
>>>>>>> 8082c87 (first commit)

✍️ Di `app/produk/[id]/page.js`, tambahkan di bawah baris `revalidate`:

```js
export const dynamicParams = false;
```

<<<<<<< HEAD
### Langkah 33 — Build ulang dan uji

🖥️ Matikan server, lalu `npm run build` dan `npm start`.

✍️ Tambahkan produk dengan `"id": 9` di `products.json`. 👀 Buka `/produk/9`, tunggu 15 detik, buka lagi.
✅ **Selalu 404.** Produk 1–6 tetap normal.

### Langkah 34 — Kembalikan seperti semula

✍️ Hapus baris `export const dynamicParams = false;` lalu simpan.
=======
Simpan.

### Langkah 32 — Build ulang dan uji

🖥️ Matikan server (**Ctrl + C**), lalu:
```bash
npm run build
npm start
```

✍️ Tambahkan produk dengan `"id": 9` di `products.json`. Simpan.

👀 Buka `/produk/9`, tunggu 15 detik, buka lagi.

✅ **Selalu 404.** `dynamicParams = false` artinya *"hanya halaman yang terdaftar saat build yang boleh dibuka"*. Produk 1–6 tetap normal.

### Langkah 33 — Kembalikan seperti semula

✍️ Hapus baris `export const dynamicParams = false;` di `app/produk/[id]/page.js`. Simpan.
>>>>>>> 8082c87 (first commit)

---

# TAHAP 6 — PERBARUI HALAMAN SECARA MANUAL

<<<<<<< HEAD
Kadang kita tidak mau menunggu: misalnya admin baru memperbaiki harga yang salah dan harus langsung tampil. Kita buat **"tombol perbarui sekarang"**: alamat `/api/revalidate` yang, jika dibuka dengan kata sandi benar, memerintahkan Next.js membuat ulang halaman.

### Langkah 35 — Tulis kode tombolnya

✍️ Buka `app/api/revalidate/route.js`. Sudah ada kerangkanya. **Kerjakan 4 hal ini sendiri:**

1. Di baris TODO paling atas, **import** `revalidatePath` dari `"next/cache"`.
2. Jika `secret` **tidak sama** dengan `process.env.REVALIDATE_SECRET` → kirim `{ message: "Secret salah" }` dengan **status 401**.
3. Jika benar → panggil `revalidatePath(path)`.
4. Ubah balasan akhir menjadi `{ revalidated: true, path }`.

<details>
<summary>💡 Petunjuk (kode lengkap)</summary>
=======
Kadang kita tidak mau menunggu. Misalnya admin baru memperbaiki harga yang salah dan harus langsung tampil. Untuk itu kita buat **"tombol perbarui sekarang"**.

**Cara kerjanya:** kita buat alamat khusus `/api/revalidate`. Saat dibuka dengan kata sandi yang benar, Next.js diperintahkan: *"halaman /produk dianggap basi, buat ulang sekarang."*

### Langkah 34 — Tulis kode tombolnya

✍️ Buka `app/api/revalidate/route.js`. Ganti **seluruh isinya** dengan:
>>>>>>> 8082c87 (first commit)

```js
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request) {
  const secret = request.nextUrl.searchParams.get("secret");
  const path = request.nextUrl.searchParams.get("path") || "/produk";

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Secret salah" }, { status: 401 });
  }

  revalidatePath(path);
  return NextResponse.json({ revalidated: true, path });
}
```

<<<<<<< HEAD
| Kode | Artinya |
|---|---|
| `searchParams.get("secret")` | Mengambil `secret` dari alamat, misal `?secret=abc` |
| `process.env.REVALIDATE_SECRET` | Kata sandi asli dari `.env.local` (`rahasia123`) |
| `status: 401` | Kode "tidak diizinkan" |
| `revalidatePath(path)` | Menandai halaman itu basi agar dibuat ulang |
</details>

### Langkah 36 — Perpanjang waktu revalidate

✍️ Di `app/produk/page.js`, ubah `revalidate = 10` menjadi `3600` (1 jam), supaya perbedaannya jelas.

### Langkah 37 — Build ulang dan jalankan

🖥️ Matikan server, lalu `npm run build` dan `npm start`.

### Langkah 38 — Ubah harga, lalu cek

✍️ Ubah harga produk apa saja di `data/products.json`. 👀 Refresh `/produk`. ✅ **Belum berubah**.

### Langkah 39 — Coba kata sandi salah

👀 Buka **http://localhost:3000/api/revalidate?secret=salah**
✅ Muncul `{"message":"Secret salah"}`.

### Langkah 40 — Coba kata sandi benar

👀 Buka **http://localhost:3000/api/revalidate?secret=rahasia123&path=/produk**
✅ Muncul `{"revalidated":true,"path":"/produk"}`.

### Langkah 41 — Lihat hasilnya

👀 Refresh `/produk`. ✅ **Harga langsung berubah**, tanpa menunggu 1 jam dan tanpa build ulang. 💭 *Pertanyaan 6.*

### Langkah 42 — Kembalikan nilai revalidate

✍️ Ubah `revalidate` di `app/produk/page.js` kembali ke `10`. Matikan server (**Ctrl + C**).

---

# TAHAP 7 — DEBUG: SENGAJA MERUSAK, LALU PERBAIKI

Programmer yang baik tidak takut error; ia **membaca pesan error**. Sekarang kamu merusak kode dengan sengaja, lalu memperbaikinya.

### Langkah 43 — Kasus 1: nilai revalidate salah tulis

✍️ Di `app/produk/page.js`, ubah `export const revalidate = 10;` menjadi:
```js
export const revalidate = "10";
```
🖥️ Jalankan `npm run build`.

👀 **Baca** pesan error di terminal. Cari kalimat yang menyebut `Invalid revalidate value`.
✅ Build **gagal** dengan pesan seperti: *Invalid revalidate value "10" on "/produk", must be a non-negative number or false.*

✍️ **Perbaiki sendiri** berdasarkan pesan itu, lalu build lagi sampai berhasil.

### Langkah 44 — Kasus 2: data JSON rusak

✍️ Di `data/products.json`, **hapus koma** setelah `}` pada produk pertama (Keyboard Mekanik). Simpan.
🖥️ Jalankan `npm run build`.

👀 Baca errornya. ✅ Build gagal dengan pesan seperti: *SyntaxError: Expected ',' or ']' after array element in JSON ... (line 3 column 3)* dan *Failed to collect page data for /produk/[id]*.

✍️ **Cari baris yang dimaksud** (lihat `line 3`), perbaiki, lalu build lagi sampai berhasil.

> 💡 Petunjuk membaca error: cari kata **line** dan **column** untuk tahu posisi kesalahan; kalimat pertama biasanya penyebab sebenarnya.

### Langkah 45 — Kasus 3: kenapa tidak boleh pakai `dev`?

🖥️ Jalankan:
```bash
npm run dev
```
👀 Buka `http://localhost:3000/produk` lalu refresh setiap 2–3 detik, **5 kali**.
✅ Jam di kotak kuning **berubah setiap refresh**, padahal `revalidate = 10`. 💭 *Pertanyaan 5.*

Matikan dengan **Ctrl + C**.

### Langkah 46 — Cek hasil akhir (output praktik)

🖥️ Pastikan `data/products.json` valid dan `revalidate` di `/produk` = `10`, lalu:
=======
**Penjelasan:**

| Kode | Artinya |
|---|---|
| `searchParams.get("secret")` | Mengambil nilai `secret` dari alamat, misalnya `?secret=abc` |
| `process.env.REVALIDATE_SECRET` | Kata sandi asli dari file `.env.local` (isinya `rahasia123`) |
| `status: 401` | Kode "tidak diizinkan" |
| `revalidatePath(path)` | Menandai halaman itu basi agar dibuat ulang |

Simpan.

### Langkah 35 — Perpanjang waktu revalidate (supaya perbedaannya jelas)

✍️ Buka `app/produk/page.js`, ubah:

```js
export const revalidate = 10;
```
menjadi
```js
export const revalidate = 3600;
```
Artinya halaman baru dianggap basi setelah **1 jam**. Simpan.

### Langkah 36 — Build ulang dan jalankan

🖥️ Matikan server (**Ctrl + C**), lalu:
>>>>>>> 8082c87 (first commit)
```bash
npm run build
npm start
```
<<<<<<< HEAD
✅ **Hasil akhir yang harus kamu capai dan tunjukkan ke pemateri/guru:**

| Cek | Hasil yang benar |
|---|---|
| Tabel build `/produk` | `○` dengan `10s` |
| Tabel build `/produk/[id]` | `●` dengan daftar produk, `10s` |
| Tabel build `/api/revalidate` | `ƒ` |
| `/produk` setelah ubah data + tunggu + refresh 2× | Data baru muncul |
| `/api/revalidate?secret=rahasia123&path=/produk` | `{"revalidated":true,...}` |
| `/api/revalidate?secret=salah` | `Secret salah` |

---

## F. Source Code

Semua kode starter sudah ada di repository. Bagian yang **kamu tulis sendiri**:

| File | Yang kamu tulis |
|---|---|
| `app/produk/page.js` | `export const revalidate = ...` |
| `app/produk/[id]/page.js` | `import`, `revalidate`, `generateStaticParams` |
| `app/api/revalidate/route.js` | import, validasi secret, `revalidatePath` |

**Tiga baris kode kunci ISR:**
```js
export const revalidate = 10;                // ISR berbasis waktu
export async function generateStaticParams() // daftar halaman [id] yang dibuat saat build
revalidatePath("/produk");                   // perbarui halaman sekarang juga
```

---

## G. Tugas Pengembangan

**Kerjakan Tugas 1 (wajib) + minimal 1 tugas lainnya.** Tidak ada langkah rinci; kamu yang menentukan caranya.

**Tugas 1 — Badge stok (wajib)** ⭐
Pada `app/produk/page.js`, tampilkan label di samping stok: stok `0` → **"Habis"**, kurang dari 10 → **"Menipis"**, selain itu **"Tersedia"**. Lalu buktikan: ubah stok di `products.json`, tunggu, dan tunjukkan label berubah lewat ISR **tanpa build ulang**.

<details>
<summary>💡 Petunjuk</summary>

```js
function labelStok(stok) {
  if (stok === 0) return "Habis";
  if (stok < 10) return "Menipis";
  return "Tersedia";
}
```
Letakkan di atas komponen, lalu pakai: `<small>Stok: {p.stok} ({labelStok(p.stok)})</small>`
</details>

**Tugas 2 — Bandingkan dengan SSR** ⭐⭐
Buat folder `app/produk-ssr/`, salin isi `app/produk/page.js` ke `page.js` di dalamnya, lalu ganti baris revalidate dengan `export const dynamic = "force-dynamic";`. Build ulang. Isi tabel:

| | `/produk` (ISR) | `/produk-ssr` (SSR) |
|---|---|---|
| Simbol di tabel build | | |
| Jam saat di-refresh berkali-kali | | |
| Kapan data baru muncul | | |

**Tugas 3 — Perbarui satu produk saja** ⭐⭐
Gunakan `/api/revalidate?secret=rahasia123&path=/produk/3` untuk memperbarui hanya halaman produk 3. Ubah harga produk 1 dan 3, panggil alamat itu, lalu tunjukkan hanya `/produk/3` yang berubah.

**Tugas 4 — Data tidak lagi dari file lokal (tantangan, butuh internet)** ⭐⭐⭐
Buat `app/artikel/page.js` yang mengambil data dari internet:
```js
const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
  next: { revalidate: 30 },
});
const posts = await res.json();
```
Tampilkan 5 judul artikel (`post.title`) dan `<BuildInfo />`. Lalu jelaskan: apa beda `revalidate` pada `fetch` dengan `export const revalidate`?

---

## H. Troubleshooting

### H1. Panduan masalah umum

| Gejala | Penyebab | Solusi |
|---|---|---|
| `node` / `git` / `npm` "not recognized" | Belum terpasang, atau terminal belum dibuka ulang | Pasang alatnya, tutup lalu buka lagi terminal |
| `Could not read package.json` / `next: not found` | Tidak di folder proyek, atau belum `npm install` | `cd isr-jobsheet`, lalu `npm install` |
| `Port 3000 is already in use` | Server lama belum dimatikan | **Ctrl + C** di terminal lama, atau `npm start -- -p 3001` lalu buka `localhost:3001` |
| `Could not find a production build` | `npm start` sebelum `npm run build` | Jalankan `npm run build` dulu |

### H2. Analisis masalah ✍️

Tuliskan **penyebab** dan **perbaikan** dengan kalimatmu sendiri. (Kasus 1–3 sudah pernah kamu temui di Tahap 7.)

| No | Gejala | Penyebab | Perbaikan |
|---|---|---|---|
| 1 | Temanmu memakai `npm run dev`; jam berubah **setiap refresh** padahal `revalidate = 3600`. | | |
| 2 | Data di `products.json` sudah diubah, tetapi halaman tetap lama walau sudah lewat 10 detik. (Tulis **minimal 2** kemungkinan.) | | |
| 3 | Build gagal pada `export const revalidate = "10";`. | | |
| 4 | Error *"params should be awaited before using its properties"* pada halaman `[id]`. | | |
| 5 | Alamat revalidate selalu membalas "Secret salah" padahal yakin sudah benar. | | |
| 6 | Produk 5 sudah ada di JSON tetapi `/produk/5` masih 404. (Tulis **minimal 2** kemungkinan.) | | |

---

## I. Pertanyaan Pemahaman

Jawab dengan kalimatmu sendiri, bukan menyalin slide.

1. Pada Langkah 17, mengapa jam belum berubah padahal sudah lewat 10 detik? Apa untungnya dibanding membuat pengunjung menunggu halaman baru?
2. Pada Langkah 18, apa yang terjadi di server **sebelum** pengunjung mendapat halaman yang baru? Urutkan kejadiannya.
3. Apa arti jam di kotak kuning? Bagian mana yang menghasilkannya: **browser** atau **server**? Kapan?
4. Jika `revalidate = 10` dan tidak ada yang membuka halaman selama 1 jam, apakah server tetap membuat ulang halaman tiap 10 detik? Jelaskan.
5. Mengapa ISR tidak bisa diamati dengan `npm run dev` (Langkah 45)?
6. Apa beda **ISR berbasis waktu** (Tahap 3) dengan **on-demand revalidation** (Tahap 6)? Beri satu contoh nyata untuk masing-masing.
7. Apa fungsi `dynamicParams = false`? Mengapa halaman 404 pun sempat "tersimpan" (Langkah 30)?
8. Tentukan SSR / SSG / ISR beserta alasannya: (a) saldo rekening bank pengguna, (b) halaman "Tentang Kami", (c) daftar berita yang diperbarui tiap beberapa jam.
9. Apa risiko memakai ISR untuk data yang harus selalu akurat (misal stok flash sale)? Apa alternatifnya?
10. Di praktik ini, mana yang dijalankan di **server** dan mana di **browser**? (Pada Tahap 2: halaman `/produk` dibuat di mana dan kapan?)

---

## J. Kesimpulan / Refleksi

Tulis 3–5 kalimat dengan bahasamu sendiri:
1. Apa yang kamu pahami tentang ISR setelah praktik?
2. Bagian mana yang paling membingungkan, dan bagaimana kamu mengatasinya?
3. Kapan kamu akan memilih ISR di proyekmu sendiri?

........................................
........................................

### 📊 Ringkasan: SSG vs ISR vs SSR (isi setelah praktik)

| | SSG | ISR | SSR |
|---|---|---|---|
| Kapan HTML dibuat? | | | |
| Kapan data baru muncul? | | | |
| Kecepatan | | | |
| Cocok untuk | | | |
| Simbol di tabel build | | | |

### ✅ Checklist Penyelesaian

- [ ] Langkah 1–46 selesai, hasil akhir (Langkah 46) sudah ditunjukkan
- [ ] Kode di 3 file sudah kamu tulis sendiri
- [ ] Tugas 1 + minimal 1 tugas lain selesai
- [ ] Analisis masalah (H2) terisi
- [ ] Pertanyaan pemahaman terjawab
- [ ] Refleksi ditulis

### 🆘 Urutan Meminta Bantuan

1. **Coba analisis sendiri** (baca ulang langkah, cek tanda ⚠️ dan petunjuk 💡)
2. **Diskusikan dengan teman satu kelompok**
3. **Tanya kelompok pemateri**
4. **Tanya guru**
=======

### Langkah 37 — Ubah harga, lalu cek

✍️ Ubah harga produk apa saja di `data/products.json`. Simpan.

👀 Buka dan refresh `/produk`.

✅ Harga **belum berubah**. Wajar, baru lewat 1 jam jika menunggu. Kita tidak mau menunggu selama itu.

### Langkah 38 — Coba kata sandi salah

👀 Buka: **http://localhost:3000/api/revalidate?secret=salah**

✅ Muncul `{"message":"Secret salah"}`. Penjaga pintunya bekerja.

### Langkah 39 — Coba kata sandi benar

👀 Buka: **http://localhost:3000/api/revalidate?secret=rahasia123&path=/produk**

✅ Muncul `{"revalidated":true,"path":"/produk"}`.

### Langkah 40 — Lihat hasilnya

👀 Buka dan refresh `/produk`.

✅ **Harga langsung berubah**, tanpa menunggu 1 jam dan tanpa build ulang.

### Langkah 41 — Selesai! Rapikan

🖥️ Matikan server dengan **Ctrl + C**.

Kamu sudah mencoba tiga cara ISR:

| Yang kamu lakukan | Kode kuncinya |
|---|---|
| Perbarui otomatis tiap 10 detik | `export const revalidate = 10;` |
| Buat halaman `[id]` saat build | `export async function generateStaticParams()` |
| Perbarui sekarang juga | `revalidatePath("/produk");` |

---

## 📊 Ringkasan: SSG vs ISR vs SSR

| | SSG | ISR | SSR |
|---|---|---|---|
| **Kapan HTML dibuat?** | Sekali, saat build | Saat build, lalu dibuat ulang setelah waktu tertentu | Setiap ada yang membuka |
| **Data baru muncul kapan?** | Setelah build ulang | Setelah waktu revalidate lewat (atau saat dipicu manual) | Langsung |
| **Kecepatan** | Sangat cepat | Sangat cepat | Lebih lambat |
| **Cocok untuk** | Konten yang hampir tidak berubah | Konten yang berubah berkala (katalog, berita) | Data yang harus selalu terbaru / per pengguna |
| **Simbol build** | ○ | ○ + angka Revalidate | ƒ |

---

## 🛠️ Kalau Ada Masalah

| Gejala | Penyebab | Solusi |
|---|---|---|
| `node` / `git` / `npm` "not recognized" | Belum terpasang, atau terminal belum dibuka ulang | Pasang alatnya, **tutup lalu buka lagi** terminal |
| `Could not read package.json` atau `next: not found` | Terminal tidak berada di folder proyek, atau belum `npm install` | `cd isr-jobsheet`, lalu `npm install` |
| `Port 3000 is already in use` | Server lama belum dimatikan | Tekan **Ctrl + C** di terminal lama, atau jalankan `npm start -- -p 3001` lalu buka `localhost:3001` |
| Kode sudah diubah tetapi tampilan tidak berubah | Lupa build ulang | **Ctrl + C** → `npm run build` → `npm start` |
| `Could not find a production build` | `npm start` dijalankan sebelum `npm run build` | Jalankan `npm run build` dulu |
| Jam di halaman berubah **setiap refresh** | Memakai `npm run dev` | Pakai `npm run build` lalu `npm start` |
| Data diubah tetapi halaman tetap lama | Belum lewat waktu revalidate, atau baru refresh 1 kali | Tunggu lewat 10 detik, lalu refresh **2 kali** |
| Build error soal `revalidate` | Ditulis `"10"` (pakai kutip) atau `5 * 2` | Tulis angka biasa: `export const revalidate = 10;` |
| Error `params should be awaited` | Lupa `await` pada `params` | Pakai `const { id } = await params;` dan pastikan fungsinya `async` |
| Alamat revalidate selalu membalas "Secret salah" | `.env.local` belum dibuat, nama variabel salah, atau server belum dimulai ulang | Buat `.env.local` (Langkah 5), pastikan isinya `REVALIDATE_SECRET=rahasia123`, lalu restart server |
| `/produk/5` masih 404 padahal sudah ditambah | Halaman 404 ikut tersimpan 10 detik, atau `dynamicParams = false` masih aktif | Tunggu 15 detik lalu refresh 2 kali; hapus `dynamicParams = false` bila ada |
| Error JSON setelah menambah produk | Lupa koma atau tanda kutip salah | Pastikan ada koma di antara `}` dan `{`, dan bentuknya sama seperti produk lain |

### 🆘 Urutan meminta bantuan

1. **Coba sendiri** dulu (baca ulang langkah, cek tanda ⚠️)
2. **Tanya teman satu kelompok**
3. **Tanya kelompok pemateri**
4. **Tanya guru**

---

> Setelah selesai, lanjut ke **LEMBAR_EVALUASI.md** untuk tugas pengembangan dan refleksi.
>>>>>>> 8082c87 (first commit)
