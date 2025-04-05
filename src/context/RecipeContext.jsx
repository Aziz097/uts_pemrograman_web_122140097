import React, { createContext } from 'react';
import useFetch from '../hooks/useFetch';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  // Menggunakan custom hook useFetch untuk mengambil data resep dari API
  const { data: recipes, loading, error } = useFetch('https://dummyjson.com/recipes');

  return (
    <RecipeContext.Provider value={{ recipes, loading, error }}>
      {children}
    </RecipeContext.Provider>
  );
};
