import BoardList from "./BoardList";

export default function BoardTable({ currentPosts }) {
  return (
    <table className="boardTable">
      <thead>
        <tr>
          <th>No</th>
          <th>제목</th>
          <th>글쓴이</th>
          <th>날짜</th>
          <th>조회수</th>
          <th>추천수</th>
        </tr>
      </thead>
      <tbody>
        {currentPosts.map((post) => (
          <BoardList post={post} />
        ))}
      </tbody>
    </table>
  );
}
