package com.example.todayCody;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @GetMapping(value =  {"", "/signin","/ranking", "/lookinfo", "/board", "/feed", "/profile/:profileId", "/newpost", "/editpost", "/search/my"})
    public String forward() {
        return "forward:/index.html";
    }
}

