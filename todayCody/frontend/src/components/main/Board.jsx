import { Link } from "react-router-dom";

export default function Board({ title, posts }) {
  return (
    <div className="board">
      <h3 className="board-title">{title}</h3>
      <table className="board-table">
        <thead>
          <tr>
            <th>순위</th>
            <th>제목</th>
            <th>조회수</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr className="board-row">
              <td>{post.postId}</td>
              <td>
                <Link to={`/board/${post.postId}`}>{post.title}</Link>
              </td>
              <td>{post.view}</td>
              <td>{post.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
