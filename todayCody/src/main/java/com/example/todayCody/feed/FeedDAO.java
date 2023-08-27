package com.example.todayCody.feed;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

public interface FeedDAO {

  //[피드 등록] 피드 정보 테이블에 insert
  public int insertFeedInfo(HashMap<String, Object> jsonMap);

  //[피드 등록] 파일 정보 테이블에 insert
  public int insertFileInfo(HashMap<String, Object> jsonMap);

  public List<FeedDTO> getFeedList(FeedDTO info);
  public List<FeedDTO> getTop3(String year);
  public List<FeedDTO> getFeedRankList(FeedDTO info);

  //피드 좋아요
  public int doUpdateFeedLike(FeedDTO info);
}
