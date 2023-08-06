package com.example.todayCody.lookInfo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("lookInfoService")
public class LookInfoServiceImpl implements LookInfoService {

    @Autowired
    LookInfoDAO lookInfoDAO;

    @Override
    public List<LookInfoDTO> doSelectLookInfoList(LookInfoDTO lookInfoDTO){
        return lookInfoDAO.doSelectLookInfoList(lookInfoDTO);
    };

}
