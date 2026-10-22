// Client-side product data loader
// Uses fetch instead of fs for client compatibility

export async function getProductsClient() {
  // Load from the same JSON file via fetch
  const res = await fetch('http://localhost:3000/data/products.json');
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}
