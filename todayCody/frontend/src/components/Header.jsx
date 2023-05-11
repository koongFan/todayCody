import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const menus = [
    { id: 1, item: "코디랭킹", to: "/ranking" },
    { id: 2, item: "룩별정보", to: "/lookinfo" },
    { id: 3, item: "게시판", to: "/board" },
    { id: 4, item: "피드", to: "/feed" },
    { id: 5, item: "마이페이지", to: "/mypage" },
  ];

  return (
    <header>
      <nav>
        <Link to="/">
          <h1 className="logo">오늘코디</h1>
        </Link>
        <form>
          <input type="text" placeholder="오늘을 어떤룩?" />
        </form>
        <ul className="menu">
          {menus.map((menu) => (
            <Link to={menu.to}>
              <li key={menu.id} className="menuItem">
                {menu.item}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
