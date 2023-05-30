package com.example.todayCody.login.dto;

import com.example.todayCody.login.model.Authority;
import com.example.todayCody.login.model.Member;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SignResponse {

  private int user_seq;

  private String account;

  private String password;

  private String u_nickname;

  private String u_name;

  private String email;
  private List<Authority> roles = new ArrayList<>();

  private String token;

  public SignResponse(Member member) {
    this.user_seq = member.getUser_seq();
    this.account = member.getAccount();
    this.u_nickname = member.getU_nickname();
    this.u_name = member.getU_name();
    this.email = member.getEmail();
    this.roles = member.getRoles();
  }

}