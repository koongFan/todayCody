import React, { useState } from "react";
import { signup } from "api/auth";

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

  //추후 이메일 인증이 필요하면 api/authEmail함수 사용

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let key in user) {
      if (!user[key]) {
        alert(`${key}를 입력해주세요`);
        return;
      }
    }
    signup(user);
  };

  return (
    <>
      <div className="wrapper">
        <div className="signup-container">

        <div className="signup-title">
          <img src="/icons/logo.png" alt="오코" />
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
              <p className="label-content">'_'를 제외한 특수문자는 안되며, 영문, 숫자 '_'로 이루어진 5~12 자 이하</p>
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
              <p className="label-content">숫자, 문자 포함 6~12 자리 조합으로 입력</p>
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
          <button type="submit" className="signup-btn">회원가입</button>
        </form>
        </div>
      </div>
    </>
  );
}
