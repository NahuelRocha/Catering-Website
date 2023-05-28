import React from 'react';

function Panificado() {
  return (
    <div className='mx-3 mb-4 mt-12 '>
      <div className='bg-pink-100 rounded-2xl border-2 border-pink-400 -mt-8 py-1 px-6'>
        <h5 className='text-xl text-pink-600 mb-4 mt-3 flex justify-center'>
          PANIFICADO
        </h5>
        <p className='mb-2 ml-3'>
          Pizzeta c/u <strong className='text-pink-500 ml-9'>$16&nbsp;</strong>
        </p>
        <p className='mb-2 ml-3'>
          Chips c/u <strong className='text-pink-500 ml-12'>$27</strong>
        </p>
        <p className='mb-2 ml-3'>
          Alemancito c/u <strong className='text-pink-500 ml-2'>$27</strong>
        </p>
        <p className='mb-2 ml-3'>
          Figacita c/u <strong className='text-pink-500 ml-8'>$16</strong>
        </p>
        <p className='mb-2 ml-3'>
          Fosforito c/u <strong className='text-pink-500 ml-6'>$75</strong>
        </p>
        <p className='mb-2 ml-3'>
          Sacramento c/u <strong className='text-pink-500 ml-1'>$75</strong>
        </p>
        <p className='mb-2 ml-3'>
          Medialuna c/u <strong className='text-pink-500 ml-3'>$75</strong>
        </p>
        <strong className='mb-2 ml-3 text-pink-500'>Minimo 2 docenas</strong>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Panificado;
