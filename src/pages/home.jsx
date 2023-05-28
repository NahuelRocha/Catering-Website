import React from 'react';
import Redes from '../components/Redes';
import NavBar from '../components/NavBar';
import ImageSlider from '../components/ImageSlider';
import PagosEnvios from '../components/PagosEnvios';
import Button from '../components/Button';
import Divde from '../components/Divde';
import Footer from '../components/Footer';

function Home() {
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
      <ImageSlider />
      <br />
      <PagosEnvios />
      <br />
      <Button />
      <br />
      <Divde />
      <Footer />
    </>
  );
}

export default Home;
