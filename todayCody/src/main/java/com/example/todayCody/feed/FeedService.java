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
<<<<<<< HEAD
  public int doUpdateFeedLike(FeedDTO info);
=======
  public int doUpdateFeedLike(Map<String, String> params);

>>>>>>> 3f1866404d563b7dc188ae6f0ad4a7d5ba991ae8
}
