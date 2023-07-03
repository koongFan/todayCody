package com.example.todayCody.common.util;

import lombok.extern.log4j.Log4j2;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.UUID;

@Log4j2
public class FileUtil {

  /**
   * 디렉토리를 생성한다.
   *
   * @param sPath 절대패스
   * @since 1.0
   */
  public static void makeDir(String sPath) {
    File desDirFile = new File(sPath);
    if (!desDirFile.exists())
      desDirFile.mkdir();
  }

  public static String uploadFile(String path, MultipartFile file)
          throws Exception {

    String savedFileName = null;

    if (file != null) {
      log.info("===========================================================");
      log.info("[uploadFile] 파라미터명:" + file.getName());
      log.info("[uploadFile] 파일크기:" + file.getSize());
      log.info("[uploadFile] 파일 존재:" + file.isEmpty());
      log.info("[uploadFile] 오리지날파일이름:" + file.getOriginalFilename());
      log.info("[uploadFile] 업로드 파일 경로:" + path);
      log.info("===========================================================");

      InputStream inputStream = null;
      OutputStream outputStream = null;

      String organizedFilePath = "";

      try {
        if (file.getSize() > 0) {
          inputStream = file.getInputStream();
          File realUploadDir = new File(path);

          if (!realUploadDir.exists()) {
            realUploadDir.mkdirs();
          }
          savedFileName = file.getOriginalFilename();

          organizedFilePath = path + "/" + savedFileName;

          log.info("[uploadFile] saved_file_name:" + organizedFilePath);// 파일이 저장된경로 + 파일명

          outputStream = new FileOutputStream(organizedFilePath);

          int readByte = 0;
          byte[] buffer = new byte[8192];

          while ((readByte = inputStream.read(buffer, 0, 8120)) != -1) {
            outputStream.write(buffer, 0, readByte); // 파일 생성 !
          }
        }
      } finally {
        outputStream.close();
        inputStream.close();
      }
    }

    return savedFileName;
  }

  public List<MultipartFile> getNonEmptyMultipartFiles(HttpServletRequest request) {
    if (!(request instanceof MultipartHttpServletRequest)) {
      return Collections.emptyList();
    }

    MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
    List<MultipartFile> aMultipartFile = new ArrayList<>(multipartRequest.getFiles("file[]"));

    aMultipartFile.removeIf(file -> file.getOriginalFilename() == null || file.getOriginalFilename().trim().isEmpty());

    // 디버깅
    aMultipartFile.forEach(file -> log.info("getOriginalFilename()[" + file.getName() + "]:" + file.getOriginalFilename()));

    return aMultipartFile;
  }
}
