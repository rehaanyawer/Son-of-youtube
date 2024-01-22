import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getData = async () => {
    const baseurl =
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=US&key=';
    const data = await fetch(`${baseurl}${process.env.REACT_APP_YOUTUBE_KEY}`);
    const json = await data?.json();
    setVideos(json?.items);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='flex flex-wrap justify-around'>
      {videos.map((video) => {
        return (
          //<Link to={'/watch?v=' + video.id}>

          <VideoCard key={video.id} card={video} />
          //</Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
