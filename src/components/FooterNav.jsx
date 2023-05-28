import React from 'react';
import { Link } from 'react-router-dom';
import FooterContact from './FooterContact';

function FooterNav() {
  return (
    <div className='flex'>
      <div className='flex px-14'>
        <div className='items-center'>
          <h5 className='font-bold text-black/60 mb-2'>NAVEGACIÓN</h5>
          <ul>
            <li>
              <Link to='/' className='text-black/60'>
                Inicio
              </Link>
            </li>
            <li>
              <Link to='/promos' className='text-black/60'>
                Promos
              </Link>
            </li>
            <li>
              <Link to='/envios' className='text-black/60'>
                Envíos
              </Link>
            </li>
            <li>
              <Link to='/contacto' className='text-black/60'>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <FooterContact />
    </div>
  );
}

export default FooterNav;
