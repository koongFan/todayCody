package com.example.todayCody.login.repository;

import com.example.todayCody.login.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
@Transactional
public interface MemberRepository extends JpaRepository<Member, Long> {
  Optional<Member> findByAccount(String account);
}