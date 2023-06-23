import Look from "./Look";

export default function Trend({ trend, title, category }) {
  return (
    <div className="trend-container">
      {category === "trend" ? (
        <h3 className="trend-title">{title}</h3>
      ) : (
        <div className="title">
          <h2>이번주 오늘코더</h2>
          <p>(23.05.07~23.05.13)</p>
        </div>
      )}
      <div className="trend-look">
        {trend.map((look) => (
          <Look look={look} category={category} />
        ))}
      </div>
    </div>
  );
}
