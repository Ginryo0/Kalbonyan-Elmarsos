import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CarCard from './CarCard';
import { cars } from '../assets/constants';
import { chevronL, chevronR } from '../assets';
import { useEffect, useState } from 'react';

const CarSlider = () => {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    const prevBtn = document.querySelector('.slick-prev');
    prevBtn ? (prevBtn.innerHTML = `<img src=${chevronL} />`) : false;
    // prevBtn.style = '';

    const nextBtn = document.querySelector('.slick-next');
    nextBtn ? (nextBtn.innerHTML = `<img src=${chevronR} />`) : false;
    // nextBtn.style = '';
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 500);
  }, []);
  const settings = {
    // centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <div>
      <Slider {...settings} className="car-slider w-full">
        {cars.map((item) => (
          <CarCard key={item.name} {...item} />
        ))}
      </Slider>
    </div>
  );
};

export default CarSlider;
