import React from 'react';
import YouTube from 'react-youtube';
var getYouTubeID = require('get-youtube-id');

const EmbedYT = (props) => {

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };
    
    return (
        <div>
          <br></br>
          <YouTube videoId={getYouTubeID(props.url)} opts={opts} />
        </div>
    )
}

export default EmbedYT;