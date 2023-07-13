import { trashdark } from '../assets';
import { useCartCtx } from '../context/cartCtx';

const CartItem = ({ name, type, amount, image }) => {
  const { addToCart, removeFromCart, clearCartItem } = useCartCtx();
  return (
    <div className="w-full h-[114px] bg-white flex gap-4 items-center py-3 px-6">
      <div className="w-1/2 h-full flex flex-col justify-between pl-[16px]">
        <p className="text-secondary font-bold font-[18px]">{type}</p>
        <p className="text-[#232222]">{name}</p>
        <div className="flex">
          <div className="flex h-[27px] ">
            <button
              className="w-[27px]  text-white bg-secondary rounded-l-md text-[24px]"
              onClick={() => {
                removeFromCart({ name });
              }}
            >
              -
            </button>
            <div className="w-[27px] flex items-center justify-center text-primary text-[20px]">
              {amount}
            </div>
            <button
              className="w-[27px] text-white bg-secondary rounded-r-md text-[20px]"
              onClick={() => {
                addToCart({ name });
              }}
            >
              +
            </button>
            <button
              className="ml-2 w-[20px]"
              onClick={() => {
                clearCartItem({ name });
              }}
            >
              <img src={trashdark} alt="" className="w-full" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img src={image} alt="" className="w-full" />
      </div>
    </div>
  );
};
export default CartItem;
