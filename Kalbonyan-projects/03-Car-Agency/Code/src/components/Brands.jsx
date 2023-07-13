import brands from '../assets/brands';

const Brands = () => {
  return (
    <div className="md:h-[320px] sm:h-[260px] h-[200px] w-full md:flex grid grid-rows-2 items-center xl:gap-14 lg:gap-12 sm:gap-8 md:justify-center bg-[#FAFAFA]">
      <div className="flex md:justify-between justify-evenly xl:gap-14 lg:gap-12 md:gap-8 items-center">
        {brands.row1.map((item, idx) => (
          <div
            key={idx}
            className="lg:w-[80px] md:w-[64px] sm:w-[56px] w-[42px]"
          >
            <img src={item.img} alt={item.alt} className="w-full" />
          </div>
        ))}
      </div>
      <div className="flex md:justify-between justify-evenly xl:gap-14 lg:gap-12 md:gap-8 items-center row-start-1">
        {brands.row2.map((item, idx) => (
          <div
            key={idx}
            className="lg:w-[80px] md:w-[64px] sm:w-[56px] w-[42px]"
          >
            <img src={item.img} alt={item.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Brands;
