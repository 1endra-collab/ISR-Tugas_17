# Praktik Incremental Static Regeneration (ISR)

Repository pembelajaran **Incremental Static Regeneration (ISR)** menggunakan Next.js App Router. Proyek ini sengaja memiliki beberapa TODO agar kamu dapat mengerjakan praktik secara bertahap mengikuti `JOBSHEET.md`.

## Prasyarat

- Node.js 20 LTS atau versi LTS yang kompatibel dengan Next.js 15.
- Git.
- Visual Studio Code atau editor kode lain.

## Menjalankan proyek

```powershell
git clone https://github.com/syauqiazka/ISR.git
cd ISR
npm install
Copy-Item .env.local.example .env.local
npm run build
npm start
```

Buka [http://localhost:3000](http://localhost:3000). Untuk praktik, ikuti **JOBSHEET.md dari Langkah 1 sampai selesai**. Setelah itu, kerjakan **LEMBAR_EVALUASI.md**.

Di PowerShell, perintah penyalinan environment di atas sesuai untuk Windows. Di macOS/Linux, gunakan:

```bash
cp .env.local.example .env.local
```

## Penting: cara mengamati ISR

Pengujian cache dan revalidasi dilakukan dengan server production lokal:

```bash
npm run build
npm start
```

Jangan gunakan `npm run dev` untuk menyimpulkan perilaku cache production; mode development memiliki perilaku rendering dan cache yang berbeda.

Setiap kali kamu mengubah kode JavaScript, hentikan server dengan `Ctrl+C`, lalu jalankan ulang build dan server. Saat mengubah `data/products.json), praktik lokal ini membaca data tersebut ketika halaman dibuat ulang sehingga kamu dapat mengamati revalidasi tanpa build ulang.

> **Catatan:** pembacaan file JSON dari disk ini dirancang untuk praktikum lokal. Untuk aplikasi production sungguhan, simpan data yang dapat berubah di database atau API, bukan mengandalkan perubahan file pada server deployment.

## Struktur penting

| File | Fungsi |
|---|---|
| `data/products.json` | Data katalog yang diubah selama praktik |
| `lib/products.js` | Membaca data produk |
| `components/BuildInfo.js` | Menampilkan waktu saat HTML dibuat di server |
| `app/produk/page.js` | Halaman katalog; titik awal praktik ISR berbasis waktu |
| `app/produk/[id]/page.js` | Halaman detail; titik praktik `generateStaticParams` |
| `app/api/revalidate/route.js` | Titik praktik on-demand revalidation |
| `JOBSHEET.md` | Panduan langkah demi langkah |
| `LEMBAR_EVALUASI.md` | Tugas pengembangan dan evaluasi |

## Environment

`.env.local.example` menyediakan secret khusus untuk praktik lokal. Nilainya hanya contoh; jangan gunakan secret contoh pada deployment publik. Jangan commit file `.env.local`.

## Teknologi

- Next.js App Router
- React
- GSAP, Anime.js, dan Framer Motion untuk demonstrasi animasi antarmuka

## Alur belajar

1. Mengamati halaman statis sebelum ISR.
2. Mengaktifkan `revalidate` untuk katalog.
3. Menguji pembaruan data melalui cache ISR.
4. Mengaktifkan pre-render halaman detail menggunakan `generateStaticParams`.
5. Menerapkan endpoint on-demand revalidation dengan `revalidatePath`.
6. Menyelesaikan evaluasi dan tugas pengembangan.

Dokumentasi resmi: [Panduan ISR Next.js](https://nextjs.org/docs/15/app/guides/incremental-static-regeneration).
