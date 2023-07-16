package com.example.todayCody.mypage;

import java.util.List;


public interface MypageDAO {
    
    public List<MypageDTO> doSelectMypageList(MypageDTO info);

}
