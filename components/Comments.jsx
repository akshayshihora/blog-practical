"use client";
import { useState, useEffect } from "react";

export default function Comments({ comments, slug }) {
  const [allComments, setAllComments] = useState(comments || []);
  const [form, setForm] = useState({
    name: "",
    email: "",
    comment: "",
    rating: 5,
  });

  // ERROR STATE FOR EACH FIELD
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    comment: "",
    rating: "",
  });

  // Load comments dynamically
  useEffect(() => {
    fetch(`/api/comments?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => setAllComments(data));
  }, [slug]);

  // Validation function
  const validateForm = () => {
    let valid = true;
    let newErrors = { name: "", email: "", comment: "", rating: "" };

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    }

    if (!form.comment.trim()) {
      newErrors.comment = "Comment is required";
      valid = false;
    }

    if (!form.rating || form.rating < 1) {
      newErrors.rating = "Please select a rating.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Submit comment
  const handleSubmit = async () => {
    if (!validateForm()) return; // stop if errors
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, slug }),
    });

    const newComment = await res.json();
    setAllComments([...allComments, newComment]);

    // Reset form & errors
    setForm({ name: "", email: "", comment: "", rating: 5 });
    setErrors({ name: "", email: "", comment: "", rating: "" });
  };

  return (
    <div className="comments">
      <h3 className="comment-title">Comments</h3>

      {allComments.map((c, i) => (
        <div className="comment" key={i}>
          <img src="/comment.png" className="comment-avatar" />
          <div className="comment-body">
            <div className="comment-top-row">
              <div className="comment-inner-top">
                <strong className="comment-name">{c.name}</strong>

                <div className="stars-block">
                  <span className="stars">
                    {[...Array(c.rating)].map((_, idx) => (
                      <img key={idx} src="/fill-star.svg" className="star-icon" />
                    ))}
                  </span>
                  <span className="rating-number">({c.rating}.0)</span>
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
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && <p style={{ color: "red", fontSize: "14px" }}>{errors.name}</p>}

            <label className="input-label">Email</label>
            <input
              type="email"
              className="input-large"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && <p style={{ color: "red", fontSize: "14px" }}>{errors.email}</p>}
          </div>

          <div className="right-fields">
            <label className="input-label">Comment</label>
            <textarea
              className="textarea-large"
              placeholder="Write your comment here..."
              value={form.comment}
              onChange={(e) => setForm({ ...form, comment: e.target.value })}
            ></textarea>
            {errors.comment && <p style={{ color: "red", fontSize: "14px" }}>{errors.comment}</p>}
          </div>
        </div>

        <div className="rating-container">
          <div className="inner-rating-container">
            <p className="rating-label">
              Rate The Usefulness Of The Article
              {form.rating && (
                <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
                  (Selected: {form.rating})
                </span>
              )}
            </p>

            <div className="rating-actions">
              <img src="/engry.svg" className="emoji"
                onClick={() => setForm({ ...form, rating: 1 })} />
              <img src="/orange-engry.svg" className="emoji"
                onClick={() => setForm({ ...form, rating: 2 })} />
              <img src="/yellow-engry.svg" className="emoji"
                onClick={() => setForm({ ...form, rating: 3 })} />
              <img src="/heart-happy.svg" className="emoji"
                onClick={() => setForm({ ...form, rating: 4 })} />

              <button className="good-btn"
                onClick={() => setForm({ ...form, rating: 5 })}>
                <img src="/star-happy.svg" className="good-icon" />
                Good
              </button>
            </div>

            {errors.rating && (
              <p style={{ color: "red", fontSize: "14px" }}>{errors.rating}</p>
            )}
          </div>

          <button className="send-btn" onClick={handleSubmit}>
            <img src="/message.svg" className="send-icon" />
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
