import { useState, useContext, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { uploadBoard } from "api/board";
import { AuthContext } from "contexts/AuthContext";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Footer from "components/layout/Footer";

export default function NewBoard({ type }) {
  const { user } = useContext(AuthContext);
  const quillRef = useRef();

  let formData = new FormData();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgUrlList, setImgUrlList] = useState([]);
  const navigate = useNavigate();

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.addEventListener("change", async () => {
      const editor = quillRef.current.getEditor();
      const file = input.files[0];
      const range = editor.getSelection(true);

      setImgUrlList((prev) => [...prev, file]);

      //이미지 업로드
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "upload");

      try {
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/smosco/image/upload",
          data
        );
        const { url } = uploadRes.data;

        editor.insertEmbed(range.index, "image", url);
        editor.setSelection(range.index + 1);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike"],
          [{ header: [1, 2, 3, false] }],
          [{ list: "ordered" }, { list: "bullet" }, { align: [] }],
          type === "1" ? ["link"] : ["link", "image"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    };
  }, [type]);

  const formats = useMemo(() => {
    return [
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
  }, []);

  const handleUpload = () => {
    let fileDataArray = [];
    if (imgUrlList.length > 0) {
      imgUrlList.map((item) => formData.append("file[]", item));

      fileDataArray = imgUrlList.map((file, idx) => ({
        file_name: file.name,
        order_num: idx + 1,
      }));
    }

    const boardData = {
      user_seq: user?.user_seq,
      title,
      content,
      type,
      file_info: fileDataArray,
    };
    console.log(boardData);
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
