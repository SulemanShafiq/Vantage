# Vantage

Online store built with React and Spring Boot, featuring JWT and Google login.

## Features
- User registration and login with JWT authentication
- Google OAuth2 login
- Product listing, categories and cart
- Image upload with Cloudinary

## Tech Stack
- **Frontend:** React, Vite, Axios
- **Backend:** Java, Spring Boot, Spring Security, JPA
- **Database:** MySQL

## Setup

### Backend
1. Copy `application.properties.example` to `application-local.properties`
2. Fill in your own DB, Cloudinary, Google and JWT values
3. Run `CreateRestApiApplication`

### Frontend
```bash
cd MENSPROJ/Menweb
npm install
npm run dev
