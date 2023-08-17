package com.example.todayCody.main;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Service("mainService")
public class MainServiceImpl implements MainService {

    @Autowired
    MainDAO mainDAO;

    @Override
    public List<Object> doSelectMainContent(Map<String, String> params){

        List<Object> afterList = new ArrayList<>();

        Map<String,Object> beforeMap = new HashMap<String,Object>();

        List<MainDTO> periodList = mainDAO.getPeriodList();
        beforeMap.put("periodList",periodList);

        List<MainDTO> ageList = mainDAO.getAgeList(params);
        beforeMap.put("ageList",ageList);

        List<MainDTO> recommendList = mainDAO.getRecommendList(params);
        beforeMap.put("recommendList",recommendList);

        List<MainDTO> boardList = mainDAO.getBoardList();
        beforeMap.put("boardList",boardList);

        List<MainDTO> qaList = mainDAO.getQaList();
        beforeMap.put("qaList",qaList);

        afterList.add(beforeMap);

        return afterList;
    }

}
