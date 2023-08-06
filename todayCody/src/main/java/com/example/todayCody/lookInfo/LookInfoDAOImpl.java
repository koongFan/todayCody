package com.example.todayCody.lookInfo;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository("lookInfoDao")
public class LookInfoDAOImpl implements LookInfoDAO {

    @Autowired
    SqlSessionTemplate sqlSession;

    @Override
    public List<LookInfoDTO> doSelectLookInfoList(LookInfoDTO lookInfoDTO){
        return sqlSession.selectList("com.example.todayCody.lookInfo.LookInfoDAO.doSelectLookInfoList", lookInfoDTO);     
    };

}
