package com.example.create_RestApi.security;

import com.example.create_RestApi.entity.User;
import com.example.create_RestApi.repository.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.UUID;

@Component
public class OAuth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public OAuth2SuccessHandler(UserRepository userRepository,
                                PasswordEncoder passwordEncoder,
                                JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    private String enc(String value) {
        return URLEncoder.encode(value == null ? "" : value, StandardCharsets.UTF_8);
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException {

        OAuth2User oauthUser = (OAuth2User) authentication.getPrincipal();
        String email = oauthUser.getAttribute("email");
        String name = oauthUser.getAttribute("name");

        if (email == null) {
            getRedirectStrategy().sendRedirect(request, response, "http://localhost:5173/login");
            return;
        }

        User user = userRepository.findByEmail(email).orElseGet(() -> {
            User u = new User();
            u.setEmail(email);
            u.setPassword(passwordEncoder.encode(UUID.randomUUID().toString()));
            return u;
        });

        if (user.getRole() == null) {
            user.setRole("USER");
        }
        if (user.getName() == null) {
            user.setName(name != null ? name : "User");
        }
        user = userRepository.save(user);

        String token = jwtUtil.generateToken(user.getEmail());
        String picture = oauthUser.getAttribute("picture");
        String redirectUrl = "http://localhost:5173/oauth2/redirect"
                + "?token=" + enc(token)
                + "&name=" + enc(user.getName())
                + "&email=" + enc(user.getEmail())
                + "&role=" + enc(user.getRole())
                + "&picture=" + enc(picture);
        getRedirectStrategy().sendRedirect(request, response, redirectUrl);
    }
}