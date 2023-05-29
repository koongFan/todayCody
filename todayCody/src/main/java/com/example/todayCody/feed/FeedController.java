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

@Log4j2
@RestController
@CrossOrigin
public class FeedController {
  @Autowired
  FeedService feedService;

  @PostMapping(TodayCodyConstUrl.feedWrite)
  public Object feedWrite(HttpServletRequest request,
                          HttpServletResponse response,
                          @RequestParam Map<String, String> params) throws Exception {

    String jsonData = params.get("jsonData");

    Map<String, Object> resMap = new HashMap<>();

    try {
      jsonData = URLDecoder.decode(jsonData, "UTF-8");
    } catch (Exception e2) {
      log.info(e2);
      resMap.put("retcode", "999");
      resMap.put("retmsg", "수신데이타 파싱에러:" + e2);
      return resMap;
    }

    log.info("[URLDecoder.decode 후..] >jsondata=\n" + jsonData);

    List<MultipartFile> aMultipartFile = null;
    if (request instanceof MultipartHttpServletRequest) {
      MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
      aMultipartFile = new ArrayList<>(multipartRequest.getFiles("file[]"));
      for (int i = 0; i < aMultipartFile.size(); i++) {
        if (aMultipartFile.get(i).getOriginalFilename() == null || aMultipartFile.get(i).getOriginalFilename().trim().length() == 0) {
          aMultipartFile.remove(i);
          i--; // 이거 중요..
        }
      }
      // 디버깅
      for (int i = 0; i < aMultipartFile.size(); i++) {
        log.info("[" + i + "] >> getOriginalFilename()[" + aMultipartFile.get(i).getName() + "]:" + aMultipartFile.get(i).getOriginalFilename());
      }
    }
    ObjectMapper mapper = new ObjectMapper();
    HashMap<String, Object> jsonMap = mapper.readValue(jsonData, HashMap.class);

    resMap = feedService.feedWrite(jsonMap, aMultipartFile);

    return resMap;
  }


}
