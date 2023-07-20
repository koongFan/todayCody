import axios from "axios";
import { useState, useEffect } from "react";

const baseUrl = "http://52.79.65.236:8081";

export const feedUpload = async (formData, navigate) => {
  const res = await axios.post(`${baseUrl}/feed/write.do`, formData);

  if (res.status === 200) {
    window.alert("피드 업로드 성공!");
    navigate("/mypage");
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
        if (res.status === 200) {
          setFeeds(res.data.list);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return feeds;
}
