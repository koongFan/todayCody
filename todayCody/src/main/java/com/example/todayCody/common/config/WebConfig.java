package com.example.todayCody.common.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//@Profile("prod")
@Configuration
public class WebConfig implements WebMvcConfigurer  {

    private String connectPath = "/feeds/**";
    private String resourcePath = "file:///home/ubuntu/data/upload/feeds/";

//    윈도우
//    private String resourcePath = "file:///C:/data/upload/feeds/";

  @Value("file:C:/data/upload/feeds/")
  private String imageDir;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler(connectPath)
                .addResourceLocations(resourcePath);
    }
}
