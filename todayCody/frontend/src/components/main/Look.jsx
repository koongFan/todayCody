export default function Look({ look, category }) {
  const { img, tag } = look;
  return (
    <div className="look-content">
      <div className="img-container">
        <img src={img} alt="look-img" />
      </div>
      <div className="likes">
        <img src="/icons/heart.svg" className="haert" alt="heart-icon" />

        <p>23</p>
      </div>
      {category === "coder" && <img src="/icons/star.png" alt="star-img" />}
      <ul className="tags">
        {tag.map((item) => (
          <li>#{item}</li>
        ))}
      </ul>
      <div className="user">김보로꼬리(30대)</div>
    </div>
  );
}
