package com.example.todayCody.feed;


import java.util.HashMap;

public interface FeedDAO {

  public int insertFeedInfo(HashMap<String, Object> jsonMap);
  public int insertFileInfo(HashMap<String, Object> jsonMap);

}
