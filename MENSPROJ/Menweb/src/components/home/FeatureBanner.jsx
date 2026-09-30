import feat1 from "../../assets/images/img1.png";
import feat2 from "../../assets/images/img2.png";
import feat3 from "../../assets/images/img3.jpg";
// 3 columns ka data - image + label
const features = [
  { image: feat1, label: "FRAGRANCES" },
  { image: feat2, label: "FORMAL WEAR" },
  { image: feat3, label: "SUMMER EDIT" },
];

export default function FeatureBanner() {
  return (
    // grid-cols-3 = teen barabar columns, gap-0 taake images aapas mein chipki rahein
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-0">
      {features.map((item, index) => (
        <div
          key={index}
          className="relative h-[420px] overflow-hidden group cursor-pointer"
        >
          <img
            src={item.image}
            alt={item.label}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />

          {/* Neeche se upar dark gradient - taake text saaf dikhay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

          {/* Centered bold label neeche */}
          <span className="absolute bottom-8 left-0 right-0 text-center text-white text-xl font-bold tracking-wide">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}