package com.example.todayCody.login.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignRequest {

  private int user_seq;

  private String account;

  private String password;

  private String u_nickname;

  private String u_name;

  private String u_birth;

  private String email;

}