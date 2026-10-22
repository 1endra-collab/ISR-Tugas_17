import Link from "next/link";
import { notFound } from "next/navigation";
import BuildInfo from "@/components/BuildInfo";
import { getProductById } from "@/lib/products";

export default async function DetailProduk({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) notFound();

  return (
    <main className="container product-page">
      <p className="eyebrow">KATALOG / DETAIL PRODUK</p>
      <header className="page-heading">
        <h1>{product.nama}</h1>
        <p>Halaman detail ini dibuat secara statis dan dapat direvalidasi.</p>
      </header>

      <BuildInfo label="Detail produk terakhir dibuat pada" />

      <article className="card product-detail">
        <dl className="detail-list">
          <div>
            <dt>ID Produk</dt>
            <dd>{String(product.id).padStart(4, "0")}</dd>
          </div>
          <div>
            <dt>Harga</dt>
            <dd>
              {product.harga.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                maximumFractionDigits: 0,
              })}
            </dd>
          </div>
          <div>
            <dt>Stok</dt>
            <dd>{product.stok} unit</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{product.stok > 0 ? "Tersedia" : "Habis"}</dd>
          </div>
        </dl>
        <Link className="product-link" href="/produk">
          ← Kembali ke daftar produk
        </Link>
      </article>
    </main>
  );
}
