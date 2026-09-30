package com.example.create_RestApi.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "hero_slides")
public class HeroSlide {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String image;
    private String title;

    public HeroSlide() {}

    public HeroSlide(String image, String title) {
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