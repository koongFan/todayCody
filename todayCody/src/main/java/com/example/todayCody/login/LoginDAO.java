package com.example.todayCody.login;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

public interface LoginDAO {

  public Map<String, Object> getUserInfoById(HashMap<String, Object> vo) throws Exception;

  // [회원가입] 중복 아이디 확인
  public int duplIdCnt(LoginDTO loginDTO) throws Exception;

  // [회원가입] 아이디 정보 DB 입력
  public int upUserInfoCnt(LoginDTO loginDTO) throws Exception;
  
}
