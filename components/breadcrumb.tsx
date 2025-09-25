import { ChevronRight } from "lucide-react";

export function Breadcrumb() {
  return (
    <nav className="max-w-7xl mx-auto px-4 py-4 bg-[rgba(236,236,236,0.4)] rounded-md">
      <div className="flex items-center gap-2 text-sm text-[#8a8a8a]">
        <a href="#" className="hover:text-[#05613a] transition-colors">
          Home
        </a>
        <ChevronRight className="h-4 w-4" />
        <a href="#" className="hover:text-[#05613a] transition-colors">
          Our Category
        </a>
        <ChevronRight className="h-4 w-4" />
        <span className="text-[#333333]">Product Details</span>
      </div>
    </nav>
  );
}
