import { Link, useRouteLoaderData } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

export default function Header() {
  const token = useRouteLoaderData("root");

  const menus = [
    { id: 1, item: "코디랭킹", to: "/ranking" },
    { id: 2, item: "룩별정보", to: "/lookinfo" },
    { id: 3, item: "게시판", to: "/board" },
    { id: 4, item: "피드", to: "/feed" },
  ];

  return (
    <header>
      <Link to="/" className="left">
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
      </div>
    </header>
  );
}
