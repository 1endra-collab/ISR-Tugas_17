import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request) {
  const secret = request.nextUrl.searchParams.get("secret");
  const path = request.nextUrl.searchParams.get("path") || "/produk";

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { message: "Secret salah" },
      { status: 401 }
    );
  }

  revalidatePath(path);
  return NextResponse.json({ revalidated: true, path });
}