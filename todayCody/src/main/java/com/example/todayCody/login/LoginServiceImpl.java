package com.example.todayCody.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

@Service("LoginService")
public class LoginServiceImpl implements LoginService {

  @Autowired
  private LoginDAO loginDAO;

  @Override
  public Map<String, Object> getUserInfoById(HashMap<String, Object> jsonMap, HttpServletRequest request, HttpServletResponse response) throws Exception {

    //세션 초기화
    request.getSession().invalidate();
    HashMap<String, Object> map = (HashMap<String, Object>) loginDAO.getUserInfoById(jsonMap);

    if (map == null) {
      jsonMap = new HashMap<>();
      jsonMap.put("retCode", "991");
      jsonMap.put("retMsg", "미등록된 로그인ID입니다.");
      return jsonMap;
    }

    if (!jsonMap.get("pwd").equals(map.get("pwd"))) {
      jsonMap = new HashMap<>();
      jsonMap.put("retCode", "992");
      jsonMap.put("retMsg", "비밀번호가 틀렸습니다.");
      return jsonMap;
    }

    jsonMap.put("retCode", "000");
    jsonMap.put("retMsg", "정상적으로 로그인되었습니다.");

    if ("000".equals(jsonMap.get("retCode")) && (map.get("id") != null)) {
      request.getSession().setAttribute("user_id", String.valueOf(map.get("id")));
      request.getSession().setAttribute("user_name", String.valueOf(map.get("name")));

      jsonMap.put("id",map.get("id"));
      jsonMap.put("name",map.get("name"));

    }
    map = jsonMap;

    return map;
  }
}
