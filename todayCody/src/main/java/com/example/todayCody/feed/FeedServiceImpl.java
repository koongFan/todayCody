package com.example.todayCody.feed;

import com.example.todayCody.common.util.FileUtil;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Log4j2
@Service("feedService")
public class FeedServiceImpl implements FeedService {

  @Value("${upload.path}")
  private String uploadPath;

  @Autowired
  FeedDAO feedDAO;

  @Override
  public Map<String, Object> feedWrite(Map<String, Object> jsonMap, List<MultipartFile> aMultipartFile) throws Exception {
    try {
      ArrayList<?> fileInfoList = (ArrayList<?>) jsonMap.get("file");
      int newFeedSeq = feedDAO.insertFeedInfo((HashMap<String, Object>) jsonMap);
      log.info("새로운 피드 번호 : " + newFeedSeq);
      log.info("fileInfoList=[" + fileInfoList + "]");

      int fileIndex = 0;
      for (Object fileInfo : fileInfoList) {
        HashMap<String, Object> fileInfoMap = (HashMap<String, Object>) fileInfo;
        fileInfoMap.put("feed_seq", newFeedSeq);
        fileInfoMap.put("image_path", "/feeds/feed_" + newFeedSeq + "/images/" + fileInfoMap.get("file_name") + "/");
        String fileName = (String) fileInfoMap.get("file_name");
        if (fileName != null && !fileName.isEmpty() && "file[]".equals(aMultipartFile.get(fileIndex).getName())) {
          String savedFileName = FileUtil.uploadFile(uploadPath + "feeds/feed_" + newFeedSeq + "/images", aMultipartFile.get(fileIndex));
          log.info("[파일 저장 성공] 저장된 파일명 : " + savedFileName);
          String[] fileSplitArr = savedFileName.split("\\.");
          fileInfoMap.put("file_name", fileSplitArr[0]);
          fileInfoMap.put("ext_name", fileSplitArr[1]);
          fileIndex++;
        }
        feedDAO.insertFileInfo(fileInfoMap);
      }

      jsonMap.put("retCode", "000");
      jsonMap.put("retMsg", "정상적으로 등록되었습니다.");

    } catch (Exception e) {
      jsonMap.put("retCode", "999");
      jsonMap.put("retMsg", "에러가 발생했습니다: " + e.getMessage());
    }
    return jsonMap;
  }


  public List<FeedDTO> getFeedList(FeedDTO info) throws Exception {

    //==================================================================
    return feedDAO.getFeedList(info);
    //==================================================================
  }
  public List<FeedDTO> getFeedRankList(FeedDTO info) throws Exception {
    //==================================================================
    return feedDAO.getFeedRankList(info);
    //==================================================================
  }

  @Override
  public List<FeedDTO> getTop3(String year) throws Exception {

    return feedDAO.getTop3(year);
  }



  @Override
  // 피드 좋아요
  public int doUpdateFeedLike(Map<String, String> params){
    return feedDAO.doUpdateFeedLike(params);
  }
}
