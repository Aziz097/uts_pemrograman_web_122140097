import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome, AiOutlineInfoCircle } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-yellow-500 to-orange-500 shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center">
          <img src="/Chef Curry.svg" alt="Logo Chef Aziz" className="w-20 h-20 mr-2" />
          <span className="text-2xl font-bold text-white">Chef Curry Recipes</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="flex items-center text-white hover:opacity-80 transition">
            <AiOutlineHome className="mr-1" /> Home
          </Link>
          <Link to="/about" className="flex items-center text-white hover:opacity-80 transition">
            <AiOutlineInfoCircle className="mr-1" /> About
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-orange-500 to-yellow-500">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link onClick={() => setIsOpen(false)} to="/" className="block text-white hover:opacity-50 px-4 py-2 mb-2 md:mb-0 border border-gray-300 rounded-lg transition">
              Home
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/about" className="block text-white hover:opacity-50 px-4 py-2 mb-2 md:mb-0 border border-gray-300 rounded-lg transition">
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
