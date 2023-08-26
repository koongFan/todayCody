package com.example.todayCody.lookInfo;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.todayCody.common.config.TodayCodyConstUrl;
import com.example.todayCody.common.util.ResultInfo;
import com.example.todayCody.common.util.ReturnJsonUtil;

import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@RestController
@CrossOrigin
public class LookInfoController {

  Logger logger = LoggerFactory.getLogger(this.getClass());
  @Autowired
  LookInfoService lookInfoService;

    @ApiOperation(value="룩별정보 불러오기")
    @GetMapping(TodayCodyConstUrl.lookInfo)
    public JSONObject doSelectLookInfoList(HttpServletRequest request, HttpServletResponse response, LookInfoDTO info) throws Exception {
        JSONObject jsonObject = new JSONObject();    
        try {

          if(info.getPer_page()==null || info.getPer_page().equals("")){
            info.setPer_page("20");
          }
          if(info.getPage()==null || info.getPage().equals("")){
            info.setPage("0");
          }

          List<LookInfoDTO> list = lookInfoService.doSelectLookInfoList(info);
    
          String[] filterList = new String[]{
                  "feed_seq", "user_seq", "content", "likes", "comment", "image_path", "u_nickname", "postCnt"
          };
    
          jsonObject = ReturnJsonUtil.getJson("0", list.size(), JSONArray.fromObject(list), filterList);
    
        } catch (Exception ex) {
          logger.error(ex.getMessage());
          jsonObject.put("result", JSONObject.fromObject(new ResultInfo("1500")));
        }
    
        return jsonObject;
    }
  }
