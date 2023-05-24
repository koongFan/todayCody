import Ranker from "./Ranker";

export default function Coder({ codyRanker }) {
  return (
    <div className="coder-container">
      <div className="left">
        <h3 className="coder-title">
          이번주 <br />
          <span>오늘코더</span>
        </h3>
        <p>(23.05.7~23.05.13 기준)</p>
      </div>
      <div className="right">
        {codyRanker.map((item) => (
          <Ranker coder={item} />
        ))}
      </div>
    </div>
  );
}
