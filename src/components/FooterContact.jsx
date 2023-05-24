import React from 'react';
import { SlPhone } from 'react-icons/sl';
import { HiOutlineMail } from 'react-icons/hi';
import { BiMap } from 'react-icons/bi';

function FooterContact() {
  return (
    <div className='flex'>
      <div className='flex flex-col'>
        <h5 className='font-bold text-black/60 mb-2'>CONTACTANOS</h5>
        <ul>
          <li className='p-1'>
            <p className='text-black/60 flex text-sm'>
              <SlPhone className='text-lg mr-1 text-pink-400' />
              2235632600
            </p>
          </li>
          <li className='p-1'>
            <p className='text-black/60 flex text-sm'>
              <HiOutlineMail className='text-lg mr-1 text-pink-400' />
              Dani_sagardoy@hotmail.com
            </p>
          </li>
          <li className='p-1'>
            <p className='text-black/60 flex text-sm'>
              <BiMap className='text-lg mr-1 text-pink-400' />
              Mateotti 920
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterContact;
