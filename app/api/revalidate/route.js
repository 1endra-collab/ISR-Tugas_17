import { NextResponse } from "next/server";
// TODO (Langkah 35): lihat JOBSHEET.md

export async function GET(request) {
  const secret = request.nextUrl.searchParams.get("secret");
  const path = request.nextUrl.searchParams.get("path") || "/produk";

  // TODO (Langkah 35): lihat JOBSHEET.md
  // 1. Jika secret tidak sama dengan process.env.REVALIDATE_SECRET -> balas status 401
  // 2. Panggil revalidatePath(path)
  // 3. Balas JSON { revalidated: true, path }

  return NextResponse.json({ message: "Belum diimplementasikan" });
}
