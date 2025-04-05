import { useState, useCallback } from 'react';
import useFetch from '../hooks/useFetch';
import HeroSection from '../components/HeroSection';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';
import Pagination from '../components/Pagination';

const Home = () => {
  const [skip, setSkip] = useState(0);
  const [filters, setFilters] = useState({ query: '', cuisine: '' });
  const defaultPageLimit = 9; // Untuk mode API pagination tanpa filter kategori
  
  // Jika hanya filter cuisine tanpa query pencarian, mengambil semua resep sekaligus
  const isCuisineFilterOnly = filters.cuisine && !filters.query;

  // Jika filter cuisine saja, fetch seluruh resep dengan limit besar
  const effectiveUrl = isCuisineFilterOnly
    ? `https://dummyjson.com/recipes?limit=100&skip=0`
    : // Jika tidak ada filter cuisine, menggunakan API pagination sesuai skip & limit, termasuk query jika ada.
      `https://dummyjson.com/recipes${filters.query ? '/search' : ''}?limit=${defaultPageLimit}&skip=${skip}${filters.query ? `&q=${filters.query}` : ''}`;

  const { data, loading, error } = useFetch(effectiveUrl);

  const handleSearch = useCallback((filterObj) => {
    setFilters(filterObj);
    setSkip(0);
  }, []);

  const handlePageChange = useCallback((newSkip) => {
    setSkip(newSkip);
    const recipesSection = document.getElementById("recipes-list");
    recipesSection?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Jika dalam mode filter cuisine saja, filtering di sisi klien dan paginasi client-side.
  // Jika tidak, mengunakan data dari API secara langsung.
  let displayedRecipes = [];
  let totalItems = 0;

  if (data && data.recipes) {
    if (isCuisineFilterOnly) {
      // filter berdasarkan cuisine pada seluruh data yang di-fetch.
      const filtered = data.recipes.filter(recipe => 
        recipe.cuisine.toLowerCase() === filters.cuisine.toLowerCase()
      );
      totalItems = filtered.length;
      // paginasi client-side:
      displayedRecipes = filtered.slice(skip, skip + defaultPageLimit);
    } else {
      displayedRecipes = data.recipes;
      totalItems = data.total;
    }
  }

  return (
    <div>
      <HeroSection />
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>
        <h2 className="text-4xl font-bold text-center mb-10">Resep Terbaru</h2>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse space-y-4 p-4 border rounded-xl shadow">
                <div className="h-40 bg-gray-300 rounded-xl" />
                <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto" />
                <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto" />
              </div>
            ))}
          </div>
        ) : error ? (
          <p className="text-center text-red-500">Error: {error}</p>
        ) : displayedRecipes.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            <p>Tidak ada resep yang ditemukan.</p>
          </div>
        ) : (
          <>
            <RecipeList recipes={displayedRecipes} />
            <Pagination
              total={totalItems}
              limit={defaultPageLimit}
              skip={skip}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
