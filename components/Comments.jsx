export default function Comments({ comments }) {
  return (
    <div className="comments">
      <h3 className="comment-title">Comments</h3>

      {comments?.map((c, i) => (
        <div className="comment" key={i}>
          <img src="/comment.png" className="comment-avatar" />
          <div className="comment-body">
            <div className="comment-top-row">
              <div className="comment-inner-top">
                <strong className="comment-name">{c.name}</strong>

                <div className="stars-block">
                  <span className="stars">
                    {[...Array(5)].map((_, index) => (
                      <img
                        key={index}
                        src="/fill-star.svg"
                        className="star-icon"
                      />
                    ))}
                  </span>
                  <span className="rating-number">(5.0)</span>
                </div>
              </div>
              <span className="explore-date">{c.date}</span>
            </div>
            <p className="comment-text">{c.comment}</p>
          </div>
        </div>
      ))}
      <div className="add-comment">
        <h4 className="comment-title">Add a Comment</h4>
        <div className="comment-form-grid">
          <div className="left-fields">
            <label className="input-label">Name</label>
            <input
              type="text"
              className="input-large"
              placeholder="Enter your name"
            />
            <label className="input-label">Email</label>
            <input
              type="email"
              className="input-large"
              placeholder="Enter your email"
            />
          </div>
          <div className="right-fields">
            <label className="input-label">Comment</label>
            <textarea
              className="textarea-large"
              placeholder="Write your comment here..."
            ></textarea>
          </div>
        </div>
        <div className="rating-container">
          <div className="inner-rating-container">
            <p className="rating-label">Rate The Usefulness Of The Article</p>
            <div className="rating-actions">
              <img src="/engry.svg" className="emoji" />
              <img src="/orange-engry.svg" className="emoji" />
              <img src="/yellow-engry.svg" className="emoji" />
              <img src="/heart-happy.svg" className="emoji" />

              <button className="good-btn">
                <img src="/star-happy.svg" className="good-icon" />
                Good
              </button>
            </div>
          </div>
          <button className="send-btn">
            <img src="/message.svg" className="send-icon" />
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
