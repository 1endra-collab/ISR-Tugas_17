import Link from "next/link";
import { getProducts } from "@/lib/products";
import BuildInfo from "@/components/BuildInfo";

export const dynamic = "force-dynamic";

function labelStok(stok) {
  if (stok === 0) return "Habis";
  if (stok < 10) return "Menipis";
  return "Tersedia";
}

export default async function ProdukSSRPage() {
  const products = await getProducts();

  return (
    <main>
      <h1>Daftar Produk — SSR</h1>
      <BuildInfo label="Halaman SSR dirender pukul" />
      <ul className="grid">
        {products.map((p) => (
          <li key={p.id} className="card">
            <Link href={`/produk/${p.id}`}>{p.nama}</Link>
            <span>Rp {p.harga.toLocaleString("id-ID")}</span>
            <small>Stok: {p.stok} ({labelStok(p.stok)})</small>
          </li>
        ))}
      </ul>
    </main>
  );
}