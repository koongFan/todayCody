export default function Category({ selected, handleClick }) {
  const category = [
    { id: 1, name: "자유게시판", value: "free" },
    { id: 2, name: "Q&A", value: "qa" },
  ];
  return (
    <div className="category">
      {category.map((c) => (
        <span
          key={c.id}
          onClick={() => {
            handleClick(c.value);
          }}
          className={`${selected === c.value && "selected"}`}
        >
          {c.name}
        </span>
      ))}
    </div>
  );
}
