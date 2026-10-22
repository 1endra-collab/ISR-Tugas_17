import { notFound } from "next/navigation";
import BuildInfo from "@/components/BuildInfo";
<<<<<<< HEAD
// TODO (Langkah 24): import + revalidate, lihat JOBSHEET.md

// TODO (Langkah 25): tulis generateStaticParams, lihat JOBSHEET.md
=======
// TODO (Tahap 5, Langkah 24): lihat JOBSHEET.md

// TODO (Tahap 5, Langkah 24): lihat JOBSHEET.md
>>>>>>> 8082c87 (first commit)

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
