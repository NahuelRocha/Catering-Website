import React from 'react';
import FooterNav from './FooterNav';

function Divde() {
  return (
    <>
      <div className='flex items-center my-4'>
        <div className='flex-grow border-t border-pink-400 mx-4 sm:mx-10'></div>
        <div className='bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-400 font-bold font-serif text-xl sm:text-2xl mx-1'>
          DANIELA EVENTOS
        </div>
        <div className='flex-grow border-t border-pink-400 mx-4 sm:mx-10'></div>
      </div>
      <FooterNav />
    </>
  );
}

export default Divde;
