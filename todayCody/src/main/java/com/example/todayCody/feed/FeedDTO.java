package com.example.todayCody.feed;

import lombok.Data;

@Data
public class FeedDTO {
    

    // 기본 피드 DTO
    private String feed_seq;
    private String user_seq;
    private String content;
    private String likes;
    private String comment;
    //===============================
    private String image_path;
    private String u_nickname;

    
    

}
