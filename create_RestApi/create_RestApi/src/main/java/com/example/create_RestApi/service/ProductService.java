package com.example.create_RestApi.service;

import com.example.create_RestApi.dto.ProductDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import com.example.create_RestApi.dto.ProductRequestDTO;
import com.example.create_RestApi.entity.Product;
import com.example.create_RestApi.entity.ProductCategory;
import com.example.create_RestApi.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<ProductDTO> getAllProducts() {
        return productRepository.findAll()
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    public List<ProductDTO> getProductsByCategory(ProductCategory category) {
        return productRepository.findByCategory(category)
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    public ProductDTO getProductById(int id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found with id: " + id));
        return toDTO(product);
    }

    public ProductDTO addProduct(ProductRequestDTO requestDto) {
        Product product = new Product();
        product.setName(requestDto.getName());
        product.setDescription(requestDto.getDescription());
        product.setCategory(requestDto.getCategory());
        product.setPrice(requestDto.getPrice());
        product.setSize(requestDto.getSize());
        product.setStock(requestDto.getStock());
        product.setImageUrl(requestDto.getImageUrl());

        Product saved = productRepository.save(product);
        return toDTO(saved);
    }

    public ProductDTO updateProduct(int id, ProductRequestDTO requestDto) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found with id: " + id));

        product.setName(requestDto.getName());
        product.setDescription(requestDto.getDescription());
        product.setCategory(requestDto.getCategory());
        product.setPrice(requestDto.getPrice());
        product.setSize(requestDto.getSize());
        product.setStock(requestDto.getStock());
        product.setImageUrl(requestDto.getImageUrl());

        Product updated = productRepository.save(product);
        return toDTO(updated);
    }
    
    public Page<ProductDTO> getPaginatedProducts(
            int page, int size, String sortBy) {

        Pageable pageable = PageRequest.of(
                page,
                size,
                Sort.by(Sort.Direction.ASC, sortBy)
        );

        return productRepository.findAll(pageable)
                .map(this::toDTO);
    }

    public void deleteProduct(int id) {
        productRepository.deleteById(id);
    }

    private ProductDTO toDTO(Product product) {
        ProductDTO dto = new ProductDTO();
        dto.setId(product.getId());
        dto.setName(product.getName());
        dto.setDescription(product.getDescription());
        dto.setCategory(product.getCategory());
        dto.setPrice(product.getPrice());
        dto.setSize(product.getSize());
        dto.setStock(product.getStock());
        dto.setImageUrl(product.getImageUrl());
        return dto;
    }
}