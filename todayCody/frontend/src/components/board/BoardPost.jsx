import Footer from "components/layout/Footer";
import React from "react";
import { useState } from "react";
import Pagination from "components/common/Pagination";
import { useLocation } from "react-router-dom";
import parse from "html-react-parser";

export default function BoardPost() {
  const post = useLocation().state;
  const { user_seq, title, content, reg_date } = post;
  const comments = [1, 2, 3, 4, 5, 6, 7, 8];
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentComments = comments.slice(firstPostIndex, lastPostIndex);

  const handleSubmit = (e) => {
    e.preventDefault();
    //댓글 등록
  };
  return (
    <div className="wrapper">
      <div className="detailContainer">
        <div className="top">
          <h1 className="title">{title} </h1>
          <div className="desc">
            <div className="author">
              <img src="/img/avatar.png" alt="avatar" />
              {user_seq}
            </div>
            <div className="detail">
              <div>
                <span>조회수</span>
                <span>14</span>
              </div>
              <div>
                <span>추천수</span>
                <span>14</span>
              </div>
              <div>
                <span>댓글</span>
                <span>14</span>
              </div>
              <div className="date">
                <span>작성시간</span>
                <span>2023-07-12 23:13:12</span>
              </div>
            </div>
          </div>
          <div className="content">{parse(content)}</div>
          <button className="report">
            <img src="/icon/report.svg" alt="icon" />
            신고하기
          </button>
        </div>
        <div className="bottom">
          <div className="commentWrite">
            <p className="count">
              댓글 <span>(13)</span>
            </p>
            <form className="write" onSubmit={handleSubmit}>
              <textarea
                name="comment"
                id="comment"
                cols="30"
                rows="10"
                placeholder="내용을 입력해주세요"
              ></textarea>
              <button>댓글작성</button>
            </form>
            <div className="numCharacter">0/2500</div>
          </div>
          <div className="commentList">
            {currentComments.map((c) => (
              <div className="comment">
                <div className="desc">
                  <div className="author">
                    <img src="/img/avatar.png" alt="avatar" />
                    꿀먹은 샐러리
                  </div>
                  <p>2023-07-12 23:13:12</p>
                </div>
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            ))}
          </div>
          <Pagination
            totalPosts={comments.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
