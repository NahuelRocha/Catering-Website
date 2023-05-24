import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function ImageSlider() {
  const slides = [
    {
      url: 'https://i.imgur.com/inQXKPx.jpg',
    },
    {
      url: 'https://i.imgur.com/GFTPuBD.jpg',
    },
    {
      url: 'https://i.imgur.com/PEtWsKr.jpg',
    },
    {
      url: 'https://i.imgur.com/ger9HbY.jpg',
    },
    {
      url: 'https://i.imgur.com/AATDAHC.jpg',
    },
    {
      url: 'https://i.imgur.com/VeT6Jp2.jpg',
    },
    {
      url: 'https://i.imgur.com/ZhG0FHR.png',
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    const isFirstSlice = current === 0;
    const newIndex = isFirstSlice ? slides.length - 1 : current - 1;
    setCurrent(newIndex);
  };
  const nextSlide = () => {
    const isLastSlice = current === slides.length - 1;
    const newIndex = isLastSlice ? 0 : current + 1;
    setCurrent(newIndex);
  };

  const goToSlide = slideIndex => {
    setCurrent(slideIndex);
  };

  return (
    <div className='max-x-[1400px] h-[780px] w-screen m-auto relative group'>
      <div
        style={{ backgroundImage: `url(${slides[current].url})` }}
        className='w-full h-full bg-center bg-cover duration-500'
      ></div>
      {}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2 text-pink-300'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-3xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
