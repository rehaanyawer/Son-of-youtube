import React, { useEffect } from 'react';

const VideoContainer = () => {
  useEffect(() => {
    const data = fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=' +
        process.env.REACT_APP_NEWS_API
    );
    const json = data.json;
    console.log(json);
  }, []);
  return (
    <div>
      VideoContainer
      {process.env.REACT_APP_NEWS_API}
    </div>
  );
};

export default VideoContainer;
