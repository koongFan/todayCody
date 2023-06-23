import { useState } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const menus = [
  { id: 1, name: "홈", value: "home", to: "/" },
  { id: 2, name: "코디랭킹", value: "rank", to: "/ranking" },
  { id: 3, name: "룩별정보", value: "info", to: "/lookInfo" },
  { id: 4, name: "게시판", value: "board", to: "/board" },
  { id: 5, name: "피드", value: "feed", to: "/feed" },
  { id: 5, name: "마이페이지", value: "user", to: "/mypage" },
];

export default function Sidebar() {
  const open = useSelector((state) => state.sidebar.open);
  const [selected, setSelected] = useState("home");
  return (
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
  );
}
