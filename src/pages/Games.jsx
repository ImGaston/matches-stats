import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import getMatchs from '../helpers/getMatchs';

const Games = () => {
  const [partidos, setPartidos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getInfo = async () => {
    const matches = await getMatchs();
    setPartidos(matches);
    setIsLoading(false);
  };

  useEffect(() => {
    getInfo();
  }, []);
  return (
    <>
      <ul className='flex flex-row flex-wrap justify-center gap-2 p-6'>
        {isLoading && <Loading />}
        {partidos
          .map((partido, index, array) => (
            <div
              key={index}
              className='w-full rounded-lg border bg-neutral-100 p-4 sm:w-60 dark:bg-gray-700 dark:border-gray-600'
            >
              <h2 className='text-xl text-neural-900 dark:text-white'>Fecha: {partido.fecha}</h2>
              <p className='text-neural-900 dark:text-white'>Ganador: {partido.ganador}</p>
              <p className='text-neural-900 dark:text-white'>MVP: {partido.mvp}</p>
              <p className='text-neural-900 dark:text-white'>Goleador: {partido.goleador}</p>
              <p className='text-neural-900 dark:text-white'>Dato de color: {partido.detalle}</p>
            </div>
          ))
          .reverse()}
      </ul>
    </>
  );
};

export default Games;
