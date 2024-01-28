import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { addMessage } from './utils/chatSlice';
import { useDispatch, useSelector } from 'react-redux';
import { finalName, randomString } from './utils/helper';

const LiveChat = () => {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: finalName(),
          message: randomString(),
        })
      );
    }, 2000);
    return () => clearInterval(i);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className='w-full h-[500px] ml-2 p-2 border border-black rounded-xl overflow-scroll flex flex-col-reverse'>
        {chatMessages.map((c) => (
          <ChatMessage name={c.name} message={c.message} />
        ))}
      </div>

      <form
        className='w-full p-2 ml-2'
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: 'yawar',
              message: comment,
            })
          );
          e.target.reset();
        }}
      >
        <input
          onChange={(e) => setComment(e.target.value)}
          className='w-[88%] pl-4 p-2 border border-gray-300 shadow-sm rounded-l-full'
          type='text'
          placeholder='Chat'
        />
        <button className='p-2 px-3.5 border border-gray-300 shadow-sm rounded-r-full bg-gray-100 hover:bg-gray-200'>
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
