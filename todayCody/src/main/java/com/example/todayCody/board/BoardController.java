package com.example.todayCody.board;

import com.example.todayCody.common.config.TodayCodyConstUrl;
import com.example.todayCody.common.util.FileUtil;
import com.example.todayCody.common.util.ResultInfo;
import com.example.todayCody.common.util.ReturnJsonUtil;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.annotations.ApiOperation;
import lombok.extern.log4j.Log4j2;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
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

  @PostMapping(TodayCodyConstUrl.boardWrite)
  public Object boardWrite(HttpServletRequest request, HttpServletResponse response, @RequestParam Map<String, String> params) throws Exception {

    String jsonData = params.get("jsonData");

    List<MultipartFile> aMultipartFile = new FileUtil().getNonEmptyMultipartFiles(request);

    ObjectMapper mapper = new ObjectMapper();

    BoardDTO dto = mapper.readValue(jsonData, BoardDTO.class);

    return boardService.boardWrite(dto, aMultipartFile);
  }

  //  @ApiOperation(value = "게시판 리스트 불러오기")
  @PostMapping(TodayCodyConstUrl.boardList)
  public Object getBoardList(HttpServletRequest request, @RequestParam Map<String, String> params) throws JsonProcessingException {
    JSONObject jsonObject = new JSONObject();

    String jsonData = params.get("jsonData");

    ObjectMapper mapper = new ObjectMapper();

    BoardDTO boardDTO = mapper.readValue(jsonData, BoardDTO.class);

    try {
      int maxRetCnt = boardDTO.getMax_ret_cnt();
      int pageNum = boardDTO.getPage_num();
      int startIdx = (pageNum - 1) * maxRetCnt;

      boardDTO.setMax_ret_cnt(maxRetCnt);
      boardDTO.setStart_index(startIdx);

      List<BoardDTO> boardList = boardService.getBoardList(boardDTO);
      String[] filterList = new String[]{
              "board_seq", "user_seq", "title", "content", "reg_date", "udt_date", "del_yn", "read_cnt", "type"
      };

      jsonObject = ReturnJsonUtil.getJson("0", boardList.size(), JSONArray.fromObject(boardList), filterList);

    } catch (Exception ex) {
      ex.printStackTrace();
      jsonObject.put("result", net.sf.json.JSONObject.fromObject(new ResultInfo("1500")));
    }

    return jsonObject;
  }

}
