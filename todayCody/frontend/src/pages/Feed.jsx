import { useState, useEffect, useRef, useCallback } from "react";
// import { useQuery } from "@tanstack/react-query";
import { useGetFeeds } from "api/feed";
import FeedList from "components/feed/FeedList";
import Footer from "components/layout/Footer";

export default function Feed() {
  const [page, setPage] = useState(1);
  const { feeds, hasMore, loading } = useGetFeeds(page);
  const observer = useRef();

  const lastFeedElementRef = useCallback(
    (element) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (element) observer.current.observe(element);
    },
    [loading, hasMore]
  );

  return (
    <div className="wrapper">
      {loading && <p>Loading...</p>}
      <ul className="feedList">
        {feeds?.map((feed, idx) => {
          if (feeds.length === idx + 1) {
            return <FeedList data={feed} ref={lastFeedElementRef} />;
          } else {
            return <FeedList data={feed} />;
          }
        })}
      </ul>
      <Footer />
    </div>
  );
}
