import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const path = searchParams.get("path") || "/produk";
  const expectedSecret = process.env.REVALIDATE_SECRET;

  if (!expectedSecret || secret !== expectedSecret) {
    return NextResponse.json(
      { revalidated: false, message: "Secret tidak valid." },
      { status: 401 },
    );
  }

  // Praktikum ini hanya mengizinkan invalidasi halaman katalog.
  if (!path.startsWith("/produk") || path.includes("..")) {
    return NextResponse.json(
      { revalidated: false, message: "Path tidak diizinkan." },
      { status: 400 },
    );
  }

  revalidatePath(path);

  return NextResponse.json({
    revalidated: true,
    path,
    message: "Path ditandai untuk dibuat ulang saat diminta berikutnya.",
  });
}
