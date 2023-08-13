import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Quill({ value, onChange }) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
    "image",
  ];

  return (
    <ReactQuill
      value={value}
      modules={modules}
      formats={formats}
      onChange={onChange}
    />
  );
}
