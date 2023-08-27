import React, { useState } from "react";
import Modal from "components/feed/Modal";
import Slider from "./Slider";
import parse from "html-react-parser";
import { feedLike } from "api/feed";

export default function FeedList({ data, feedRef }) {
  const [modalOpen, setModalOpen] = useState(false);
  const { feed_seq, u_nickname, likes, content, image_path } = data;
  const [likeCount, setLikeCount] = useState(parseInt(likes));
  const [clicked, setClicked] = useState(false);

  const handleLike = () => {
    if (clicked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setClicked((prev) => !prev);
    feedLike(JSON.stringify({ feed_seq: feed_seq }));
  };
  return (
    <>
      <div className="feedListContainer" ref={feedRef}>
        <div className="feedTop">
          <div className="profile">
            <div className="imgContainer">
              <img src="/img/avatar.png" alt="profileImg" />
            </div>
            <span className="nickname">{u_nickname}</span>
          </div>
          <button>팔로우</button>
        </div>

        <Slider imgs={image_path.split(",")} />
        <div className="feedContent">
          <div className="icons">
            <img
              src={clicked ? "/icon/orangeHeart.svg" : "/icon/heart.svg"}
              alt="heart-icon"
              onClick={handleLike}
            />
            <img src="/icon/balloon.svg" alt="balloon-icon" />
          </div>
          <p className="likes">
            좋아요 <span>{likeCount}</span> 개
          </p>
          {/* <ul className="tags">
            {tags.map((item) => (
              <li>#{item}</li>
            ))}
          </ul> */}
          <p className="feedText">{parse(content)}</p>
          {/* <div className="comments">
            <p className="more" onClick={() => setModalOpen(true)}>
              View all 33 comments
            </p>
            {comments.slice(0, 2).map((item) => (
              <p className="comment" key={item.userId}>
                <span>{item.nickname}</span>
                {item.text}
              </p>
            ))}
          </div> */}
          <div className="time">한 시간 전</div>
        </div>
      </div>
      {modalOpen && <Modal setModalOpen={setModalOpen} data={data} />}
    </>
  );
}
