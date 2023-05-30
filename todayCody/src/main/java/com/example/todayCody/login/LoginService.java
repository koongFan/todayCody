package com.example.todayCody.login;

import com.example.todayCody.login.dto.SignRequest;
import com.example.todayCody.login.dto.SignResponse;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

public interface LoginService {

  public Map<String, Object> getUserInfoById(HashMap<String, Object> jsonMap, HttpServletRequest request, HttpServletResponse response) throws Exception;

  // [회원가입] 비즈니스 로직
  public Map<String, Object> insertUpLogin(LoginDTO loginDTO) throws Exception;

  public SignResponse login(SignRequest request) throws Exception;
  public boolean register(SignRequest request) throws Exception;
  public SignResponse getMember(String account) throws Exception;
}
