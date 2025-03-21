import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

// Debounce function to delay API calls
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // Fetch suggestions based on user input
  const { data, isLoading } = useQuery({
    queryKey: ["searchSuggestions", debouncedSearchTerm],
    queryFn: async () => {
      if (!debouncedSearchTerm) return [];
      const res = await fetch(`https://dummyjson.com/products/search?q=${debouncedSearchTerm}`);
      const result = await res.json();
      return result.products; // ✅ Fixed: Using `products` array
    },
    enabled: !!debouncedSearchTerm, // Fetch only if searchTerm is not empty
  });

  const suggestions = data || []; // ✅ Fixed: Ensure suggestions is always an array

  // Handle when user selects a suggestion
  const handleSelectSuggestion = (product) => {
    setSearchTerm(product.title); // ✅ Fixed: Use `title`
    setSelectedProduct(product);
    onSearch(product.title); // ✅ Trigger search with correct product name
  };

  // Handle search button click
  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="search-container" style={{ background: "white", padding: "10px" }}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for products..."
      />
      <button onClick={handleSearch}>Search</button>

      {/* Suggestion Box */}
      {searchTerm && !selectedProduct && suggestions.length > 0 && (
        <ul className="suggestions">
          {isLoading ? (
            <li>Loading...</li>
          ) : (
            suggestions.map((item) => (
              <li key={item.id} onClick={() => handleSelectSuggestion(item)}>
                {item.title} {/* ✅ Fixed: Use `title` */}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
