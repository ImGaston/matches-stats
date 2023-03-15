import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import getPlayers from '../helpers/getPlayers';

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getInfo = async () => {
    const jugadores = await getPlayers();
    setPlayers(jugadores);
    setIsLoading(false);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className='m-auto flex max-w-4xl flex-row flex-wrap items-center justify-center gap-2 p-6'>
      {isLoading && <Loading />}
      {players.map(({ jugador, promedio, partidos }) => (
        <div
          key={jugador}
          className='w-full rounded-lg border bg-neutral-100 p-4 sm:w-60 dark:bg-gray-700 dark:border-gray-600'
        >
          <h2 className='text-md text-center font-bold text-neural-900 dark:text-white'>{jugador}</h2>
          <p className='text-neural-900 dark:text-white'>Promedio: {promedio}</p>
          <p className='text-neural-900 dark:text-white'>Partidos jugados: {partidos}</p>
        </div>
      ))}
    </div>
  );
};

export default Players;
