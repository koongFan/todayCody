import FeedList from "components/feed/FeedList";
import { useGetFeeds } from "api/feed";

export default function Feed() {
  const feeds = useGetFeeds();
  const feedDatas = [
    {
      id: 1,
      nickname: "꿀맛나는샐러리",
      profileImg: "/img/p1.png",
      feedImgs: ["/img/p2.png", "/img/p3.png"],
      likes: 1003,
      feedText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quos cum sint assumenda vero voluptatem quia ipsam eum. ",
      tags: ["스포티", "미니멀", "클래식"],
      comments: [
        {
          userId: 1,
          nickname: "nickname",
          text: "Lorem ipsum dolor sit amet",
        },
        {
          userId: 2,
          nickname: "nickname",
          text: "Lorem ipsum dolor sit amet",
        },
      ],
    },
    {
      id: 2,
      nickname: "꿀맛나는샐러리",
      profileImg: "/img/p1.png",
      feedImgs: ["/img/p1.png", "/img/p2.png"],
      likes: 1003,
      feedText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quos cum sint assumenda vero voluptatem quia ipsam eum. ",
      tags: ["스포티", "미니멀", "클래식"],
      comments: [
        {
          userId: 1,
          nickname: "nickname",
          text: "Lorem ipsum dolor sit amet",
        },
        {
          userId: 2,
          nickname: "nickname",
          text: "Lorem ipsum dolor sit amet",
        },
      ],
    },
  ];
  return (
    <div className="wrapper">
      <ul className="feedList">
        {feedDatas.map((feed) => (
          <FeedList key={feed.id} data={feed} />
        ))}
      </ul>
    </div>
  );
}
