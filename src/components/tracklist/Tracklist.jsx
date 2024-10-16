import React from 'react';
import './Tracklist.css';
import Track from '../track/Track.jsx';

function Tracklist({searchResults,onAdd,onRemove,onRemoval}) {
  
  // console.log(searchResults.length)
  
  return (
    <div className="TrackList">
      
      {searchResults && searchResults.map(track=>
         <Track 
          key={track.id}
          track={track}
          onAdd={onAdd}
          onRemove={onRemove}
          onRemoval={onRemoval}
         />
      )}
      
    </div>
  )
}

export default Tracklist

