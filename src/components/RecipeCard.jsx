import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
      <div className="relative">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-56 object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          {recipe.name}
        </h3>
        <p className="text-sm text-gray-500 mb-2">
          {recipe.cuisine} • {recipe.difficulty}
        </p>
        <div className="flex items-center mb-4">
          <AiFillStar className="text-yellow-500 mr-1" />
          <span className="text-base font-medium">{recipe.rating}</span>
          <span className="text-sm text-gray-500 ml-1">({recipe.reviewCount})</span>
        </div>
        <Link
          to={`/recipes/${recipe.id}`}
          className="block text-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 rounded-full hover:opacity-90 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    cuisine: PropTypes.string,
    difficulty: PropTypes.string,
    rating: PropTypes.number,
    reviewCount: PropTypes.number,
  }).isRequired,
};

export default RecipeCard;
