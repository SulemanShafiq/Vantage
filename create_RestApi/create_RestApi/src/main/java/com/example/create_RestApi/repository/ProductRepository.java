package com.example.create_RestApi.repository;

import com.example.create_RestApi.entity.Product;
import com.example.create_RestApi.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {

    List<Product> findByCategory(ProductCategory category);
}