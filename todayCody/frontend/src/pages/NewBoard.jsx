import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { uploadBoard } from "api/board";
import { AuthContext } from "contexts/AuthContext";
import Footer from "components/layout/Footer";

import { useRef, useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function NewBoard() {
  const user = useContext(AuthContext);
  const quillRef = useRef();

  let formData = new FormData();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [fileDataArray, setFileDataArray] = useState([]);
  const navigate = useNavigate();
  //free:1, qa:2
  const type = useLocation().state.type;

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    //formData로 이미지 구현
    input.addEventListener("change", (e) => {
      const formData = new FormData();
      const imageLists = Object.values(e.target.files);
      let imageUrlLists = [];
      imageLists.map((item) => imageUrlLists.push(URL.createObjectURL(item)));
      if (imageLists.length > 0) {
        imageLists.map((item) => formData.append("file[]", item));
        imageLists.map((file, idx) =>
          setFileDataArray([
            ...fileDataArray,
            {
              file_name: file.name,
              order_num: idx + 1,
            },
          ])
        );
        const editor = quillRef.current.getEditor();
        const range = editor.getSelection();
        editor.insertEmbed(
          range.index,
          "image",
          "https://images.pexels.com/photos/17715610/pexels-photo-17715610.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        );
      }
    });
  };

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike"],
          [{ size: [1, 2, "normal"] }],
          [{ list: "ordered" }, { list: "bullet" }, { align: [] }],
          type === 1 ? ["link"] : ["link", "image"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    };
  }, [type]);

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "align",
    "link",
    "image",
  ];

  const handleUpload = () => {
    const boardData = {
      user_seq: user?.user_seq,
      title,
      content,
      type,
      file_info: fileDataArray,
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
          <ReactQuill
            ref={(element) => {
              if (element !== null) {
                quillRef.current = element;
              }
            }}
            theme="snow"
            value={content}
            modules={modules}
            formats={formats}
            onChange={setContent}
          />
        </div>
        <button className="submit" onClick={handleUpload}>
          게시물 등록하기
        </button>
      </div>
      <Footer />
    </div>
  );
}
