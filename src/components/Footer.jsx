import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-8">
      <div className="container mx-auto text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Food Recipes. All rights reserved.</p>
        <p>
          <Link to="/about" className="text-blue-500 hover:underline">About</Link> |{' '}
          <a href="https://wa.me/6281996117506" className="text-blue-500 hover:underline">Contact</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
