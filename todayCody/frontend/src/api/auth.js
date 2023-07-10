import axios from "axios";
import { useState, useEffect } from "react";
import { decodeToken } from "util/auth";

const baseUrl = "http://52.79.65.236:8081";

//회원가입
export const signup = async (user) => {
  try {
    const res = await axios.post(`${baseUrl}/member/signUp.do`, user);
    console.log(res.data);

    if (res.data.failOrSucc) {
      alert("회원가입이 완료되었습니다.");
      window.location.replace("/signin");
    } else {
      alert("회원가입에 실패했습니다. 다시 시도해주세요." + res.data.msg);
    }
  } catch (err) {
    console.log(err);
    alert("회원가입에 실패했습니다. 다시 시도해주세요.");
  }
};

//이메일 인증
export const authEamil = async (email) => {
  try {
    const res = await axios.post(`${baseUrl}/signup/mailConfirm.do`, { email });
    if (res.data.success) {
      console.log("전송 성공");
      alert("이메일로 인증코드가 전송되었습니다.");
    } else {
      alert("인증 코드 전송에 실패했습니다.");
    }
  } catch (err) {
    console.log(err);
    alert("인증 코드 전송에 실패했습니다.");
  }
};

//로그인
export const signin = async (userData) => {
  try {
    const res = await axios.post(`${baseUrl}/member/signIn.do`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);

    if (res.status === 200) {
      const token = res.data.token;

      localStorage.setItem("token", token);
      // 만료시간 30분
      const expiration = new Date(new Date().getTime() + 30 * 60 * 1000);
      localStorage.setItem("expiration", expiration.toISOString());

      // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      alert("로그인 되셨습니다");
      window.location.replace("/");
    }
  } catch (error) {
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
      // url: `${baseUrl}/myPage/list.do?user_seq=${user_seq}`,
      url: `${baseUrl}/myPage/list.do?user_seq=1`,
      method: "get",
    })
      .then((res) => {
        if (res.status === 200) {
          setMyPage(res.data);
        }
      })
      .catch((error) => console.log(error));
  }, [user_seq]);

  return myPage;
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
