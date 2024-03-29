import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className=' px-8 p-4 shadow-xl w-[18%] flex flex-col flex-shrink-0 '>
      <ul className=''>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <div className='w-[100%] border border-b-gray-300 my-2'></div>
      <h2 className='font-bold py-2 w-[100%]'>Explore</h2>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Films</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>Movies</li>
        <li>News</li>
      </ul>

      <div className='w-[100%] border border-b-gray-300 my-2'></div>
      <h2 className='font-bold py-2'>More From Youtube</h2>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Films</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>Movies</li>
        <li>News</li>
      </ul>
    </div>
  );
};

export default SideBar;
