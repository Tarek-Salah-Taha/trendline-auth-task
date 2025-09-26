"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";

export function SimilarItems() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const products = [
    {
      id: 1,
      name: "J VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-free With Yellow",
      category: "Dresses",
      rating: 4.5,
      reviewCount: 2910,
      currentPrice: "AED 900",
      image: "/black-dress.png",
      colors: ["beige", "black", "gray"],
      additionalColorsCount: 2,
    },
    {
      id: 2,
      name: "J VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-free With Yellow",
      category: "Dresses",
      rating: 4.2,
      reviewCount: 1850,
      currentPrice: "AED 900",
      originalPrice: "AED 1300",
      image: "/white-bergamot.png",
      colors: ["beige", "black", "gray"],
      additionalColorsCount: 1,
      discountPercentage: "25% OFF",
    },
    {
      id: 3,
      name: "J VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-free With Yellow",
      category: "Shirts",
      rating: 4.7,
      reviewCount: 3200,
      currentPrice: "AED 900",
      discountPercentage: "25% OFF",
      image: "/brown-bergamot.png",
      colors: ["beige", "black", "gray"],
      additionalColorsCount: 2,
    },
    {
      id: 4,
      name: "J VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-free With Yellow",
      category: "Hoodies",
      rating: 4.3,
      reviewCount: 1650,
      currentPrice: "AED 900",
      originalPrice: "AED 1300",
      image: "/bergamot.png",
      colors: ["beige", "black", "gray"],
      additionalColorsCount: 1,
    },
    {
      id: 5,
      name: "J VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-free With Yellow",
      category: "Hoodies",
      rating: 4.6,
      reviewCount: 2100,
      currentPrice: "AED 900",
      originalPrice: "AED 1300",
      image: "/bergamot.png",
      colors: ["beige", "black", "gray"],
      additionalColorsCount: 2,
    },
  ];

  // Update items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(2); // Mobile: 2 cards side by side
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(3); // Tablet: 3 cards
      } else {
        setItemsPerPage(4); // Desktop: 4 cards
      }
      setCurrentSlide(0); // Reset to first slide when changing view
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const maxSlide = Math.ceil(products.length / itemsPerPage) - 1;

  // Navigation functions with infinite loop
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  return (
    <section className="max-w-7xl mx-auto p-4">
      <div className="mb-8">
        <h5 className="relative inline-block md:text-2xl text-lg font-bold text-black mb-2">
          Similar Items
          <span className="absolute left-0 -bottom-1 h-1 w-12 bg-chart-2 rounded"></span>
        </h5>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({
            length: Math.ceil(products.length / itemsPerPage),
          }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div
                className={`grid gap-4 md:gap-6 ${
                  itemsPerPage === 2
                    ? "grid-cols-2"
                    : itemsPerPage === 3
                    ? "grid-cols-3"
                    : "grid-cols-4"
                }`}
              >
                {products
                  .slice(
                    slideIndex * itemsPerPage,
                    (slideIndex + 1) * itemsPerPage
                  )
                  .map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      category={product.category}
                      rating={product.rating}
                      reviewCount={product.reviewCount}
                      currentPrice={product.currentPrice}
                      originalPrice={product.originalPrice}
                      discountPercentage={product.discountPercentage}
                      image={product.image}
                      colors={product.colors}
                      additionalColorsCount={product.additionalColorsCount}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons at bottom center */}
      <div className="flex justify-center gap-2 mt-8">
        <Button
          size="icon"
          onClick={goToPrevSlide}
          className="h-10 w-10 rounded-full bg-[#E8EDF2] text-black hover:bg-gray-300"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          size="icon"
          onClick={goToNextSlide}
          className="h-10 w-10 rounded-full bg-chart-2 text-white border-chart-2 hover:bg-opacity-80"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
