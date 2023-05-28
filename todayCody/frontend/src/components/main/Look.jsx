export default function Look({ look }) {
  const { img, tag } = look;
  return (
    <div className="look-content">
      <div className="img-container">
        <img src={img} alt="look-img" />
      </div>
      <ul className="tags">
        {tag.map((item) => (
          <li>#{item}</li>
        ))}
      </ul>
    </div>
  );
}
