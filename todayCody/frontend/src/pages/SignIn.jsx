import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [valid, setValid] = useState({
    email: false,
    password: false,
  });

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("유효성 검사중");
      setFormIsValid(inputs.email.includes("@") && inputs.password.length >= 8);
    }, 300);

    return () => {
      console.log("클린업");
      clearTimeout(identifier);
    };
  }, [inputs.email, inputs.password]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const validHandler = (e) => {
    const { name } = e.target;
    if (name === "email") {
      setValid({ ...valid, [name]: inputs.email.includes("@") });
    } else {
      setValid({ ...valid, [name]: inputs.password.length >= 8 });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="wrapper">
      <div className="formContainer">
        <form onSubmit={submitHandler}>
          <h3>오늘코디</h3>
          <p>오늘코디 계정으로 로그인</p>
          <input
            type="email"
            name="email"
            value={inputs.email}
            onChange={changeHandler}
            onBlur={validHandler}
            placeholder="이메일을 입력해주세요."
          />
          {!valid.email && <p className="warn">이메일 형식을 맞춰주세요.</p>}
          <input
            type="password"
            name="password"
            value={inputs.password}
            onChange={changeHandler}
            onBlur={validHandler}
            placeholder="비밀번호를 입력해주세요. (8자 이상)"
          />
          {!valid.password && <p className="warn">8자리 이상 입력해주세요.</p>}
          <button
            type="submit"
            disabled={!formIsValid}
            className={`${!formIsValid && "disabled"}`}
          >
            로그인
          </button>
          <div className="aboutSign">
            <Link to="#">비밀번호 찾기</Link>
            <Link to="/signup">회원가입</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
