package com.example.todayCody.login;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

public interface LoginDAO {
  public String getUserId();

  public Map<String, Object> getUserInfoById(HashMap<String, Object> vo) throws Exception;

  public int duplIdCnt(LoginDTO loginDTO) throws Exception;


  public int upUserInfoCnt(LoginDTO loginDTO) throws Exception;
  
}
