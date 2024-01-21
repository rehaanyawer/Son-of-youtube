import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from './utils/appSlice';
import { YOUTUBE_SEARCH_SUGGESTION } from './utils/Constants';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionBox, setSuggestionBox] = useState(false);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION + searchQuery);
    const json = await data?.json();
    setSuggestions(json[1]);
  };
  return (
    <div className='grid grid-flow-col p-1 m-1 shadow-xl bg-white w-full items-center sticky z-50 top-0'>
      <div className='flex col-span-1 items-center'>
        <img
          onClick={() => toggleMenuHandler()}
          className='h-12 p-2 cursor-pointer'
          src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png'
          alt='Menu'
        />

        <img
          className='h-20 '
          src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg'
          alt='Logo'
        />
      </div>

      <div className='col-span-10 px-20'>
        <div className=''>
          <input
            className='w-3/5 border border-slate-300 rounded-l-full h-10 p-5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            placeholder='Search'
            type='text'
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            onFocus={() => setSuggestionBox(true)}
            onBlur={() => setSuggestionBox(false)}
          />
          <button className='border p-2 px-4 bg-gray-100 hover:bg-gray-200 border-gray-300 rounded-r-full'>
            Search
          </button>
        </div>

        {suggestionBox && (
          <div className='fixed bg-white w-[41%] shadow-2xl rounded-2xl py-2'>
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  onClick={(e) => setSearchQuery(e.target.value)}
                  className='px-5 py-2 cursor-pointer hover:bg-gray-300'
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div></div>

      <div className='col-span-1'>
        <img
          className='h-12'
          src='https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg'
          alt='Proflile Icon'
        />
      </div>
    </div>
  );
};

export default Head;
