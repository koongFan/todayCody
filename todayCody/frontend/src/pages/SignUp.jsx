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
      <div className="signup">
        <div className="signup-container">
          <h3>오늘코디</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="id"
              value={user.account}
              required
              placeholder="id"
              onChange={(e) => {
                setUser({ ...user, account: e.target.value });
              }}
            />
            <input
              type="password"
              name="password"
              value={user.password}
              required
              placeholder="password"
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />

            {/* 이메일 */}
            <input
              type="email"
              name="email"
              value={user.email}
              required
              placeholder="email"
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
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

            <input
              type="text"
              name="u_name"
              value={user.u_name}
              required
              placeholder="u_name"
              onChange={(e) => {
                setUser({ ...user, u_name: e.target.value });
              }}
            />
            <input
              type="text"
              name="nickname"
              value={user.u_nickname}
              required
              placeholder="nickname"
              onChange={(e) => {
                setUser({ ...user, u_nickname: e.target.value });
              }}
            />
            <input
              type="text"
              name="birth"
              value={user.u_birth}
              required
              placeholder="YYYYMMDD 형식으로 입력해 주세요."
              onChange={(e) => {
                setUser({ ...user, u_birth: e.target.value });
              }}
            />
            <button type="submit">회원가입</button>
          </form>
        </div>
      </div>
    </>
  );
}
