import React from 'react';
import bgimage from '../assets/image-og.jpg';

const Home = () => {
  return (
    <main className='p-6'>
      <div className='m-auto mb-6 w-full rounded-lg border bg-neutral-100 p-4 sm:w-1/2 dark:bg-gray-700 dark:border-gray-600'>
        <p className='text-neural-900 dark:text-white'>
          Todos los miércoles a las 20:00 un grupo de personas intentan y
          persisten con la idea que se puede seguir jugando al fútbol después de
          los 30
        </p>
      </div>
      <img
        src={bgimage}
        alt='personas en una cancha de fútbol sintetico'
        className='m-auto rounded-lg sm:w-1/2'
      />
    </main>
  );
};

export default Home;
