import "../styles/search/searchresultslist.css"
import SearchResult from "./SearchResult";

const SearchResultsList = (results) => {
    return <div className="results-list">
        {
            results.map((results, id) => {
                return <SearchResult result={results} key={id}/>;
            }) 
        }
    
    </div>
};

export default SearchResultsList