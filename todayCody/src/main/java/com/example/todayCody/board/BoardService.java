package com.example.todayCody.board;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

public interface BoardService {
  public Map<String,Object> boardWrite(BoardDTO boardDTO, List<MultipartFile> aMultipartFile) throws Exception;
  public List<BoardDTO> getBoardList(BoardDTO boardDTO) throws Exception;
  public List<Map<String,Object>> getBoardLFileist(BoardDTO boardDTO) throws Exception;

  public BoardDTO getBoardDetail(BoardDTO boardDTO) throws  Exception;
  public Map<String,Object> boardEdit(BoardDTO boardDTO, List<MultipartFile> aMultipartFile) throws Exception;
  public Map<String,Object> boardDelete(BoardDTO boardDTO) throws Exception;

}
