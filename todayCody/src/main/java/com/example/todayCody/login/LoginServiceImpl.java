package com.example.todayCody.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

@Service("LoginService")
public class LoginServiceImpl implements LoginService{

  @Autowired
  private LoginDAO loginDAO;

  @Override
  public Map<String, Object> user_login(HashMap<String, Object> jsonMap, HttpServletRequest request, HttpServletResponse response) throws Exception {
    return loginDAO.user_login(jsonMap,request,response);
  }
}
