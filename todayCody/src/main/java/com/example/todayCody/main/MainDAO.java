package com.example.todayCody.main;

import java.util.List;
import java.util.Map;

public interface MainDAO {
    public List<MainDTO> getPeriodList();

    public List<MainDTO> getAgeList(Map<String, String> params);

    public List<MainDTO> getRecommendList(Map<String, String> params);

    public List<MainDTO> getBoardList();

    public List<MainDTO> getQaList();
}
