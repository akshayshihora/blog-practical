import { useState } from "react";

export default function AboutAuthor({ author }) {
  const [index, setIndex] = useState(0);
  const authors = Array.isArray(author) ? author : [author];

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % authors.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + authors.length) % authors.length);
  };

  const current = authors[index];

  return (
    <>
      <div className="about-center">
        <h2 className="about-center-title">About {current.name}</h2>
        <img src={current.image} className="about-center-img" />
        <p className="about-center-text">{current.bio}</p>
      </div>

      <div className="prev-next">
        <div className="prev-block">
          <button className="prev-btn" onClick={prevSlide}>
            <img src="/backarraow.svg" className="arrow-icon" /> Previous
          </button>

          <p className="prev-title">
            {authors[(index - 1 + authors.length) % authors.length]?.name}
          </p>
        </div>

        <div className="next-block">
          <button className="next-btn" onClick={nextSlide}>
            Next <img src="/rightarrow.svg" className="arrow-icon" />
          </button>

          <p className="next-title">
            {authors[(index + 1) % authors.length]?.name}
          </p>
        </div>
      </div>
    </>
  );
}
