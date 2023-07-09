package com.example.todayCody.mypage;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.todayCody.login.dto.SignRequest;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Service("mypageService")
public class MypageServiceImpl implements MypageService {
    
    @Autowired
    MypageDAO mypageDAO;

    @Override
    public List<MypageDTO> doSelectMypageList(SignRequest info){
        return mypageDAO.doSelectMypageList(info);
    };

}
