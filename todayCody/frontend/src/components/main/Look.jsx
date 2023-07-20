export default function Look({ look, category }) {
  const { img, tag, rank } = look;
  return (
    <div className="look-content">
      <div className="img-container">
        <img src={img} alt="look-img" />
      </div>
      <div className="likes">
        <img
          src="/assets/icon/orange-heart.svg"
          className="haert"
          alt="heart-icon"
        />
        <p>23</p>
      </div>
      {category === "coder" && (
        <div className="medal">
          <img
            src={`/assets/icon/${rank === 1 ? "star" : "blackStar"}.svg`}
            alt="star-img"
          />
          <span>{rank}</span>
        </div>
      )}
      <ul className="tags">
        {tag.map((item) => (
          <li>#{item}</li>
        ))}
      </ul>
      <div className="user">김보로꼬리(30대)</div>
    </div>
  );
}
