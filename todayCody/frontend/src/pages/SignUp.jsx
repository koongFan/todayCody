import React from "react";
import { useState } from "react";

export default function SignUp() {
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
  
  return(
    <>
    <div className="signup">
      <div className="signup-container">
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
          <input
            type="submit"
            value="회원가입"
          />
        </form>
      </div>
    </div>
    </>
  );
}