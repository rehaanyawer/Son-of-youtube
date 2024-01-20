import React from 'react';

const VideoCard = ({ card }) => {
  const formatCountViews = (number) => {
    if (isNaN(number) || number < 0) {
      return 'Invalid input';
    }

    if (number < 1000) {
      return `${number} views`;
    } else if (number < 100000) {
      return `${(number / 1000).toFixed(1)}K Views`;
    } else if (number < 10000000) {
      return `${(number / 1000000).toFixed(1)}M Views`;
    } else {
      return `${number} views`; // Fallback for large numbers
    }
  };
  //console.log(card);
  const { snippet, statistics } = card;
  // console.log(snippet);
  const { thumbnails } = snippet;
  // console.log(thumbnails);
  return (
    <div className='p-2 m-2 w-72'>
      <img
        className='py-2 rounded-xl'
        src={thumbnails?.medium?.url}
        alt='videoImage'
      />
      <h1 className='font-semibold'>{snippet?.title}</h1>
      <h1 className='text-gray-500'>{snippet?.channelTitle}</h1>
      <h1>{formatCountViews(statistics.viewCount)}</h1>
    </div>
  );
};

export default VideoCard;
