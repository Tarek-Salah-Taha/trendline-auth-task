import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { Breadcrumb } from "../components/Breadcrumb";
import { ProductGallery } from "../components/ProductGallery";
import { ProductDetails } from "../components/ProductDetails";
import { RatingReviews } from "../components/RatingReviews";
import { SimilarItems } from "../components/SimilarItems";
import { Footer } from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
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
