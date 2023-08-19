import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleOpen } from "store/sidebar";
import { useContext } from "react";
import { AuthContext } from "contexts/AuthContext";

export default function Header() {
  const token = localStorage.getItem("token");
  const sideDispatch = useDispatch();
  const { user, username, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const signout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    navigate("/");
  };

  console.log(user);
  console.log(token, username);
  return (
    <>
      <header>
        <div className="head-left">
          <button
            onClick={() => {
              sideDispatch(toggleOpen());
            }}
            className="menu-icon-btn"
            data-menu-icon-btn
          >
            <img src="/icon/menu.svg" className="menu-icon" alt="menu-icon" />
          </button>
          <Link to="/" className="logo">
            <img src="/icon/logo.svg" alt="logo" />
          </Link>
        </div>
        <div className="head-right">
          <form className="search">
            <input type="text" />
            <img src="/icon/search.svg" alt="search-icon" />
          </form>
          <Link to="/mypage">마이페이지</Link>
          {token && username && <div>{username} 님</div>}
          {token ? (
            <button onClick={signout}>Logout</button>
          ) : (
            <Link to="/signin">Login</Link>
          )}
        </div>
      </header>
    </>
  );
}
