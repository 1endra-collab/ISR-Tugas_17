import Link from "next/link";
import { getProducts } from "@/lib/products";
import BuildInfo from "@/components/BuildInfo";

// TODO (Tahap 3, Langkah 13): tulis export const revalidate = ... di sini (lihat JOBSHEET.md)
export const revalidate = 10;


export default async function ProdukPage() {
  const products = await getProducts();

  return (
    <main>
      <h1>Daftar Produk</h1>
      <BuildInfo label="Halaman ini dirender pukul" />
      <ul className="grid">
        {products.map((p) => (
          <li key={p.id} className="card">
            <Link href={`/produk/${p.id}`}>{p.nama}</Link>
            <span>Rp {p.harga.toLocaleString("id-ID")}</span>
            <small>Stok: {p.stok}</small>
          </li>
        ))}
      </ul>
    </main>
  );
}
