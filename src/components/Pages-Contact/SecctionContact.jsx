import React from 'react';
import { SlPhone } from 'react-icons/sl';
import { HiOutlineMail } from 'react-icons/hi';
import { BiMap } from 'react-icons/bi';
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

function SecctionContact() {
  return (
    <>
      <div className='flex mx-4 sm:mx-20 justify-center'>
        <div className='flex flex-col items-center'>
          <h5 className='font-bold text-black/50 mb-2 text-xl'>
            NUESTRAS REDES
          </h5>
          <br />
          <ul className='flex flex-col items-center'>
            <li className='p-3'>
              <div className='transition-all duration-500 transform hover:scale-[1.5]'>
                <a href={facebook} target='_blank' rel='noopener noreferrer'>
                  <p className='text-black/60 flex text-xl hover:text-blue-500'>
                    <RiFacebookBoxFill className='text-3xl mr-1 text-blue-500 hover:text-blue-400' />
                    Facebook
                  </p>
                </a>
              </div>
            </li>
            <li className='p-3'>
              <div className='transition-all duration-500 transform hover:scale-[1.5]'>
                <a href={instagram} target='_blank' rel='noopener noreferrer'>
                  <p className='text-black/60 flex text-xl hover:text-pink-500'>
                    <RiInstagramFill className='text-3xl mr-1 text-pink-500 hover:text-pink-400' />
                    Instagram
                  </p>
                </a>
              </div>
            </li>
            <li className='p-3'>
              <div className='transition-all duration-500 transform hover:scale-[1.5]'>
                <a href={whatssap} target='_blank' rel='noopener noreferrer'>
                  <p className='text-black/60 flex text-xl hover:text-green-500'>
                    <RiWhatsappFill className='text-3xl mr-1 text-green-500 hover:text-green-400' />
                    WhatsApp
                  </p>
                </a>
              </div>
            </li>
            <li className='p-3'>
              <div className='transition-all duration-500 transform hover:scale-[1.5]'>
                <a href={messenger} target='_blank' rel='noopener noreferrer'>
                  <p className='text-black/60 flex text-xl hover:text-blue-500'>
                    <RiMessengerFill className='text-3xl mr-1 text-blue-600 hover:text-blue-500 ' />
                    Messenger
                  </p>
                </a>
              </div>
            </li>
            <br />
            <h5 className='font-bold text-black/50 mb-2 text-xl'>
              CONTACTANOS
            </h5>
            <li className='p-2'>
              <p className='text-black/60 flex text-base'>
                <SlPhone className='text-2xl mr-1 text-pink-400' />
                2235632600
              </p>
            </li>
            <li className='p-2'>
              <p className='text-black/60 flex text-base'>
                <HiOutlineMail className='text-2xl mr-1 text-pink-400' />
                Dani_sagardoy@hotmail.com
              </p>
            </li>
            <li className='p-2'>
              <p className='text-black/60 flex text-base'>
                <BiMap className='text-2xl mr-1 text-pink-400' />
                Mateotti 920
              </p>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div className='border-t border-pink-400 mr-10 ml-10 mt-5'></div>
    </>
  );
}

export default SecctionContact;
