import { useEffect, useState, useRef, useCallback } from "react";
import { useGetFeeds } from "api/feed";
import FeedList from "components/feed/FeedList";
import Footer from "components/layout/Footer";
import Spinner from "components/common/Spinner";

export default function Feed() {
  const [page, setPage] = useState(0);
  const { feeds, hasMore, loading } = useGetFeeds(page);
  const observer = useRef();

  useEffect(() => {
    setPage(0);
  }, []);

  // console.log(page, feeds);

  const lastFeedElementRef = useCallback(
    (element) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            setPage((prev) => prev + 1);
          }
        },
        { threshold: 0.8 }
      );
      if (element) observer.current.observe(element);
    },
    [loading, hasMore]
  );

  return (
    <div className="wrapper">
      <div className="feedContainer">
        {loading && <Spinner />}
        <ul className="feedList">
          {feeds?.map((feed, idx) => {
            if (feeds.length === idx + 1) {
              return (
                <FeedList
                  key={feed.feed_seq}
                  data={feed}
                  feedRef={lastFeedElementRef}
                  loading={loading}
                />
              );
            } else {
              return <FeedList key={feed.feed_seq} data={feed} />;
            }
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
