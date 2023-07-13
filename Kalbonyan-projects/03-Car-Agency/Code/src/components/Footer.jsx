import { socials, contact } from '../assets/footer';
import SectionWrapper from './SectionWrapper';

const Footer = () => {
  return (
    <footer
      className="max-w-[1440px] w-full mx-auto py-10
  md:px-[78px] px-[24px] flex flex-col items-center"
    >
      <div className="grid lg:grid-cols-3 grid-cols-1 2xl:gap-16 gap-8 mb-[45px]">
        <div className="flex flex-col gap-[17px] lg:items-start items-center ">
          <a href="#" className="text-[32px] font-lora text-secondary">
            <span className="font-bold">Your</span>
            Car
          </a>
          <p className="lg:pl-2 lg:pr-12 px-16 text-primary font-light">
            We are known for luxurious and premium chaffeur services worldwide.
            We are simply the best <br /> you can find.
          </p>
          <p className="lg:pl-2 lg:pr-12 px-16 text-primary font-light">
            we are dedicated to providing our customers with a first-class car
            buying, selling, and renting experience.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-secondary text-[24px] text-center mb-[32px]">
            News Letter
          </h3>
          <p className="text-center px-10 text-primary font-light mb-[41px]">
            Subscribe to our news letter for updates, news and exclusive offers
          </p>
          <form className="flex lg:flex-row flex-col items-center gap-4">
            <input
              type="email"
              placeholder="Email"
              className="py-[16px] h-[54px] px-[25px] font-lato border-[1px] border-secondary w-[275px] focus:outline-none focus:border-[1px]"
            />
            <button
              type="button"
              className="w-[135px] h-[54px] bg-secondary text-white font-lato font-bold text-[17px]"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-secondary text-[24px] text-center mb-[32px]">
            Contact
          </h3>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <img src={contact[0].img} alt={contact[0].alt} />
              <p className="text-primary">
                2038 2nd Avenue,
                <br /> Las Vegas, United States
              </p>
            </div>
            <div className="flex gap-4">
              <img src={contact[1].img} alt={contact[1].alt} />
              <p className="inline-flex flex-col">
                <a href="tel:01444773421423" className="text-primary ">
                  01444773421423
                </a>
                <a href="tel:01477678449405" className="text-primary ">
                  01477678449405
                </a>
              </p>
            </div>
            <div className="flex gap-4">
              <img src={contact[2].img} alt={contact[2].alt} />
              <a href="mailto:info@YourCar.com" className="text-primary">
                info@YourCar.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-8 mb-4">
        {socials.map((item, idx) => (
          <a key={idx} className="inline-block max-w-[30px] h-[30px]" href="#">
            <img src={item.img} alt={item.alt} className="h-full w-full" />
          </a>
        ))}
      </div>
      <div className="w-full">
        <p className="w-full mx-4 pt-4 text-center border-t-secondary border-t-2 text-primary text-[14px]">
          © Copyright 2023 · <span className="font-bold">YourCar</span> All
          rights reserved
        </p>
      </div>
    </footer>
  );
};

const FooterSection = SectionWrapper(
  Footer,
  'contact',
  `bg-white border-t-2 border-t-[#F5F5F5]`
);
export default FooterSection;
