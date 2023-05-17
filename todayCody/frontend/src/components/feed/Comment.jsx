import React from "react";

export default function Comment({ comment }) {
  const { userName, text, img } = comment;
  return (
    <li className="comment">
      <div className="profileImg">
        <img src={img} alt="profileImg" />
      </div>
      <div className="text">
        <span>{userName}</span>
        <p> {text}</p>
      </div>
    </li>
  );
}
