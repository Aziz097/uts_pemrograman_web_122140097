import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <img src="/Chef Curry.svg" alt="Logo Chef Aziz" className="w-22 h-22 mr-3" />
          <div>
            <h2 className="text-xl font-bold">Chef Curry Recipes</h2>
            <p className="text-sm">Inspirasi resep untuk setiap selera</p>
          </div>
        </div>
        <div className="text-center">
          <p className="mb-2 text-sm">
            Aziz Kurniawan | NIM 122140097 - Teknik Informatika, ITERA
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://www.instagram.com/azkurniawan/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="https://github.com/Aziz097" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaGithub size={20} />
            </a>
            <a href="mailto:aziz.122140097@student.itera.ac.id" className="hover:text-white">
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs mt-4 text-gray-500">
        © {new Date().getFullYear()} Chef Curry Recipes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
