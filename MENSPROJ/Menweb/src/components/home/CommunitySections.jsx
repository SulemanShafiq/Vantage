import blog1 from "../../assets/images/img1.png";
import blog2 from "../../assets/images/img2.png";
import blog3 from "../../assets/images/img3.jpg";

// Blog cards ka data
const posts = [
  {
    image: blog1,
    title: "STYLING CHIC DESIGNS FROM OUR LATEST COLLECTION",
    desc: "Comfortable and versatile readymade pieces for men, designed for everyday ease and style.",
  },
  {
    image: blog2,
    title: "WHY MATCHING CO-ORD SETS ARE TRENDING",
    desc: "Lightweight fabrics with contemporary silhouettes make dressing simple and stylish.",
  },
  {
    image: blog3,
    title: "ELEVATING YOUR FORMAL WARDROBE",
    desc: "Premium fabrics and clean tailoring for a look that stays comfortable all day.",
  },
];

export default function CommunitySections() {
  return (
    <div className="w-full py-16 px-6 md:px-12 text-center">
      <button className="border border-black px-6 py-2 font-semibold mb-10">
        SHOP BESTSELLERS
      </button>

      <h2 className="text-2xl font-bold mb-10">OUR COMMUNITY</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {posts.map((post, index) => (
          <div key={index}>
            <img src={post.image} alt={post.title} className="w-full h-56 object-cover mb-4" />
            <h3 className="font-bold uppercase text-sm mb-2 line-clamp-2">{post.title}</h3>
            <p className="text-gray-500 text-sm mb-3 line-clamp-3">{post.desc}</p>
            <a href="#" className="text-pink-600 font-bold text-sm uppercase">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
}