import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from './utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const location = useLocation();
  const { video } = location.state || {};
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    // eslint-disable-next-line
  }, []);

  return (
    <div className='w-full'>
      <div className='px-5 flex'>
        <div>
          <iframe
            className='rounded-xl'
            width='900'
            height='500'
            src={'https://www.youtube.com/embed/' + searchParams.get('v')}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          ></iframe>
        </div>
        <div className='w-full'>
          <LiveChat />
        </div>
      </div>
      <h2 className='text-xl font-bold px-1 m-1'>{video.snippet.title}</h2>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
