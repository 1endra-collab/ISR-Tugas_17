'use client';

import Link from "next/link";
import AnimatedReveal from "@/components/AnimatedReveal";
import { ScrollButton } from "@/components/ScrollButton";

export default function Home() {
  return (
    <main style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", padding: "3rem 1.5rem 4rem" }}>
      <div className="hero-content" style={{ width: "100%", textAlign: "center", maxWidth: "760px", margin: "auto" }}>
        <AnimatedReveal delay={0} duration={1} className="hero-text">
          <p className="eyebrow">PRAKTIK NEXT.JS / APP ROUTER</p>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.8rem, 8vw, 5.5rem)", fontWeight: 800, lineHeight: 1.02, letterSpacing: "-.055em", marginBottom: "1.5rem" }}>
            Praktik ISR
          </h1>
        </AnimatedReveal>

        <AnimatedReveal delay={0.2} duration={0.8} className="hero-text">
          <p style={{ fontSize: "clamp(1.1rem, 2.6vw, 1.45rem)", color: "var(--color-text-primary)", marginBottom: "1rem" }}>
            Incremental Static Regeneration
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={0.35} duration={0.7} className="hero-text">
          <p style={{ fontSize: "1rem", maxWidth: "38rem", margin: "0 auto 2rem", lineHeight: 1.8 }}>
            Pelajari bagaimana halaman statis dapat diperbarui secara berkala tanpa membangun ulang seluruh aplikasi.
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={0.5} duration={0.6} className="hero-text">
          <ScrollButton targetId="products-section">Lihat cara memulai</ScrollButton>
        </AnimatedReveal>

        <AnimatedReveal delay={0.7} duration={0.8} className="hero-float">
          <div style={{ margin: "3rem auto 0", padding: "1.25rem 1.5rem", textAlign: "left", maxWidth: "36rem", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
            <p style={{ margin: 0, fontSize: ".95rem" }}>
              Mulai dari katalog produk, lalu ikuti instruksi di <Link href="https://github.com/syauqiazka/ISR/blob/main/JOBSHEET.md">JOBSHEET.md</Link>.
            </p>
          </div>
        </AnimatedReveal>
      </div>

      <section id="products-section" style={{ width: "100%", maxWidth: "760px", margin: "4rem auto 0", paddingTop: "2rem", borderTop: "1px solid var(--color-border)" }}>
        <p className="eyebrow">MULAI PRAKTIK</p>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", marginBottom: ".75rem" }}>Amati katalog, lalu ubah datanya</h2>
        <p>Halaman katalog menampilkan waktu pembuatan server dan data yang akan kamu gunakan untuk menguji ISR.</p>
        <Link className="btn-primary" href="/produk">Buka katalog produk <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}
