"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProductGallery() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/man-in-blue-hoodie-smiling-with-arms-crossed.png",
    "/white-hoodie.png",
    "/red-hoodie.png",
    "/black-hoodie.png",
  ];

  const thumbnails = images.filter((_, i) => i !== currentImage);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative bg-[#f5f5f5] rounded-lg overflow-hidden">
        <img
          src={images[currentImage] || "/placeholder.svg"}
          alt="Product image"
          className="w-full h-[420px] object-cover"
        />

        {/* Modern slider bars (top, full width) */}
        <div className="absolute top-2 left-0 right-0 flex justify-between px-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-1 flex-1 mx-1 rounded-full transition-colors duration-300 ${
                index === currentImage ? "bg-[#05613a]" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Chevron Buttons */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#BE968E]/80 hover:bg-[#BE968E]/100 rounded-full"
          onClick={() =>
            setCurrentImage((prev) => (prev > 0 ? prev - 1 : images.length - 1))
          }
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#BE968E]/80 hover:bg-[#BE968E]/100 rounded-full"
          onClick={() =>
            setCurrentImage((prev) => (prev < images.length - 1 ? prev + 1 : 0))
          }
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </Button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2">
        {thumbnails.map((image, index) => {
          const isLast = index === thumbnails.length - 1;
          return (
            <button
              key={index}
              onClick={() =>
                setCurrentImage(images.findIndex((img) => img === image))
              }
              className="relative flex-1 h-38 rounded-lg overflow-hidden border-2 border-[#e6e6e6] hover:border-[#05613a]"
            >
              <img
                src={image || "/placeholder.svg"}
                alt="Product thumbnail"
                className="w-full h-full object-cover"
              />
              {isLast && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="text-white font-semibold">+2</span>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
