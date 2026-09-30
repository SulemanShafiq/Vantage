package com.example.create_RestApi.service;

import com.example.create_RestApi.dto.HeroSlideDTO;
import com.example.create_RestApi.entity.HeroSlide;
import com.example.create_RestApi.repository.HeroSlideRepository;
import org.springframework.stereotype.Service;
import com.example.create_RestApi.dto.HeroSlideRequestDTO;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class HeroSlideService {

    private final HeroSlideRepository heroSlideRepository;

    public HeroSlideService(HeroSlideRepository heroSlideRepository) {
        this.heroSlideRepository = heroSlideRepository;
    }

    public List<HeroSlideDTO> getAllSlides() {
        return heroSlideRepository.findAll()
                .stream()
                .map(slide -> new HeroSlideDTO(slide.getId(), slide.getImage(), slide.getTitle()))
                .collect(Collectors.toList());
    }
    
    public HeroSlideDTO addSlide(HeroSlideRequestDTO requestDto) {
        HeroSlide slide = new HeroSlide(requestDto.getImage(), requestDto.getTitle());
        HeroSlide saved = heroSlideRepository.save(slide);
        return new HeroSlideDTO(saved.getId(), saved.getImage(), saved.getTitle());
    }
}