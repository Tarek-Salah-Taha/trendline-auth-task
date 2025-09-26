"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/app/_lib/utils";
import Image from "next/image";

type ProductCardProps = {
  id: number;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  currentPrice: string;
  originalPrice?: string;
  discountPercentage?: string;
  image: string;
  colors: string[];
  additionalColorsCount?: number;
  className?: string;
};

export function ProductCard({
  id,
  name,
  category,
  rating,
  reviewCount,
  currentPrice,
  originalPrice,
  discountPercentage,
  image,
  colors,
  additionalColorsCount = 0,
  className,
}: ProductCardProps) {
  const [bagActive, setBagActive] = useState(false);
  const [favActive, setFavActive] = useState(false);

  const getColorStyle = (color: string) => {
    const colorMap: Record<string, string> = {
      beige: "#be968e",
      black: "#000000",
      gray: "#d1d5db",
    };
    return colorMap[color.toLowerCase()] || color;
  };

  return (
    <div className={cn("group cursor-pointer", className)}>
      <div className="relative bg-[#f5f5f5] rounded-lg overflow-hidden mb-3">
        {/* Discount Badge */}
        {discountPercentage && (
          <div className="absolute top-3 left-3 text-[#be968e] px-2 py-1 text-xs font-medium rounded border border-gray-300">
            {discountPercentage}
          </div>
        )}

        {/* Action Icons */}
        <div className="absolute top-3 right-3 flex gap-2">
          {/* Bag button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setBagActive(!bagActive)}
            className="w-8 h-8 bg-white/90 hover:bg-white rounded-md shadow-sm"
          >
            <Image
              src={bagActive ? "/bag-add active.svg" : "/bag-add.svg"}
              alt="Add to bag"
              width={20}
              height={20}
            />
          </Button>

          {/* Favourite button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setFavActive(!favActive)}
            className="w-8 h-8 bg-white/90 hover:bg-white rounded-md shadow-sm"
          >
            <Image
              src={favActive ? "/favourite active.svg" : "/favourite.svg"}
              alt="Add to favourites"
              width={24}
              height={24}
            />
          </Button>
        </div>

        {/* Product Image */}
        <div className="aspect-square overflow-hidden flex items-center justify-center bg-white border border-gray-200 rounded-lg">
          <Image
            src={image}
            alt={name}
            width={250}
            height={250}
            className="object-contain max-w-[70%] max-h-[70%]"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        {/* Category and Rating */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">
            {category}
          </span>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-chart-2 text-chart-2 stroke-none" />
            <span className="text-sm font-medium text-black">{rating}</span>
            <span className="text-xs text-muted-foreground">
              ({reviewCount})
            </span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="md:text-sm text-xs text-black line-clamp-2 leading-tight font-medium">
          {name}
        </h3>

        {/* Price + Color Options */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="font-medium text-black md:text-base text-sm">
              {currentPrice}
            </span>
            {originalPrice && (
              <span className="md:text-sm text-xs text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
          </div>

          {/* Color Options */}
          <div className="flex items-center gap-1 mt-2 md:mt-0">
            {colors.slice(0, 3).map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-[#e6e6e6]"
                style={{
                  backgroundColor: getColorStyle(color),
                  border:
                    color.toLowerCase() === "white"
                      ? "1px solid #e6e6e6"
                      : "none",
                }}
              />
            ))}
            {additionalColorsCount > 0 && (
              <span className="text-xs text-black font-medium ml-1">
                +{additionalColorsCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
