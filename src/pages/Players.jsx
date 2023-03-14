import React, { useEffect, useState } from 'react';
import getPlayers from '../helpers/getPlayers';

const Players = () => {
  const [players, setPlayers] = useState([]);

  const getInfo = async () => {
    const jugadores = await getPlayers();
    setPlayers(jugadores);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className='m-auto flex max-w-4xl flex-row flex-wrap items-center justify-center gap-2 p-6'>
      {players.map(({ jugador, promedio, partidos }) => (
        <div
          key={jugador}
          className='w-full rounded-lg border bg-neutral-100 p-4 sm:w-60'
        >
          <h2 className='text-md text-center font-bold'>{jugador}</h2>
          <p>Promedio: {promedio}</p>
          <p>Partidos jugados: {partidos}</p>
        </div>
      ))}
    </div>
  );
};

export default Players;
