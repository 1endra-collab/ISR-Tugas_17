import Link from "next/link";
import "./globals.css";

export const metadata = { title: "Jobsheet ISR - Next.js" };

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <nav>
          <Link href="/">Beranda</Link>
          <Link href="/produk">Produk</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
