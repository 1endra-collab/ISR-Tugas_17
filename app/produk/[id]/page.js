import { notFound } from "next/navigation";
import { getProducts, getProductById } from "@/lib/products";
import BuildInfo from "@/components/BuildInfo";

export const revalidate = 10;
export const dynamicParams = false;

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ id: String(p.id) }));
}

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