import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "components/layout/Footer";
import Pagination from "components/common/Pagination";
import BoardTable from "components/board/BoardTable";
import Category from "components/board/Category";
import BoardGrid from "components/board/BoardGrid";
import { getBoard } from "api/board";

export default function Board() {
  const [selected, setSelected] = useState("free");
  const handleClick = (value) => {
    setSelected(value);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = selected === "free" ? 10 : 12;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const navigate = useNavigate();
  const posts = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  ];
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);
  const options = [
    { id: 1, name: "정렬", value: "" },
    { id: 2, name: "추천순", value: "recommend" },
    { id: 3, name: "조회순", value: "views" },
    { id: 4, name: "날짜순", value: "date" },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  getBoard();
  return (
    <div className="wrapper">
      <div className="boardContainer">
        <Category selected={selected} handleClick={handleClick} />
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
          {selected === "free" ? (
            <BoardTable currentPosts={currentPosts} />
          ) : (
            <BoardGrid currentPosts={currentPosts} />
          )}
          <div className="util">
            <Pagination
              totalPosts={posts.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
            <button
              onClick={() =>
                navigate("/newboard", {
                  state: {
                    type: selected === "free" ? 1 : 2,
                  },
                })
              }
              className="write"
            >
              <img src="/icon/write.svg" alt="icon" />글 작성
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
