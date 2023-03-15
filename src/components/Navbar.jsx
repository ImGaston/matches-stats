import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <ul className='flex flex-row items-center justify-center gap-8 py-4'>
        <NavLink
          className={({ isActive }) =>
            `text-gray-500 hover:text-gray-600 dark:text-neutral-200 dark:hover:text-neutral-100${
              isActive
                ? ' font-bold text-gray-600 underline underline-offset-4 dark:text-neutral-50'
                : ''
            }`
          }
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text-gray-500 hover:text-gray-600 dark:text-neutral-200 dark:hover:text-neutral-100${
              isActive
                ? ' font-bold text-gray-600 underline underline-offset-4 dark:text-neutral-50'
                : ''
            } `
          }
          to='/partidos'
        >
          Partidos
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text-gray-500 hover:text-gray-600 dark:text-neutral-200 dark:hover:text-neutral-100${
              isActive
                ? ' font-bold text-gray-600 underline underline-offset-4 dark:text-neutral-50'
                : ''
            }`
          }
          to='/jugadores'
        >
          Jugadores
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
