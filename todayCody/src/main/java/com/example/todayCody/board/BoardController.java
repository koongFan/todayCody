package com.example.todayCody.board;

import com.example.todayCody.common.config.TodayCodyConstUrl;
import com.example.todayCody.common.util.FileUtil;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
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

//  @PostMapping(TodayCodyConstUrl.boardWrite)
//  public Object boardWrite(HttpServletRequest request, HttpServletResponse response, @RequestParam Map<String, String> params) throws Exception {
//
//    String jsonData = params.get("jsonData");
//
//    List<MultipartFile> aMultipartFile = new FileUtil().getNonEmptyMultipartFiles(request);
//
//    ObjectMapper mapper = new ObjectMapper();
//
//    BoardDTO dto = mapper.readValue(jsonData, BoardDTO.class);
//
//    return boardService.boardWrite(dto, aMultipartFile);
//  }

  @RequestMapping(TodayCodyConstUrl.axiosBoardController)
  public Object AxiosBoardController(HttpServletRequest request, HttpServletResponse response, @RequestParam Map<String, String> params) throws Exception {

    String jsonData = params.get("jsonData");
    List<MultipartFile> aMultipartFile = new FileUtil().getNonEmptyMultipartFiles(request);

    ObjectMapper mapper = new ObjectMapper();
    BoardDTO boardDTO = mapper.readValue(jsonData, BoardDTO.class);

    String serviceTp = boardDTO.getService_tp();

    Map<String, Object> resMap = new HashMap<>();
    String inputCheckRet = null;

    switch (DefineBoardService.Service.valueOf(serviceTp)) {
      case board_write:
        if ((inputCheckRet = checkInputField(boardDTO, (new String[]{"service_tp", "user_seq"}))) != null) {
          break;
        }
        resMap = boardService.boardWrite(boardDTO, aMultipartFile);
        break;
      case get_board_list:
        if ((inputCheckRet = checkInputField(boardDTO, (new String[]{"service_tp"}))) != null) {
          break;
        }
        resMap = boardService.getBoardList(boardDTO);
        break;
      case board_update:
        resMap.put("msg", "수정 모드 준비중");
        break;
      case board_delete:
        resMap.put("msg", "삭제 준비중");
        break;
      default:
        resMap.put("msg", "잘못된 파라미터");
        break;
    }

    if (inputCheckRet != null) {
      resMap.put("retCode", "992");
      resMap.put("retMsg", inputCheckRet);
    }

    return resMap;
  }

  private String checkInputField(BoardDTO boardDTO, String[] fields) {
    if (boardDTO == null) {
      return "DTO 객체가 null입니다.";
    }
    for (String field : fields) {
      try {
        Object value = boardDTO.getFieldValue(field);
        if (value == null || String.valueOf(value).trim().isEmpty() || String.valueOf(value).equals("0")) {
          return "입력필드를 확인하세요. 필드[" + field + "]가 없거나 데이터가 설정되어 있지 않습니다.";
        }

      } catch (Exception ee) {
        log.error(ee);
      }
    }
    return null;
  }


}
