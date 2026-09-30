package com.example.create_RestApi.controller;

import com.example.create_RestApi.dto.LoginRequest;
import com.example.create_RestApi.dto.LoginResponse;
import com.example.create_RestApi.service.AuthService;
import com.example.create_RestApi.entity.User;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    // LOGIN
    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        return authService.login(request);
    }

    // REGISTER
    @PostMapping("/register")
    public String register(@RequestBody User user) {
        return authService.register(user);
    }
}