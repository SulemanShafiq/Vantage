package com.example.create_RestApi.service;

import com.example.create_RestApi.dto.LoginRequest;
import com.example.create_RestApi.dto.LoginResponse;
import com.example.create_RestApi.entity.User;
import com.example.create_RestApi.repository.UserRepository;
import com.example.create_RestApi.security.JwtUtil;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthService(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            JwtUtil jwtUtil) {

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    // =========================
    // LOGIN
    // =========================
    public LoginResponse login(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new RuntimeException("Invalid email or password"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid email or password");
        }

        // JWT Token Generate Karo
        String token = jwtUtil.generateToken(user.getEmail());

        return new LoginResponse(
                token,
                user.getName(),
                user.getEmail(),
                user.getRole()
        );
    }


    // =========================
    // REGISTER
    // =========================
    public String register(User user) {

        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new RuntimeException("Email already registered");
        }

        // Default Role
        user.setRole("USER");

        // Password Ko BCrypt Se Encode Karo
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        userRepository.save(user);

        return "Account created successfully!";
    }
}