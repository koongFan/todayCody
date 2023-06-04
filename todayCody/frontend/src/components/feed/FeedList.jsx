import React, { useState } from "react";
import Modal from "components/feed/Modal";
import heart from "assets/icons/heart.svg";
import message from "assets/icons/message.svg";

export default function FeedList({ data }) {
  const [modalOpen, setModalOpen] = useState(false);
  const { id, nickname, profileImg, feedImg, likes, feedText, tags, comments } =
    data;

  return (
    <>
      <div className="feedContainer" onClick={() => setModalOpen(true)}>
        <div className="feedTop">
          <div className="profile">
            <div className="imgContainer">
              <img src={profileImg} alt="profileImg" />
            </div>
            <span>{nickname}</span>
          </div>
          <button>팔로우</button>
        </div>
        <div className="feedContent">
          <div className="imgContainer">
            <img src={feedImg} alt="feedImg" />
          </div>
          <div className="icons">
            <span>{heart}</span>
          </div>
          <p className="likes">좋아요 {likes}개</p>
          {tags.map((item) => (
            <span>{item}</span>
          ))}
          <div className="feedText">
            <span>{nickname}</span>
            <p>{feedText}</p>
          </div>
          <div className="comments">
            {comments.slice(0, 2).map((item) => (
              <div key={item.userId}>
                <span>{item.nickname}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {modalOpen && <Modal setModalOpen={setModalOpen} data={data} />}
    </>
  );
}
