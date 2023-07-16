package com.example.todayCody.common.util;

import org.springframework.stereotype.Component;

@Component
public class ResultInfo {
	/** 처리 결과 코드 */
	private String code;
	/** 처리 결과 메세지 */
	private String message;
		
	/** 
	 * 코드에 해당하는 메세지를 저장 - Messages properties 파일로 정의 내용을 이동 
	 * @param code 에러코드
	 */
	public void setMsgFromCode(String code) {
		if ("0".equals(code)) {
			setMessage("Success");
		} else if ("1000".equals(code)) {
			setMessage("Not login");
		} else if ("1001".equals(code)) {
			setMessage("Login ID Or Password Not Found");
		} else if ("1002".equals(code)) {
			setMessage("Mandatory Data Missing");
		} else if ("1003".equals(code)) {
			setMessage("Invalid Parameter");
		} else if ("1004".equals(code)) {
			setMessage("Invalid Request");
		} else if ("1005".equals(code)) {
			setMessage("Access token creat error");
		} else if ("1006".equals(code)) {
			setMessage("Does not exist configuration information");
		} else if ("1007".equals(code)) {
			setMessage("Invalid old password");
		} else if ("1101".equals(code)) {
			setMessage("Send mail error");
		} else if ("1102".equals(code)) {
			setMessage("Juso api process error");
		} else if ("1401".equals(code)) {
			setMessage("Data Not Found");
		} else if ("1402".equals(code)) {
			setMessage("Insert Executed. But update row count: 0");	
		} else if ("1403".equals(code)) {
			setMessage("Update Executed. But update row count: 0");	
		} else if ("1404".equals(code)) {
			setMessage("Delete Executed. But update row count: 0");		
		} else if ("1405".equals(code)) {
			setMessage("Exist not uploaded file error");			
		} else if ("1406".equals(code)) {
			setMessage("Nothing uploaded file error");			
		} else if ("1407".equals(code)) {
			setMessage("Send Invite e-mail error");		
		} else if ("1408".equals(code)) {
			setMessage("Exist registered date");	
		} else if ("1450".equals(code)) {
			setMessage("This Method not allowed(http 405)");
		} else if ("1451".equals(code)) {
			setMessage("Foreign key constraints fail.");
		} else if ("1500".equals(code)) {
			setMessage("API-G/W Internal Error");
		} else if ("1501".equals(code)) {
			setMessage("Database internal error");
		} else if ("1503".equals(code)) {
			setMessage("Not implemented");
		} else if ("1504".equals(code)) {
			setMessage("Check Data Exist");
		} else if ("1505".equals(code)) {
			setMessage("Check Data Not Exist");
		} else {
			setMessage("Not discription result code at ResultInfo Bean");
		}
	}
	public String getMsgFromCode() {
		return this.code;
	}
	
	public ResultInfo() {
	}
	
	public ResultInfo(String code) {
		setCode(code);	
		setMsgFromCode(code);		
	}
		
	public ResultInfo(String code, String message) {
		setCode(code);
		setMessage(message);
	}
		
	public void setCode(String str) {
		this.code = str;
	}
	public String getCode() {
		return this.code;
	}
	
	public void setMessage(String str) {
		this.message = str;
	}
	public String getMessage() {
		return this.message;
	}		
}
