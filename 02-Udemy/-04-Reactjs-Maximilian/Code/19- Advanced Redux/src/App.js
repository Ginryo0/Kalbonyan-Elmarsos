import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cartShown = useSelector((state) => state.ui.cartShown);
  const cart = useSelector((state) => state.cart);
  const cartChanged = useSelector((state) => state.cart.changed);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    console.log(cartChanged);
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cartChanged) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch, cartChanged]);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartShown && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
