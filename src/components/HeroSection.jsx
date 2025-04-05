import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-24">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Temukan Resep Terbaik
        </h1>
        <p className="text-xl md:text-2xl mb-10">
          Dari masakan tradisional hingga kreasi modern, temukan inspirasi di sini.
        </p>
        <Link
          to="/"
          className="bg-white text-orange-500 font-semibold px-8 py-4 rounded-full shadow-xl hover:bg-gray-200 transition"
        >
          Mulai Jelajahi
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
