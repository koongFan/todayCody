import axios from "axios";

const baseUrl = "http://52.79.65.236:8081";

export const addPost = async (post, navigate) => {
  const res = await axios.post(`${baseUrl}/feed/write.do`, {
    user_seq: 3,
    title: "안녕",
    content: "새로운 글",
  });
  if (res.status === 200) {
    window.alert("글 업로드 성공!");
    navigate("/board");
  }
};
