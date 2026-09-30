package com.example.create_RestApi.controller;

import com.example.create_RestApi.dto.HeroSlideDTO;
import com.example.create_RestApi.dto.HeroSlideRequestDTO;
import com.example.create_RestApi.service.HeroSlideService;
import com.example.create_RestApi.service.ImageUploadService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/hero-slides")
public class HeroSlideController {

    private final HeroSlideService heroSlideService;
    private final ImageUploadService imageUploadService;

    public HeroSlideController(HeroSlideService heroSlideService,
                               ImageUploadService imageUploadService) {
        this.heroSlideService = heroSlideService;
        this.imageUploadService = imageUploadService;
    }

    @GetMapping
    public List<HeroSlideDTO> getAllSlides() {
        return heroSlideService.getAllSlides();
    }

    @PostMapping
    public HeroSlideDTO addSlide(@Valid @RequestBody HeroSlideRequestDTO requestDto) {
        return heroSlideService.addSlide(requestDto);
    }

    // Nayi: image upload + slide creation ek hi request mein
    @PostMapping("/upload")
    public HeroSlideDTO addSlideWithUpload(@RequestParam("title") String title,
                                           @RequestParam("file") MultipartFile file) throws IOException {
        String imageUrl = imageUploadService.uploadImage(file);

        HeroSlideRequestDTO requestDto = new HeroSlideRequestDTO();
        requestDto.setTitle(title);
        requestDto.setImage(imageUrl);
        return heroSlideService.addSlide(requestDto);
    }
}