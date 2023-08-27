package com.example.todayCody.feed;

import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public interface FeedService {
  public Map<String,Object> feedWrite(Map<String, Object> jsonMap,
                                          List<MultipartFile> aMultipartFile) throws Exception;
   
  // public List<Object> getFeedList() throws Exception;


  public List<FeedDTO> getFeedList(FeedDTO info) throws Exception;
  public List<FeedDTO> getFeedRankList(FeedDTO info) throws Exception;
  public List<FeedDTO> getTop3(String year) throws Exception;

  // 피드 좋아요
  public int doUpdateFeedLike(Map<String, String> params);

}
