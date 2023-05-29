package com.example.todayCody.feed;

import lombok.extern.log4j.Log4j2;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;

@Log4j2
@Repository("feedDAO")
public class FeedDAOImpl implements FeedDAO {

  @Autowired
  SqlSessionTemplate sqlSession;

  @Override
  public int insertFeedInfo(HashMap<String, Object> jsonMap) {
    sqlSession.insert("com.example.todayCody.feed.FeedDAO.insertFeedInfo", jsonMap);
    int newFeedSeq = sqlSession.selectOne("com.example.todayCody.feed.FeedDAO.getMaxFeedSeq");

    return newFeedSeq;
  }

  @Override
  public int insertFileInfo(HashMap<String, Object> jsonMap) {
    return sqlSession.insert("com.example.todayCody.feed.FeedDAO.insertFileInfo", jsonMap);
  }
}
