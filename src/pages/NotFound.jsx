import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-8xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Halaman tidak ditemukan</p>
      <Link
        to="/"
        className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full shadow-xl hover:opacity-90 transition"
      >
        <AiOutlineHome className="mr-3" /> Kembali ke Home
      </Link>
    </div>
  );
};

export default NotFound;
