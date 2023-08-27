import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Footer from "components/layout/Footer";

export default function SignUp() {
  const [user, setUser] = useState({
    account: "",
    password: "",
    email: "",
    // mailAccessCode: '',
    u_name: "",
    u_nickname: "",
    u_birth: "",
  });

  const navigate = useNavigate();
  const baseUrl = "http://52.79.65.236:8081";
  const signup = async () => {
    try {
      const res = await axios.post(`${baseUrl}/member/signUp.do`, user);

      if (res.data.failOrSucc) {
        alert("회원가입 성공!");
        navigate("/signin");
      } else {
        alert("회원가입에 실패했습니다. 다시 시도해주세요." + res.data.msg);
      }
    } catch (err) {
      console.log(err);
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const mutation = useMutation({
    mutationFn: signup,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // for (let key in user) {
    //   if (!user[key]) {
    //     alert(`${key}를 입력해주세요`);
    //     return;
    //   }
    // }
    mutation.mutate();
  };

  return (
    <>
      <div className="wrapper">
        <div className="signup-container">
          <div className="signup-title">
            <img src="/icon/logo.svg" alt="logo" />
            <p className="title">오늘코디 계정으로 회원가입</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="signup-input">
              <div className="label">
                <p className="label-title">아이디</p>
                <input
                  type="text"
                  name="id"
                  value={user.account}
                  required
                  placeholder="아이디"
                  onChange={(e) => {
                    setUser({ ...user, account: e.target.value });
                  }}
                />
                <p className="label-content">
                  '_'를 제외한 특수문자는 안되며, 영문, 숫자 '_'로 이루어진 5~12
                  자 이하
                </p>
              </div>

              <div className="label">
                <p className="label-title">비밀번호</p>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  required
                  placeholder="비밀번호"
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                  }}
                />
                <p className="label-content">
                  숫자, 문자 포함 6~12 자리 조합으로 입력
                </p>
              </div>

              <div className="label">
                {/* 이메일 */}
                <p className="label-title">이메일</p>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  required
                  placeholder="이메일"
                  onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                  }}
                />
              </div>

              {/* <button onClick={handleEmailCertification}>이메일 인증</button> */}

              {/* 이메일 인증 코드
          <input
            type="text"
            name="mailAccessCods"
            value={user.mailAccessCode}
            required
            placeholder="이메일 인증 코드를 입력해주세요."
            onChange={(e) => {
              setUser({ ...user, mailAccessCode: e.target.value });
            }}
          /> */}

              <div className="label">
                <p className="label-title">이름</p>
                <input
                  type="text"
                  name="u_name"
                  value={user.u_name}
                  required
                  placeholder="이름"
                  onChange={(e) => {
                    setUser({ ...user, u_name: e.target.value });
                  }}
                />
                <p className="label-content">이름은 2자에서 10자 사이</p>
              </div>

              <div className="label">
                <p className="label-title">별칭</p>
                <input
                  type="text"
                  name="nickname"
                  value={user.u_nickname}
                  required
                  placeholder="별칭"
                  onChange={(e) => {
                    setUser({ ...user, u_nickname: e.target.value });
                  }}
                />
                <p className="label-content">별칭은 2자에서 10자 사이</p>
              </div>

              <div className="label">
                <p className="label-title">생년월일</p>
                <input
                  type="text"
                  name="birth"
                  value={user.u_birth}
                  required
                  placeholder="생년월일"
                  onChange={(e) => {
                    setUser({ ...user, u_birth: e.target.value });
                  }}
                />
                <p className="label-content">YYYYMMDD 형식</p>
              </div>
            </div>
            <button type="submit" className="signup-btn">
              {mutation.isLoading ? "회원가입중" : "회원가입"}
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}
