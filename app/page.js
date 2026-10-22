'use client';

import Link from "next/link";
import AnimatedReveal from "@/components/AnimatedReveal";
import { ScrollButton } from "@/components/ScrollButton";

export default function Home() {
  return (
    <main className="home-page">
      <div className="hero-content">
        <AnimatedReveal delay={0} duration={0.8} className="hero-text">
          <p className="eyebrow">PRAKTIK NEXT.JS / APP ROUTER</p>
          <h1 className="hero-title">Praktik ISR</h1>
        </AnimatedReveal>

        <AnimatedReveal delay={0.15} duration={0.7} className="hero-text">
          <p className="hero-subtitle">Incremental Static Regeneration</p>
        </AnimatedReveal>

        <AnimatedReveal delay={0.25} duration={0.7} className="hero-text">
          <p className="hero-description">
            Pelajari bagaimana halaman statis dapat diperbarui secara berkala tanpa
            membangun ulang seluruh aplikasi.
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={0.35} duration={0.6} className="hero-text">
          <ScrollButton targetId="products-section">Lihat cara memulai</ScrollButton>
        </AnimatedReveal>

        <AnimatedReveal delay={0.45} duration={0.7} className="hero-float">
          <div className="hero-note">
            <p>
              Mulai dari katalog produk, lalu ikuti instruksi di{" "}
              <Link href="https://github.com/syauqiazka/ISR/blob/main/JOBSHEET.md">
                JOBSHEET.md
              </Link>.
            </p>
          </div>
        </AnimatedReveal>
      </div>

      <section id="products-section" className="home-start-section">
        <p className="eyebrow">MULAI PRAKTIK</p>
        <h2>Amati katalog, lalu ubah datanya</h2>
        <p>
          Halaman katalog menampilkan waktu pembuatan server dan data yang akan
          kamu gunakan untuk menguji ISR.
        </p>
        <Link className="btn-primary" href="/produk">
          Buka katalog produk <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
