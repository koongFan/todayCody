import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BoardList from "components/board/BoardList";
import Footer from "components/layout/Footer";
import Pagination from "components/common/Pagination";

export default function Board() {
  const [selected, setSelected] = useState("free");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const navigate = useNavigate();
  const posts = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  ];
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);
  const category = [
    { id: 1, name: "자유게시판", value: "free" },
    { id: 2, name: "Q&A", value: "qa" },
  ];
  const options = [
    { id: 1, name: "정렬", value: "" },
    { id: 2, name: "추천순", value: "recommend" },
    { id: 3, name: "조회순", value: "views" },
    { id: 4, name: "날짜순", value: "date" },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="wrapper">
      <div className="boardContainer">
        <div className="category">
          {category.map((c) => (
            <span
              key={c.id}
              onClick={() => setSelected(c.value)}
              className={`${selected === c.value && "selected"}`}
            >
              {c.name}
            </span>
          ))}
        </div>
        <form className="search" onSubmit={handleSubmit}>
          <input type="text" placeholder="내용을 입력해주세요" />
          <button>검색</button>
        </form>
        <div className="bottom">
          <select className="sort" name="sort" id="sort">
            {options.map((op) => (
              <option key={op.id} value={op.value}>
                {op.name}
              </option>
            ))}
          </select>
          <table className="boardTable">
            <thead>
              <tr>
                <th>No</th>
                <th>제목</th>
                <th>글쓴이</th>
                <th>날짜</th>
                <th>조회수</th>
                <th>추천수</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((post) => (
                <BoardList post={post} />
              ))}
            </tbody>
          </table>
          <div className="util">
            <Pagination
              totalPosts={posts.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
            <button onClick={() => navigate("/#")} className="write">
              <img src="/assets/icon/write.svg" alt="icon" />글 작성
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
