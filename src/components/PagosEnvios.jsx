import React from 'react';
import { TfiTruck } from 'react-icons/tfi';
import { BsCreditCard2Back } from 'react-icons/bs';
import { BsEmojiSmile } from 'react-icons/bs';

function PagosEnvios() {
  return (
    <div className='flex justify-center my-7'>
      <div className='w-full mt-10 flex items-center'>
        <div className=' h-20 w-full text-center justify-center flex flex-col items-center select-none'>
          <span className='text-pink-400 text-3xl text-center items-center flex flex-col'>
            <TfiTruck />
          </span>
          <h5 className='text-black/70 font-bold font-serif text-sm mt-2'>
            ENVIAMOS TU COMPRA
          </h5>
          <div className=''>
            <p className='text-center text-black/50 mt-2'>
              Envios gratis a partir de $10000
            </p>
          </div>
        </div>
      </div>
      <div className='w-full mt-10 flex items-center'>
        <div className='h-20 w-full text-center justify-center flex flex-col items-center select-none'>
          <span className='text-pink-400 text-3xl text-center items-center flex flex-col'>
            <BsCreditCard2Back />
          </span>
          <h5 className='text-black/70 font-bold font-serif text-sm mt-2'>
            PAGÁ COMO QUIERAS
          </h5>
          <div className=''>
            <p className='text-center text-black/50 mt-1'>
              Cuenta DNI , MercadoPago o efectivo
            </p>
          </div>
        </div>
      </div>
      <div className='w-full mt-10 flex items-center'>
        <div className=' h-20 w-full text-center justify-center flex flex-col items-center select-none'>
          <span className='text-pink-400 text-3xl text-center items-center flex flex-col'>
            <BsEmojiSmile />
          </span>
          <h5 className='text-black/70 font-bold font-serif text-sm mt-2'>
            CONFÍA EN NOSOTROS
          </h5>
          <div className=''>
            <p className='text-center text-black/50 mt-1'>
              Mas de 10 años en el rubro
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PagosEnvios;
