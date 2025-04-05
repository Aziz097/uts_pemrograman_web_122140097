import { useParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const url = `https://dummyjson.com/recipes/${recipeId}`;
  const { data: recipe, loading, error } = useFetch(url);

  if (loading) return <p className="text-center py-8">Loading...</p>;
  if (error) return <p className="text-center py-8 text-red-500">Error: {error}</p>;
  if (!recipe) return <p className="text-center py-8">Resep tidak ditemukan</p>;

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-80 object-cover rounded-2xl mb-8"
      />
      <h1 className="text-5xl font-bold mb-4">{recipe.name}</h1>
      <p className="text-lg text-gray-600 mb-6">
        {recipe.cuisine} • {recipe.difficulty} • {recipe.servings} porsi
      </p>
      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc list-inside space-y-2">
          {recipe.ingredients.map((item, index) => (
            <li key={index} className="text-lg">{item}</li>
          ))}
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="text-lg">{step}</li>
          ))}
        </ol>
      </div>
      <Link
        to="/"
        className="flex items-center text-orange-500 hover:text-orange-600 transition"
      >
        <AiOutlineArrowLeft className="mr-2" /> Kembali ke Home
      </Link>
    </div>
  );
};

export default RecipeDetail;
