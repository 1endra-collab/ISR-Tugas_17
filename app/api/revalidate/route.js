import { NextResponse } from "next/server";
<<<<<<< HEAD
// TODO (Langkah 35): lihat JOBSHEET.md
=======
// TODO (Tahap 6, Langkah 34): lihat JOBSHEET.md
>>>>>>> 8082c87 (first commit)

export async function GET(request) {
  const secret = request.nextUrl.searchParams.get("secret");
  const path = request.nextUrl.searchParams.get("path") || "/produk";

<<<<<<< HEAD
  // TODO (Langkah 35): lihat JOBSHEET.md
=======
  // TODO (Tahap 6, Langkah 34): lihat JOBSHEET.md
>>>>>>> 8082c87 (first commit)
  // 1. Jika secret tidak sama dengan process.env.REVALIDATE_SECRET -> balas status 401
  // 2. Panggil revalidatePath(path)
  // 3. Balas JSON { revalidated: true, path }

  return NextResponse.json({ message: "Belum diimplementasikan" });
}
