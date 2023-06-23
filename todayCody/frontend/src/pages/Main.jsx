import Banner from "components/main/Banner";
import Trend from "components/main/Trend";
import Board from "components/main/Board";

export default function Main() {
  const codyRanker = [
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
      rank: 2,
    },
    {
      img: "https://i.pinimg.com/236x/d7/82/52/d7825262b259d9400c60939976c34e2f.jpg",
      name: "김보로꼬리",
      age: "30대",
      tag: ["미니멀", "스포티", "시티보이"],
      likes: 23,
      rank: 4,
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
  const trend = [
    {
      img: "https://i.pinimg.com/564x/07/88/23/0788232afa77c447034314e1550ef512.jpg",
      tag: ["미니멀", "스포티", "시티보이"],
    },
    {
      img: "https://i.pinimg.com/736x/b3/6e/81/b36e81e9e11e33398125bc3ee353e4f0.jpg",
      tag: ["미니멀", "스포티", "시티보이"],
    },
    {
      img: "https://i.pinimg.com/564x/b0/96/f1/b096f1405ff614b41231d8d5e8089683.jpg",
      tag: ["미니멀", "스포티", "시티보이"],
    },
    {
      img: "https://i.pinimg.com/564x/a8/b4/d0/a8b4d07f203c9ef66173520930e93dab.jpg",
      tag: ["미니멀", "스포티", "시티보이"],
    },
  ];
  const posts = [
    {
      postId: 1,
      title: "오코에서는 모든 스타일을 가진 사람들의 이야기를 다룹니다.",
      writer: { img: "#", userName: "생로랑" },
      view: 586,
      date: "2023-05-17",
    },
    {
      postId: 2,
      title: "오코에서는 모든 스타일을 가진 사람들의 이야기를 다룹니다.",
      writer: { img: "#", userName: "생로랑" },
      view: 586,
      date: "2023-05-17",
    },
    {
      postId: 3,
      title: "오코에서는 모든 스타일을 가진 사람들의 이야기를 다룹니다.",
      writer: { img: "#", userName: "생로랑" },
      view: 586,
      date: "2023-05-17",
    },
    {
      postId: 4,
      title: "오코에서는 모든 스타일을 가진 사람들의 이야기를 다룹니다.",
      writer: { img: "#", userName: "생로랑" },
      view: 586,
      date: "2023-05-17",
    },
    {
      postId: 5,
      title: "오코에서는 모든 스타일을 가진 사람들의 이야기를 다룹니다.",
      writer: { img: "#", userName: "생로랑" },
      view: 586,
      date: "2023-05-17",
    },
  ];

  return (
    <div className="main-wrapper">
      <Banner />

      <div className="container">
        <Trend trend={codyRanker} title="이번주 오늘코더" category="coder" />
        <Trend trend={trend} title="#지금 뜨는 20대 LOOK" category="trend" />
        <Trend trend={trend} title="#이 LOOK은 어떤가요?" category="trend" />
        <div className="board-container">
          <Board title="자유게시판" posts={posts} />
          <Board title="Q&A" posts={posts} />
        </div>
      </div>
    </div>
  );
}
