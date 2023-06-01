import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [inputs, setInputs] = useState({
    account: "",
    password: "",
  });
  const [formIsValid, setFormIsValid] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(inputs.account && inputs.password);
    }, 200);

    return () => {
      clearTimeout(identifier);
    };
  }, [inputs.account, inputs.password]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://52.78.103.73:8081/member/signIn.do",
        inputs,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      if (res.status === 200) {
        alert("로그인 되셨습니다");
        window.location.replace("/");
      } else {
        setError("아이디 또는 비밀번호가 틀렸습니다.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="wrapper">
      <div className="formContainer">
        <form onSubmit={submitHandler}>
          <h3>오늘코디</h3>
          <p>오늘코디 계정으로 로그인</p>
          <input
            type="text"
            name="account"
            required
            value={inputs.account}
            onChange={changeHandler}
            placeholder="아이디를 입력해주세요."
          />
          <input
            type="password"
            name="password"
            value={inputs.password}
            onChange={changeHandler}
            placeholder="비밀번호를 입력해주세요.(8자 이상)"
          />
          <button
            type="submit"
            disabled={!formIsValid}
            className={`${!formIsValid && "disabled"}`}
          >
            로그인
          </button>
          {error && <p className="error">{error}</p>}
          <div className="aboutSign">
            <Link to="#">비밀번호 찾기</Link>
            <Link to="/signUp">회원가입</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
