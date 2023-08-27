import { Link } from "react-router-dom";

export default function BoardGrid({ posts }) {
  return (
    <div className="boardGrid">
      {posts.map((post) => (
        <Link
          to={`/board/qa/${post.board_seq}`}
          state={post}
          key={post}
          className="item"
        >
          <div className="imgContainer">
            <img
              src="https://images.pexels.com/photos/1374910/pexels-photo-1374910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="img"
            />
          </div>
          <div className="content">
            <p className="title">{post.title}</p>
            <p>조회수 : 134</p>
            <p>댓글수 : 12</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
