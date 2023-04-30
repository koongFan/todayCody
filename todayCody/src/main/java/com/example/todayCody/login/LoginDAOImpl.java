package com.example.todayCody.login;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class LoginDAOImpl implements LoginDAO {

    @Autowired
    private SqlSessionTemplate sqlSession;

    public String getUserId(){
        String userId = this.sqlSession.selectOne("com.example.todayCody.LoginDAO.getUserId");

        return userId;
    };
}
