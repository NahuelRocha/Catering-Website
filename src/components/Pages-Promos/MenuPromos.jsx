import React from 'react';
import PromoTradicional from './PromoTradicional';
import PromoKeto from './PromoKeto';
import PromoPaleta from './PromoPaleta';
import Panificado from './Panificado';

function MenuPromos() {
  return (
    <div className='flex flex-col items-center mx-4 sm:mx-20 mt-5'>
      <div className='flex flex-col sm:flex-row w-full items-center justify-center'>
        <div className='mx-3 mb-5 mt-4'>
          <div className='bg-pink-100 rounded-2xl border-2 border-pink-400 py-5 px-6'>
            <h5 className='text-xl text-pink-600 mb-4'>SUPER PROMOS!</h5>
            <p className='mb-2'>
              10 Personas{' '}
              <strong className='text-pink-500'>$7.100&nbsp;</strong>
            </p>
            <p className='mb-2'>
              15 Personas <strong className='text-pink-500'>$10.650</strong>
            </p>
            <p className='mb-2'>
              20 Personas <strong className='text-pink-500'>$14.200</strong>
            </p>
            <p className='mb-2'>
              25 Personas <strong className='text-pink-500'>$17.750</strong>
            </p>
            <p className='mb-2'>
              30 Personas <strong className='text-pink-500'>$20.700</strong>
            </p>
            <p className='mb-2'>
              35 Personas <strong className='text-pink-500'>$24.850</strong>
            </p>
            <p className='mb-2'>
              40 Personas <strong className='text-pink-500'>$28.400</strong>
            </p>
            <br />
          </div>
        </div>
        <PromoTradicional />
        <PromoKeto />
        <Panificado />
        <PromoPaleta />
      </div>
    </div>
  );
}

export default MenuPromos;
