import BuildInfo from "@/components/BuildInfo";

export default async function ArtikelPage() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
    { next: { revalidate: 30 } }
  );

  if (!res.ok) {
    throw new Error("Gagal mengambil data artikel dari JSONPlaceholder");
  }

  const posts = await res.json();

  return (
    <main>
      <h1>Artikel dari API</h1>
      <BuildInfo label="Halaman artikel dirender pukul" />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}