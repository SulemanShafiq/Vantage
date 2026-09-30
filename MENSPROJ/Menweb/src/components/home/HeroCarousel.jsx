import { useState, useEffect } from "react";
import api from "../../api/axios";

export default function HeroCarousel() {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Backend se slides fetch karna
  useEffect(() => {
    async function fetchSlides() {
      console.log("fetchSlides called"); 
      try {
       const res = await api.get("/api/hero-slides"); // baseURL me /api already hoga
        setSlides(res.data);
      } catch (err) {
        console.error("Failed to load hero slides:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchSlides();
  }, []);

  function goPrev() {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }

  function goNext() {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }

  // Loading state
  if (loading) {
    return (
      <div className="w-full h-[520px] flex items-center justify-center bg-gray-100">
        <p>Loading...</p>
      </div>
    );
  }

  // Error ya empty state
  if (error || slides.length === 0) {
    return (
      <div className="w-full h-[520px] flex items-center justify-center bg-gray-100">
        <p>No slides found.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="relative w-full h-[520px] overflow-hidden shadow-lg group">

        {/* Image - ab backend se aayi hui URL */}
        <img
          src={slides[current].image}
          alt={`Slide ${current + 1}`}
          className="w-full h-full object-cover"
        />

        {/* Halka dark overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Text */}
        <h2 className="absolute top-10 left-12 mt-14 right-0 text-amber-50 text-5xl font-bold drop-shadow-lg whitespace-pre-line">
          {slides[current].title}
        </h2>

        {/* SHOP NOW button */}
        <button className="absolute bottom-8 left-8 bg-pink-600 hover:bg-pink-700 text-white font-bold px-10 py-4">
          SHOP NOW
        </button>

        {/* Prev Button - sirf hover pe dikhega */}
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous slide"
          className="hidden group-hover:block absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/90 hover:text-white transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Next Button - sirf hover pe dikhega */}
        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide"
          className="hidden group-hover:block absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/90 hover:text-white transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Dots - jitni slides utne dots, current wala highlight */}
        <div className="absolute bottom-5 left-0 right-0 z-10 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              type="button"
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-2 h-2 rounded-full transition ${
                index === current ? "bg-pink-600 scale-125" : "bg-white/70"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}