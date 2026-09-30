import useCart from "../../hooks/useCart";

import { NavLink } from "react-router-dom";

function CartDrawer() {
  const { cart, closeCart } = useCart();

  return (
    <>
      {/* Dark Overlay */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 bg-black/40 transition-all duration-300
          ${cart ? "opacity-100 visible" : "opacity-0 invisible"}`}
      ></div>

      {/* Right Side Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[380px] bg-white shadow-lg transition-transform duration-300
          ${cart ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b"></div>

        {/* Body */}
        <div className="p-3 text-center relative">
          {/* Close Button */}
          <button
            onClick={closeCart}
            className="absolute top-6 right-4 cursor-pointer text-red-500"
          >
            X
          </button>

          <p className="pt-20 text-2xl font-bold">Your cart is empty</p>
          <NavLink
            to="/mens-clothing"
            className="block mt-4 bg-black text-white w-full py-3 font-bold text-center cursor-pointer hover:bg-gray-700"
          >
            Continue Shopping
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default CartDrawer;
