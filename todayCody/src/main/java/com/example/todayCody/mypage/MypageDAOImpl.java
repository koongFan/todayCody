package com.example.todayCody.mypage;

import lombok.extern.log4j.Log4j2;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.todayCody.login.dto.SignRequest;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Log4j2
@Repository("feedDAO")
public class MypageDAOImpl implements MypageDAO {

  @Autowired
  SqlSessionTemplate sqlSession;

  //마이페이지 정보 불러오기
  @Override
  public List<MypageDTO> doSelectMypageList(SignRequest info) {
    return sqlSession.selectList("com.example.todayCody.mypage.MypageDAO.doSelectMypageList", info);     
  }

}
