import React from 'react';

const ChatMessage = ({ name, message }) => {
  return (
    <div className='flex items-center p-1'>
      <img
        className='w-10 h-10 bg-gray-200'
        alt='User_Comment'
        src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'
      />
      <span className='font-bold px-2'>{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
