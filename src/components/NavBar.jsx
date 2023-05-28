import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/ACALOGO.png';

const fontColor =
  'inline-block bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-400 font-mono font-bold hover:text-pink-400 hover:scale-110 transform transition-transform duration-300 border-b-2 border-transparent hover:border-pink-400';

function NavBar() {
  return (
    <>
      <nav className='bg-white w-screen flex justify-center items-center relative h-28'>
        <ul className='flex w-full justify-evenly space-x-1 items-center -ml-20 select-none'>
          <img
            src={logo}
            alt='Daniela Eventos'
            className='h-52 w-52 transform hover:scale-110 transition-transform duration-300 pb-1 pl-16'
          />
          <li>
            <Link
              to='/'
              className={`${fontColor} text-sm md:text-base lg:text-lg`}
            >
              INICIO
            </Link>
          </li>
          <li>
            <Link
              to='/promos'
              className={`${fontColor} text-sm md:text-base lg:text-lg`}
            >
              PROMOS
            </Link>
          </li>
          <li>
            <Link
              to='/envios'
              className={`${fontColor} text-sm md:text-base lg:text-lg`}
            >
              ENVÍOS
            </Link>
          </li>
          <li>
            <Link
              to='/contacto'
              className={`${fontColor} text-sm   md:text-base lg:text-lg`}
            >
              CONTACTO
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
