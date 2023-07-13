import { seatsIcon, luggageIcon } from '../assets';
import { useCartCtx } from '../context/cartCtx';

const CarCard = ({ name, image, type, description, seats, luggage }) => {
  const { cart, addToCart, removeFromCart } = useCartCtx();

  const amount = cart.find((item) => item.name === name)?.amount;

  return (
    <article className="p-[32px] w-[378px] h-[520px] flex flex-col justify-between">
      <header>
        <div className="flex justify-center">
          <img src={image} alt={name} className="max-w-[311px] h-[160px]" />
        </div>
        <div className="w-full text-center my-5">
          <h3 className={`text-[24px] font-bold text-secondary`}>{type}</h3>
          <p className="text-[12px] text-[#232222]">{name}</p>
        </div>
        <div className="text-[12px] text-[#232222]">{description}</div>
      </header>
      <footer className="flex items-center justify-between mt-[45px]">
        <div className="flex flex-col">
          <div className="flex gap-2 items-center text-[14px] text-secondary mb-2">
            <div className="w-[24px] h-[18px]">
              <img src={seatsIcon} alt="" className="w-full" />
            </div>
            <p>{seats} Seats</p>
          </div>
          <div className="flex gap-2 items-center  text-[14px] text-secondary">
            <div className="w-[24px] h-[18px]">
              <img src={luggageIcon} alt="" className="w-full" />
            </div>
            <p>{luggage} Luggage</p>
          </div>
        </div>
        <div className="flex h-[36px]">
          <button
            className="w-[36px]  text-white bg-secondary rounded-l-md text-[24px]"
            onClick={() => {
              removeFromCart({ name });
            }}
          >
            -
          </button>
          <div className="w-[36px] flex items-center justify-center text-[24px]">
            {amount || 0}
          </div>
          <button
            className="w-[36px] text-white bg-secondary rounded-r-md text-[20px]"
            onClick={() => {
              addToCart({ name });
            }}
          >
            +
          </button>
        </div>
      </footer>
    </article>
  );
};
export default CarCard;
