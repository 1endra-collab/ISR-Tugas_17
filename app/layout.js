// Root layout with global navigation and animation wrapper
import { Inter } from 'next/font/google';
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata = { 
  title: "ISR - Praktik Incremental Static Regeneration",
  description: "ISR (Incremental Static Regeneration) Demo - Next.js 15"
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="antialiased">
      <body className={inter.className} style={{ position: 'relative', overflowX: 'hidden' }}>
        <nav style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          padding: '16px 32px',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #ffd8b3',
          zIndex: 1000,
          boxShadow: '0 2px 15px rgba(255, 140, 60, 0.1)',
          display: 'flex',
          gap: '24px',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Link href="/" style={{
            textDecoration: 'none',
            color: '#333',
            fontWeight: '600',
            padding: '8px 16px',
            borderRadius: '8px',
            transition: 'all 0.3s ease'
          }}>Beranda</Link>
          <Link href="/produk" style={{
            textDecoration: 'none',
            color: '#333',
            fontWeight: '600',
            padding: '8px 16px',
            borderRadius: '8px',
            transition: 'all 0.3s ease'
          }}>Produk</Link>
        </nav>
        <main style={{ 
          position: 'relative', 
          zIndex: 1, 
          paddingTop: '100px',
          minHeight: '80vh'
        }}>
          {children}
        </main>
      </body>
    </html>
  );
}
