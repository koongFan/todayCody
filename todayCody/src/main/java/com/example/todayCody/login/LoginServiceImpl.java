package com.example.todayCody.login;

import com.example.todayCody.login.dto.SignRequest;
import com.example.todayCody.login.dto.SignResponse;
import com.example.todayCody.login.jwt.JwtProvider;
import com.example.todayCody.login.model.Authority;
import com.example.todayCody.login.model.Member;
import com.example.todayCody.login.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.transaction.annotation.Transactional;

@Service("loginService")
@Log4j2
@Transactional
@RequiredArgsConstructor
public class LoginServiceImpl implements LoginService {

  @Autowired
  private LoginDAO loginDAO;

  private final MemberRepository memberRepository;
  private final PasswordEncoder passwordEncoder;
  private final JwtProvider jwtProvider;


  public SignResponse login(SignRequest request) throws Exception {

//    Member member = memberRepository.findByAccount(request.getAccount()).orElseThrow(() ->
//            new BadCredentialsException("잘못된 계정정보입니다."));


    Optional<Member> optionalMember = memberRepository.findByAccount(request.getAccount());
//    Optional<Member> optionalMember = memberRepository.findByAccount(request.getAccount());

    if (optionalMember.isEmpty()) {
      return SignResponse.builder().errorMsg("아이디를 찾을 수 없습니다.").build();
    }

    Member member = optionalMember.get();

    if (!passwordEncoder.matches(request.getPassword(), member.getPassword())) {
      return SignResponse.builder().errorMsg("비밀번호가 틀렸습니다").build();
    }


    return SignResponse.builder()
            .user_seq(member.getUser_seq())
            .account(member.getAccount())
            .u_name(member.getU_name())
            .email(member.getEmail())
            .u_nickname(member.getU_nickname())
            .roles(member.getRoles())
            .errorMsg("")
            .token(jwtProvider.createToken(member.getAccount(), member.getRoles()))
            .build();

  }


  public boolean register(SignRequest request) throws Exception {
    try {
      Member member = Member.builder()
              .account(request.getAccount())
              .password(passwordEncoder.encode(request.getPassword()))
              .u_name(request.getU_name())
              .u_nickname(request.getU_nickname())
              .u_birth(request.getU_birth())
              .email(request.getEmail())
              .build();

      member.setRoles(Collections.singletonList(Authority.builder().name("ROLE_USER").build()));

      memberRepository.save(member);
    } catch (Exception e) {
      System.out.println(e.getMessage());
      throw new Exception("잘못된 요청입니다.");
    }
    return true;
  }

  public SignResponse getMember(String account) throws Exception {
    Member member = memberRepository.findByAccount(account)
            .orElseThrow(() -> new Exception("계정을 찾을 수 없습니다."));
    return new SignResponse(member);
  }

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

      jsonMap.put("id", map.get("id"));
      jsonMap.put("name", map.get("name"));

    }
    map = jsonMap;

    return map;
  }
  
  // [회원가입] 비즈니스 로직
  @Override
  public Map<String, Object> insertUpLogin(LoginDTO loginDTO) throws Exception {

    HashMap<String, Object> map = new HashMap<>();

    // 아이디 확인
    int dupleIdCnt = loginDAO.duplIdCnt(loginDTO);
    int upUserInfo = loginDAO.upUserInfoCnt(loginDTO);

    if (dupleIdCnt >= 1) {
      map.put("msg", "이미 있는 아이디 입니다.");
      map.put("failOrSucc", false);
      return map;
    } else {
      map.put("msg", "회원가입이 완료되었습니다.");
      map.put("failOrSucc", true);
      return map;
    }
  }
}
