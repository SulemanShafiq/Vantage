package com.example.create_RestApi.controller;

import com.example.create_RestApi.service.ImageUploadService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/upload")
public class UploadController {

    private final ImageUploadService imageUploadService;

    public UploadController(ImageUploadService imageUploadService) {
        this.imageUploadService = imageUploadService;
    }

    @PostMapping
    public String uploadImage(@RequestParam("file") MultipartFile file) throws IOException {
        return imageUploadService.uploadImage(file);
    }
}