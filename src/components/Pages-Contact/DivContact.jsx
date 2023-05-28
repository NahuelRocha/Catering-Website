import React from 'react';

function DivContact() {
  return (
    <>
      <div className='flex items-center my-1'>
        <div className='flex-grow border-t border-pink-400 mx-4 sm:mx-20'></div>
        <div className='text-black/80 font-extrabold font-mono text-3xl mx-4 sm:-mx-16'>
          <p className='bg-clip-text text-3xl text-transparent bg-gradient-to-r from-pink-400 to-violet-400'>
            CONTACTO
          </p>
        </div>
        <div className='flex-grow border-t border-pink-400 mx-4 sm:mx-20'></div>
      </div>
    </>
  );
}

export default DivContact;
