import React from "react";
import FeedList from "components/feed/FeedList";

export default function Feed() {
  const feedDatas = [
    {
      id: 1,
      userName: "smosco",
      profileImg:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
      feedImg:
        "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
      likes: 456,
      feedText: "드디어 여름이 왔다. 멋진 노을!",
      comments: [
        { userId: 2, userName: "demian", text: "와 정말 멋진 바다다." },
      ],
    },
    {
      id: 2,
      userName: "demian",
      profileImg:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
      feedImg:
        "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
      likes: 73,
      feedText: "드디어 여름이 왔다. 멋진 노을!",
      comments: [
        { userId: 3, userName: "smosco", text: "와 정말 멋진 바다다." },
      ],
    },
    {
      id: 3,
      userName: "pangi",
      profileImg:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
      feedImg:
        "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
      likes: 73,
      feedText: "드디어 여름이 왔다. 멋진 노을!",
      comments: [
        { userId: 3, userName: "smosco", text: "와 정말 멋진 바다다." },
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
