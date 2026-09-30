import { useParams } from "react-router-dom";

// Ye page URL se category slug le kar uska naam show karta hai
// Baad me yahan actual products ka data category ke hisaab se filter kar ke dikhana hai
export default function CategoryPage() {
  const { slug } = useParams(); // URL se category slug nikal rahe hain

  // slug jaise "new-arrivals" ko readable naam mein convert kar rahe hain
  const categoryName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="w-full py-16 px-6 md:px-12">
      <h1 className="text-3xl font-bold mb-8">{categoryName}</h1>

      {/* Filhal placeholder - baad me yahan is category ke products ka grid aayega */}
      <p className="text-gray-500">
        Products for "{categoryName}" category will be shown here.
      </p>
    </div>
  );
}