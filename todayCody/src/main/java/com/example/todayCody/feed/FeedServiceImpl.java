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

    //file 정보
    ArrayList<?> fileInfoList = (ArrayList<?>) jsonMap.get("file");

    //피드 정보 DB에 insert 하고 새로운 피드 번호 받아옴
    int newFeedSeq = feedDAO.insertFeedInfo((HashMap<String, Object>) jsonMap);
//    int newFeedSeq = 3;
    log.info("새로운 피드 번호 : " + newFeedSeq);


    log.info("fileInfoList=[" + fileInfoList + "]");

    for (int i = 0; i < aMultipartFile.size(); i++) {
      log.info("업로드할 파일[" + i + "]=[" + aMultipartFile.get(i).getOriginalFilename() + "]");
    }

    int fileIndex = 0;
    for (Object fileInfo : fileInfoList) {
      //파일정보 테이블에 들어갈 파라미터로 쓰일 맵
      HashMap<String, Object> fileInfoMap = (HashMap<String, Object>) fileInfo;
      fileInfoMap.put("feed_seq", newFeedSeq);

      if (fileInfoMap.get("file_name") != null && ((String) fileInfoMap.get("file_name")).length() > 0) {
        if ("file[]".equals(aMultipartFile.get(fileIndex).getName())) {
          //파일 업로드
          String savedFileName = FileUtil.uploadFile(uploadPath+ "feed_" + newFeedSeq, aMultipartFile.get(fileIndex));

          log.info("[파일 저장 성공] 저장된 파일명 : " + savedFileName);
          String[] fileSplitArr = savedFileName.split("\\.");
          fileInfoMap.put("file_name",fileSplitArr[0]);
          fileInfoMap.put("ext_name",fileSplitArr[1]);

          fileIndex++;
        }
      }
      feedDAO.insertFileInfo(fileInfoMap);

    }

    jsonMap.put("retCode", "000");
    jsonMap.put("retMsg", "정상적으로 등록되었습니다.");


    return jsonMap;
  }
}
