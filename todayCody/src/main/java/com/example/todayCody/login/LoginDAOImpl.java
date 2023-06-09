package com.example.todayCody.login;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

@Repository("loginDAO")
public class LoginDAOImpl implements LoginDAO {

    @Autowired
    SqlSessionTemplate sqlSession;

  @Override
  public Map<String, Object> getUserInfoById(HashMap<String, Object> vo) throws Exception {
      HashMap<String, Object> retMap = new HashMap<>();
      retMap.put("test", "성공");
      retMap.put("id", "hwpark93");
      retMap.put("pwd", "1234");
      retMap.put("name", "박한우");
    return retMap;
  }

  // [회원가입] 중복 아이디 확인
  @Override
  public int duplIdCnt(LoginDTO loginDTO) throws Exception{
    int dupleCnt = this.sqlSession.selectOne("com.example.todayCody.login.LoginDAO.duplIdCnt", loginDTO);
    return dupleCnt;
  }
  
  // [회원가입] 아이디 정보 DB 입력
  @Override
  public int upUserInfoCnt(LoginDTO loginDTO) throws Exception{
    int upCnt = this.sqlSession.insert("com.example.todayCody.login.LoginDAO.upUserInfoCnt",loginDTO);
    return upCnt;
  }


  
}
