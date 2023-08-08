package com.example.todayCody.mypage;

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

import java.util.List;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@RestController
@CrossOrigin
public class MypageController {

	Logger logger = LoggerFactory.getLogger(this.getClass());
    
    @Autowired
    MypageService mypageService;

    // 마이페이지 불러오기
    @ApiOperation(value="마이페이지 불러오기")
    @ApiImplicitParam(
        name = "user_seq"
        , value = "사용자 고유번호"
        , required = true
        , dataType = "string"
        , paramType = "path"
        , defaultValue = "None")
    @GetMapping(TodayCodyConstUrl.myPage)
    public JSONObject doSelectMypageList(HttpServletRequest request, HttpServletResponse response, MypageDTO info) throws Exception {
        JSONObject jsonObject = new JSONObject();

        if("".equals(info.getUser_seq())){
			jsonObject.put("result", JSONObject.fromObject(new ResultInfo("1002")));
			return jsonObject;
        }

        try{

            List<MypageDTO> myPageList = mypageService.doSelectMypageList(info);
			
			String[] filterList = new String[] {
					"feed_seq", "user_seq", "content", "likes", "comment", "image_path", "u_nickname", "postCnt"
			};

            jsonObject = ReturnJsonUtil.getJson("0", myPageList.size(), JSONArray.fromObject(myPageList), filterList);

        } catch(Exception ex){
			logger.error(ex.getMessage());
			jsonObject.put("result", JSONObject.fromObject(new ResultInfo("1500")));
        }

        return jsonObject;
    }

}