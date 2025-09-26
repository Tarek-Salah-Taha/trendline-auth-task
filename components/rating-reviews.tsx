"use client";

import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
    <section className="max-w-7xl mx-auto px-4 pb-12">
      <h5 className="relative inline-block md:text-2xl text-lg font-bold text-black mb-8">
        Rating & Reviews
        <span className="absolute left-0 -bottom-1 h-1 w-12 bg-chart-2 rounded"></span>
      </h5>

      <div className="flex flex-col md:flex-row md:items-start md:justify-start gap-16">
        {/* Left: Average rating + breakdown */}
        <div className="flex flex-col md:flex-row md:items-start gap-12 flex-1">
          {/* Average rating */}
          <div className="flex items-end gap-2 justify-center md:justify-start">
            <div className="text-9xl font-medium text-black">4,5</div>
            <div className="text-2xl font-medium text-[#B0B0B0] mb-2">/5</div>
          </div>

          {/* Rating Breakdown */}
          <div className="space-y-2 flex-1 mt-4 md:mt-0">
            {ratingBreakdown.map((item) => (
              <div key={item.stars} className="flex items-center gap-3">
                {/* Stars number on left */}
                <div className="flex items-center gap-1 w-10">
                  <Star className="h-5 w-5 fill-chart-2 text-chart-2 stroke-none" />
                  <span className="text-xl font-medium text-[#545454]">
                    {item.stars}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="bg-[#e6e6e6] rounded-full h-2 w-full md:w-120">
                  <div
                    className="bg-chart-2 h-2 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>

                {/* Percentage on right */}
                <span className="text-xl text-[#545454] w-8 text-right font-medium">
                  {`%${item.percentage}`}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Total Reviews */}
        <div className="flex flex-col items-center gap-2 flex-shrink-0">
          <div className="text-muted-foreground text-base">Total Reviews</div>
          <div className="md:text-6xl text-5xl font-semibold text-foreground">
            3.0K
          </div>
          <Button className="w-full min-w-[160px] max-w-[250px] bg-[#be968e] hover:bg-[#a08268] text-white px-4 py-2 rounded-lg h-14 flex items-center justify-center gap-2">
            Add Comment
            <Image
              src="/comment.svg"
              alt="Comment icon"
              width={22}
              height={22}
            />
          </Button>
        </div>
      </div>

      {/* Reviews List */}
      <div className="mt-12 space-y-8">
        {reviews.map((review, index) => (
          <div key={index} className="border-b border-[#e6e6e6] pb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <h4 className="font-bold md:text-xl text-base text-black">
                  {review.name}
                </h4>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? "fill-chart-2 text-chart-2"
                          : "text-[#e6e6e6]"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <span className="md:text-base text-sm font-medium text-muted-foreground">
                {review.time}
              </span>
            </div>
            <p className="text-black md:text-base text-sm leading-relaxed">
              {review.comment}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button
          variant="ghost"
          className="text-[#be968e] hover:text-[#a08268] bg-gray-100"
        >
          View More Comments
        </Button>
      </div>
    </section>
  );
}
