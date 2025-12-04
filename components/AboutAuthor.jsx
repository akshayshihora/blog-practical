export default function AboutAuthor({ author }) {
  return (
    <div className="about-center">
      <h2 className="about-center-title">About {author}</h2>
      <img src="/alex.png" className="about-center-img" />

      <p className="about-center-text">
        With over a decade in fitness, Alex specializes in strength training.
        Certified by NASM, he designs challenging yet achievable workout
        programs. His passion is helping clients build strength and confidence.
        Outside the gym, Alex enjoys running and outdoor adventures.
      </p>
    </div>
  );
}
