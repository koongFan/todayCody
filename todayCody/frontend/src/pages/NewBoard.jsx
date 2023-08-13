import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Quill from "components/board/Quill";
import { uploadBoard } from "api/board";
import { AuthContext } from "contexts/AuthContext";
import Footer from "components/layout/Footer";

export default function NewBoard() {
  const user = useContext(AuthContext);

  let formData = new FormData();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  //free:1, qa:2
  const type = useLocation().state.type;

  const handleUpload = () => {
    const boardData = {
      user_seq: user?.user_seq,
      title,
      content,
      type,
    };
    console.log(JSON.stringify(boardData));
    formData.append("jsonData", JSON.stringify(boardData));

    try {
      uploadBoard(formData, navigate);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="wrapper">
      <div className="writeContainer">
        <h2>게시물 작성</h2>
        <div className="box title">
          <h3>제목</h3>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="box content">
          <h3>내용</h3>
          <Quill value={content} onChange={setContent} type={type} />
        </div>
        <button className="submit" onClick={handleUpload}>
          게시물 등록하기
        </button>
      </div>
      <Footer />
    </div>
  );
}
