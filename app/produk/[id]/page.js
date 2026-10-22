// Product detail page - Client Component dengan editorial design
'use client';

import { notFound } from "next/navigation";
<<<<<<< HEAD
import BuildInfo from "@/components/BuildInfo";
<<<<<<< HEAD
// TODO (Langkah 24): import + revalidate, lihat JOBSHEET.md

// TODO (Langkah 25): tulis generateStaticParams, lihat JOBSHEET.md
=======
// TODO (Tahap 5, Langkah 24): lihat JOBSHEET.md

// TODO (Tahap 5, Langkah 24): lihat JOBSHEET.md
>>>>>>> 8082c87 (first commit)
=======
import { productsData } from "@/lib/products";
import { useEffect, useState } from 'react';

export default function DetailProduk({ params }) {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [buildTime, setBuildTime] = useState('');
>>>>>>> 9290454 (style')

  useEffect(() => {
    const time = new Date().toLocaleTimeString("id-ID", {
      timeZone: "Asia/Jakarta",
      hour12: false,
    });
    setBuildTime(time);
    
    const p = productsData.find(p => p.id === Number(id));
    setProduct(p);
  }, [id]);

  if (!product) {
    return <div style={{ padding: '4rem', textAlign: 'center' }}>Loading...</div>;
  }

  return (
    <main className="container" style={{ padding: '4rem 2rem', minHeight: '80vh' }}>
      {/* Header dengan editorial treatment */}
      <header style={{ 
        marginBottom: '2rem',
        borderLeft: '4px solid #d97706',
        paddingLeft: '1.5rem'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: '800',
          lineHeight: 1.1,
          marginBottom: '1rem',
          color: '#1f2937'
        }}>
          {product.nama}
        </h1>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#6b7280',
          lineHeight: 1.6
        }}>
          Detail produk untuk praktik Incremental Static Regeneration.
        </p>
      </header>

      {/* Metadata */}
      <div style={{ 
        fontSize: '0.875rem', 
        color: '#9ca3af',
        marginBottom: '2rem',
        borderTop: '1px solid #e5e7eb',
        paddingTop: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '48rem'
      }}>
        <span>Halaman ini dirender: <strong>{buildTime}</strong></span>
        <span>Build server: <strong>{buildTime}</strong></span>
      </div>

      {/* Product details card */}
      <article className="card" style={{ 
        padding: '2.5rem',
        marginTop: '2rem',
        backgroundColor: '#fff',
        border: '1px solid #e5e7eb'
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
          {/* Product image placeholder */}
          <div style={{
            flex: '0 0 160px',
            aspectRatio: '1/1',
            backgroundColor: '#f3f4f6',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #e5e7eb'
          }}>
            <span style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Gambar produk</span>
          </div>

          {/* Product info */}
          <div style={{ flex: 1 }}>
            <div style={{ 
              marginBottom: '1.5rem',
              padding: '1.5rem',
              backgroundColor: '#fff8f0',
              borderRadius: '12px',
              border: '1px solid #ffd8b3'
            }}>
              <h2 style={{ 
                fontSize: '1rem', 
                fontWeight: '600',
                color: '#6b7280',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Harga
              </h2>
              <div style={{ 
                fontSize: '2rem', 
                fontWeight: '800',
                color: '#d97706',
                lineHeight: 1.2
              }}>
                Rp {product.harga.toLocaleString('id-ID')}
              </div>
            </div>

            <div style={{ 
              marginBottom: '1.5rem',
              padding: '1.5rem',
              backgroundColor: '#f0fdf4',
              borderRadius: '12px',
              border: '1px solid #bbf7d0'
            }}>
              <h2 style={{ 
                fontSize: '1rem', 
                fontWeight: '600',
                color: '#166534',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Stok Tersedia
              </h2>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700',
                color: '#166534'
              }}>
                {product.stok} unit
              </div>
              {product.stok > 10 && (
                <div style={{ fontSize: '0.875rem', color: '#166534' }}>
                  <strong>✓ Stok banyak</strong>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Product ID badge */}
        <div style={{ 
          marginTop: '2rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid #e5e7eb',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
            ID Produk: <strong>{String(product.id).padStart(4, '0')}</strong>
          </span>
          <a href="/produk" style={{
            textDecoration: 'none',
            color: '#d97706',
            fontWeight: '600',
            padding: '0.75rem 1.5rem',
            border: '1px solid #d97706',
            borderRadius: '8px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.2s'
          }}>
            ← Kembali ke Daftar Produk
          </a>
        </div>
      </article>

      {/* Footer */}
      <footer style={{ 
        marginTop: '3rem',
        padding: '2rem 0',
        borderTop: '1px solid #e5e7eb',
        textAlign: 'center',
        color: '#9ca3af',
        fontSize: '0.875rem'
      }}>
        <p>© 2024 ISR Praktik • Incremental Static Regeneration Demo</p>
      </footer>
    </main>
  );
}
