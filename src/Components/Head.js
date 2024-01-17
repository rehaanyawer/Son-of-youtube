import React from 'react';

const Head = () => {
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-xl'>
      <div className='flex col-span-1 bg-slate-300'>
        <img
          className='h-12'
          src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png'
          alt='Menu'
        />

        <img
          className='h-12'
          src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg'
          alt='Logo'
        />
      </div>

      <div className=''>
        <input type='text' border border-slate-600 />
        <button className='border border-slate-600'>Search</button>
      </div>
      <div>
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
