package com.example.create_RestApi.dto;

import jakarta.validation.constraints.NotBlank;

public class HeroSlideRequestDTO {

    @NotBlank(message = "Image is required")
    private String image;

    @NotBlank(message = "Title is required")
    private String title;

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
}