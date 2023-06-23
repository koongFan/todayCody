import { Link, useRouteLoaderData } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const token = useRouteLoaderData("root");
  const [open, setOpen] = useState("open");
  const [selected, setSelected] = useState("home");

  const menus = [
    { id: 1, name: "홈", value: "home", to: "/" },
    { id: 2, name: "코디랭킹", value: "rank", to: "/ranking" },
    { id: 3, name: "룩별정보", value: "info", to: "/lookInfo" },
    { id: 4, name: "게시판", value: "board", to: "/board" },
    { id: 5, name: "피드", value: "feed", to: "feed" },
  ];
  return (
    <>
      <header>
        <button
          onClick={() => {
            setOpen((open) => !open);
          }}
          className="menu-icon-btn"
          data-menu-icon-btn
        >
          <img src="/icons/menu.svg" className="menu-icon" alt="menu-icon" />
        </button>
        {/* <Link to="/">
    <h1 className="logo">OH!CO</h1>
  </Link>
  <div className="right">
    <nav className="top">
      <ul className="top-left">
        {menus.map((menu) => (
          <li key={menu.id} className="menuItem">
            <Link to={menu.to}>{menu.item}</Link>
          </li>
        ))}
      </ul>
      <div className="top-right">
        <div>고승신님</div>
        {!token && (
          <li>
            <Link to="/signin">LOGIN</Link>
          </li>
        )}
        {token && (
          <li>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("expiration");
                window.location.href = "/"; //redirect, navigate으로 하면 새로고침이 안됨
              }}
            >
              LOGOUT
            </button>
          </li>
        )}
        <Link to="/mypage">MYPAGE</Link>
      </div>
    </nav>
    <form className="bottom">
      <IoIosSearch className="search-icon" />
      <input type="text" placeholder="검색어를 입력해주세요." />
    </form>
  </div> */}
      </header>
      <aside className={`${open ? "sidebar open" : "sidebar"}`}>
        <div className="sidebar-container">
          <ul className="sidebar-list">
            {menus.map((menu) => (
              <li
                key={menu.id}
                onClick={() => setSelected(`${menu.value}`)}
                className={`sidebar-list-item ${
                  selected === menu.value && "active"
                }`}
              >
                <Link to={menu.to} className="sidebar-link">
                  <img
                    src={`/icons/${menu.value}.svg`}
                    className="sidebar-icon"
                    alt="side-icon"
                  />
                  <div className="hidden-sidebar">{menu.name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
