package com.example.todayCody.login;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

public interface LoginService {
  public Map<String, Object> getUserInfoById(HashMap<String, Object> jsonMap, HttpServletRequest request, HttpServletResponse response) throws Exception;

  public Map<String, Object> insertUpLogin(LoginDTO loginDTO) throws Exception;
}
