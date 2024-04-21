import React from 'react';
import { NavBar } from './components/navbar/NavBar';
import { FooTer } from './components/footer/footer';
import YoutubeVideo from './components/videos/videos';

const Video = () => {
  const videoId = "aQpJ37JLUio"; // ID del video de YouTube

  return (
    <div>
      <NavBar />
      <div className="container">
        <h1>VIDEO TUTORIAL</h1>
        <YoutubeVideo videoId={videoId} />
      </div>
      <FooTer />
    </div>
  );
};

export default Video;