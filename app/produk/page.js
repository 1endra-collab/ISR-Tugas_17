import Link from "next/link";
import BuildInfo from "@/components/BuildInfo";
import { getProducts } from "@/lib/products";

// TODO (Tahap 3, Langkah 13): tambahkan export const revalidate = ... di sini.

export default function ProdukPage() {
  const products = getProducts();

  return (
    <main className="container product-page">
      <header className="page-heading">
        <p className="eyebrow">PRAKTIK NEXT.JS / ISR</p>
        <h1>Daftar Produk</h1>
        <p>
          Katalog contoh untuk mengamati cache, waktu pembuatan halaman, dan
          pembaruan data melalui Incremental Static Regeneration.
        </p>
      </header>

      <BuildInfo label="Katalog terakhir dibuat pada" />

      <ol className="product-grid">
        {products.map((product) => (
          <li key={product.id}>
            <article className="card product-card">
              <p className="product-number">
                PRODUK {String(product.id).padStart(2, "0")}
              </p>
              <h2>{product.nama}</h2>
              <p className="product-price">
                {product.harga.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  maximumFractionDigits: 0,
                })}
              </p>
              <p className="product-stock">
                Stok: <strong>{product.stok}</strong> unit
              </p>
              <Link className="product-link" href={`/produk/${product.id}`}>
                Lihat detail <span aria-hidden="true">↗</span>
              </Link>
            </article>
          </li>
        ))}
      </ol>

      <footer className="page-footer">
        Data contoh dibaca dari <code>data/products.json</code>.
      </footer>
    </main>
  );
}
