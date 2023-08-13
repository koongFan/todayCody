import axios from "axios";
import { useState, useEffect } from "react";

const baseUrl = "http://52.79.65.236:8081";

export const feedUpload = async (formData, navigate) => {
  try {
    const res = await axios.post(`${baseUrl}/feed/write.do`, formData);
    if (res.status === 200) {
      window.alert("피드 업로드 성공!");
      navigate("/mypage");
    } else {
      alert("피드 업로드에 문제가 생겼습니다." + res.data.msg);
    }
  } catch (err) {
    console.log(err);
  }
};

// 피드 불러오기
export function useGetFeeds() {
  const [feeds, setFeeds] = useState();
  useEffect(() => {
    axios({
      url: `${baseUrl}/feed/list.do`,
      method: "get",
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setFeeds(res.data.list);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return feeds;
}

//쿼리 함수
export const getFeeds = async () => {
  try {
    const res = await axios.get(`${baseUrl}/feed/list.do`);
    const reverse = [...res.data.list].reverse();
    return reverse;
  } catch (err) {
    if (err.response.status === 404) {
      alert("잘못된 요청입니다.");
    } else if (err.response.status === 500) {
      alert("서버에 문제가 있습니다.");
    }
  }
};

export const uploadFeed = async (formData) => {
  const res = await axios.post(`${baseUrl}/feed/write.do`, formData);
  return res;
};
