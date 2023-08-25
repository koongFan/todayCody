import { useState } from "react";
import Pagination from "components/common/Pagination";
import Footer from "components/layout/Footer";
import TableRow from "components/ranking/TableRow";

export default function Ranking() {
  const [range, setRange] = useState("setting");
  const rangeOption = [
    { name: "기간내", value: "setting" },
    { name: "전체", value: "all" },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const coder = [
    {
      img: "https://i.pinimg.com/236x/d7/82/52/d7825262b259d9400c60939976c34e2f.jpg",
      name: "김보로꼬리",
      age: "30대",
      tag: ["미니멀", "스포티", "시티보이"],
      likes: 23,
      rank: 2,
    },
    {
      img: "https://i.pinimg.com/236x/d7/82/52/d7825262b259d9400c60939976c34e2f.jpg",
      name: "김보로꼬리",
      age: "30대",
      tag: ["미니멀", "스포티", "시티보이"],
      likes: 23,
      rank: 1,
    },
    {
      img: "https://i.pinimg.com/236x/d7/82/52/d7825262b259d9400c60939976c34e2f.jpg",
      name: "김보로꼬리",
      age: "30대",
      tag: ["미니멀", "스포티", "시티보이"],
      likes: 23,
      rank: 3,
    },
  ];
  const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);
  return (
    <div className="wrapper">
      <div className="rankContainer">
        <div className="top">
          <div className="title">
            <h1>이번주 오늘코더</h1>
            <p>(23.05.7 ~ 23.05.13 기준)</p>
          </div>
          <div className="podium">
            {coder.map((item) => (
              <div className="rank">
                <div className="imgContainer">
                  <img src={item.img} alt="rankImg" />
                </div>
                <div className="likes">
                  <img
                    src="/icon/orange-heart.svg"
                    className="haert"
                    alt="heartIcon"
                  />
                  <p>{item.likes}</p>
                </div>
                <div className="desc">
                  <div className="medal">
                    <img
                      src={`/icon/${
                        item.rank === 1 ? "star" : "blackStar"
                      }.svg`}
                      alt="starIcon"
                    />
                    <span>{item.rank}</span>
                  </div>
                  <ul className="tags">
                    {item.tag.map((item) => (
                      <li>#{item}</li>
                    ))}
                  </ul>
                  <div className="user">김보로꼬리(30대)</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bottom">
          <div className="title">
            <div className="name">
              <h2>순위별 코디랭킹</h2>
              <p>(23.05.7 ~ 23.05.13 기준)</p>
            </div>
            <div className="filter">
              {rangeOption.map((item) => (
                <button
                  className={`${range === item.value && "selected"}`}
                  onClick={() => {
                    setRange(item.value);
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>유저사진</th>
                <th>닉네임</th>
                <th>추천수</th>
                <th>조회수</th>
                <th>좋아요</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((post) => (
                <TableRow post={post} />
              ))}
            </tbody>
          </table>
          <Pagination
            totalPosts={posts.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
