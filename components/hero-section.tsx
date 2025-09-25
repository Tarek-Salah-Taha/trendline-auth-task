export function HeroSection() {
  return (
    <section
      className="py-16 bg-cover bg-center"
      style={{ backgroundImage: 'url("/header/hero.jpg")' }}
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#333333]">
          Product Details
        </h1>
      </div>
    </section>
  );
}
