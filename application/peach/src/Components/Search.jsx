import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Results from './SearchResult';

function Search() {
    const [results, setResults] = useState([]);
    const handleSearch = async (query) => {
        try {
            const response = await fetch(`https://null.isageek.net/search?tags=${query}`);
            const data = await response.json();
            console.log('Response:', data); // Log the response
            if (!data || !data.jobs) {
                throw new Error('Invalid response data');
            }
            setResults(data.jobs);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Results results={results} />
    </div>
  );
}

export default Search;

