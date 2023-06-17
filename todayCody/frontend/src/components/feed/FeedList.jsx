import React, { useState } from "react";
import Modal from "components/feed/Modal";
import { ReactComponent as Heart } from "assets/icons/heart.svg";
import { ReactComponent as Ballon } from "assets/icons/ballon.svg";
import Slider from "./Slider";

export default function FeedList({ data }) {
  const [modalOpen, setModalOpen] = useState(false);
  const { nickname, profileImg, feedImgs, likes, feedText, tags, comments } =
    data;

  return (
    <>
      <div className="feedContainer">
        <div className="feedTop">
          <div className="profile">
            <div className="imgContainer">
              <img src={profileImg} alt="profileImg" />
            </div>
            <span className="nickname">{nickname}</span>
          </div>
          <button>팔로우</button>
        </div>
        {/* <div className="imgContainer">
          <img src={feedImg} alt="feedImg" />
        </div> */}
        {/* 슬라이더로 변경 */}
        <Slider imgs={feedImgs} />
        <div className="feedContent">
          <div className="icons">
            <Heart width="23" height="20" />
            <Ballon width="21" height="21" />
          </div>
          <p className="likes">좋아요 {likes}개</p>
          <ul className="tags">
            {tags.map((item) => (
              <li>#{item}</li>
            ))}
          </ul>
          <p className="feedText">
            <span>{nickname}</span> &nbsp;
            {feedText}
          </p>
          <div className="comments">
            <p className="more" onClick={() => setModalOpen(true)}>
              View all 33 comments
            </p>
            {comments.slice(0, 2).map((item) => (
              <p className="comment" key={item.userId}>
                <span>{item.nickname}</span>
                {item.text}
              </p>
            ))}
          </div>
          <div className="time">한 시간 전</div>
        </div>
      </div>
      {modalOpen && <Modal setModalOpen={setModalOpen} data={data} />}
    </>
  );
}
