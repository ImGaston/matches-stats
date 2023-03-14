import React from 'react';
import { useEffect, useState } from 'react';
import getMatchs from '../helpers/getMatchs';

const Home = () => {
  const [partidos, setPartidos] = useState([]);

  const getInfo = async () => {
    const matches = await getMatchs();
    setPartidos(matches);
  };

  useEffect(() => {
    getInfo();
  }, []);
  return (
    <main className='p-6'>
      <div className='m-auto w-full rounded-lg border bg-neutral-100 p-4 sm:w-1/2'>
        <p>
          Todos los miércoles a las 20:00 un grupo de personas intentan y
          persisten con la idea que se puede seguir jugando al fútbol después de
          los 30
        </p>
      </div>
    </main>
  );
};

export default Home;
