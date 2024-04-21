import React from 'react';

interface YoutubeVideoProps {
  videoId: string;
}

const YoutubeVideo: React.FC<YoutubeVideoProps> = ({ videoId }) => {
  return (
    <div className="youtube-video">
      <iframe
        title="YouTube Video"
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeVideo;
