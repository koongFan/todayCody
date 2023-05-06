import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signin">
      <div className="signin-container">
        <h3>오늘코디</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={user.email}
            required
            placeholder="email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={user.password}
            required
            placeholder="password"
            onChange={handleChange}
          />
          <button> 로그인</button>
        </form>
        <p>
          계정이 없으신가요? <Link to="/signup">회원가입</Link>
        </p>
      </div>
    </div>
  );
}
