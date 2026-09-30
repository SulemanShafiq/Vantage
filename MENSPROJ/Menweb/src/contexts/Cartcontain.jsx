import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const openCart = () => {
    setCart(true);
  };

  const closeCart = () => {
    setCart(false);
  };

  return (
    <CartContext.Provider value={{ cart, openCart, closeCart, cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;