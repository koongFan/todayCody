package com.example.todayCody.main;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.todayCody.common.config.TodayCodyConstUrl;
import com.example.todayCody.common.util.ResultInfo;
import com.example.todayCody.common.util.ReturnJsonUtil;

import io.swagger.annotations.ApiOperation;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@RestController
@CrossOrigin
public class MainController {

	Logger logger = LoggerFactory.getLogger(this.getClass());
    
    @Autowired
    MainService mainService;

    //메인 화면 호출
    @ApiOperation(value="메인컨텐츠 호출")
    @GetMapping(TodayCodyConstUrl.mainContent)
    public JSONObject doSelectMainContent(HttpServletRequest request, HttpServletResponse response, @RequestParam Map<String, String> params) throws Exception{
        JSONObject jsonObject = new JSONObject();
        try{

            List<Object> mainContentList = this.mainService.doSelectMainContent(params);

            String[] filterList = new String[] {
                "periodList", "ageList", "recommendList", "boardList", "qaList"
            };

            jsonObject = ReturnJsonUtil.getJson("0", mainContentList.size(), JSONArray.fromObject(mainContentList), filterList);
            
        }catch(Exception ex){
                logger.error(ex.getMessage());
                jsonObject.put("result", JSONObject.fromObject(new ResultInfo("1500")));
        }

        return jsonObject;
    }
    public static void main(String[] args) {
    }

        
}
