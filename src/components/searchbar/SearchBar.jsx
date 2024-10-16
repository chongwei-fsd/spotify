import React, { useState,useEffect } from 'react';
import "./SearchBar.css";
import { Spotify } from '../../utils/Spotify.js';
import Player from '../player/Player.jsx';


function SearchBar({ onSearch }) {

  const [term, setTerm] = useState('');

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  const search = () => {
    onSearch(term);
  };

  return (

    <div className="SearchBar">

      <input
        placeholder="Enter A Song, Album, or Artist"
        value={term}
        onChange={handleTermChange}
      />

      <button
        className="SearchButton"
        onClick={search}>
        SEARCH
      </button>

      {/* <div className='Player'>
        <Player />
      </div> */}


    </div>

  );
}

export default SearchBar;