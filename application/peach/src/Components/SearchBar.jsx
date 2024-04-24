import React, { useState } from 'react';
import "../styles/search/searchbar.css"

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <div className="searchBarContainer">
      <form onSubmit={handleSubmit}>
        <input
          className="searchBarElement "
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;

