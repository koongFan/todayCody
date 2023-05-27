import Look from "./Look";

export default function Trend({ trend, title }) {
  return (
    <div className="trend-container">
      <h3 className="trend-title">{title}</h3>
      <div className="trend-look">
        {trend.map((look) => (
          <Look look={look} />
        ))}
      </div>
    </div>
  );
}
