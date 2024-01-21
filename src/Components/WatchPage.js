import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from './utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const WatchPage = () => {
  const location = useLocation();
  const { video } = location.state || {};
  console.log(video);
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    // eslint-disable-next-line
  }, []);

  return (
    <div className='flex'>
      <div className='px-16 p-8'>
        <iframe
          className='rounded-xl'
          width='900'
          height='500'
          src={'https://www.youtube.com/embed/' + searchParams.get('v')}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        ></iframe>
        <h1>this is the video</h1>
      </div>
      <div>this is the video</div>
    </div>
  );
};

export default WatchPage;
