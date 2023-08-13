import Footer from "components/layout/Footer";
import { useState } from "react";
import Quill from "components/board/Quill";

export default function NewBoard() {
  const [value, setValue] = useState("");
  return (
    <div className="wrapper">
      <div className="writeContainer">
        <h2>게시물 작성</h2>
        <div className="box title">
          <h3>제목</h3>
          <input type="text" />
        </div>
        <div className="box content">
          <h3>내용</h3>
          <Quill value={value} onChange={setValue} />
        </div>
        <button className="submit">게시물 등록하기</button>
      </div>
      <Footer />
    </div>
  );
}
