package com.example.todayCody.common.util;


import java.util.Map;

import com.example.todayCody.common.util.ResultInfo;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
public class ReturnJsonUtil {
	
	/**
	 * 처리 결과값을 Json 데이터로 리턴하기 위한 값을 취득 하는 처리
	 * @param  code 결과코드
	 * @return String 결과Json데이터
	 */
	public static String getJson(String code) {
		JSONObject returnObject = new JSONObject();
		JSONObject resultInfo = JSONObject.fromObject(new ResultInfo(code));
				
		returnObject.put("result", resultInfo);
		
		return returnObject.toString();
	}	
	
	/**
	 * 처리 결과값을 Json 데이터로 리턴하기 위한 값을 취득 하는 처리
	 * @param  code 결과코드
	 * @return String 결과Json데이터
	 */
	public static String getJson(String code, int totalCnt) {
		JSONObject returnObject = new JSONObject();
		JSONObject resultInfo = JSONObject.fromObject(new ResultInfo(code));
				
		returnObject.put("result", resultInfo);
		returnObject.put("total_cnt", totalCnt);
		
		return returnObject.toString();
	}	
	
	/**
	 * 처리 결과값을 Json 데이터로 리턴하기 위한 값을 취득 하는 처리
	 * @param  code 결과코드
	 * @param  object 결과Object데이터
	 * @return String 결과Json데이터
	 */
	public static String getJson(String code, JSONObject object) {
		JSONObject returnObject = new JSONObject();
		// 처리결과 데이터 값을 설정
		JSONObject resultInfo = JSONObject.fromObject(new ResultInfo(code));
		
		returnObject.put("result", resultInfo);
		// 처리결과 Object 데이터 값을 설정
		returnObject.put("object", object);
		
		return returnObject.toString();
	}
	
	/**
	 * 처리 결과값을 Json 데이터로 리턴하기 위한 값을 취득 하는 처리
	 * (리스트데이터가 전체 데이터인 경우 호출)
	 * @param  code 결과코드
	 * @param  list 결과Object데이터
	 * @return String 결과Json데이터
	 */
	public static String getJson(String code, JSONArray list) {
		JSONObject returnObject = new JSONObject();
		// 처리결과값을 설정
		JSONObject resultInfo = JSONObject.fromObject(new ResultInfo(code));
		returnObject.put("result", resultInfo);
		// 처리결과 List 데이터 값을 설정
		returnObject.put("total_cnt", list.size());
		returnObject.put("list", list);
		
		return returnObject.toString();
	}
	
	/**
	 * 처리 결과값을 Json 데이터로 리턴하기 위한 값을 취득 하는 처리
	 * (리스트데이터가 페이징 처리된 데이터인 경우 전체 갯수와 함께 현재 페이지 리스트만 처리)
	 * @param  code 결과코드
	 * @param  totalCnt 리스트총갯수
	 * @param  list 결과Object데이터
	 * @return String 결과Json데이터
	 */
	public static JSONObject getJson(String code, int totalCnt, JSONArray list) {
		JSONObject returnObject = new JSONObject();
		// 처리결과값을 설정
		JSONObject resultInfo = JSONObject.fromObject(new ResultInfo(code));
		returnObject.put("result", resultInfo);
		// 처리결과 List 데이터 값을 설정
		returnObject.put("total_cnt", totalCnt);
		returnObject.put("list", list);
		
		return returnObject;
	}
	
	/**
	 * 처리 결과값을 Json 데이터로 리턴하기 위한 값을 취득 하는 처리
	 * (리스트데이터가 전체 데이터인 경우 호출)
	 * @param  code 결과코드
	 * @param  object 결과Object데이터
	 * @param  list 결과Object데이터
	 * @return String 결과Json데이터
	 */
	public static String getJson(String code, JSONObject object, JSONArray list) {
		JSONObject returnObject = new JSONObject();
		// 처리결과값을 설정
		JSONObject resultInfo = JSONObject.fromObject(new ResultInfo(code));
		returnObject.put("result", resultInfo);		
		// 처리결과 Object 데이터 값을 설정
		returnObject.put("object", object);
		// 처리결과 List 데이터 값을 설정
		returnObject.put("total_cnt", list.size());
		returnObject.put("list", list);
		
		return returnObject.toString();
	}
	
	/**
	 * 처리 결과값을 Json 데이터로 리턴하기 위한 값을 취득 하는 처리
	 * (리스트데이터가 페이징 처리된 데이터인 경우 전체 갯수와 함께 현재 페이지 리스트만 처리)
	 * @param  code 결과코드
	 * @param  object 결과Object데이터
	 * @param  totalCnt 리스트총갯수
	 * @param  list 결과Object데이터
	 * @return String 결과Json데이터
	 */
	public static String getJson(String code, JSONObject object, int totalCnt, JSONArray list) {
		JSONObject returnObject = new JSONObject();
		// 처리결과값을 설정
		JSONObject resultInfo = JSONObject.fromObject(new ResultInfo(code));
		returnObject.put("result", resultInfo);		
		// 처리결과 Object 데이터 값을 설정
		returnObject.put("object", object);
		// 처리결과 List 데이터 값을 설정
		returnObject.put("total_cnt", totalCnt);
		returnObject.put("list", list);
		
		return returnObject.toString();
	}
	
	/**
	 * 처리 결과값을 Json 데이터로 리턴하기 위한 값을 취득 하는 처리
	 * (리스트데이터가 페이징 처리된 데이터인 경우 전체 갯수와 함께 현재 페이지 리스트만 처리)
	 * @param  code 결과코드
	 * @param  object 결과Object데이터
	 * @param  totalCnt 리스트총갯수
	 * @param  list 결과Object데이터
	 * @return String 결과Json데이터
	 */
	public static String getJson(String code, int totalCnt, Map<String, Object> object) {
		JSONObject returnObject = new JSONObject();
		// 처리결과값을 설정
		JSONObject resultInfo = JSONObject.fromObject(new ResultInfo(code));

		returnObject.put("result", resultInfo);		
		// 처리결과 List 데이터 값을 설정
		returnObject.put("total_cnt", totalCnt);
		// 처리결과 Object 데이터 값을 설정
		for( Map.Entry<String, Object> entry : object.entrySet() ) {
            String key = entry.getKey();
            Object value = entry.getValue();
            returnObject.put(key, value);
        }
		return returnObject.toString();
	}
	
	/**
	 * 처리 결과값을 Json 데이터로 리턴하기 위한 값을 취득 하는 처리
	 * (리스트데이터가 페이징 처리된 데이터인 경우 전체 갯수와 함께 현재 페이지 리스트만 처리)
	 * @param  code 결과코드
	 * @param  totalCnt 리스트총갯수
	 * @param  list 결과Object데이터
	 * @param  filterList 필터링 리스트
	 * @return JSONObject 결과Json데이터
	 */
	public static JSONObject getJson(String code, int totalCnt, JSONArray list, String[] filterList) {
		JSONObject returnObject = new JSONObject();
		// 처리결과값을 설정
		JSONObject resultInfo = JSONObject.fromObject(new ResultInfo(code));
		returnObject.put("result", resultInfo);
		// 처리결과 List 데이터 값을 설정
		returnObject.put("total_cnt", totalCnt);
		returnObject.put("list", ReturnJsonUtil.getFilterJsonList(list, filterList));
		
		return returnObject;
	}
	
	/**
	 * 처리 결과값을 Json 데이터로 리턴하기 위한 값을 취득 하는 처리
	 * @param  code 결과코드
	 * @param  list 결과Object데이터
	 * @param  filterList 필터링 리스트
	 * @return JSONObject 결과Json데이터
	 */
	public static JSONObject getJson(String code, JSONArray list, String[] filterList) {
		JSONObject returnObject = new JSONObject();
		// 처리결과값을 설정
		JSONObject resultInfo = JSONObject.fromObject(new ResultInfo(code));
		returnObject.put("result", resultInfo);
		// 처리결과 List 데이터 값을 설정
		returnObject.put("total_cnt", list.size());
		returnObject.put("list", ReturnJsonUtil.getFilterJsonList(list, filterList));
		
		return returnObject;
	}
	
	/**
	 * 처리 결과값을 Json 데이터로 리턴하기 위한 값을 취득 하는 처리
	 * (리스트데이터가 페이징 처리된 데이터인 경우 전체 갯수와 함께 현재 페이지 리스트만 처리)
	 * @param  code 결과코드
	 * @param  obj 결과Object데이터
	 * @return JSONObject 결과Json데이터
	 * @param  filterList 필터링 리스트
	 */
	public static JSONObject getJson(String code, JSONObject obj, String[] filterList) {
		JSONObject returnObject = new JSONObject();
		// 처리결과값을 설정
		JSONObject resultInfo = JSONObject.fromObject(new ResultInfo(code));
		returnObject.put("result", resultInfo);
		returnObject.put("object", ReturnJsonUtil.getFilterJson(obj, filterList));
		
		return returnObject;
	}
	
	/**
	 * 결과 JSON 리스트에서 해당하는 key의 아이템만 필터링하여 리턴
	 * @param  obj 대상 오브젝트
	 * @param  filterList 필터링 리스트
	 * @return JSONObject 결과Json데이터
	 */
	public static JSONObject getFilterJson(JSONObject obj, String[] filterList) {
		JSONObject js = new JSONObject();

		for (int j=0; j<filterList.length; j++) {
			if (obj.keySet().contains(filterList[j])){
				js.put(filterList[j], obj.get(filterList[j]));
	        }
		}
		
		return js;
	}
	
	/**
	 * 결과 JSON 리스트에서 해당하는 key의 아이템만 필터링하여 리턴
	 * @param  jsonArray 대상 리스트
	 * @param  filterList 필터링 리스트
	 * @return JSONArray 결과Json데이터
	 */
	public static JSONArray getFilterJsonList(JSONArray jsonArray, String[] filterList) {
		JSONArray rtnArray = new JSONArray();

		if (jsonArray.size() > 0) {
			for (int i=0; i<jsonArray.size(); i++) {
				JSONObject obj = jsonArray.getJSONObject(i);
				JSONObject js = new JSONObject();
				
				for (int j=0; j<filterList.length; j++) {
					if (obj.keySet().contains(filterList[j])){
    					js.put(filterList[j], obj.get(filterList[j]));
    		        }
				}
				rtnArray.add(js);
			}
		}
		
		return rtnArray;
	}
}
