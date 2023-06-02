import React from "react";
import { Link } from "react-router-dom";

export default function BoardList({ post }) {
  const { postId, title, date, view } = post;

  return (
    <tr key={postId} className="post">
      <td>{postId}</td>
      <td>
        <Link to={`/board/${postId}`}>{title}</Link>
      </td>
      <td>{view}</td>
      <td>{date}</td>
    </tr>
  );
}
