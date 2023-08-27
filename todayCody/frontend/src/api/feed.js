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

//쿼리 함수
export const getFeeds = async (page) => {
  try {
    const res = await axios.get(
      `${baseUrl}/feed/list.do?page=${page}&per_page=5`
    );
    return res.data.list;
  } catch (err) {
    if (err.response.status === 404) {
      alert("잘못된 요청입니다.");
    } else if (err.response.status === 500) {
      alert("서버에 문제가 있습니다.");
    }
  }
};
