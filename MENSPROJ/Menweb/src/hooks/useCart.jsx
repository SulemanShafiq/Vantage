import { useContext } from "react";
import { CartContext } from "../contexts/Cartcontain";

function useCart() {
  return useContext(CartContext);
}

export default useCart;
