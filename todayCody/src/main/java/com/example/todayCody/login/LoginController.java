package com.example.todayCody.login;

import java.net.URLDecoder;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.example.todayCody.common.config.TodayCodyConstUrl;
import com.example.todayCody.login.dto.SignRequest;
import com.example.todayCody.login.dto.SignResponse;
import com.example.todayCody.login.repository.MemberRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Log4j2
@RestController
@RequiredArgsConstructor
@CrossOrigin
public class LoginController {

  @Autowired
  private LoginService loginService;
  private final MemberRepository memberRepository;

  @Autowired
  LoginDAO loginDAO;

  String inputCheckRet = null; //[230510:한우]데이터 유효성 검사 변수


  //==========================================================================================================================================================
  // 로그인
  //==========================================================================================================================================================
  @PostMapping(TodayCodyConstUrl.signIn)
  public ResponseEntity<SignResponse> signin(@RequestBody SignRequest request) throws Exception {
    return new ResponseEntity<>(loginService.login(request), HttpStatus.OK);
  }
  //==========================================================================================================================================================
  //==========================================================================================================================================================




  //==========================================================================================================================================================
  // 회원정보 조회
  //==========================================================================================================================================================

  @GetMapping("/user/get")
  public ResponseEntity<SignResponse> getUser(@RequestParam String account) throws Exception {
    return new ResponseEntity<>(loginService.getMember(account), HttpStatus.OK);
  }

  @GetMapping("/admin/get")
  public ResponseEntity<SignResponse> getUserForAdmin(@RequestParam String account) throws Exception {
    return new ResponseEntity<>(loginService.getMember(account), HttpStatus.OK);
  }
  //==========================================================================================================================================================
  //==========================================================================================================================================================


  //==========================================================================================================================================================
  // 회원가입
  //==========================================================================================================================================================
//  @PostMapping(TodayCodyConstUrl.signUp)
//  public Object userSignUp(HttpServletRequest request, HttpServletResponse response, @RequestBody LoginDTO loginDTO, BindingResult bindingResult) throws Exception {
//
//    Map<String, Object> resMap = new HashMap<>();
//    String msg = "";
//
//    try {
//      msg = check_loginDTO(loginDTO, bindingResult, "up");
//    } catch (Exception e) {
//      resMap.put("msg", "DTO 값 불량");
//      resMap.put("failOrSucc", false);
//    }
//
//    if (msg != null && msg.equals("")) {
//      resMap = loginService.insertUpLogin(loginDTO);
//    } else {
//      resMap.put("msg", msg);
//      resMap.put("failOrSucc", false);
//    }
//    return resMap;
//  }

  //위 코드와 병합 요망(추후 작업 예정)
  @PostMapping(TodayCodyConstUrl.signUp)
  public ResponseEntity<Boolean> signup(@RequestBody SignRequest request) throws Exception {
//    Map<String, Object> resMap = new HashMap<>();
//    String msg = "";
//
//    try {
//      msg = check_loginDTO(loginDTO, bindingResult, "up");
//    } catch (Exception e) {
//      resMap.put("msg", "DTO 값 불량");
//      resMap.put("failOrSucc", false);
//    }
//
//    if (msg != null && msg.equals("")) {
//      resMap = loginService.insertUpLogin(loginDTO);
//    } else {
//      resMap.put("msg", msg);
//      resMap.put("failOrSucc", false);
//    }
    return new ResponseEntity<>(loginService.register(request), HttpStatus.OK);
  }
  //==========================================================================================================================================================
  //==========================================================================================================================================================


  //==========================================================================================================================================================
  // 통합 유효성 검사
  //==========================================================================================================================================================
  public String check_loginDTO(LoginDTO loginDTO, BindingResult bindingResult, String inUpMode) {

    String msg = "";

    LoginValidator loginValidator = new LoginValidator(inUpMode);

    loginValidator.validate(loginDTO, bindingResult);

    if (bindingResult.hasErrors()) {
      msg = bindingResult.getFieldError().getCode();
    }

    return msg;
  }
  //==========================================================================================================================================================
  //==========================================================================================================================================================


}
