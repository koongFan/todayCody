import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { AuthContext } from "contexts/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "components/layout/Footer";

export default function Login() {
  const [inputData, setInputData] = useState({
    account: "",
    password: "",
  });
  const [formIsValid, setFormIsValid] = useState(false);
  const navigate = useNavigate();

  const baseUrl = process.env.REACT_APP_BASE_URL;
  const { dispatch } = useContext(AuthContext);

  const signin = async () => {
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(`${baseUrl}/member/signIn.do`, inputData);
      navigate("/");
      console.log(res);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          username: res.data.u_nickname,
          user: res.data,
        },
      });

      const token = res.data.token;
      localStorage.setItem("token", token);
      const expiration = new Date(new Date().getTime() + 30 * 60 * 1000); // 만료시간 30분
      localStorage.setItem("expiration", expiration.toISOString());
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      if (err.response.status === 404) {
        alert(err.response.data.errorMsg);
      }
    }
  };

  const mutation = useMutation({
    mutationFn: () => signin(),
  });

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(inputData.account && inputData.password);
    }, 200);

    return () => {
      clearTimeout(identifier);
    };
  }, [inputData.account, inputData.password]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit} className="formContainer">
        <img src="/icon/sign-logo.svg" alt="" />
        <input
          type="text"
          name="account"
          required
          value={inputData.account}
          onChange={handleChange}
          placeholder="아이디"
        />
        <input
          type="password"
          name="password"
          value={inputData.password}
          onChange={handleChange}
          placeholder="비밀번호"
        />
        <button type="submit" disabled={!formIsValid || mutation.isLoading}>
          {mutation.isLoading ? "로그인중" : "로그인"}
        </button>
        <div className="help">
          <Link to="#">비밀번호 찾기</Link> | <Link to="/signUp">회원가입</Link>
        </div>
      </form>
      <Footer />
    </div>
  );
}
