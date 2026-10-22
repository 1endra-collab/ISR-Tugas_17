# Praktik Incremental Static Regeneration (ISR)

Repository pembelajaran **Incremental Static Regeneration (ISR)** menggunakan Next.js App Router. Aplikasi contoh sudah memiliki katalog ISR yang berfungsi untuk diamati dan dikembangkan mengikuti `JOBSHEET.md`.

## Prasyarat

- Node.js 20 LTS atau versi LTS yang kompatibel dengan Next.js 15.
- Git.
- Visual Studio Code atau editor kode lain.

## Menjalankan proyek

PowerShell (Windows):

```powershell
git clone https://github.com/syauqiazka/ISR.git
cd ISR
npm install
Copy-Item .env.local.example .env.local
npm run build
npm start
```

macOS/Linux:

```bash
git clone https://github.com/syauqiazka/ISR.git
cd ISR
npm install
cp .env.local.example .env.local
npm run build
npm start
```

Buka [http://localhost:3000](http://localhost:3000). Ikuti **JOBSHEET.md dari Langkah 1 sampai selesai**, lalu kerjakan **LEMBAR_EVALUASI.md**.

## Penting: cara mengamati ISR

Pengujian cache dan revalidasi dilakukan dengan server production lokal:

```bash
npm run build
npm start
```

Jangan gunakan `npm run dev` untuk menyimpulkan perilaku cache production; mode development memiliki perilaku rendering dan cache yang berbeda.

Setiap kali kamu mengubah kode JavaScript, hentikan server dengan `Ctrl+C`, lalu jalankan ulang build dan server. Saat mengubah `data/products.json`, praktik lokal ini membaca data tersebut ketika halaman dibuat ulang sehingga kamu dapat mengamati revalidasi tanpa build ulang.

> **Batasan praktik:** pembacaan file JSON dari disk dirancang untuk demonstrasi lokal. Untuk aplikasi production sungguhan, simpan data yang dapat berubah di database atau API, bukan mengandalkan perubahan file pada server deployment.

## Struktur penting

| File | Fungsi |
|---|---|
| `data/products.json` | Data katalog yang diubah selama praktik |
| `lib/products.js` | Membaca dan mencari data produk |
| `components/BuildInfo.js` | Menampilkan waktu saat HTML dibuat di server |
| `app/produk/page.js` | Halaman katalog dengan ISR berbasis waktu |
| `app/produk/[id]/page.js` | Halaman detail dan `generateStaticParams` |
| `app/api/revalidate/route.js` | Endpoint on-demand revalidation |
| `JOBSHEET.md` | Panduan praktik langkah demi langkah |
| `LEMBAR_EVALUASI.md` | Tugas pengembangan dan evaluasi |

## Environment

`.env.local.example` menyediakan secret contoh untuk praktik lokal. Jangan gunakan secret contoh pada deployment publik dan jangan commit file `.env.local`.

## Teknologi

- Next.js App Router
- React
- GSAP, Anime.js, dan Framer Motion untuk demonstrasi animasi antarmuka

## Alur belajar

1. Menjalankan dan mengamati katalog di mode production.
2. Memeriksa perilaku cache ISR 10 detik.
3. Mengubah data dan mengamati revalidasi.
4. Memahami `generateStaticParams` pada halaman detail.
5. Menguji endpoint `revalidatePath` dengan secret benar dan salah.
6. Mengerjakan tugas pengembangan dan evaluasi.

Dokumentasi resmi: [Panduan ISR Next.js 15](https://nextjs.org/docs/15/app/guides/incremental-static-regeneration).
