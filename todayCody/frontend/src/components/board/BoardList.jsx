import React from "react";
import { Link } from "react-router-dom";

export default function BoardList({ post }) {
  const { postId, title, writer, date, view } = post;

  return (
    <tr className="post">
      <td>{postId}</td>
      <td>
        <Link to={`/board/${postId}`}>{title}</Link>
      </td>
      <td>{writer.userName}</td>
      <td>{date}</td>
      <td>{view}</td>
    </tr>
  );
}
