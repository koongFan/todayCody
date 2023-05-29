package com.example.todayCody.feed;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Log4j2
@Service("feedService")
public class FeedServiceImpl implements FeedService {

  @Override
  public Map<String, Object> feedWrite(Map<String, Object> jsonMap, List<MultipartFile> aMultipartFile) throws Exception {

    //file 정보
    ArrayList<?> fileInfoList = (ArrayList<?>) jsonMap.get("file");


    log.info("fileInfoList=[" + fileInfoList + "]");

    for (int i = 0; i < aMultipartFile.size(); i++) {
      log.info("업로드할 파일[" + i + "]=[" + aMultipartFile.get(i).getOriginalFilename() + "]");
    }

    int fileIndex = 0;
    for (Object fileInfo : fileInfoList) {
      HashMap<String, Object> feedImgInfo = (HashMap<String, Object>) fileInfo;
      feedImgInfo.put("feed_seq", jsonMap.get("feed_seq"));

      if (feedImgInfo.get("file_name") != null && ((String) feedImgInfo.get("file_name")).length() > 0) {
        if ("file[]".equals(aMultipartFile.get(fileIndex).getName())) {
          log.info("hahah");
        }

      }

    }


    return null;
  }
}
