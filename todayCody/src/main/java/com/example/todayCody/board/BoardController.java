package com.example.todayCody.board;

import com.example.todayCody.common.config.TodayCodyConstUrl;
import com.example.todayCody.common.util.FileUtil;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Log4j2
@RestController
@CrossOrigin
public class BoardController {

  @Autowired
  BoardService boardService;

  @PostMapping(TodayCodyConstUrl.boardWrite)
  public Object boardWrite(HttpServletRequest request, HttpServletResponse response, @RequestParam Map<String, String> params) throws Exception {
    String jsonData = params.get("jsonData");

    List<MultipartFile> aMultipartFile = new FileUtil().getNonEmptyMultipartFiles(request);

    ObjectMapper mapper = new ObjectMapper();
//    HashMap<String, Object> jsonMap = mapper.readValue(jsonData, HashMap.class);
    BoardDTO dto = mapper.readValue(jsonData, BoardDTO.class);
    log.fatal(dto.toString());
    log.fatal(aMultipartFile.size());
    return boardService.boardWrite(dto,aMultipartFile);
  }

}
