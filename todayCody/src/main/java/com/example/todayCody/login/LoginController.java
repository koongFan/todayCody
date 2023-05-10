package com.example.todayCody.login;

import java.net.URLDecoder;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping(value = "/member")
@CrossOrigin
public class LoginController {

  @Autowired
  private LoginService loginService;


  String inputCheckRet = null; //[230510:한우]데이터 유효성 검사 변수

  @GetMapping("hello")
  public List<String> user_id() {

    // String user_id = loginDAO.getUserId();

    return Arrays.asList("안녕하세요", "ㅋㅋ");
  }

  //==========================================================================================================================================================
  // 주석
  //==========================================================================================================================================================
  @PostMapping("/signIn.do")
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
    
    if ((inputCheckRet = checkIntpufield(jsonMap, (new String[]{"id", "pwd"}))) != null) {
      resMap.put("restMsg", "id 혹은 pwd가 없습니다");
      return resMap;
    }
    
    System.out.println("aaaaaaaaaaaa id : " + jsonMap.get("id"));
    System.out.println("aaaaaaaaaaaa pwd : " + jsonMap.get("pwd"));
    
    resMap = loginService.getUserInfoById(jsonMap, request, response);
    
    return resMap;
  }
  //==========================================================================================================================================================
  //==========================================================================================================================================================
  
  
  //==========================================================================================================================================================
  // 주석
  //==========================================================================================================================================================
  //[230510:한우]jsonData유효성 검사 함수 : 이게 여기 들어가도 되는지는 잘 모르겠음
  private String checkIntpufield(Map<String, Object> jsonMap, String[] field) {
    
    String retmsg = null;
    for (String s : field) {
      try {
        if (jsonMap.get(s) == null || String.valueOf(jsonMap.get(s)).trim().length() == 0) {
          retmsg = "입력필드를 확인하세요. 필드[" + s + "]가 없거나 데이타가 셋팅이 안되어있음.";
          System.out.println(retmsg);
          break;
        }
      } catch (Exception ee) {
        ee.printStackTrace();
      }
      
    }
    return retmsg;
  }
  //==========================================================================================================================================================
  //==========================================================================================================================================================
  
  
  
  //==========================================================================================================================================================
  // 회원가입 
  //==========================================================================================================================================================
  @PostMapping("/signUp.do")
  public Object userSignUp(HttpServletRequest request, HttpServletResponse response, @RequestBody LoginDTO loginDTO, BindingResult bindingResult) throws Exception {
    
    Map<String,Object> resMap = new HashMap<>();
    String msg = "";

    try{
      msg = check_loginDTO( loginDTO, bindingResult, "up");
    } catch(Exception e){
      resMap.put("msg", "DTO 값 불량");      
      resMap.put("failOrSucc", false);
    }

    if(msg!=null && msg.equals("")){
      resMap = loginService.insertUpLogin(loginDTO);
    }
    else{
      resMap.put("msg",msg);
      resMap.put("failOrSucc",false);
    }


    return resMap;
  }
  //==========================================================================================================================================================
  //==========================================================================================================================================================


  //==========================================================================================================================================================
  // 통합 유효성 검사
  //==========================================================================================================================================================
  public String check_loginDTO(LoginDTO loginDTO, BindingResult bindingResult, String inUpMode){

    String msg = "";

    LoginValidator loginValidator = new LoginValidator(inUpMode);

    loginValidator.validate(loginDTO, bindingResult);

    if(bindingResult.hasErrors()){
      msg = bindingResult.getFieldError().getCode();
    }

    return msg;
  }
  //==========================================================================================================================================================
  //==========================================================================================================================================================

  
}
