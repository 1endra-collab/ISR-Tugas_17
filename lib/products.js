import { promises as fs } from "fs";
import path from "path";

const file = path.join(process.cwd(), "data", "products.json");

// Membaca data dari file JSON (simulasi database/CMS)
export async function getProducts() {
  const raw = await fs.readFile(file, "utf-8");
  return JSON.parse(raw);
}

export async function getProductById(id) {
  const all = await getProducts();
  return all.find((p) => p.id === Number(id)) ?? null;
}
