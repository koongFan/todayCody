import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

export default function Header() {
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
              <Link to={menu.to}>
                <li key={menu.id} className="menuItem">
                  {menu.item}
                </li>
              </Link>
            ))}
          </ul>
          <div className="top-right">
            <div>고승신님</div>
            <button>LOGIN</button>
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
