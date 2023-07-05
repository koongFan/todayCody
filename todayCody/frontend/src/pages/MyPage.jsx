import React, { useState } from "react";
import Footer from "components/layout/Footer";

export default function MyPage() {
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
  const photoList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
              <h3>꿀맛나는 샐러리</h3>
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
                src={`/icons/${item.value}.svg`}
                className="icon"
                alt="icon"
              />
              {item.name}
            </li>
          ))}
        </div>
        <div className="posts">
          {photoList.map((item) => (
            <div className="imgContainer">
              <img
                src="https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="post"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
