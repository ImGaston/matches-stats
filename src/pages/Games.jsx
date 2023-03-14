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
              className='w-full rounded-lg border bg-neutral-100 p-4 sm:w-60'
            >
              <h2 className='text-xl'>Fecha: {partido.fecha}</h2>
              <p>Ganador: {partido.ganador}</p>
              <p>MVP: {partido.mvp}</p>
              <p>Goleador: {partido.goleador}</p>
              <p>Dato de color: {partido.detalle}</p>
            </div>
          ))
          .reverse()}
      </ul>
    </>
  );
};

export default Games;
