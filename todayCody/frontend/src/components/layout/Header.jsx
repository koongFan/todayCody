import { Link, useRouteLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleOpen } from "store/sidebar";
import { useContext } from "react";
import { AuthContext } from "contexts/AuthContext";

export default function Header() {
  const token = useRouteLoaderData("root");
  const dispatch = useDispatch();
  const user = useContext(AuthContext);

  return (
    <>
      <header>
        <div className="head-left">
          <button
            onClick={() => {
              dispatch(toggleOpen());
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
          {token && user && <div>{user.u_nickname} 님</div>}
          {token ? (
            <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("expiration");
                window.location.href = "/";
              }}
            >
              Logout
            </button>
          ) : (
            <Link to="/signin">Login</Link>
          )}
        </div>
      </header>
    </>
  );
}
