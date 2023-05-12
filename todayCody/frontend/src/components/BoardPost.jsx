import React from "react";

export default function BoardPost({ post }) {
  const { postId, title, writer, date, view } = post;

  return (
    <tr className="post">
      <td>{postId}</td>
      <td>{title}</td>
      <td>{writer.userName}</td>
      <td>{date}</td>
      <td>{view}</td>
    </tr>
  );
}
