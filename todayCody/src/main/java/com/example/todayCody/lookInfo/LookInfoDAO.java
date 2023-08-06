package com.example.todayCody.lookInfo;

import java.util.List;

public interface LookInfoDAO {
    public List<LookInfoDTO> doSelectLookInfoList(LookInfoDTO lookInfoDTO);
}
