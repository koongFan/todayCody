package com.example.todayCody.login;

import java.util.HashMap;
import java.util.Map;

import com.example.todayCody.common.config.TodayCodyConstUrl;
import com.example.todayCody.login.dto.SignRequest;
import com.example.todayCody.login.dto.SignResponse;
import com.example.todayCody.login.repository.MemberRepository;

import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

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

    SignResponse sr = loginService.login(request);

    if(sr.getErrorMsg().equals("비밀번호가 틀렸습니다"))
      return new ResponseEntity<>(sr,HttpStatus.NOT_FOUND);

    if(sr.getErrorMsg().equals("아이디를 찾을 수 없습니다."))
      return new ResponseEntity<>(sr,HttpStatus.NOT_FOUND);

    return new ResponseEntity<>(sr, HttpStatus.OK);
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
//  @ApiOperation(value="회원가입")
//  @ApiImplicitParams({
//    @ApiImplicitParam(
//      name="id"
//      ,value="사용자아이디"
//    ),
//    @ApiImplicitParam(
//      name="password"
//      ,value="사용자비밀번호"
//    ),
//    @ApiImplicitParam(
//      name="email"
//      ,value="이메일"
//    ),
//    @ApiImplicitParam(
//      name="u_name"
//      ,value="사용자 이름"
//    ),
//    @ApiImplicitParam(
//      name="nickname"
//      ,value="사용자 별칭"
//    ),
//    @ApiImplicitParam(
//      name="birth"
//      ,value="생년월일"
//    )
//  })
  @PostMapping(TodayCodyConstUrl.signUp)
  public ResponseEntity<Map<String,Object>> signup(@RequestBody SignRequest request, BindingResult bindingResult) throws Exception {     
    Map<String, Object> result = new HashMap<>();
    String msg = "";

    try {
      msg = check_loginDTO(request, bindingResult, "up");
    } catch (Exception e) {
      result.put("msg", "DTO 값 불량");
      result.put("failOrSucc", false);
    }

    if (msg != null && msg.equals("")) {
      result.put("failOrSucc",loginService.register(request));
    } else {
      result.put("msg", msg);
      result.put("failOrSucc", false);
    }

    return ResponseEntity.ok().body(result);
  }
  //==========================================================================================================================================================
  //==========================================================================================================================================================


  //==========================================================================================================================================================
  // 통합 유효성 검사
  //==========================================================================================================================================================
  public String check_loginDTO(SignRequest request, BindingResult bindingResult, String inUpMode) {

    String msg = "";

    LoginValidator loginValidator = new LoginValidator(inUpMode);

    loginValidator.validate(request, bindingResult);

    if (bindingResult.hasErrors()) {
      msg = bindingResult.getFieldError().getCode();
    }

    return msg;
  }
  //==========================================================================================================================================================
  //==========================================================================================================================================================


}
