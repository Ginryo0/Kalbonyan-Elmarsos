import { uparrow } from '../assets';

const Hero = () => {
  return (
    <section
      className="bg-hero w-full h-screen text-white bg-cover bg-center pt-[180px] md:px-24 sm:px-12 px-2 "
      id="home"
    >
      <div
        className="md:text-right text-center font-lora font-bold 
      flex flex-col md:items-end items-center md:gap-12 md:justify-start justify-between h-full lg:pb-[100px] pb-[20px]"
      >
        <div className=" flex flex-col md:items-end">
          <h1
            className="xl:text-[64px] md:text-[48px] sm:text[40px] text-[36px] xl:leading-[72px] md:leading-[60px]
        leading-[42px]
        md:mb-8 mb-12"
          >
            Find the perfect car <br /> for you at YourCar.
          </h1>
          <div
            className="
            md:w-[395px]
            lg:text-[32px]
          md:text-[24px]
          text-[20px]
         lg:leading-[40px] md:leading-[32px]
        leading-[24px] md:bg-transparent bg-[#00000076] md:py-0 md:px-0 py-4 px-2"
          >
            We offer a wide range of cars that cater to your needs and budget.
            Visit us today and drive away with your dream car!
          </div>
        </div>
        <a
          className="flex text-[24px] items-center gap-2 px-6 py-2 border-2 border-white rounded-lg"
          href="#cars"
        >
          Discover
          <img src={uparrow} alt="" />
        </a>
      </div>
    </section>
  );
};
export default Hero;
