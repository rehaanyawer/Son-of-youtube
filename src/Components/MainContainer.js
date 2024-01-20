import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
const MainContainer = () => {
  const btnArray = [
    'All',
    'Javascript',
    'Gaming',
    'Action',
    'Comedy',
    'Drama',
    'Romance',
    'Trailers',
    'Gadgets',
    'News',
    'Live',
  ];
  return (
    <div>
      <div className='flex justify-center'>
        {btnArray.map((buttonValue, index) => {
          return <ButtonList key={index} buttonValue={buttonValue} />;
        })}
      </div>
      <div className=''>
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
