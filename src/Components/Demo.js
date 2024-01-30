import { current } from '@reduxjs/toolkit';
import React, { useRef, useState } from 'react';

const Demo = () => {
  let i = 0;
  const ref = useRef(0);
  const [counter, setCounter] = useState(0);
  // const [counterLocal, setcounterLocal] = useState(0);
  const handleCounter = () => {
    setCounter(counter + 1);
  };
  const handleCounterRef = () => {
    ref.current += 1;
    console.log('function using Ref called ' + ref.current + ' times');
  };
  const handleCounterUsingLocal = () => {
    i += 1;
    console.log('function using Local variable called ' + i + ' times');
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button className='border border-black' onClick={() => handleCounter()}>
        Count
      </button>
      <button
        className='border border-black'
        onClick={() => handleCounterRef()}
      >
        Count local
      </button>
      <button
        className='border border-black'
        onClick={() => handleCounterUsingLocal()}
      >
        count
      </button>
    </div>
  );
};

export default Demo;
