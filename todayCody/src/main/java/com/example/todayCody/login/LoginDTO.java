package com.example.todayCody.login;

import lombok.Data;

@Data
public class LoginDTO {
    // 유저아이디
    private String user_id;
    // 유저비밀번호
    private String pwd;
    // 유저이름
    private String u_name;
    // 유저닉네임
    private String u_nickname;
    // 유저이메일
    private String email;
    // 유저생년월일
    private String u_birth;
}
