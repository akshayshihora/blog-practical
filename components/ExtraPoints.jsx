export default function ExtraPoints({ points }) {
  return (
    <div className="extra-points">
      {points?.map((p, i) => (
        <p className="paragraph" key={i}>{p}</p>
      ))}
      <div className="mid-divider"></div>
    </div>
  );
}
