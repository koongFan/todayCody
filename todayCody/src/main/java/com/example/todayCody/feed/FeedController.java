package com.example.todayCody.feed;

import com.example.todayCody.common.config.TodayCodyConstUrl;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import lombok.extern.log4j.Log4j2;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import com.example.todayCody.common.util.FileUtil;

@Log4j2
@RestController
@CrossOrigin
public class FeedController {
  @Autowired
  FeedService feedService;

  //==========================================================================================================================================================
  // 피드 글쓰기
  //==========================================================================================================================================================
  @PostMapping(TodayCodyConstUrl.feedWrite)
  public Object feedWrite(HttpServletRequest request, HttpServletResponse response, @RequestParam Map<String, String> params) throws Exception {

    String jsonData = params.get("jsonData");

    List<MultipartFile> aMultipartFile = new FileUtil().getNonEmptyMultipartFiles(request);

    ObjectMapper mapper = new ObjectMapper();
    HashMap<String, Object> jsonMap = mapper.readValue(jsonData, HashMap.class);

    return feedService.feedWrite(jsonMap, aMultipartFile);
  }




  //==========================================================================================================================================================
  //
  //==========================================================================================================================================================

  //==========================================================================================================================================================
  // 피드 글 삭제
  //==========================================================================================================================================================
  @PostMapping(TodayCodyConstUrl.feedDelete)
  public Object feedDelete(FeedDTO feedDTO){
    return null;
  }

  //==========================================================================================================================================================
  // 피드 리스트 불러오기
  //==========================================================================================================================================================
  @GetMapping(TodayCodyConstUrl.feedList)
  public Object feedList(HttpServletRequest request, HttpServletResponse response, @RequestParam Map<String, String> params) throws Exception{
    // List<Object> feedList = this.feedService.getFeedList();
    List<FeedDTO> feedList = this.feedService.getFeedList();
    return feedList;
  }

}
