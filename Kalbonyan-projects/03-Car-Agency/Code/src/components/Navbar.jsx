import { useState, useRef, useEffect } from 'react';
import { useCartCtx } from '../context/cartCtx';

import { navLinks } from '../assets/constants';
import CartIcon from './CartIcon';
import { navbtn } from '../assets';
import useScrollPosition from '../hooks/useScrollPosition';
import Cart from './Cart';

const initialNavClasses = {
  nav: 'md:bg-transparent md:shadow-none',
  logo: 'md:text-white',
  link: '',
  cart: '',
};
const Navbar = () => {
  const scrollPosition = useScrollPosition();
  const [navClasses, setNavClasses] = useState(initialNavClasses);
  const [active, setActive] = useState('');
  const cartBtnRef = useRef();
  const headerRef = useRef();
  const { cart } = useCartCtx();
  const totalItems = cart.reduce((curr, reducer) => curr + reducer.amount, 0);

  useEffect(() => {
    if (scrollPosition === 0) {
      setNavClasses(initialNavClasses);
    } else {
      setNavClasses({
        nav: '',
        logo: '',
        link: 'md:text-primary',
        cart: 'scrolled',
      });
    }
  }, [scrollPosition]);
  return (
    <header className="" ref={headerRef}>
      <nav
        className={`fixed top-0 left-0 text-white w-full py-[12px] xl:px-24 md:px-12 px-6 z-30 md:h-auto h-[81px] ${navClasses.nav} bg-white  shadow-md`}
      >
        <div className="flex p-x-4 justify-between items-center">
          <a
            href="#"
            onClick={() => {
              setActive('home');
            }}
            className={`lg:text-[48px] md:text-[40px] sm:text-[36px] text-[32px] font-lora ${navClasses.logo} text-primary`}
          >
            <span className="font-bold">Your</span>
            Car
          </a>
          <div className="flex items-center nav-bar">
            <ul className="md:flex lg:gap-10 lg:mr-10 md:gap-4 md:mr-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  onClick={() => {
                    setActive(link.id);
                  }}
                  className="md:w-auto w-full"
                >
                  <a
                    href={`#${link.id}`}
                    className={`${
                      active === link.id
                        ? 'bg-secondary md:rounded-lg text-white'
                        : `${navClasses.link}`
                    } font-bold font-noto xl:text-[24px] lg:text-[20px]  md:py-1 py-3 md:px-2 md:w-auto w-full inline-block pl-4`}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
            <button
              className={`relative cart-btn ${navClasses.cart}`}
              ref={cartBtnRef}
              onClick={() => {
                headerRef.current.classList.toggle('cart-active');
              }}
            >
              <CartIcon />
              {/* <img
              src={cart}
              alt="cart image"
              className=""
            /> */}
              <div className="cart-count lg:w-[22px] lg:h-[22px] w-[18px] h-[18px] absolute -top-[3px] -right-[3px] bg-[#F8D7A4] rounded-sm flex items-center justify-center lg:text-[14px] text-[12px] text-black font-bold">
                {totalItems}
              </div>
            </button>
            <button
              className="md:hidden md:ml-0 block ml-8"
              onClick={() => {
                headerRef.current.classList.toggle('nav-active');
              }}
            >
              <img src={navbtn} alt="nav toggle button" className="w-8 h-8" />
            </button>
          </div>
        </div>
        <Cart />
      </nav>
    </header>
  );
};
export default Navbar;
