package com.example.create_RestApi.dto;

public class HeroSlideDTO {
    private int id;
    private String image;
    private String title;

    public HeroSlideDTO() {}

    public HeroSlideDTO(int id, String image, String title) {
        this.id = id;
        this.image = image;
        this.title = title;
    }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
}