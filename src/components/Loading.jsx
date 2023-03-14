import React from 'react';

const Loading = () => {
  return (
    <div
      role='status'
      className='max-w-sm animate-pulse'
    >
      <div className='mb-4 h-32 w-80 rounded-lg bg-gray-200 dark:bg-gray-700'></div>
      <div className='mb-4 h-48 w-80 rounded-lg bg-gray-200 dark:bg-gray-700'></div>
      <div className='mb-4 h-32 w-80 rounded-lg bg-gray-200 dark:bg-gray-700'></div>
      <div className='mb-4 h-48 w-80 rounded-lg bg-gray-200 dark:bg-gray-700'></div>
      <span className='sr-only'>Loading...</span>
    </div>
  );
};

export default Loading;
