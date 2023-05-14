package com.example.todayCody.feed;

import lombok.Data;

@Data
public class FeedDTO {
    

    // 기본 피드 DTO
    private int feed_seq;
    private int user_seq;
    private String content;
    private int likes;
    private String comment;

    


}
