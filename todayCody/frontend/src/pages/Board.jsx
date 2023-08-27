import React, { useMemo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "components/layout/Footer";
import Pagination from "components/common/Pagination";
import BoardTable from "components/board/BoardTable";
import Category from "components/board/Category";
import BoardGrid from "components/board/BoardGrid";
import { useGetPosts } from "api/board";

export default function Board() {
  const [selected, setSelected] = useState("free");
  const [page, setPage] = useState(1);

  const handleClick = (value) => {
    setSelected(value);
  };
  const params = useMemo(
    () => ({
      page_num: page,
      max_ret_cnt: selected === "free" ? 10 : 12,
      type: selected === "free" ? 1 : 2,
    }),
    [page, selected]
  );

  const { posts, loading } = useGetPosts(params);

  const navigate = useNavigate();
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
            <BoardTable posts={posts} />
          ) : (
            <BoardGrid posts={posts} />
          )}
          <div className="util">
            {/* <Pagination
              totalPosts={posts.length}
              postsPerPage={postsPerPage}
              setPage={setPage}
              page={page}
            /> */}
            <button
              onClick={() => navigate(`/newboard/${selected}`)}
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
