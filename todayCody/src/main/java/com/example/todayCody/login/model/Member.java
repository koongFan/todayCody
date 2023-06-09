package com.example.todayCody.login.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Member {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int user_seq;

  @Column(unique = true)
  private String account;

  private String password;

  private String u_nickname;

  private String u_name;

  private String u_birth;

  @Column(unique = true)
  private String email;

  @OneToMany(mappedBy = "member", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
  @Builder.Default
  private List<Authority> roles = new ArrayList<>();

  public void setRoles(List<Authority> role) {
    this.roles = role;
    role.forEach(o -> o.setMember(this));
  }
}