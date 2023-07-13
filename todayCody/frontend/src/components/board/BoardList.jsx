import React from "react";
import { Link } from "react-router-dom";

export default function BoardList({ post }) {
  return (
    <tr key={post} className="post">
      <td>{post}</td>
      <td>
        <Link to={`/board/${post}`}>
          제목입니다아아아아 <span>+3</span>
        </Link>
      </td>
      <td>꿀먹은 샐러리</td>
      <td>03.23</td>
      <td>123</td>
      <td>123</td>
    </tr>
  );
}
