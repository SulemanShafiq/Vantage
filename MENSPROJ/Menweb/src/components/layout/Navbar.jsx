import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Search, ShoppingCart, User, X, Shirt } from "lucide-react";
import useCart from "../../hooks/useCart";
import UserMenu from "../UserMenu";

function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { openCart } = useCart();
  const { closeCart } = useCart();

  return (
    <div className="fixed top-0 left-0 w-full bg-white border-b border-black/20 z-50">
      <div className="h-16 flex justify-between items-center px-10 gap-8">

        {/* Logo */}
        <NavLink
           to="/Home"
          end
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-2 text-[#4682B4]"
              : "flex items-center gap-2 text-black"
          }
        >
          <Shirt className="w-6 h-4" />
          <span className="text-xl">VANTAGE</span>
        </NavLink>


        {/* Navigation Links */}
        {!isSearchOpen && (
          <div className="h-16 flex justify-center items-center gap-20">

            <NavLink
              to="/collections/new-arrivals"
              className={({ isActive }) =>
                isActive
                  ? "text-[#4682B4] font-bold"
                  : "text-black font-bold"
              }
            >
              New Arrivals
            </NavLink>

            <NavLink
              to="/collections/best-sellers"
              className={({ isActive }) =>
                isActive
                  ? "text-[#4682B4] font-bold"
                  : "text-black font-bold"
              }
            >
              Best Sellers
            </NavLink>

            <NavLink
              to="/collections/brands"
              className={({ isActive }) =>
                isActive
                  ? "text-[#4682B4] font-bold"
                  : "text-black font-bold"
              }
            >
              Brands
            </NavLink>

            <NavLink
              to="/mens-clothing"
              className={({ isActive }) =>
                isActive
                  ? "text-[#4682B4] font-bold"
                  : "text-black font-bold"
              }
            >
              Men's Clothing
            </NavLink>

            <NavLink
              to="/collections/essentials"
              className={({ isActive }) =>
                isActive
                  ? "text-[#4682B4] font-bold"
                  : "text-black font-bold"
              }
            >
              Essentials
            </NavLink>

            <NavLink
              to="/collections/fragrances"
              className={({ isActive }) =>
                isActive
                  ? "text-[#4682B4] font-bold"
                  : "text-black font-bold"
              }
            >
              Fragrances
            </NavLink>

          </div>
        )}


        {/* Search */}
        {isSearchOpen && (
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              autoFocus
              className="px-4 h-[40px] w-[60vh] mx-6 border"
            />

            <button onClick={() => setIsSearchOpen(false)}>
              <X className="w-4 h-4 text-gray-500 cursor-pointer" />
            </button>
          </div>
        )}



        {/* Icons */}
        <div className="flex items-center gap-4">

          {/* Search Button */}
          <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="w-5 h-5 text-[#4682B4] cursor-pointer" />
          </button>


          {/* Cart Button */}
          <button onClick={openCart}>
            <ShoppingCart className="w-5 h-5 cursor-pointer" />
          </button>

         
        


        {/* User */}
          <UserMenu />


          <span className="h-10 border-l border-gray-400"></span>

          <span className="text-sm text-[#4682B4]">
            PKR
          </span>

        </div>

      </div>
    </div>
  );
}

export default Navbar;
