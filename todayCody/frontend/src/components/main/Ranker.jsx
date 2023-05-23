import { IoIosHeart } from "react-icons/io";

export default function Ranker({ coder }) {
  const { img, tag, likes, name, rank, age } = coder;
  return (
    <div className="coder">
      <div className="coder-content">
        <div className="img-container">
          <img src={img} alt={name} />
        </div>
        <div className="coder-desc">
          <span className="rank-badge">{rank}</span>
          <ul className="tags">
            {tag.map((item) => (
              <li>#{item}&nbsp;</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="more">
        <div className="heart">
          <IoIosHeart className="heart-icon" />
          <span>{likes}</span>
        </div>
        <div className="name">
          {name}({age})
        </div>
      </div>
    </div>
  );
}
