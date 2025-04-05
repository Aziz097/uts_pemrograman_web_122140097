import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineInfoCircle } from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-yellow-500 to-orange-500 shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-3xl font-bold text-white">
          Food Recipes
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="flex items-center text-white hover:opacity-80 transition">
            <AiOutlineHome className="mr-1" /> Home
          </Link>
          <Link to="/about" className="flex items-center text-white hover:opacity-80 transition">
            <AiOutlineInfoCircle className="mr-1" /> About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
