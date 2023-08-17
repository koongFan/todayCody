package com.example.todayCody.main;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Repository("mainDAO")
public class MainDAOImpl implements MainDAO {

  @Autowired
  SqlSessionTemplate sqlSession;

  // 기간별 오늘코디 
  @Override
  public List<MainDTO> getPeriodList() {
    return sqlSession.selectList("com.example.todayCody.main.MainDAO.getPeriodList");
  }

  // 나이대별 코디 
  @Override
  public List<MainDTO> getAgeList(Map<String, String> params) {
    return sqlSession.selectList("com.example.todayCody.main.MainDAO.getAgeList",params);
  }

  // 추천 코디 
  @Override
  public List<MainDTO> getRecommendList(Map<String, String> params) {
    return sqlSession.selectList("com.example.todayCody.main.MainDAO.getRecommendList",params);
  }

  // 일반게시판 
  @Override
  public List<MainDTO> getBoardList() {
    return sqlSession.selectList("com.example.todayCody.main.MainDAO.getBoardList");
  }

  // qa 게시판 
  @Override
  public List<MainDTO> getQaList() {
    return sqlSession.selectList("com.example.todayCody.main.MainDAO.getQaList");
  }

  
    
}
