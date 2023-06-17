package com.example.todayCody.feed;


import java.util.HashMap;
import java.util.List;

public interface FeedDAO {

  //[피드 등록] 피드 정보 테이블에 insert
  public int insertFeedInfo(HashMap<String, Object> jsonMap);

  //[피드 등록] 파일 정보 테이블에 insert
  public int insertFileInfo(HashMap<String, Object> jsonMap);

  public List<FeedDTO> getFeedList();
}
