import React from "react";
import { Link } from "react-router-dom";

export default function BoardList({ post }) {
  const { board_seq, user_seq, title, reg_date } = post;
  return (
    <tr key={board_seq} className="post">
      <td>{board_seq}</td>
      <td>
        <Link to={`/board/free/${board_seq}`} state={post}>
          {title} <span>+3</span>
        </Link>
      </td>
      <td>{user_seq}</td>
      <td>
        {reg_date?.month}.{reg_date?.date}
      </td>
      <td>123</td>
      <td>123</td>
    </tr>
  );
}
