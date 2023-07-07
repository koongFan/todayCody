package com.example.todayCody.board;

import lombok.Data;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;

@Data
public class BoardDTO {
  /*===============================================DB 컬럼*/
  private int board_seq;
  private int user_seq;
  private String title;
  private String content;
  private String reg_date;
  private String udt_date;
  private String del_yn;
  private int read_cnt;
  /*===============================================DB 컬럼*/

  /*===============================================추가적으로 필요한 데이터*/
  private List<Map<String,Object>> file_info;
  private String service_tp;
  private int page_num;
  private int max_ret_cnt; //한번에 불러올데이터
  private int start_index;  //불러오기 시작 될 데이터
  private int total_cnt;  //불러오기 시작 될 데이터
  private String sort_tp;    //정렬 타입
  /*===============================================추가적으로 필요한 데이터*/

  public Object getFieldValue(String fieldName) {
    try {
      Field field = getClass().getDeclaredField(fieldName);
      field.setAccessible(true);
      return field.get(this);
    } catch (Exception e) {
      e.printStackTrace();
      return null;
    }
  }
}
