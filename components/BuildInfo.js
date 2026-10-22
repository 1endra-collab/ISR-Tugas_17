// Server Component: waktu ini dibuat saat HTML halaman dirender di server.
export default function BuildInfo({ label = "Halaman dibuat pada" }) {
  const waktu = new Date().toLocaleTimeString("id-ID", {
    timeZone: "Asia/Jakarta",
    hour12: false,
  });

  return (
    <p className="info-box" aria-label={label}>
      <strong>{label}</strong>
      <time>{waktu} WIB</time>
    </p>
  );
}
