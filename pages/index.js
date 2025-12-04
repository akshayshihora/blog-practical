import Link from "next/link";
import posts from "../data/posts.json";

export default function Home() {
  return (
    <main className="article-container">
      <h1 className="page-title">Articles</h1>

      <div className="posts-grid">
        {posts.map((p) => (
          <div className="post-card" key={p.slug}>
            <Link href={`/posts/${p.slug}`} className="post-title">
              {p.title}
            </Link>

            <p className="post-desc">{p.desc}</p>

            <div className="post-footer">
              <span className="post-author">By {p.author}</span>
              <span className="post-date">{p.date}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
