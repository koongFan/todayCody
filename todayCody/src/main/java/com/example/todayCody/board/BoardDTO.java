package com.example.todayCody.board;

import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
public class BoardDTO {
  private int board_seq;
  private int user_seq;
  private String title;
  private String content;
  private String reg_date;
  private String udt_date;
  private String del_yn;
  private int read_cnt;
  private List<Map<String,Object>> file_info;
}
