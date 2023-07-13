import CartItem from './CartItem';
import { trash } from '../assets';
import { cars } from '../assets/constants';
import { useCartCtx } from '../context/cartCtx';

const Cart = () => {
  const { cart, clearCart } = useCartCtx();

  return (
    <div className="cart p-[22px]">
      <div className="h-full w-full flex flex-col items-center justify-between">
        <div className="w-full flex flex-col items-center gap-2  mb-4">
          {cart.map((item, idx) => {
            const car = cars.find((car) => car.name === item.name);
            return <CartItem key={idx} {...car} amount={item.amount} />;
          })}
        </div>
        <button
          className="bg-secondary text-[20px] w-[190px] h-[41px] rounded text-center flex items-center justify-center gap-[2px]"
          onClick={() => {
            clearCart();
          }}
        >
          Delete ALL
          <img src={trash} alt="" className="w-[24.5px] h-[21.3px]" />
        </button>
      </div>
    </div>
  );
};
export default Cart;
