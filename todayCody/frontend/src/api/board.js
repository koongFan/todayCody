import axios from "axios";
import { useEffect, useState } from "react";

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

// export const getBoard = async (params) => {
//   try {
//     const res = await axios.post(`${baseUrl}/board/list.do`, params);
//     return res;
//   } catch (err) {
//     console.log(err);
//   }
// };

export const getBoard = async (params) => {
  try {
    const res = await axios({
      url: `${baseUrl}/board/list.do`,
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      // data: { jsonData: JSON.stringify(params) },
    });
    console.log(res);
    return res.data.list;
  } catch (err) {
    console.log(err);
  }
};

// 피드 불러오기
export function useGetPosts(params) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      axios({
        url: `${baseUrl}/board/list.do`,
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: { jsonData: JSON.stringify(params) },
      }).then((res) => {
        console.log(res);
        setPosts(res.data.list);
        setLoading(false);
      });
    } catch (err) {
      console.log(err);
    }
  }, [params]);

  return { posts, loading };
}
