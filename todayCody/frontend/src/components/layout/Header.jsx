import { Link, useRouteLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleOpen } from "store/sidebar";

export default function Header() {
  const token = useRouteLoaderData("root");
  const dispatch = useDispatch();

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
            <img src="/icons/menu.svg" className="menu-icon" alt="menu-icon" />
          </button>
          <Link to="/" className="logo">
            <img src="/icons/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="head-right">
          <form className="search">
            <input type="text" />
            <img src="/icons/search.svg" alt="search-icon" />
          </form>
          <Link to="/mypage">마이페이지</Link>
          <div>고승신님</div>
          {token ? (
            <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("expiration");
                window.location.href = "/"; //redirect, navigate으로 하면 새로고침이 안됨
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
