package com.example.todayCody.board;

import lombok.Data;

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
}
