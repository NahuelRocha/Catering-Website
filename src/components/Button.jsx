import React from 'react';
import { Link } from 'react-router-dom';

function Button() {
  return (
    <div className='flex justify-center'>
      <button className='bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 px-7 rounded my-5 transition-all duration-500'>
        <Link to='/promos'>VER TODAS LAS PROMOS</Link>
      </button>
    </div>
  );
}

export default Button;
