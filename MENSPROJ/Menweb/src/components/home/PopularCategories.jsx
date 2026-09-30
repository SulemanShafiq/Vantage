import { Link } from "react-router-dom";
import cat1 from "../../assets/images/img1.png";
import cat2 from "../../assets/images/img2.png";
import cat3 from "../../assets/images/img3.jpg";
import cat4 from "../../assets/images/img1.png";
import cat5 from "../../assets/images/img2.png";
import cat6 from "../../assets/images/img3.jpg";

// Har category ka image + naam + uska route slug
const categories = [
  { image: cat1, name: "New Arrivals", slug: "new-arrivals" },
  { image: cat2, name: "Formals", slug: "formals" },
  { image: cat3, name: "Casual", slug: "casual" },
  { image: cat4, name: "Winter", slug: "winter" },
  { image: cat5, name: "Accessories", slug: "accessories" },
  { image: cat6, name: "Footwear", slug: "footwear" },
];

export default function PopularCategories() {
  return (
    <div className="w-full py-16 px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10">

        {/* Left side heading */}
        <h2 className="text-3xl font-bold shrink-0 md:w-48">
          POPULAR
          <br />
          CATEGORIES
        </h2>

        {/* Right side - scrollable row of circles */}
        <div className="flex gap-8 overflow-x-auto scrollbar-hide">
          {categories.map((cat, index) => (
            <Link
              to={`/category/${cat.slug}`}
              key={index}
              className="flex flex-col items-center shrink-0"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-28 h-28 rounded-full object-cover hover:opacity-80 transition"
              />
              <span className="mt-3 font-semibold text-sm text-center">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Neeche divider line, thora accent color se highlight */}
      <div className="mt-8 h-px w-full bg-gray-200 relative">
        <div className="absolute left-0 top-0 h-px w-40 bg-pink-600"></div>
      </div>
    </div>
  );
}