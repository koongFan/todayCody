import Ranker from "./Ranker";

export default function Coder({ codyRanker }) {
  return (
    <div className="trend-container">
      <div className="title">
        <h3 className="trend-title">이번주 오늘코더</h3>
        <p>(23.05.07~23.05.13 기준)</p>
      </div>
      <div className="trend-look">
        {codyRanker.map((coder) => (
          <Ranker coder={coder} />
        ))}
      </div>
    </div>
  );
}
