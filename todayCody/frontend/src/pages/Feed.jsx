import FeedList from "components/feed/FeedList";
import { useGetFeeds } from "api/feed";

export default function Feed() {
  const feeds = useGetFeeds();
  const feedDatas = [
    {
      feed_seq: 1,
      u_nickname: "꿀맛나는샐러리",
      profileImg: "/img/p1.png",
      image_path: ["/img/p2.png", "/img/p3.png"],
      likes: 1003,
      content:
        "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quos cum sint assumenda vero voluptatem quia ipsam eum.</p>",
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
  const feedLists = [
    {
      feed_seq: 1,
      u_nickname: "꿀맛나는샐러리",
      image_path: ["/img/p2.png", "/img/p3.png"],
      likes: 1003,
      content:
        "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quos cum sint assumenda vero voluptatem quia ipsam eum.</p>",
    },
    {
      feed_seq: 1,
      u_nickname: "꿀맛나는샐러리",
      image_path: ["/img/p2.png", "/img/p3.png"],
      likes: 1003,
      content:
        "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quos cum sint assumenda vero voluptatem quia ipsam eum.</p>",
    },
    {
      feed_seq: 1,
      u_nickname: "꿀맛나는샐러리",
      image_path: ["/img/p2.png", "/img/p3.png"],
      likes: 1003,
      content:
        "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quos cum sint assumenda vero voluptatem quia ipsam eum.</p>",
    },
  ];
  return (
    <div className="wrapper">
      <ul className="feedList">
        {feeds.map((feed) => (
          <FeedList key={feed.feed_seq} data={feed} />
        ))}
      </ul>
    </div>
  );
}
