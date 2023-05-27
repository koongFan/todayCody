export default function Marquee({ reverse }) {
  return (
    <div className="marquee">
      <div className="track">
        <div className={`content ${reverse && "reverse"}`}>
          <span>OH!CO</span>
          <span>OH!CO</span>
          <span>OH!CO</span>
          <span>OH!CO</span>
          <span>OH!CO</span>
          <span>OH!CO</span>
          <span>OH!CO</span>
          <span>OH!CO</span>
          <span>OH!CO</span>
          <span>OH!CO</span>
          <span>OH!CO</span>
          <span>OH!CO</span>
          <span>OH!CO</span>
          <span>OH!CO</span>
          <span>OH!CO</span>
          <span>OH!CO</span>
          <span>OH!CO</span>
        </div>
        <div className={`content ${reverse && "reverse"}`}>
          <span>OH!CO</span>
          <span>OH!CO</span>
          <span>OH!CO</span>
          <span>OH!CO</span>
          <span>OH!CO</span>
          <span>OH!CO</span>
          <span>OH!CO</span>
          <span>OH!CO</span>
          <span>OH!CO</span>
          <span>OH!CO</span>
          <span>OH!CO</span>
          <span>OH!CO</span>
          <span>OH!CO</span>
          <span>OH!CO</span>
          <span>OH!CO</span>
          <span>OH!CO</span>
          <span>OH!CO</span>
        </div>
      </div>
    </div>
  );
}
