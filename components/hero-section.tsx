export function HeroSection() {
  return (
    <section
      className="py-10 bg-cover bg-center"
      style={{ backgroundImage: 'url("/header/hero.jpg")' }}
    >
      <div className="max-w-7xl mx-auto px-4 text-center mt-3">
        <h3 className="text-3xl md:text-4xl font-bold text-foreground">
          Product Details
        </h3>
      </div>
    </section>
  );
}
