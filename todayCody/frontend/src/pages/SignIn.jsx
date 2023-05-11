import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });

  const [valid, setValid] = useState({
    password: false,
  });

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      //디바운싱
      console.log("유효성 검사중");
      setValid({ ...valid, password: inputs.password.length >= 8 });
      setFormIsValid(inputs.id && inputs.password.length >= 8);
    }, 200);

    return () => {
      console.log("클린업");
      clearTimeout(identifier);
    };
  }, [inputs.id, inputs.password]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  //const validHandler = (e) => {
  //  const { name } = e.target;
  //  setValid({ ...valid, [name]: inputs.password.length >= 8 });
  //};

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios({
        url: "http://52.78.103.73:8081/member/signIn.do", //주소 확실하지 않음 cors에러
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          id: inputs.id,
          password: inputs.password,
        }),
      });
      if (res.status === 200) {
        alert("로그인되었습니다.");
      }
    } catch (error) {
      alert("[ERROR] 로그인에 실패했습니다.");
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
            name="id"
            required
            value={inputs.id}
            onChange={changeHandler}
            placeholder="아이디를 입력해주세요."
          />
          <input
            type="password"
            name="password"
            value={inputs.password}
            onChange={changeHandler}
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
