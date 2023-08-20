import axios from "axios";

const baseUrl = "http://52.79.65.236:8081";

export const uploadBoard = async (formData, navigate) => {
  try {
    const res = await axios.post(`${baseUrl}/board/write.do`, formData);

    if (res.data.retCode === "000") {
      window.alert("게시물 업로드 성공!");
      navigate("/board");
      return res;
    } else {
      window.alert("업로드 중 문제가 생겼습니다.");
    }
  } catch (err) {
    console.log(err);
  }
};

export const getBoard = async (params) => {
  try {
    const res = await axios.post(`${baseUrl}/board/list.do`, params);
    return res;
  } catch (err) {
    console.log(err);
  }
};
