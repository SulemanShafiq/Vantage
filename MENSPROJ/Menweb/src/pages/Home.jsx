import HeroCarousel from "../components/home/HeroCarousel";
import PopularCategories from "../components/home/PopularCategories";
import FeatureBanner from "../components/home/FeatureBanner";
import TrendingProducts from "../components/home/TrendingProducts";
import CommunitySections from "../components/home/CommunitySections";

export default function Home() {
  return (
    <div className="w-full">
      <HeroCarousel />
      <PopularCategories />
      <FeatureBanner />
      <TrendingProducts />
      <CommunitySections />
    </div>
  );
}