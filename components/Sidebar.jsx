const guides = [
  { id: 1, name: "Rachel Moss", place: "Jombang, Jawa timur", img: "/guid-1.png", star: 4 },
  { id: 2, name: "Danielle Marsh", place: "Wonosobo, Jawa tengah", img: "/guid-2.png", star: 3 },
  { id: 3, name: "Kang Haerin", place: "Bandung, Jawa barat", img: "/guid-3.png", star: 4 },
];

export default function Sidebar() {
  return (
    <div className="right">
      <div className="sidebar-box">

        <h3 className="sidebar-title">Explore more</h3>

        {/* Cards */}
        {[1, 2, 3]?.map((i) => (
          <div className="explore-card" key={i}>
            <img src={`/sideimage${i === 3 ? "2" : ""}.png`} className="explore-big-img" />
            <div className="explore-meta">
              <span className="explore-category">Culinary</span>
              <span className="explore-date">13 Jun 2022</span>
            </div>
            <p className="explore-big-title">
              Two women in local stand are chatting during morning..
            </p>
          </div>
        ))}

        <div className="sidebar-divider"></div>

        <h3 className="sidebar-title">Your Guides</h3>

        <div className="guides-list">
          {guides?.map((g, i) => (
            <div className="guides-row" key={i}>
              <div className="guides-data">
                <img src={g?.img} className="guide-img" />
                <div>
                  <p className="gname">{g?.name}</p>
                  <p className="grole">
                    <img src="/location.svg" /> {g?.place}
                  </p>
                </div>
              </div>

              <div className="guid-stars">
                {[...Array(5)].map((_, idx) => (
                  <img
                    key={idx}
                    src={idx < g?.star ? "/fill-star.svg" : "/empty-star.svg"}
                    className="star-icon"
                  />
                ))}
                <span className="stars">({g?.star}.0)</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
