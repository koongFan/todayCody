package com.example.todayCody.mypage;

import java.util.List;

import com.example.todayCody.login.dto.SignRequest;

public interface MypageService {
    public List<MypageDTO> doSelectMypageList(SignRequest info);
}
