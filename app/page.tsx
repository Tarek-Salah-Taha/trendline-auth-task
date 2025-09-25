import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { Breadcrumb } from "@/components/breadcrumb";
import { ProductGallery } from "@/components/product-gallery";
import { ProductDetails } from "@/components/product-details";
import { RatingReviews } from "@/components/rating-reviews";
import { SimilarItems } from "@/components/similar-items";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fefefe]">
      <Header />
      <HeroSection />
      <Breadcrumb />

      {/* Main Product Section */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <ProductGallery />
          <ProductDetails />
        </div>
      </main>

      <RatingReviews />
      <SimilarItems />
      <Footer />
    </div>
  );
}
