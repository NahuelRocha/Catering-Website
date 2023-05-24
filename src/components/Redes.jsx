import React from 'react';
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiWhatsappFill,
  RiMessengerFill,
} from 'react-icons/ri';

const facebook = 'https://www.facebook.com/daniela.paola.9';
const instagram = 'https://www.instagram.com/daniela_sagardoy/';
const whatssap = 'https://api.whatsapp.com/send?phone=5492235632600';
const messenger = 'https://m.me/daniela.paola.9';

function Redes() {
  return (
    <>
      <div className='bg-white w-screen h-8 flex justify-center items-center z-10'>
        <ul className='flex w-full justify-around'>
          <li>
            <a href={facebook} target='_blank' rel='noopener noreferrer'>
              <RiFacebookBoxFill className='text-2xl text-blue-500 hover:text-blue-400 transition-all duration-500 transform hover:scale-[1.5]' />
            </a>
          </li>
          <li>
            <a href={instagram} target='_blank' rel='noopener noreferrer'>
              <RiInstagramFill className='text-2xl text-pink-400 hover:text-pink-300 transition-all duration-500 transform hover:scale-[1.5]' />
            </a>
          </li>
          <li>
            <a href={whatssap} target='_blank' rel='noopener noreferrer'>
              <RiWhatsappFill className='text-2xl text-green-500 hover:text-green-400 transition-all duration-500 transform hover:scale-[1.5]' />
            </a>
          </li>
          <li>
            <a href={messenger} target='_blank' rel='noopener noreferrer'>
              <RiMessengerFill className='text-2xl text-blue-600 hover:text-blue-500 transition-all duration-500 transform hover:scale-[1.5]' />
            </a>
          </li>
        </ul>
      </div>
      <div className='bg-pink-200 h-[1.4px] w-full z-10'></div>
    </>
  );
}

export default Redes;
