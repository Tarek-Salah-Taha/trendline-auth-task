"use client";

import { Heart, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/app/_lib/utils";

interface ProductCardProps {
  id: string | number;
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
  isLocked?: boolean;
  className?: string;
}

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
  isLocked = false,
  className,
}: ProductCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={cn(
          "text-sm",
          i < Math.floor(rating) ? "text-[#be968e]" : "text-[#e6e6e6]"
        )}
      >
        ★
      </span>
    ));
  };

  const getColorStyle = (color: string) => {
    const colorMap: Record<string, string> = {
      beige: "#be968e",
      black: "#000000",
      white: "#ffffff",
      gray: "#8a8a8a",
      brown: "#a08268",
    };
    return colorMap[color.toLowerCase()] || color;
  };

  return (
    <div className={cn("group cursor-pointer", className)}>
      <div className="relative bg-[#f5f5f5] rounded-lg overflow-hidden mb-3">
        {/* Discount Badge */}
        {discountPercentage && (
          <div className="absolute top-3 left-3 bg-[#f4f7f9] text-[#be968e] px-2 py-1 text-xs font-medium rounded">
            {discountPercentage}
          </div>
        )}

        {/* Action Icons */}
        <div className="absolute top-3 right-3 flex gap-2">
          {isLocked && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 bg-white/90 hover:bg-white rounded-full shadow-sm"
            >
              <Lock className="h-4 w-4 text-[#8a8a8a]" />
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 bg-white/90 hover:bg-white rounded-full shadow-sm"
          >
            <Heart className="h-4 w-4 text-[#8a8a8a]" />
          </Button>
        </div>

        {/* Product Image */}
        <div className="aspect-square overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        {/* Category and Rating */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#8a8a8a]">{category}</span>
          <div className="flex items-center gap-1">
            <div className="flex">
              <span className="text-sm text-[#be968e]">★</span>
            </div>
            <span className="text-sm text-[#8a8a8a]">
              {rating} ({reviewCount.toLocaleString()})
            </span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="text-sm text-[#333333] line-clamp-2 leading-tight font-medium">
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#333333] text-lg">
            {currentPrice}
          </span>
          {originalPrice && (
            <span className="text-sm text-[#8a8a8a] line-through">
              {originalPrice}
            </span>
          )}
        </div>

        {/* Color Options */}
        <div className="flex items-center gap-1">
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
            <span className="text-xs text-[#8a8a8a] font-medium ml-1">
              +{additionalColorsCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
