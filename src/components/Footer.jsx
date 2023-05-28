import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';

function Footer() {
  const Linkedin = 'https://www.linkedin.com/in/nahuel-rocha-4636bb265/';

  return (
    <div>
      <div className='border-t border-pink-400 mr-10 ml-10 mt-5'></div>
      <h5 className='mt-2 pb-2 flex justify-center text-center'>
        Copyright Daniela Eventos - 2023. Todos los derechos reservados.
      </h5>
      <h6 className='mt-1 pb-9 flex justify-center items-center'>
        Página Creada por
        <a href={Linkedin} target='_blank' rel='noopener noreferrer'>
          <AiFillLinkedin className='ml-2 inline-block text-pink-400 hover:text-pink-500 text-4xl hover:scale-125 transform transition-transform duration-500' />
        </a>
      </h6>
    </div>
  );
}

export default Footer;
