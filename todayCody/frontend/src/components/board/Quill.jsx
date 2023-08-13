import { useRef, useMemo } from "react";
import ReactQuill from "react-quill";
import { uploadBoard } from "api/board";
import "react-quill/dist/quill.snow.css";

export default function Quill({ value, onChange, type }) {
  const quillRef = useRef();

  const imageHandler = async () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    //formData로 이미지 구현
    input.addEventListener("change", (e) => {
      const formData = new FormData();
      const imageLists = Object.values(e.target.files);
      console.log(URL.createObjectURL(imageLists[0]));
      console.log(imageLists);
      if (imageLists.length > 0) {
        imageLists.map((item) => formData.append("file[]", item));
        const fileDataArray = imageLists.map((file, idx) => ({
          file_name: file.name,
          order_num: idx + 1,
        }));
        console.log(fileDataArray);
      }
    });
  };

  const modules = useMemo(
    () => ({
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
    }),
    [type]
  );

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

  return (
    <ReactQuill
      ref={(element) => {
        if (element !== null) {
          quillRef.current = element;
        }
      }}
      theme="snow"
      value={value}
      modules={modules}
      formats={formats}
      onChange={onChange}
    />
  );
}
