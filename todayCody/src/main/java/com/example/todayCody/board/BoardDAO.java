package com.example.todayCody.board;

import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public interface BoardDAO {

  public int insertBoard(BoardDTO boardDTO) throws Exception;

  public void insertFileInfo(HashMap<String, Object> jsonMap);

  public List<BoardDTO> getBoardList(BoardDTO boardDTO) throws Exception;

  public List<Map<String,Object>> getBoardFileList(BoardDTO boardDTO);
  public BoardDTO getBoardDetail(BoardDTO boardDTO) throws Exception;
  // public Map<String,Object> boardEdit(BoardDTO boardDTO, List<MultipartFile> aMultipartFile) throws Exception;
  // public Map<String,Object> boardDelete(BoardDTO boardDTO) throws Exception;
}
