package com.example.todayCody.board;

import lombok.extern.log4j.Log4j2;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Log4j2
@Repository("boardDAO")
public class BoardDAOImpl implements BoardDAO{

  @Autowired
  private SqlSessionTemplate sqlSessionTemplate;

  @Override
  public int insertBoard(BoardDTO boardDTO) throws Exception {
    sqlSessionTemplate.insert("com.example.todayCody.board.BoardDAO.insertBoard",boardDTO);
    return sqlSessionTemplate.selectOne("com.example.todayCody.board.BoardDAO.getMaxBoardSeq");
  }

  @Override
  public void insertFileInfo(HashMap<String, Object> jsonMap) {
    sqlSessionTemplate.insert("com.example.todayCody.board.BoardDAO.insertFileInfo", jsonMap);
  }

  @Override
  public List<BoardDTO> getBoardList(BoardDTO boardDTO) throws Exception {
    return sqlSessionTemplate.selectList("com.example.todayCody.board.BoardDAO.getBoardList",boardDTO);
  }

  // @Override
  // public Map<String, Object> boardEdit(BoardDTO boardDTO, List<MultipartFile> aMultipartFile) throws Exception {
  //   return null;
  // }

  // @Override
  // public Map<String, Object> boardDelete(BoardDTO boardDTO) throws Exception {
  //   return null;
  // }
}
