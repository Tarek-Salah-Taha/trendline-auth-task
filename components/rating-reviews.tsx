"use client";

import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RatingReviews() {
  const reviews = [
    {
      name: "Alex Daewn",
      rating: 4,
      time: "4 months ago",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Alex Daewn",
      rating: 4,
      time: "4 months ago",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Alex Daewn",
      rating: 3,
      time: "4 months ago",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Alex Daewn",
      rating: 4,
      time: "4 months ago",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    },
  ];

  const ratingBreakdown = [
    { stars: 5, percentage: 67 },
    { stars: 4, percentage: 15 },
    { stars: 3, percentage: 6 },
    { stars: 2, percentage: 3 },
    { stars: 1, percentage: 9 },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-[#333333] mb-8">
        Rating & Reviews
      </h2>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
        {/* Left: Average rating + breakdown */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 flex-1">
          {/* Average rating */}
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <div className="text-7xl md:text-6xl font-bold text-[#333333]">
              4,5
            </div>
            <div className="text-[#8a8a8a] text-xl md:text-lg">/5</div>
          </div>

          {/* Rating Breakdown */}
          <div className="space-y-2 flex-1 mt-4 md:mt-0">
            {ratingBreakdown.map((item) => (
              <div key={item.stars} className="flex items-center gap-3">
                {/* Stars number on left */}
                <span className="text-sm text-[#333333] w-5">{item.stars}</span>

                {/* Progress bar */}
                <div className="bg-[#e6e6e6] rounded-full h-2 w-32 md:w-full">
                  <div
                    className="bg-[#e2b78c] h-2 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>

                {/* Percentage on right */}
                <span className="text-sm text-[#8a8a8a] w-8 text-right">
                  {`${item.percentage}%`}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Total Reviews */}
        <div className="flex flex-col items-center md:items-center gap-2 flex-shrink-0">
          <div className="text-[#8a8a8a]">Total Reviews</div>
          <div className="text-4xl font-bold text-[#333333]">3.0K</div>
          <Button className="bg-[#be968e] hover:bg-[#a08268] text-white mt-2">
            Add Comment
          </Button>
        </div>
      </div>

      {/* Reviews List */}
      <div className="mt-12 space-y-8">
        {reviews.map((review, index) => (
          <div key={index} className="border-b border-[#e6e6e6] pb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <h4 className="font-semibold text-[#333333]">{review.name}</h4>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? "fill-[#e2b78c] text-[#e2b78c]"
                          : "text-[#e6e6e6]"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <span className="text-sm text-[#8a8a8a]">{review.time}</span>
            </div>
            <p className="text-[#8a8a8a] leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button variant="ghost" className="text-[#be968e] hover:text-[#a08268]">
          View More Comments
        </Button>
      </div>
    </section>
  );
}
