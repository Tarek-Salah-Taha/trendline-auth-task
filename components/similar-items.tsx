"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";

export function SimilarItems() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      id: 1,
      name: "J VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-free With Yellow",
      category: "Dresses",
      rating: 4.5,
      reviewCount: 2910,
      currentPrice: "AED 900",
      originalPrice: "AED 1000",
      discountPercentage: "25% OFF",
      image: "/black-dress.png",
      colors: ["beige", "black", "white"],
      additionalColorsCount: 2,
      isLocked: true,
    },
    {
      id: 2,
      name: "J VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-free With Yellow",
      category: "Dresses",
      rating: 4.2,
      reviewCount: 1850,
      currentPrice: "AED 900",
      originalPrice: "AED 1000",
      image: "/white-bergamot.png",
      colors: ["white", "black"],
      additionalColorsCount: 1,
    },
    {
      id: 3,
      name: "J VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-free With Yellow",
      category: "Shirts",
      rating: 4.7,
      reviewCount: 3200,
      currentPrice: "AED 900",
      originalPrice: "AED 1000",
      discountPercentage: "SALE",
      image: "/brown-bergamot.png",
      colors: ["brown", "black"],
      additionalColorsCount: 2,
    },
    {
      id: 4,
      name: "J VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-free With Yellow",
      category: "Hoodies",
      rating: 4.3,
      reviewCount: 1650,
      currentPrice: "AED 900",
      originalPrice: "AED 1000",
      image: "/bergamot.png",
      colors: ["blue", "gray"],
      additionalColorsCount: 1,
    },
    {
      id: 5,
      name: "J VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-free With Yellow",
      category: "Hoodies",
      rating: 4.6,
      reviewCount: 2100,
      currentPrice: "AED 900",
      originalPrice: "AED 1000",
      image: "/bergamot.png",
      colors: ["black", "gray"],
      additionalColorsCount: 2,
    },
  ];

  const itemsPerPage = 4;
  const maxSlide = Math.ceil(products.length / itemsPerPage) - 1;

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#333333]">Similar Items</h2>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                      isLocked={product.isLocked}
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
          variant="outline"
          size="icon"
          onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
          disabled={currentSlide === 0}
          className="h-10 w-10 rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCurrentSlide(Math.min(maxSlide, currentSlide + 1))}
          disabled={currentSlide === maxSlide}
          className="h-10 w-10 rounded-full bg-[#be968e] text-white border-[#be968e] hover:bg-[#a08268]"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
