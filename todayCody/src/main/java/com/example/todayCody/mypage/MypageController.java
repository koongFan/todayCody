package com.example.todayCody.mypage;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.todayCody.common.config.TodayCodyConstUrl;
import com.example.todayCody.login.dto.SignRequest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import lombok.extern.log4j.Log4j2;

@Log4j2
@RestController
@CrossOrigin
public class MypageController {
    
    @Autowired
    MypageService mypageService;

    // 마이페이지 불러오기
    @GetMapping(TodayCodyConstUrl.myPage)
    public Object doSelectMypageList(HttpServletRequest request, HttpServletResponse response, MypageDTO info) throws Exception {

        List<MypageDTO> myPageList = mypageService.doSelectMypageList(info);

        return myPageList;
    }

}
