import React from 'react';
import FooterNav from './FooterNav';

function Divde() {
  return (
    <>
      <div className='flex items-center my-4'>
        <div className='flex-grow border-t border-black/70 mx-10'></div>
        <div className='text-black/70 font-bold font-serif text-xl mx-3'>
          DANIELA EVENTOS
        </div>
        <div className='flex-grow border-t border-black/70 mx-10'></div>
      </div>
      <FooterNav />
    </>
  );
}

export default Divde;
