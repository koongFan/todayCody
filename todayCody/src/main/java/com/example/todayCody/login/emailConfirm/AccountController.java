package com.example.todayCody.login.emailConfirm;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.todayCody.common.config.TodayCodyConstUrl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@RestController
public class AccountController {

    private final EmailService emailService;

    @PostMapping(TodayCodyConstUrl.emailConfirm)
    @ResponseBody
    public Object mailConfirm(@RequestParam String email) throws Exception {
        Map<String, Object> resMap = new HashMap<>();
        String code = emailService.sendSimpleMessage(email);
        log.info("인증코드 : " + code);
        if(code!=null){
            resMap.put("success",true);
            resMap.put("code",code);
        }
        else{
            resMap.put("success",false);
            resMap.put("code","이상한거");
        }
        return resMap;
    }
}
