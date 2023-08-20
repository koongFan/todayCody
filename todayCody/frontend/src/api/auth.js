import axios from "axios";
import { useState, useEffect } from "react";
import { decodeToken } from "util/auth";

const baseUrl = "http://52.79.65.236:8081";

//회원가입
export const signup = async (user, navigate) => {
  try {
    const res = await axios.post(`${baseUrl}/member/signUp.do`, user);

    if (res.data.failOrSucc) {
      alert("회원가입이 완료되었습니다.");
      navigate("/signin");
    } else {
      alert("회원가입에 실패했습니다. 다시 시도해주세요." + res.data.msg);
    }
  } catch (err) {
    console.log(err);
    alert("회원가입에 실패했습니다. 다시 시도해주세요.");
  }
};

//로그인
export const signin = async (userData, navigate) => {
  try {
    const res = await axios.post(`${baseUrl}/member/signIn.do`, userData);

    if (res.status === 200) {
      navigate("/");

      const token = res.data.token;
      localStorage.setItem("token", token);
      // 만료시간 30분
      const expiration = new Date(new Date().getTime() + 30 * 60 * 1000);
      localStorage.setItem("expiration", expiration.toISOString());
      localStorage.setItem("user", JSON.stringify(res.data));
    }
  } catch (error) {
    console.log(error);
    if (error.response.status === 404) {
      alert(error.response.data.errorMsg);
    }
  }
};

//로그아웃
export const signout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expiration");
  alert("로그아웃 되었습니다.");
  window.location.href = "/"; //redirect, navigate으로 하면 새로고침이 안됨
};

//내 정보 가져오기
export const getMyData = async (token) => {
  try {
    const id = decodeToken(token);
    const res = await axios({
      url: `${baseUrl}/user/get?account=${id}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 200) {
      const user = await res.data;
      return user;
    }
  } catch (error) {
    console.log(error);
  }
};

//마이페이지 정보 가져오기
export const useGetMyPage = (user_seq) => {
  const [myPage, setMyPage] = useState([]);

  useEffect(() => {
    axios({
      url: `${baseUrl}/myPage/list.do?user_seq=${user_seq}`,
      method: "get",
    })
      .then((res) => {
        if (res.status === 200) {
          setMyPage(res.data.list);
        }
      })
      .catch((error) => console.log(error));
  }, [user_seq]);

  return myPage;
};

//쿼리 함수
export const getMyFeeds = async (user_seq) => {
  try {
    const res = await axios.get(
      `${baseUrl}/myPage/list.do?user_seq=${user_seq}`
    );
    console.log(res.data);
    return res.data.list;
  } catch (err) {
    if (err.response.status === 404) {
      alert("잘못된 요청입니다.");
    } else if (err.response.status === 500) {
      alert("서버에 문제가 있습니다.");
    }
  }
};

// 유저 아이디로 정보 불러오기
export function useGetUserDataById(userId) {
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get(`${baseUrl}/member/info/${userId}`)
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data);
        }
      })
      .catch((error) => console.log(error));
  }, [userId]);

  return user;
}
