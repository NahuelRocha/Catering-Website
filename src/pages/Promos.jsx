import React from 'react';
import Redes from '../components/Redes';
import NavBar from '../components/NavBar';
import Div from '../components/Pages-Promos/Div';
import MenuPromos from '../components/Pages-Promos/MenuPromos';
import DivDetalles from '../components/Pages-Promos/DivDetalles';
import DetalleTradicional from '../components/Pages-Promos/DetalleTradicional';
import DetalleKeto from '../components/Pages-Promos/DetalleKeto';
import DetallePaletaLunch from '../components/Pages-Promos/DetallePaletaLunch';
import PagosEnvios from '../components/PagosEnvios';
import Divde from '../components/Divde';
import Footer from '../components/Footer';

function Promos() {
  return (
    <>
      <div className='bg-pink-200 flex flex-col justify-center relative items-center w-screen'>
        <div className='w-screen h-8 flex justify-center items-center'>
          <span className='text-sm mt-0.5 bg-clip-text text-transparent bg-gradient-to-r from-pink-700 to-violet-700'>
            ENVÍOS GRATIS A PARTIR DE $10.000
          </span>
        </div>
        <Redes />
        <NavBar />
      </div>
      <Div />
      <MenuPromos />
      <DivDetalles />
      <DetalleTradicional />
      <DetalleKeto />
      <DetallePaletaLunch />
      <br />
      <PagosEnvios />
      <br />
      <Divde />
      <Footer />
    </>
  );
}

export default Promos;
