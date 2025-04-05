import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [cuisine, setCuisine] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ query, cuisine });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row items-center md:space-x-4"
    >
      <input
        type="text"
        placeholder="Cari resep..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full md:w-100 px-4 py-2 mb-2 md:mb-0 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />

      <select
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
        className="w-full md:w-50 px-4 py-2 mb-2 md:mb-0 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
        <option value="">Semua Cuisine</option>
        <option value="Italian">Italian</option>
        <option value="American">American</option>
        <option value="Mexican">Mexican</option>
        <option value="Asian">Asian</option>
        <option value="Pakistani">Pakistani</option>
        <option value="Mediterranean">Mediterranean</option>
        <option value="Moroccan">Moroccan</option>
        <option value="Japanese">Japanese</option>
        <option value="Korean">Korean</option>
        <option value="Greek">Greek</option>
        <option value="Indian">Indian</option>
        <option value="Turkish">Turkish</option>
        <option value="Smoothie">Smoothie</option>
        <option value="Russian">Russian</option>
        <option value="Lebanese">Lebanese</option>
        <option value="Brazilian">Brazilian</option>
        <option value="Thai">Thai</option>
      </select>

      <button
        type="submit"
        className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
      >
        Cari
      </button>
    </form>
  );
};

export default SearchBar;