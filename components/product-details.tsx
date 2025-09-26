"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("blue");

  const colors = [
    { name: "red", value: "#d90202" },
    { name: "blue", value: "#7198c8" },
    { name: "brown", value: "#a08268" },
    { name: "light-blue", value: "#b8ccda" },
    { name: "gray", value: "#8a8a8a" },
  ];

  return (
    <div className="space-y-4">
      {/* Top Row: T-Shirt left, Heart/Share right */}
      <div className="flex items-center justify-between">
        <div className="py-3 border-2 border-chart-2 rounded-full min-w-[100px] text-center text-sm font-semibold text-chart-2">
          T-Shirt
        </div>

        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 bg-white/90 hover:bg-white rounded-md shadow-sm"
          >
            <Image src="/bag-add.svg" alt="Add to bag" width={24} height={24} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 bg-white/90 hover:bg-white rounded-md shadow-sm"
          >
            <Image
              src="/favourite.svg"
              alt="Add to favourites"
              width={24}
              height={24}
            />
          </Button>
        </div>
      </div>

      {/* Product Info Below */}
      <div className="space-y-2">
        <h1 className="text-2xl font-medium text-foreground">
          J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
        </h1>
        <div className="flex items-center gap-4">
          <span className="text-xl font-medium text-foreground">$300.00</span>
          <span className="text-base text-muted-foreground line-through">
            $360.00
          </span>
        </div>
        <p className="text-black">This price is exclusive of taxes.</p>
      </div>

      {/* Description */}
      <p className="text-black leading-relaxed">
        Lorem ipsum dolor sit, consectetur adipiscing elit, sed diam nonummy
        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      </p>

      <hr className="border-t border-[#e6e6e6] my-4" />

      {/* Product Options */}
      <div className="space-y-4">
        <div className="flex flex-col gap-4 w-full max-w-md">
          <div className="w-full">
            <label className="block text-sm font-medium text-foreground mb-2">
              Type
            </label>
            <Select defaultValue="cotton">
              <SelectTrigger className="w-full md:w-[80%] text-black">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cotton">Cotton</SelectItem>
                <SelectItem value="polyester">Polyester</SelectItem>
                <SelectItem value="blend">Blend</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Size
            </label>
            <Select defaultValue="xxl">
              <SelectTrigger className="w-full md:w-[80%] text-black">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="xs">XS</SelectItem>
                <SelectItem value="s">S</SelectItem>
                <SelectItem value="m">M</SelectItem>
                <SelectItem value="l">L</SelectItem>
                <SelectItem value="xl">XL</SelectItem>
                <SelectItem value="xxl">XXL</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Colors */}
        <div>
          <label className="block md:text-xl text-base font-medium text-black mb-2">
            Colors
          </label>
          <div className="flex gap-4 items-center">
            {colors.map((color) => (
              <div key={color.name} className="flex flex-col items-center">
                {/* All circles have same outer size */}
                <div
                  className={`rounded-full w-12 h-12 border-2 flex items-center justify-center ${
                    selectedColor === color.name
                      ? "border-black"
                      : "border-transparent"
                  }`}
                >
                  <button
                    onClick={() => setSelectedColor(color.name)}
                    className="rounded-full w-8 h-8 border border-gray-200"
                    style={{ backgroundColor: color.value }}
                  />
                </div>

                {/* Show name only for active */}
                {selectedColor === color.name && (
                  <span className="text-sm text-foreground mt-1 capitalize">
                    {color.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full">
          {/* Quantity Selector */}
          <div>
            <label className="block md:text-xl text-base font-medium text-black mb-2">
              Quantity{" "}
              <span className="text-sm font-normal text-muted-foreground">
                ($300.00 for Piece)
              </span>
            </label>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3 bg-gray-100 rounded-md px-3 py-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-8 w-8"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center font-medium text-xl">
                  {quantity.toString().padStart(2, "0")}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-8 w-8"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {/* Price next to quantity */}
              <span className="ml-4 text-2xl font-medium text-black">
                ${(300 * quantity).toFixed(2)}
              </span>
            </div>
          </div>

          {/* Add to Cart button */}
          <Button className="w-full md:w-1/2 lg:w-1/3 bg-[#be968e] hover:bg-[#a08268] text-white py-6 rounded-lg h-14 flex items-center justify-center gap-2 font-medium text-base">
            Add To Cart{" "}
            <Image
              src="/shopping-bag.svg"
              alt="Shopping bag"
              width={20}
              height={20}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
