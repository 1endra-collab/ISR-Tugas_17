// Server Component: jam ini dihitung SAAT HALAMAN DIRENDER (bukan saat dibuka di browser)
export default function BuildInfo({ label }) {
  const waktu = new Date().toLocaleTimeString("id-ID", {
    timeZone: "Asia/Jakarta",
    hour12: false,
  });
  return (
    <p className="info">
      {label}: <strong>{waktu}</strong>
    </p>
  );
}
