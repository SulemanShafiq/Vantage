package com.example.create_RestApi.controller;

import com.example.create_RestApi.dto.ProductDTO;
import com.example.create_RestApi.dto.ProductRequestDTO;
import com.example.create_RestApi.entity.ProductCategory;
import com.example.create_RestApi.service.ImageUploadService;
import com.example.create_RestApi.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;
    private final ImageUploadService imageUploadService;

    public ProductController(ProductService productService, ImageUploadService imageUploadService) {
        this.productService = productService;
        this.imageUploadService = imageUploadService;
    }

    @GetMapping
    public List<ProductDTO> getAllProducts(
            @RequestParam(required = false) ProductCategory category) {
        if (category != null) {
            return productService.getProductsByCategory(category);
        }
        return productService.getAllProducts();
    }

    @GetMapping("/paginated")
    public Page<ProductDTO> getPaginatedProducts(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "8") int size,
            @RequestParam(defaultValue = "id") String sortBy) {
        return productService.getPaginatedProducts(page, size, sortBy);
    }

    @GetMapping("/{id}")
    public ProductDTO getProductById(@PathVariable int id) {
        return productService.getProductById(id);
    }

    @PostMapping
    public ProductDTO addProduct(@Valid @RequestBody ProductRequestDTO requestDto) {
        return productService.addProduct(requestDto);
    }

    // NAYA: image + product data ek hi request mein
    @PostMapping("/upload")
    public ProductDTO addProductWithImage(
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam("category") ProductCategory category,
            @RequestParam("price") BigDecimal price,
            @RequestParam(value = "size", required = false) String size,
            @RequestParam("stock") int stock,
            @RequestParam("file") MultipartFile file
    ) throws IOException {

        String imageUrl = imageUploadService.uploadImage(file);

        ProductRequestDTO requestDto = new ProductRequestDTO();
        requestDto.setName(name);
        requestDto.setDescription(description);
        requestDto.setCategory(category);
        requestDto.setPrice(price.doubleValue());
        requestDto.setSize(size);
        requestDto.setStock(stock);
        requestDto.setImageUrl(imageUrl);

        return productService.addProduct(requestDto);
    }

    @PutMapping("/{id}")
    public ProductDTO updateProduct(@PathVariable int id, @Valid @RequestBody ProductRequestDTO requestDto) {
        return productService.updateProduct(id, requestDto);
    }

    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable int id) {
        productService.deleteProduct(id);
        return "Product deleted successfully!";
    }
}