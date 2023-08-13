import FeedList from "components/feed/FeedList";
import { getFeeds } from "api/feed";
import Footer from "components/layout/Footer";
import { useQuery } from "@tanstack/react-query";

export default function Feed() {
  const { data, isLoading } = useQuery({
    queryKey: ["feeds"],
    queryFn: getFeeds,
  });

  return (
    <div className="wrapper">
      {isLoading && <p>Loading...</p>}
      <ul className="feedList">
        {data?.map((feed) => (
          <FeedList data={feed} />
        ))}
      </ul>
      <Footer />
    </div>
  );
}
