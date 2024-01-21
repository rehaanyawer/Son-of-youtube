import React from 'react';
const commentsData = [
  {
    name: 'Rehan',
    text: 'Lorem Ipsum is the best text page in the world so i am using it as a text resource',
    replies: [
      {
        name: 'Rehan',
        text: 'Lorem Ipsum is the best text page in the world so i am using it as a text resource',
        replies: [],
      },
      {
        name: 'Rehan',
        text: 'Lorem Ipsum is the best text page in the world so i am using it as a text resource',
        replies: [
          {
            name: 'Rehan',
            text: 'Lorem Ipsum is the best text page in the world so i am using it as a text resource',
            replies: [
              {
                name: 'Rehan',
                text: 'Lorem Ipsum is the best text page in the world so i am using it as a text resource',
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: 'Rehan',
        text: 'Lorem Ipsum is the best text page in the world so i am using it as a text resource',
        replies: [],
      },
    ],
  },
  {
    name: 'Rehan',
    text: 'Lorem Ipsum is the best text page in the world so i am using it as a text resource',
    replies: [
      {
        name: 'Rehan',
        text: 'Lorem Ipsum is the best text page in the world so i am using it as a text resource',
        replies: [
          {
            name: 'Rehan',
            text: 'Lorem Ipsum is the best text page in the world so i am using it as a text resource',
            replies: [
              {
                name: 'Rehan',
                text: 'Lorem Ipsum is the best text page in the world so i am using it as a text resource',
                replies: [],
              },
            ],
          },
          {
            name: 'Rehan',
            text: 'Lorem Ipsum is the best text page in the world so i am using it as a text resource',
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: 'Rehan',
    text: 'Lorem Ipsum is the best text page in the world so i am using it as a text resource',
    replies: [],
  },
  {
    name: 'Rehan',
    text: 'Lorem Ipsum is the best text page in the world so i am using it as a text resource',
    replies: [],
  },
  {
    name: 'Rehan',
    text: 'Lorem Ipsum is the best text page in the world so i am using it as a text resource',
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className='flex py-3 align-middle bg-gray-200'>
      <img
        className='w-14 h-14 bg-gray-200'
        alt='userIcon'
        src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'
      />
      <div className='px-2'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className='pl-5 border border-l-gray-400 ml-5'>
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className='p-1 m-1'>
      <h1 className='text-xl font-bold'>Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
