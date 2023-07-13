import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { testimonials } from '../assets/constants';
import { chevronL, chevronR, star } from '../assets';
import { useEffect, useState } from 'react';

const TestiomonialsSliders = () => {
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
    }, 1500);
  }, []);
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <div>
      <Slider {...settings} className="w-full testimonial-slider">
        {testimonials.map((tes) => (
          <div key={tes.name}>
            <div
              className="lg:w-[850px] sm:w-[650px] md:h-[424px] h-[350px] w-[325px]
             sm:px-20 lg:py-12 py-6 flex flex-col items-center md:justify-between md:gap-0 justify-center gap-8 bg-white"
            >
              <p className="lg:text-[24px] sm:text-[20px] text-[14px] font-lato italic px-8 text-center">
                {tes.description}
              </p>
              <div className="flex flex-col items-center gap-4">
                <div className="flex gap-4">
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                </div>

                <div className="flex gap-8 items-center">
                  <p className="font-bold text-primary sm:text-[32px] text-[20px]">
                    {tes.name}
                  </p>
                  <p className=" sm:text-[24px] text-[14px] font-light italic text-[#979797]">
                    {tes.city}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestiomonialsSliders;
