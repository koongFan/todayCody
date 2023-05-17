import { useEffect, useRef } from "react";
import Comment from "./Comment";

export default function Modal({ setModalOpen, data }) {
  const modalRef = useRef(null);
  const { id, userName, profileImg, feedImg, likes, feedText, comments } = data;

  useEffect(() => {
    const mousedownHandler = (e) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener("mousedown", mousedownHandler);

    return () => {
      document.removeEventListener("mousedown", mousedownHandler);
    };
  }, [setModalOpen]);

  return (
    <div className="modalContainer">
      <div className="feedModal" ref={modalRef}>
        <div className="left">
          <div className="imgContainer">
            <img src={feedImg} alt="feed-img" />
          </div>
          <div className="content">
            <div className="profile">
              <div className="profileImg">
                <img src={profileImg} alt="profileImg" />
              </div>
              <span>{userName}</span>
            </div>
            <div className="text">{feedText}</div>
          </div>
        </div>
        <div className="right">
          <ul className="comments">
            <h3>Comments</h3>
            {comments.map((c) => (
              <Comment comment={c} key={c.userId} />
            ))}
          </ul>

          <div className="addCommnet">
            <div className="profileImg">
              <img
                src="https://plus.unsplash.com/premium_photo-1684093759271-1ec27d9f0dac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="profileImg"
              />
            </div>
            <form action="">
              <input type="text" placeholder="댓글을 추가해 주세요." />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
