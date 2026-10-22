// Home page with cinematic animations - Client Component
'use client';

import Link from "next/link";
import AnimatedReveal from "@/components/AnimatedReveal";
import { ScrollButton } from "@/components/ScrollButton";

export default function Home() {
  return (
    <main style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: '48px' }}>
      <div className="hero-content" style={{ textAlign: 'center', maxWidth: '720px' }}>
        <AnimatedReveal delay={0} duration={1} className="hero-text">
          <h1 style={{ 
            fontSize: '4rem', 
            fontWeight: '800', 
            lineHeight: 1.1, 
            marginBottom: '24px',
            background: 'linear-gradient(135deg, #ff8c3c 0%, #ff6b35 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Praktik ISR
          </h1>
        </AnimatedReveal>
        
        <AnimatedReveal delay={0.3} duration={0.8} className="hero-text">
          <p style={{ 
            fontSize: '1.5rem', 
            color: '#555', 
            marginBottom: '32px',
            fontWeight: '400'
          }}>
            Incremental Static Regeneration
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={0.6} duration={0.7} className="hero-text">
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#777', 
            marginBottom: '48px',
            lineHeight: 1.6
          }}>
            Demo aplikasi Next.js 15 dengan animasi premium menggunakan GSAP, Anime.js, dan Framer Motion.
            Refresh halaman produk untuk melihat ISR in action.
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={0.9} duration={0.6} className="hero-text">
          <ScrollButton targetId="products-section">
            Lihat Produk
          </ScrollButton>
        </AnimatedReveal>

        <AnimatedReveal delay={1.2} duration={0.8} className="hero-float">
          <div style={{ 
            marginTop: '64px', 
            padding: '24px', 
            background: 'linear-gradient(135deg, #fff8f0 0%, #ffe8cc 100%)',
            borderRadius: '16px',
            border: '1px solid #ffd8b3'
          }}>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#888' }}>
              <span style={{ fontWeight: '600', color: '#ff8c3c' }}>💡 Tip:</span> Buka <Link href="/produk" style={{ color: '#ff8c3c', textDecoration: 'underline' }}>halaman Produk</Link> dan ikuti JOBSHEET.md.
            </p>
          </div>
        </AnimatedReveal>
      </div>
    </main>
  );
}
