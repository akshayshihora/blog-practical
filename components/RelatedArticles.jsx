import related from "../data/related.json";

export default function RelatedArticles() {
  return (
    <div className="related">
      <h2 className="related-title">Related articles</h2>

      <div className="grid">
        {related?.map((r) => (
          <div className="related-card" key={r?.id}>
            <div className="img-wrap">
              <img src={r?.image} alt={r?.title} className="card-img" />
            </div>

            <h4 className="card-title">{r?.title}</h4>
            <p className="card-desc">{r?.desc}</p>
            <p className="card-author">By {r?.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
