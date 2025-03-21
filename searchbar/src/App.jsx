import { useState } from "react";
import SearchBar from "./component/SearchBar";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  // Function to fetch final search results
  const handleSearch = async (query) => {
    const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const data = await res.json();
    setSearchResults(data.products); // ✅ Fixed: Using `products` array
  };

  return (
    <div>
      <h1>Amazon-like Search</h1>
      <SearchBar onSearch={handleSearch} />

      {/* Display Search Results */}
      <div className="search-results">
        {searchResults.length > 0 ? (
          searchResults.map((item) => <div key={item.id}>{item.title}</div>) // ✅ Fixed: Use `title`
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default App;







// import { BasicSearchApproach } from "./component/basicSearchApproach"
// import { BestSearchApproach } from "./component/bestSearchApproach"

// function App() {

//   return (
//     <>
//       {/* <BasicSearchApproach />    // This is the basic search approach */}

//     {/* best approach */}
//     <BestSearchApproach />       {/*  // This is the best search approach for me */}
//     </>
//   )
// }

// export default App
