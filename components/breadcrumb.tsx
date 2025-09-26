import { ChevronRight } from "lucide-react";

export function Breadcrumb() {
  return (
    <nav className="max-w-7xl mx-auto px-4 py-4 bg-[#ECECEC66] rounded-md mt-3">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <a href="#" className="text-black font-medium">
          Home
        </a>
        <ChevronRight className="h-4 w-4" />
        <a href="#" className="text-black font-medium">
          Our Category
        </a>
        <ChevronRight className="h-4 w-4" />
        <span className="text-muted-foreground font-medium">
          Product Details
        </span>
      </div>
    </nav>
  );
}
