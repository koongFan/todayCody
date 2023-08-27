package com.example.todayCody.board;

import lombok.Data;

@Data
public class BoardFileDTO {
  private String board_file_seq;
  private String board_seq;
  private String ext_name;
  private String order_num;
  private String image_path;
}
