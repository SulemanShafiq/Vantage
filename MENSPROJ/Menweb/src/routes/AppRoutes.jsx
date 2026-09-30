import { Routes, Route } from "react-router-dom";
import NewArrivals from "../pages/NewArrivals";
import BestSellers from "../pages/BestSellers";
import Brands from "../pages/Brands";
import MensClothing from "../pages/MensClothing";
import Essentials from "../pages/Essentials";
import Fragrances from "../pages/Fragrances";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Recover from "../pages/Recover";
import Home from "../pages/Home";
import CategoryPage from "../pages/CategoryPage";
import ProductList from "../components/ProductList/ProductList";
import OAuthRedirect from "../pages/OAuthRedirect";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collections/best-sellers" element={<BestSellers />} />
      <Route path="/collections/brands" element={<Brands />} />
      <Route path="/mens-clothing" element={<MensClothing />} />
      <Route path="/collections/essentials" element={<Essentials />} />
      <Route path="/collections/fragrances" element={<Fragrances />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Recover" element={<Recover />} />
      <Route path="/home" element={<Home />} />
      <Route path="/category/:slug" element={<CategoryPage />} />
      <Route path="/products" element={<ProductList />} />   {/* ← Naya route */}
      <Route path="/oauth2/redirect" element={<OAuthRedirect />} />
    </Routes>
  );
}

export default AppRoutes;