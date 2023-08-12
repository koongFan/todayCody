import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "components/layout/Footer";
import { AuthContext } from "contexts/AuthContext";
import { useGetMyPage } from "api/auth";
import { TbBoxMultiple } from "react-icons/tb";

export default function MyPage() {
  const user = useContext(AuthContext);
  const myPageList = useGetMyPage(user?.user_seq);
  console.log(myPageList);
  const [category, setCategory] = useState("posts");
  const categoryList = [
    {
      id: 1,
      name: "게시물",
      value: "posts",
    },
    {
      id: 2,
      name: "저장됨",
      value: "saved",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <div className="my-container">
        <div className="profile">
          <div className="imgContainer">
            <img
              src="https://images.pexels.com/photos/952213/pexels-photo-952213.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="profile-img"
            />
          </div>
          <div className="desc">
            <div className="top">
              <h3>{user?.u_nickname}</h3>
              <button>팔로우</button>
            </div>
            <div className="middle">
              <div className="item">
                <span>게시물</span>
                <span>1,333</span>
              </div>
              <div className="item">
                <span>팔로워</span>
                <span>400</span>
              </div>
              <div className="item">
                <span>팔로잉</span>
                <span>1,300</span>
              </div>
            </div>
            <div className="bottom">
              <p>안녕하세요리사 오늘코디화이팅</p>
              <button onClick={() => navigate("/newboard")}>글 작성</button>
            </div>
          </div>
        </div>
        <div className="category">
          {categoryList.map((item) => (
            <li
              key={item.id}
              className={`${category === item.value && "active"}`}
              onClick={() => setCategory(item.value)}
            >
              <img
                src={`/icon/${item.value}.svg`}
                className="icon"
                alt="icon"
              />
              {item.name}
            </li>
          ))}
        </div>
        <div className="posts">
          {myPageList.map((item) => (
            <div className="imgContainer" key={item.feed_seq}>
              <img src={item.image_path.split(",")[0]} alt="post" />
              {item.image_path.split.length > 1 && (
                <TbBoxMultiple className="icon" />
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
