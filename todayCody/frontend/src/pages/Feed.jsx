import FeedList from "components/feed/FeedList";

export default function Feed() {
  const feedDatas = [
    {
      id: 1,
      userName: "꿀맛나는샐러리",
      profileImg:
        "https://i.pinimg.com/564x/31/c6/f7/31c6f7d8b4392c7b7c48e3c0f2a4eb9e.jpg",
      feedImg:
        "https://i.pinimg.com/564x/31/c6/f7/31c6f7d8b4392c7b7c48e3c0f2a4eb9e.jpg",
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
        {feedDatas.map((item) => (
          <FeedList key={item.id} data={item} />
        ))}
      </ul>
    </div>
  );
}
