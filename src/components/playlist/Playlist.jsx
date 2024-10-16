import React from 'react';
import './Playlist.css';
import Tracklist from '../tracklist/Tracklist.jsx';

function Playlist({ playlistName, playlistTracks, updateName, onRemove, onSave }) {
  
  const handleNameChange = (e) => {
    updateName(e.target.value);
  };
  

  return (
    <div className="Playlist">

      <input
        value={playlistName}
        onChange={handleNameChange}
      />

      <Tracklist 
        searchResults={playlistTracks}
        onRemove={onRemove}
        onRemoval={true}
      />

      <button 
        className="Playlist-save"
        onClick={onSave}
      >
        SAVE TO SPOTIFY
      </button>

    </div>
  );
}

export default Playlist;
