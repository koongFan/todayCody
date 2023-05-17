import React, { useState } from "react";
import Modal from "components/feed/Modal";

export default function FeedList({ data }) {
  const [modalOpen, setModalOpen] = useState(false);
  const { id, userName, profileImg, feedImg, likes, feedText, comments } = data;

  return (
    <>
      <div className="feedContainer" onClick={() => setModalOpen(true)}>
        <div className="feedTop">
          <div className="profile">
            <div className="imgContainer">
              <img src={profileImg} alt="profileImg" />
            </div>
            <span>{userName}</span>
          </div>
          <button>팔로우</button>
        </div>
        <div className="feedContent">
          <div className="imgContainer">
            <img src={feedImg} alt="feedImg" />
          </div>
          <p className="likes">좋아요 {likes}개</p>
          <div className="feedText">
            <span>{userName}</span>
            <p>{feedText}</p>
          </div>
        </div>
      </div>
      {modalOpen && <Modal setModalOpen={setModalOpen} data={data} />}
    </>
  );
}
