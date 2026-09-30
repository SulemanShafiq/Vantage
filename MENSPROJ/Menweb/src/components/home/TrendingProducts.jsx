import { useState, useRef } from "react";
import p1 from "../../assets/images/img1.png";
import p2 from "../../assets/images/img2.png";
import p3 from "../../assets/images/img3.jpg";
import p4 from "../../assets/images/img1.png";

// Tabs - filter categories
const tabs = ["Bestsellers", "Shirts", "Pants"];

// Har product ka apna category tag hai - isi se filter hoga
// Baad me jab real products aayenge, tab yahan sahi category dena
const products = [
  { image: p1, category: "Bestsellers" },
  { image: p2, category: "Bestsellers" },
  { image: p3, category: "Shirts" },
  { image: p4, category: "Shirts" },
  { image: p1, category: "pants" },
  { image: p2, category: "pants" },
];

export default function TrendingProducts() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const scrollRef = useRef(null);

  // Right arrow click pe carousel ko aage scroll karo
  function scrollForward() {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  }

  // Sirf wahi products rakho jinka category active tab se match ho
  const filteredProducts = products.filter(
    (product) => product.category === activeTab
  );

  return (
    <div className="w-full py-16 px-6 md:px-12">
      {/* Section title */}
      <h2 className="text-center text-2xl font-bold tracking-wide">
        WHAT'S TRENDING
      </h2>

      {/* Tabs row */}
      <div className="flex justify-center gap-8 mt-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-1 font-medium ${
              activeTab === tab
                ? "text-black border-b-2 border-black"
                : "text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Products carousel - ab sirf filteredProducts dikhenge */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-0 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {filteredProducts.map((product, index) => (
            // Wrapper div - overflow-hidden taake zoom hone par image bahar na nikle
            <div
              key={index}
              className="w-64 h-80 overflow-hidden shrink-0"
            >
              <img
                src={product.image}
                alt={`${product.category} product ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Right arrow - carousel ko forward scroll karta hai */}
        <button
          onClick={scrollForward}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white w-9 h-9 rounded-full flex items-center justify-center"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}