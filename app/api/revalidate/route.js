import { NextResponse } from "next/server";

export async function GET(request) {
  // TODO (Tahap 6, Langkah 35): import revalidatePath dari "next/cache".
  // TODO: baca secret dan path dari query string.
  // TODO: validasi secret menggunakan process.env.REVALIDATE_SECRET.
  // TODO: panggil revalidatePath(path) jika secret benar.

  return NextResponse.json({ message: "Belum diimplementasikan" });
}
