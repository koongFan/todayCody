package com.example.todayCody.common.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//@Profile("prod")
@Configuration
public class WebConfig implements WebMvcConfigurer  {

  private String feedsConnectPath = "/feeds/**";
  private String feedsResourcePath = "file:///home/ubuntu/data/upload/feeds/";

  private String boardsConnectPath = "/boards/**";
  private String boardsResourcePath = "file:///home/ubuntu/data/upload/boards/";


//    윈도우
//    private String resourcePath = "file:///C:/home/ubuntu/data/upload/feeds/";

  @Override
  public void addResourceHandlers(ResourceHandlerRegistry registry) {
    registry.addResourceHandler(feedsConnectPath, boardsConnectPath)
            .addResourceLocations(feedsResourcePath, boardsResourcePath);
  }
}
