package com.example.todayCody.login;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    
    @Autowired
    private LoginDAO loginDAO;

    @GetMapping("hello")
    public List<String> user_id(){

        String user_id = loginDAO.getUserId();

        return Arrays.asList("안녕하세요",user_id);
    }

}
