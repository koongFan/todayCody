import Banner from "components/main/Banner";
import Coder from "components/main/Coder";
import Marquee from "components/main/Marquee";

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
      rank: 3,
    },
  ];
  return (
    <div className="main-wrapper">
      <Banner />
      <Coder codyRanker={codyRanker} />
      <Marquee />
    </div>
  );
}
