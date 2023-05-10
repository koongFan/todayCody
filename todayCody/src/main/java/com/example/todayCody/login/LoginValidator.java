package com.example.todayCody.login;

import java.util.regex.Pattern;

import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

public class LoginValidator implements Validator {

    private String inUpMode;

    public LoginValidator(String inUpMode){
        this.inUpMode = inUpMode;
    }

	@Override
	public boolean supports(Class<?> arg0) {
		return LoginDTO.class.isAssignableFrom(arg0);  
	}

    @Override
    public void validate(
		Object obj          // DTO 객체 저장 매개변수
		, Errors errors     // 유효성 검사 시 발생하는 에러를 관리하는 Errors 객체 저장 매개변수
	){
		try {
			LoginDTO dto = (LoginDTO)obj;

            if(inUpMode.equals("up")){
            //===============================================================================================
            //===============================================================================================
			ValidationUtils.rejectIfEmptyOrWhitespace(
					errors                    
					, "id"                  
					, "id를 입력해주세요"   
			);

			if( Pattern.matches(  "[a-zA-Z]{1}[a-zA-Z0-9_]{4,11}$", dto.getId()  )==false ) {
				errors.rejectValue("id", "id는 '_'를 제외한 특수문자 안되며 영문, 숫자, '_'으로만 이루어진 5 ~ 12자 이하 입니다. 다시 입력해주세요");
			}
            //===============================================================================================
            //===============================================================================================
            
            
            //===============================================================================================
            //===============================================================================================
			ValidationUtils.rejectIfEmptyOrWhitespace(
                errors                       
                , "pwd"                   
                , "암호를 입력해주세요"        
            );

			if( Pattern.matches(  "^[A-Za-z0-9]{6,12}$", dto.getPwd()  )==false ) {
				errors.rejectValue("pwd", "비밀번호는 숫자, 문자 포함의 6~12자리 이내 입니다. 다시 입력해주세요");
			}
            //===============================================================================================
            //===============================================================================================


            
            //===============================================================================================
            //===============================================================================================
			ValidationUtils.rejectIfEmptyOrWhitespace(
                errors                       
                , "name"                   
                , "이름을 입력해주세요"        
            );

			if( Pattern.matches(  "^[가-힣]{2,10}$", dto.getName()  )==false ) {
				errors.rejectValue("name", "이름은 2자에서 10자 사이입니다. 다시 입력해주세요");
			}           
            //===============================================================================================
            //===============================================================================================


            
            //===============================================================================================
            // 정해야함
            //===============================================================================================
			ValidationUtils.rejectIfEmptyOrWhitespace(
                errors                       
                , "nickname"                   
                , "별칭을 입력해주세요"        
            );

			if( Pattern.matches(  "^[가-힣]{2,10}$", dto.getName()  )==false ) {
				errors.rejectValue("nickname", "별칭은 2자에서 10자 사이입니다. 다시 입력해주세요");
			}           
            //===============================================================================================
            //===============================================================================================
        }



        } catch(Exception ex){
            System.out.println( "LoginValidator.validate 파싱 에러 발생!" );
        }
    }
}

