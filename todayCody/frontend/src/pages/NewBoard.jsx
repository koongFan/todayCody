import Footer from "components/layout/Footer";
import { AuthContext } from "contexts/AuthContext";
import { useContext, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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
          <ReactQuill value={value} onChange={setValue} />
          {/* <textarea cols="30" rows="10" placeholder="게시물 작성..."></textarea>
          <p className="count">0/2000</p> */}
        </div>
        <div className="add-photo">
          <label htmlFor="img-input">
            <img src="icon/small-camera.svg" alt="icon" />
            <p>사진 추가</p>
          </label>
          <input id="img-input" type="file" accept="image/*" />
        </div>
        <button className="submit">게시물 등록하기</button>
      </div>
      <Footer />
    </div>
  );
}
