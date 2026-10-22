import "server-only";
import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Baca data saat halaman dibuat atau dibuat ulang.
 * Membaca file di dalam fungsi memungkinkan demonstrasi ISR lokal:
 * perubahan data akan terlihat ketika halaman direvalidasi.
 */
function readProductsFile() {
  const filePath = join(process.cwd(), "data", "products.json");
  const raw = readFileSync(filePath, "utf8");
  const products = JSON.parse(raw);

  if (!Array.isArray(products)) {
    throw new Error("data/products.json harus berisi array produk.");
  }

  return products;
}

export function getProducts() {
  return readProductsFile();
}

export function getProductById(id) {
  const numericId = Number(id);
  if (!Number.isInteger(numericId) || numericId < 1) return null;

  return readProductsFile().find((product) => product.id === numericId) ?? null;
}
