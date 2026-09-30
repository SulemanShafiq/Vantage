package com.example.create_RestApi.repository;

import com.example.create_RestApi.entity.HeroSlide;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HeroSlideRepository extends JpaRepository<HeroSlide, Integer> {
}