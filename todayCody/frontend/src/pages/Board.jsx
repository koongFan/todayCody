import React from "react";
import BoardList from "components/board/BoardList";
import Footer from "components/layout/Footer";

export default function Board() {
  const posts = [
    {
      postId: 1,
      title: "이 신발 어디 브랜드꺼인지 알 수 있나요?",
      writer: { img: "#", userName: "생로랑" },
      date: "05.12",
      view: 123,
    },
    {
      postId: 2,
      title: "이 신발 어디 브랜드꺼인지 알 수 있나요?",
      writer: { img: "#", userName: "생로랑" },
      date: "05.12",
      view: 123,
    },
    {
      postId: 3,
      title: "이 신발 어디 브랜드꺼인지 알 수 있나요?",
      writer: { img: "#", userName: "생로랑" },
      date: "05.12",
      view: 123,
    },
  ];
  return (
    <div className="wrapper">
      <div className="boardContainer">
        <div className="category">
          <span>자유게시판</span>
          <span>Q&A</span>
        </div>
        <table className="boardTable">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>글쓴이</th>
              <th>날짜</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <BoardList post={post} />
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}
