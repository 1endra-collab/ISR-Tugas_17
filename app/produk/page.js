// Product list page - Client Component with educational editorial design
'use client';

import Link from "next/link";
import { productsData } from "@/lib/products";
import { useState, useEffect } from 'react';

export default function ProdukPage() {
  const [buildTime, setBuildTime] = useState('');

  useEffect(() => {
    const time = new Date().toLocaleTimeString("id-ID", {
      timeZone: "Asia/Jakarta",
      hour12: false,
    });
    setBuildTime(time);
  }, []);

  return (
    <main className="container" style={{ minHeight: '80vh', padding: '4rem 2rem' }}>
      {/* Hero with editorial treatment */}
      <header style={{ 
        marginBottom: '3rem',
        borderLeft: '4px solid #d97706',
        paddingLeft: '1.5rem',
        maxWidth: '48rem'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: '800',
          lineHeight: 1.1,
          marginBottom: '1rem',
          color: '#1f2937'
        }}>
          Daftar Produk
        </h1>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#6b7280',
          lineHeight: 1.6,
          maxWidth: '32rem'
        }}>
          Katalog produk digital untuk praktik Incremental Static Regeneration. 
          Setiap produk dirender secara statis dengan kemampuan update otomatis.
        </p>
      </header>

      {/* Metadata footer (not in main content flow) */}
      <div style={{ 
        fontSize: '0.875rem', 
        color: '#9ca3af',
        marginBottom: '2.5rem',
        borderTop: '1px solid #e5e7eb',
        paddingTop: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '48rem'
      }}>
        <span>Terakhir dirender: <strong>{buildTime}</strong></span>
        <span>Build server: <strong>{buildTime}</strong></span>
      </div>

      {/* Product catalog with editorial grid */}
      <ol style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem',
        listStyle: 'none',
        counterReset: 'product'
      }}>
        {productsData.map((p) => (
          <li 
            key={p.id} 
            style={{ 
              counterIncrement: 'product'
            }}
          >
            <article className="card" style={{ height: '100%' }}>
              <Link 
                href={`/produk/${p.id}`}
                style={{ 
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                {/* Product number badge */}
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: '#d97706',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  #{String(p.id).padStart(2, '0')} • Product
                </div>

                {/* Product name */}
                <h3 style={{ 
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  marginBottom: '0.75rem',
                  lineHeight: 1.3,
                  color: '#1f2937'
                }}>
                  {p.nama}
                </h3>

                {/* Price and stock */}
                <div style={{ 
                  marginTop: 'auto',
                  borderTop: '1px solid #e5e7eb',
                  paddingTop: '1rem'
                }}>
                  <div style={{ 
                    fontSize: '1.5rem',
                    fontWeight: '800',
                    color: '#d97706',
                    marginBottom: '0.25rem'
                  }}>
                    Rp {p.harga.toLocaleString('id-ID')}
                  </div>
                  <small style={{ 
                    fontSize: '0.875rem',
                    color: '#6b7280',
                    display: 'block'
                  }}>
                    Stok: <strong>{p.stok}</strong> unit
                  </small>
                </div>

                {/* Hover indicator */}
                <div style={{
                  marginTop: '0.75rem',
                  fontSize: '0.875rem',
                  color: '#d97706',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}>
                  <span>Lihat Detail</span>
                  <span style={{ opacity: 0, transition: 'opacity 0.2s' }}>→</span>
                </div>
              </Link>
            </article>
          </li>
        ))}
      </ol>

      {/* Footer note */}
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
