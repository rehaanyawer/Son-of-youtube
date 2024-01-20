import React from 'react';

const ButtonList = ({ buttonValue }) => {
  return (
    <div className=''>
      <button className='border p-1 px-3 m-4 bg-gray-100 rounded-lg hover:bg-gray-200 active:bg-black active:text-white'>
        {buttonValue}
      </button>
    </div>
  );
};

export default ButtonList;
