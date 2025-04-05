import { useState, useCallback } from 'react';
import useFetch from '../hooks/useFetch';
import HeroSection from '../components/HeroSection';
import RecipeList from '../components/RecipeList';
import Pagination from '../components/Pagination';

const Home = () => {
  const [skip, setSkip] = useState(0);
  const limit = 9; // Grid 3x3

  // Endpoint API DummyJSON dengan parameter pagination
  const url = `https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`;
  const { data, loading, error } = useFetch(url);

  const handlePageChange = useCallback((newSkip) => {
    setSkip(newSkip);
  }, []);

  return (
    <div>
      <HeroSection />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-10">Resep Terbaru</h2>
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">Error: {error}</p>}
        {data && data.recipes && <RecipeList recipes={data.recipes} />}
        {data && (
          <Pagination
            total={data.total}
            limit={limit}
            skip={skip}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
