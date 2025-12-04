export default function PrevNext({ previous, next }) {
  return (
    <div className="prev-next">
      <div className="prev-block">
        <button className="prev-btn">
          <img src="/backarraow.svg" className="arrow-icon" /> Previous
        </button>
        <p className="prev-title">{previous}</p>
      </div>

      <div className="next-block">
        <button className="next-btn">
          Next <img src="/rightarrow.svg" className="arrow-icon" />
        </button>
        <p className="next-title">{next}</p>
      </div>
    </div>
  );
}
