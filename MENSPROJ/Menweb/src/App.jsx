import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";
import CartDrawer from "./components/cart/CartDrawer";
import Register from "./pages/Register";
import ProductList from "./components/ProductList/ProductList";


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <header>
          <Navbar />
          <CartDrawer/>
         
        </header>

        <main className="flex-1 pt-16">
          <AppRoutes />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;