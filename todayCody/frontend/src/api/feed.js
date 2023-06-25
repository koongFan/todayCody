import axios from "axios";
import { useState, useEffect } from "react";

const baseUrl = "http://52.79.65.236:8081";

// 피드 불러오기
export function useGetFeeds() {
  const [feeds, setFeeds] = useState();

  useEffect(() => {
    axios({
      url: `${baseUrl}/v1/messages`,
      method: "get",
    })
      .then((res) => {
        if (res.status === 200) {
          setFeeds(res.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);
  return feeds;
}
