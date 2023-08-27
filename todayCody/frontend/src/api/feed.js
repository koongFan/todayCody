import axios from "axios";
import { useState, useEffect } from "react";

const baseUrl = "http://52.79.65.236:8081";

export const feedUpload = async (formData, navigate) => {
  try {
    const res = await axios.post(`${baseUrl}/feed/write.do`, formData);
    console.log(res);
    if (res.data.retCode === "000") {
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
export function useGetFeeds(page) {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);

      axios
        .get(`${baseUrl}/feed/list.do?page=${page * 10}&per_page=10`)
        .then((res) => {
          // console.log("page:", page, "data:", res.data.list);
          setFeeds((prev) => {
            if (page === 0) {
              //0일때를 따로 안하면 반복돼서 처음부터 20개가 나온다.
              return res.data.list;
            } else {
              return [...prev, ...res.data.list];
            }
          });
          setHasMore(res.data.list.length > 0);
          setLoading(false);
        });
    } catch (err) {
      console.log(err);
    }
  }, [page]);

  return { feeds, loading, hasMore };
}

export const feedLike = async (params) => {
  try {
    const res = await axios.post(`${baseUrl}/feed/like.do`, params);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
