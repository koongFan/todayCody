import React, { useState } from "react";
import axios from "axios";
import '../scss/pages/_signup.scss';

export default function SignUp() {

  const [user, setUser] = useState({
    user_id: '',
    pwd: '',
    email: '',
    mailAccessCode: '',
    u_name: '',
    u_nickname: '',
    u_birth: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let key in user) {
      if (!user[key]) {
        alert(`${key}를 입력해주세요`);
        return;
      }
    }
    signupClick();
  };

  const handleEmailCertification = async () => {
    try {
      const res = await axios.post('http://52.78.103.73:8081/signup/mailConfirm', {email: user.email});
      if (res.data.success) {
        alert('이메일로 인증코드가 전송되었습니다.')
      } else {
        alert('인증 코드 전송에 실패했습니다.');
      }
    } catch (err) {
      console.log(err);
      alert('인증 코드 전송에 실패했습니다.');
    }
  }

  const signupClick = async () => {
    try {
      const res = await axios.post("http://52.78.103.73:8081/member/signUp.do", user);
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
  
  return(
    <>
    <div className="signup">
      <div className="signup-container">
        <h3>오늘코디</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="id"
            value={user.user_id}
            required
            placeholder="id"
            onChange={(e) => {
              setUser({ ...user, user_id: e.target.value })
            }}
          />
          <input
            type="password"
            name="password"
            value={user.pwd}
            required
            placeholder="password"
            onChange={(e) => {
              setUser({ ...user, pwd: e.target.value })
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
              setUser({ ...user, email: e.target.value })
            }}
          />
          <button onChange={handleEmailCertification}>이메일 인증</button>
          
          {/* 이메일 인증 코드 */}
          <input
            type="text"
            name="mailAccessCods"
            value={user.mailAccessCode}
            required
            placeholder="이메일 인증 코드를 입력해주세요."
            onChange={(e) => {
              setUser({ ...user, mailAccessCode: e.target.value });
            }}
          />
          
          <input
            type="text"
            name="nickname"
            value={user.u_nickname}
            required
            placeholder="nickname"
            onChange={(e) => {
              setUser({ ...user, u_nickname: e.target.value})
            }}
          />
          <input
            type="text"
            name="birth"
            value={user.u_birth}
            required
            placeholder="YYYYMMDD 형식으로 입력해 주세요."
            onChange={(e) => {
              setUser({ ...user, u_birth: e.target.value})
            }}
          />
          <button type="submit">회원가입</button>
        </form>
      </div>
    </div>
    </>
  );
}