import './App.css';
import React, { useEffect, useState } from 'react';
import { Spotify } from '../utils/Spotify.js';
import SearchBar from '../components/searchbar/SearchBar.jsx';
import SearchResults from '../components/searchresults/SearchResults.jsx';
import Playlist from '../components/playlist/Playlist.jsx';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);


   // Run this function once when the component loads
  useEffect(() => {
    Spotify.getAccessToken();
  }, []);


  const removeTrack = (track) => {
    //return all the songs except the song passed in (i.e. the track to be removed)
    setPlaylistTracks((prev) =>
      prev.filter((savedTrack) => savedTrack.id !== track.id)
    );
  };

  const updatePlaylistName = (playlistname) => {
    setPlaylistName(playlistname);
  };

  const savePlaylist = () => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      //set back initial value
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
    });
  };

  const search = (term) => {
    Spotify.search(term)
      .then((response) => setSearchResults(response))
      .catch((error) => {
        console.error("Error fetching search results:", error);
        setSearchResults([]);
      });
  };

  const addTrack = (track) => {
    console.log(track);
    //if the song exists in playlist, return
    if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    //add song
    setPlaylistTracks((prev) => [...prev, track]);
  };



  return (
    <div>
      <h1>CW<span className="highlight"> Spotify</span></h1>

      <div className="App">

        <SearchBar
          onSearch={search}
        />

        <div className="App-playlist">

          <SearchResults
            searchResults={searchResults}
            onAdd={addTrack}
          />

          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            updateName={updatePlaylistName}
            onRemove={removeTrack}
            onSave={savePlaylist}
          />

        </div>

      </div>
    </div>
  );
}

export default App;
