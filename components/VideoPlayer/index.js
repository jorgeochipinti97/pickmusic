
import React from 'react';
import ReactPlayer from 'react-player';

// Componente para reproducir un video de YouTube
export const VideoPlayer = () => {
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=ZA7ZKB8Mo9k'
        className='react-player'
        playing
        width='100%'
        height='100%'
      />
    </div>
  );
};