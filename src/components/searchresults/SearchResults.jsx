import React from 'react'
import Tracklist from '../tracklist/Tracklist'
import "./SearchResults.css";

function SearchResults({searchResults,onAdd}) {
  
  return (
    <div className="SearchResults">
        
        <h2>Result</h2>
        <Tracklist 
          searchResults={searchResults} 
          onAdd={onAdd} 
          onRemoval={false}
        />

    </div>
  )
}

export default SearchResults