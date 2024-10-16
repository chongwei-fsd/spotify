import React from 'react';
import './Track.css';

function Track({ track, onAdd, onRemove, onRemoval }) {


  return (
    <div className="Track">

      <div className="Track-information">
        <h4>
          {track.name}
        </h4>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>

      <button
        className='Track-action'
        onClick={() => onRemoval ? onRemove(track) : onAdd(track)}
      >
        {onRemoval ? '-' : '+'}
      </button>

    </div>
  );
}

export default Track





