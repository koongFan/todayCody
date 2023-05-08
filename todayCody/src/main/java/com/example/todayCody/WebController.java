package com.example.todayCody;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @GetMapping(value =  {"", "/ranking","/lookinfo", "/board", "/feed", "/profile/:profileId", "/signin", "/signup", "/newpost", "/editpost"})
    public String forward() {
        return "forward:/index.html";
    }
}

