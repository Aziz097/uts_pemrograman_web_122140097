const HeroSection = () => {
  const scrollToRecipes = () => {
    const recipesSection = document.getElementById("recipes-list");
    recipesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-24">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          LET HIM COOK!
        </h1>
        <p className="text-xl md:text-xl mb-10">
        Temukan resep terbaik dari masakan tradisional hingga kreasi modern.
        </p>
        <button
          onClick={scrollToRecipes}
          className="bg-white text-orange-500 font-semibold px-8 py-4 rounded-full shadow-xl hover:bg-gray-200 transition"
        >
          Mulai Jelajahi
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
