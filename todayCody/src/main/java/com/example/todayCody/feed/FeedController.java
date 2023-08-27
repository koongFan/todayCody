package com.example.todayCody.feed;

import com.example.todayCody.common.config.TodayCodyConstUrl;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.swagger.annotations.ApiOperation;

import lombok.extern.log4j.Log4j2;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import com.example.todayCody.common.util.FileUtil;
import com.example.todayCody.common.util.ResultInfo;
import com.example.todayCody.common.util.ReturnJsonUtil;

@Log4j2
@RestController
@CrossOrigin
public class FeedController {

	Logger logger = LoggerFactory.getLogger(this.getClass());

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
  // 피드 글 삭제
  //==========================================================================================================================================================
  @PostMapping(TodayCodyConstUrl.feedDelete)
  public Object feedDelete(FeedDTO feedDTO){
    return null;
  }
  //==========================================================================================================================================================
  // 피드 리스트 불러오기
  //==========================================================================================================================================================
//  @ApiOperation(value="피드 리스트 불러오기")
  @GetMapping(TodayCodyConstUrl.feedList)
  public Object feedList(HttpServletRequest request, HttpServletResponse response, FeedDTO info) throws Exception{
    JSONObject jsonObject = new JSONObject();
    try{
      if(info.getPer_page()==null || info.getPer_page().equals("")){
        info.setPer_page("5");
      }
      if(info.getPage()==null || info.getPage().equals("")){
        info.setPage("0");
      }
      
      List<FeedDTO> feedList = this.feedService.getFeedList(info);

      String[] filterList = new String[] {
          "feed_seq", "user_seq", "content", "likes", "comment", "image_path", "u_nickname"
      };

      jsonObject = ReturnJsonUtil.getJson("0", feedList.size(), JSONArray.fromObject(feedList), filterList);

    }catch(Exception ex){
			logger.error(ex.getMessage());
			jsonObject.put("result", JSONObject.fromObject(new ResultInfo("1500")));
    }

    return jsonObject;
  }

  @GetMapping(TodayCodyConstUrl.feedRankList)
  public Object feedRankList(HttpServletRequest request, HttpServletResponse response, FeedDTO info) throws Exception{

    JSONObject jsonObject = new JSONObject();
    log.fatal(info);
    try{
      if(info.getPer_page()==null || info.getPer_page().equals("")){
        info.setPer_page("5");
      }
      if(info.getPage()==null || info.getPage().equals("")){
        info.setPage("0");
      }

      // 현재 날짜 정보 가져오기
      LocalDate currentDate = LocalDate.now();

      // 현재 연도 가져오기
      int currentYear = currentDate.getYear();
      info.setReg_date(String.valueOf(currentYear));

      List<FeedDTO> feedList = this.feedService.getFeedRankList(info);

      String[] filterList = new String[] {
              "feed_seq", "user_seq", "content", "likes", "comment", "image_path", "u_nickname"
      };

      jsonObject = ReturnJsonUtil.getJson("0", feedList.size(), JSONArray.fromObject(feedList), filterList);

    }catch(Exception ex){
      logger.error(ex.getMessage());
      jsonObject.put("result", JSONObject.fromObject(new ResultInfo("1500")));
    }

    return jsonObject;
  }

  //===========================================================
  // 피드 좋아요
  //===========================================================
  @PostMapping(TodayCodyConstUrl.feedLike)
  public JSONObject doUpdateFeedLike(HttpServletRequest request, HttpServletResponse response, FeedDTO info) throws Exception{
    JSONObject jsonObject = new JSONObject();
    try{
      int count = feedService.doUpdateFeedLike(info);

      if(count > 0) {
				// 처리 성공
				jsonObject.put("result", JSONObject.fromObject(new ResultInfo("0")));
			}else {
	        	// "1402" 처리 된 데이터 없슴
	        	jsonObject.put("result", JSONObject.fromObject(new ResultInfo("1402")));
	    }

    }catch(Exception ex){
			logger.error(ex.getMessage());
			jsonObject.put("result", JSONObject.fromObject(new ResultInfo("1500")));
    }

    return jsonObject;
  }
  @GetMapping(TodayCodyConstUrl.getTop3)
  public Object getTop3(HttpServletRequest request, HttpServletResponse response) throws Exception{
    JSONObject jsonObject = new JSONObject();
    try{
      // 현재 날짜 정보 가져오기
      LocalDate currentDate = LocalDate.now();

      // 현재 연도 가져오기
      int currentYear = currentDate.getYear();

      List<FeedDTO> feedList = feedService.getTop3(String.valueOf(currentYear));

      String[] filterList = new String[] {
              "feed_seq", "user_seq", "content", "likes", "comment", "image_path", "u_nickname"
      };

      jsonObject = ReturnJsonUtil.getJson("0", feedList.size(), JSONArray.fromObject(feedList), filterList);

    }catch(Exception ex){
      logger.error(ex.getMessage());
      jsonObject.put("result", JSONObject.fromObject(new ResultInfo("1500")));
    }

    return jsonObject;
  }

}
