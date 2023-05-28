import React from 'react';

function PromoPaleta() {
  return (
    <div className='mx-3 mb-4 mt-4 flex flex-col items-center'>
      <div className='bg-pink-100 rounded-2xl border-2 border-pink-400 py-7 px-5'>
        <h5 className='text-xl text-pink-600 mb-4 -mt-3 flex justify-center'>
          PALETA DE CERDO
        </h5>
        <p className='mb-2 flex justify-center'>
          10 Personas&nbsp;
          <strong className='text-pink-500'>$10.900&nbsp;</strong>
        </p>
        <strong className='mb-1 flex justify-center text-pink-500'>
          + 50 Figacitas
        </strong>
        <strong className='mb-1 flex justify-center text-pink-500'>
          + 3 Salsas
        </strong>
        <h5 className='text-xl text-pink-600 mb-3 flex justify-center'>
          PALETA + LUNCH
        </h5>
        <p className='mb-2 flex justify-center'>
          18 Personas&nbsp; <strong className='text-pink-500'>$19.000</strong>
        </p>
        <p className='mb-2 flex justify-center'>
          23 Personas&nbsp; <strong className='text-pink-500'>$22.900</strong>
        </p>
        <p className='mb-2 flex justify-center'>
          28 Personas&nbsp; <strong className='text-pink-500'>$26.700</strong>
        </p>
        <br />
      </div>
    </div>
  );
}

export default PromoPaleta;
