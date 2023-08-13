import axios from "axios";

const baseUrl = "http://52.79.65.236:8081";

export const uploadBoard = async (formData, navigate) => {
  const res = await axios.post(`${baseUrl}/board/write.do`, formData);

  if (res.status === 200) {
    window.alert("피드 업로드 성공!");
    return res;
    //navigate("/board");
  }
};

export const getBoard = async () => {
  const res = await axios.get(`${baseUrl}/board/list.do?page_num=1`);

  if (res.status === 200) {
    console.log(res);
  }
};
