export default function ArticleBody({ post }) {
  return (
    <>
      <div className="top-info-bar">
        <div className="author-left">
          <img src="/alex.png" className="author-icon" />
          <span className="author-name">{post?.author}</span>
        </div>

        <div className="post-date">{post?.date}</div>
      </div>

      <div className="info-divider"></div>

      <div className="article-content">
        {post?.paragraphs?.map((t, i) => (
          <p className="paragraph" key={i}>{t}</p>
        ))}

        <div className="mid-divider"></div>

        <p className="center-bold-text">{post?.authorBio}</p>

        <div className="mid-divider"></div>

        <p className="paragraph">{post?.authorBio}</p>
      </div>
    </>
  );
}
