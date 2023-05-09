package com.example.todayCody.login;

import java.net.URLDecoder;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping(value = "/member")
public class LoginController {

  @Autowired
  private LoginDAO loginDAO;

  @Autowired
  private  LoginService loginService;

  @GetMapping("hello")
  public List<String> user_id() {

    // String user_id = loginDAO.getUserId();

    return Arrays.asList("안녕하세요", "ㅋㅋ");
  }

  @PostMapping("/signOn.do")
  public Object userLogin(HttpServletRequest request, HttpServletResponse response, @RequestParam Map<String, String> params) throws Exception {

    String jsonData = params.get("jsonData");
    Map<String, Object> resMap = new HashMap<>();

    try {
      jsonData = URLDecoder.decode(jsonData, "UTF-8");
    } catch (Exception e2) {
      resMap.put("retCode", "999");
      resMap.put("retMsg", "수신데이타 파싱에러:" + e2);
      return resMap;
    }

    ObjectMapper mapper = new ObjectMapper();
    HashMap<String, Object> jsonMap = mapper.readValue(jsonData, HashMap.class);

    System.out.println("aaaaaaaaaaaa id : " + jsonMap.get("id"));
    System.out.println("aaaaaaaaaaaa pwd : " + jsonMap.get("pwd"));

    resMap = loginService.user_login(jsonMap,request,response);
    resMap.put("retCode","000");
    resMap.put("retMsg","응답 성공");

    return resMap;
  }


}
